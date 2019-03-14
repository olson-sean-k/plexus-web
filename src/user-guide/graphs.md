Plexus provides a flexible representation of meshes as a [half-edge
graph](https://en.wikipedia.org/wiki/doubly_connected_edge_list). Graphs can
store arbitrary geometric data associated with any topological structure
(vertices, arcs, edges, and faces).

!!! note
    Plexus refers to _half-edges_ and _edges_ as _arcs_ and _edges_,
    respectively. Arcs and edges are distinct topological structures.

Geometry is vertex-based, meaning that geometric operations depend on vertex
geometry exposing some notion of positional data via the `AsPosition` trait. If
geometry does not have this property, then spatial operations will not be
available. Read more about geometric traits [here](user-guide/geometry.md).

## Representation

A `MeshGraph` is conceptually composed of _vertices_, _arcs_, _edges_, and
_faces_. The figure below summarizes the connectivity in a `MeshGraph`.

![Half-Edge Graph Figure](https://raw.githubusercontent.com/olson-sean-k/plexus/master/doc/heg.svg?sanitize=true)

Arcs are directed and connect vertices. An arc that is directed toward a vertex
**A** is an _incoming arc_ with respect to **A**.  Similarly, an arc directed
away from such a vertex is an _outgoing arc_. Every vertex is associated with
exactly one _leading arc_, which is always an outgoing arc.  The vertex toward
which an arc is directed is the arc's _destination vertex_ and the other is its
_source vertex_.

Every arc is paired with an _opposite arc_ with an opposing direction.  Given an
arc from a vertex **A** to a vertex **B**, that arc will have an opposite arc
from **B** to **A**. Such arcs are typically labeled **AB** and **BA**.
Together, these arcs form an _edge_, which is not directed.  Occassionally, the
term "edge" may refer to either an arc or an edge. Edges are typically labeled
**AB+BA**.

Arcs are connected to their neighbors, known as _next_ and _previous arcs_.
When a face is present in the contiguous region formed by a perimeter of
vertices and their arcs, the arcs will refer to that face and the face will
refer to exactly one of the arcs in the interior. An arc with no associated face
is known as a _boundary arc_. If both of an edge's arcs are boundary arcs, then
that edge is a _disjoint edge_.

Together with vertices and faces, the connectivity of arcs allows for effecient
traversals of topology. For example, it becomes trivial to find neighboring
topologies, such as the faces that share a given vertex or the neighboring faces
of a given face.

`MeshGraph`s store topological data using associative collections and mesh data
is accessed using keys into this storage. Keys are exposed as strongly typed and
opaque values, which can be used to refer to a topological structure.

## Examples

The following examples demonstrate how to construct and manipulate graphs.

### Poking Faces

This example forms a "spikey cube" using a graph. A generator is used to produce
positional data representing a cube as a stream of polygons. Those polygons are
collected into a graph and then each face is poked, forming a triangle fan about
a centroid vertex that is translated along the normal.

```rust
use arrayvec::ArrayVec;
use nalgebra::Point3;
use plexus::graph::MeshGraph;
use plexus::prelude::*;
use plexus::primitive::cube::Cube;

// Create a graph with positional data from a unit cube.
let mut mesh = Cube::new()
    .polygons_with_position()
    .collect::<MeshGraph<Point3<f64>>>();

// Collect the keys of the faces in the graph.
let keys = graph
    .faces()
    .map(|face| face.key())
    .collect::<ArrayVec<[_; 6]>>();
for key in keys {
    // Poke each face and translate the centroid along the face's normal.
    let _ = graph.face_mut(key).unwrap().poke_with_offset(0.5);
}
```

### Subdividing Faces

This advanced example defines a function that subdivides a face in a graph. This
is accomplished using only views; the originating `MeshGraph` is not required to
implement the function. The function is generic over geometry and uses geometric
traits in its type bounds.

```rust
use plexus::geometry::alias::VertexPosition;
use plexus::geometry::compose::EdgeMidpoint;
use plexus::geometry::convert::AsPosition;
use plexus::geometry::Geometry;
use plexus::graph::{FaceView, MeshGraph};
use plexus::prelude::*;
use smallvec::SmallVec;

pub fn circumscribe<G>(face: FaceView<&mut MeshGraph<G>, G>) -> FaceView<&mut MeshGraph<G>, G>
where
    G: EdgeMidpoint<Midpoint = VertexPosition<G>> + Geometry,
    G::Vertex: AsPosition,
{
    // Split each edge, stashing the vertex key and moving to the next arc.
    let arity = face.arity();
    let mut arc = face.into_arc();
    let mut splits = SmallVec::<[_; 4]>::with_capacity(arity);
    for _ in 0..arity {
        let vertex = arc.split_at_midpoint();
        splits.push(vertex.key());
        arc = vertex.into_outgoing_arc().into_next_arc();
    }
    // Split faces along the vertices from each arc split.
    let mut face = arc.into_face().unwrap();
    for (a, b) in splits.into_iter().perimeter() {
        face = face.split(ByKey(a), ByKey(b)).unwrap().into_face().unwrap();
    }
    // Return the terminating face of the decomposition.
    face
}
```
