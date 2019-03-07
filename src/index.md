# About

**Plexus** is a [Rust library](https://crates.io/crates/plexus) for processing
2D and 3D meshes. It provides primitives, generators, buffers, and graphs that
are generic over their geometry. Plexus exposes traits that are used to derive
geometric relationships and support common geometric operations. These traits
can be implemented for any user type and are implemented for common types in the
Rust ecosystem, such as those found in the
[cgmath](https://crates.io/crates/cgmath),
[Mint](https://crates.io/crates/mint), and
[nalgebra](https://crates.io/crates/nalgebra) crates.

!!! warning
    Plexus is still in its initial development phase. Crates published to
    https://crates.io in the `0.0.x` series do **not** obey SemVer and are
    unstable. Dependencies should select an exact version until the public API
    is stabalized in the `0.1.x` series.

## Design

Unlike many other mesh processing libraries, Plexus avoids exposing low-level
topological operations such as inserting individual vertices. These kinds of
operations are easy to perform incorrectly. Instead, Plexus exposes more
abstract operations that maintain topological consistency while being agnostic
to geometry. Graphs are manipulated in a way that is more similar to 3D modeling
software.

## Examples

Forming a "spikey" cube using a graph:

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
let keys = graph.faces().map(|face| face.key()).collect::<ArrayVec<[_; 6]>>();
for key in keys {
    // Poke each face and translate the centroid along the face's normal.
    let _ = graph.face_mut(key).unwrap().poke_with_offset(0.5);
}
```
