Plexus provides geometric and spatial traits in the `geometry` module. These
traits define operations and relationships that express vector spaces. In
particular, these traits define a [Euclidean
space](https://en.wikipedia.org/wiki/euclidean_space) that is used to support
geometric operations in [iterator expressions](../generators) and
[graphs](../graphs).

While geometric traits are not required, it is recommended to implement them for
types used to represent geometry. For example, computing the normals of faces in
a graph or subdividing polygons in an iterator expression can be done easily if
these traits are implemented.

!!! note
    Enabling [geometry Cargo features](../getting-started/#cargo-features)
    provides implementations of these traits for types from commonly used crates
    like [nalgebra](https://crates.io/crates/nalgebra).

## Conversions

Conversions enable more ergonomic and flexible APIs. The `FromGeometry` and
`IntoGeometry` traits are analogous to the standard `From` and `Into` traits and
perform a similar function, but are used exclusively for geometric types.

When geometry Cargo features are enabled, conversion from `Duplet` and `Triplet`
are provided to avoid the need for explicit conversions in iterator expressions.

```rust
// Positional data is converted via `FromGeometry`.
// Conversions are provided by the `geometry-nalgebra` feature.
let mut graph = Cube::new()
    .polygons_with_position() // Positions are `Triplet<R64>`.
    .collect::<MeshGraph<Point3<f64>>>(); // Positions are `Point3<f64>`.
```

## Composed Traits

The `geometry::compose` module provides traits that express the geometric
capabilities of a [graph](../graphs) by composing operational and conversion
traits. These can be used to write generic code that requires particular
geometric operations, such as computing edge midpoints. This example subdivides
a face in a mesh by splitting arcs at their midpoints:

```rust
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
