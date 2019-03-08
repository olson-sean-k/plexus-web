# About

**Plexus** is a [Rust library](https://crates.io/crates/plexus) for processing
2D and 3D meshes. It provides primitives, generators, buffers, and graphs that
are generic over their geometry. Plexus exposes traits that are used to derive
geometric relationships and support common geometric operations. These traits
can be implemented for any user type and are implemented for common types in the
Rust ecosystem, such as those found in the
[cgmath](https://crates.io/crates/cgmath),
[mint](https://crates.io/crates/mint), and
[nalgebra](https://crates.io/crates/nalgebra) crates.

!!! warning
    Plexus is still in its initial development phase. Crates published to
    [https://crates.io](https://crates.io) in the `0.0.x` series do **not** obey
    [SemVer](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
    and are unstable. Dependencies should select an exact version until the
    public API is stabilized in the `0.1.x` series.

## Design

Unlike many other mesh processing libraries, Plexus avoids exposing low-level
topological operations such as inserting individual vertices. These kinds of
operations are easy to perform incorrectly and often require manual
verification. Instead, Plexus exposes more abstract operations that maintain
topological consistency while being agnostic to geometry. Graphs are manipulated
in a way that is more similar to 3D modeling software.

Graphs can be traversed and manipulated using _views_, which behave as cursors
and references into graph data. Many topological mutations yield views into the
modified mesh data, allowing code to operate over a mesh using nothing more than
graph traversals.

## Examples

The following examples are provided without much context, but are shown to give
a general idea of what using Plexus APIs looks like. Please see the [user
guide](user-guide/getting-started.md) for more details.

### Poking Faces in a Graph

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

### Subdividing Faces in a Graph

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
