Plexus provides a flexible representation of meshes as a [half-edge
graph](https://en.wikipedia.org/wiki/doubly_connected_edge_list) via the
`MeshGraph` type. Graphs can store arbitrary geometric data associated with any
topological structure (including no geometry at all).

Geometry is vertex-based, meaning that geometric operations depend on vertex
geometry exposing some notion of positional data via the `AsPosition` trait. If
geometry does not have this property, then spatial operations will not be
available. Read more about geometric traits [here](../geometry.md).

!!! note
    Plexus refers to _half-edges_ as _arcs_. This borrows from graph theory,
    where _arc_ typically refers to a directed adjacency.

## Representation

A `MeshGraph` is conceptually composed of _vertices_, _arcs_, _edges_, and
_faces_. The figure below summarizes the connectivity in a `MeshGraph`.

![Half-Edge Graph Figure](../img/heg.svg)

Arcs are directed and connect vertices. An arc that is directed toward a vertex
**A** is an _incoming arc_ with respect to **A**. Similarly, an arc directed
away from such a vertex is an _outgoing arc_. Every vertex is associated with
exactly one _leading arc_, which is always an outgoing arc. The vertex toward
which an arc is directed is the arc's _destination vertex_ and the other is its
_source vertex_.

Every arc is paired with and connected to an _opposite arc_ with an opposing
direction. Given an arc from a vertex **A** to a vertex **B**, that arc will
have an opposite arc from **B** to **A**. Such arcs are typically labeled **AB**
and **BA**. Together, these arcs form an _edge_, which is not directed. An edge
and its two arcs are together called a _composite edge_.

Arcs are connected to their neighbors, known as _next_ and _previous arcs_. A
traversal along a series of arcs is a _path_. A path is _closed_ if it forms a
loop and is _open_ if it terminates. The path formed by traversing from an arc
to its next arc and so on is an _interior path_. When a face is present within
an interior path, the arcs will refer to that face and the face will refer to
exactly one of the arcs in the interior path. An arc with no associated face is
known as a _boundary arc_. If both of an edge's arcs are boundary arcs, then
that edge is a _disjoint edge_.

Together with vertices and faces, the connectivity of arcs allows for efficient
traversals of topology. For example, it becomes trivial to find neighboring
topologies, such as the faces that share a given vertex or the neighboring faces
of a given face.

!!! warning
    The `MeshGraph` data structure has some limitations. Only
    [orientable](https://en.wikipedia.org/wiki/orientability) compact
    [manifolds](https://en.wikipedia.org/wiki/surface_(topology)) can be
    represented. Unorientable manifolds such as a [Möbius
    strip](https://en.wikipedia.org/wiki/m%C3%B6bius_strip) and non-manifold
    structures such as edge fans cannot be modeled using `MeshGraph`.

`MeshGraph`s store topological data using associative collections and mesh data
is accessed using keys into this storage. Keys are exposed as strongly typed and
opaque values, which can be used to refer to a topological structure.

## Topological Views

`MeshGraph`s expose _views_ over their topological structure (vertices, arcs,
edges, faces, and interior paths). Views are obtained using keys or iteration
and behave similarly to references (e.g., `&'a u32` or `&'a mut f64`). They
provide the primary API for interacting with a `MeshGraph`'s topology and
geometry. There are three types of views summarized below:

| Type      | Traversal | Exclusive | Geometry  | Topology  |
|-----------|-----------|-----------|-----------|-----------|
| Immutable | Yes       | No        | Immutable | Immutable |
| Mutable   | Yes       | Yes       | Mutable   | Mutable   |
| Orphan    | No        | No        | Mutable   | N/A       |

_Immutable_ and _mutable views_ behave similarly to references: immutable views
cannot mutate a graph and are not exclusive and mutable views may mutate both
the geometry and topology of a graph but are exclusive. This example uses a view
to traverse a graph:

```rust
// Create a graph with positional data from a unit cube.
let mut graph = Cube::new()
    .polygons_with_position()
    .collect::<MeshGraph<Point3<f64>>>();

// Get a view of a face and its opposite face.
let face = graph.faces().nth(0).expect("cube");
let opposite = face
    .into_arc()
    .into_opposite_arc()
    .into_next_arc()
    .into_next_arc()
    .into_face()
    .expect("cube");
```

_Orphan views_ are similar to mutable views in that they may mutate the geometry
of a graph, but they do not have access to the topology of a graph. Because they
do not know about other vertices, arcs, etc., orphan views cannot traverse a
graph in any way. These views are most useful for modifying the geometry of a
graph and, unlike mutable views, are not exclusive.
[_Circulators_](#circulators) (iterators) emit orphan views.

```rust
// Create a graph with positional data from a UV-sphere.
let mut graph = UvSphere::new(8, 8)
    .polygons_with_position()
    .collect::<MeshGraph<Point3<f64>>>();

// Scale the position data in all vertices.
for mut vertex in graph.orphan_vertices() {
    vertex.geometry *= 2.0;
}
```

Immutable and mutable views are both represented by view types, such as
`FaceView`. Orphan views are represented by orphan view types, such as
`OrphanFaceView`.

## Circulators

Topological views allow for traversal of a graph's topology. One useful type of
traversal uses a _circulator_, which is a type of iterator that examines the
neighbors of a topological structure. For example, the face circulator of a
vertex yields all faces that share that vertex in order.

Circulators allow for both immutable and mutable iteration.

!!! note
    Mutable circulators emit orphan views (**not** mutable views), because
    mutable views require exclusive access. If multiple mutable views are
    needed, it is possible to use an immutable circulator to collect the keys of
    the target topology and then lookup each mutable view using those keys.

Circulators generally begin iteration from a leading arc and then traverse
topology in order from that arc. The order is deterministic.

## Examples

The following complete examples demonstrate how to construct and manipulate
graphs in various ways.

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
let mut graph = Cube::new()
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

## Glossary

The table below summarizes the terminology used to describe the components of a
`MeshGraph`.

| Terminology        | Definition                                                                                    |
|--------------------|-----------------------------------------------------------------------------------------------|
| source vertex      | The vertex from which an arc is directed. Given an arc **AB**, its source vertex is **A**.    |
| destination vertex | The vertex to which an arc is directed. Given an arc **AB**, its destination vertex is **B**. |
