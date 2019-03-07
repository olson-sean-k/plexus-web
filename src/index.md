**Plexus** is a [Rust library](https://crates.io/crates/plexus) for processing
2D and 3D meshes. It provides primitive structures, generators, buffers, and
graphs that are generic over their geometry and payloads.

# Examples

```rust
use nalgebra::Point3;
use plexus::geometry::convert::AsPosition;
use plexus::graph::MeshGraph;
use plexus::prelude::*;
use plexus::primitive::cube::Cube;

// Create a graph with positional data from a unit cube.
let mut mesh = Cube::new()
    .polygons_with_position()
    .collect::<MeshGraph<Point3<f64>>>();

// Poke a face in the graph at its centroid.
let key = mesh.faces().nth(0).expect("Graph has no faces.").key();
let mut face = mesh.face_mut(key).unwrap();
let normal = face.normal();
let mut vertex = face.poke_at_centroid();

// Translate the position of the vertex along the face's normal.
let position = vertex.geometry.as_position() + (normal * 0.5);
*vertex.geometry.as_position_mut() = position;
```
