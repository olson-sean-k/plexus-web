Plexus uses the [`theon`] crate to abstract [Euclidean spaces][space] and
support various types in the Rust ecosystem. [`theon`] provides types and traits
used to implement linear algebra and computational geometry without forcing
dependent crates to use specific crates and types.

Mesh data structures like buffers and [graphs](../graphs) can contain arbitrary
data, including non-geometric data and no data at all. Geometric traits are not
required, but it is recommended to use supported types when representing
geometric data. For example, computing the normals of faces in a
[graph](../graphs) or subdividing polygons in an iterator expression can be done
easily if these traits are implemented.

!!! note
    Enabling [geometry Cargo features](../getting-started/#integrations)
    provides implementations of these traits for types from commonly used crates
    like [`cgmath`] and [`nalgebra`]. It is highly recommended to enable these
    features when using these crates.

## Conversions

Plexus provides conversions for geometric types to enable more ergonomic and
flexible APIs. The `FromGeometry` and `IntoGeometry` traits are analogous to the
standard `From` and `Into` traits and perform a similar function, but are used
for geometric types and allow Plexus to provide implementations for conversions
that would violate coherence rules using `From` and `Into`.

Conversions are optionally implemented via [geometry Cargo
features](../getting-started/#integrations) and include support for implicit
scalar conversions of types from the [`decorum`] crate.

The `AsPosition` trait is re-exported from [`theon`] in the `geometry` module
and allows types to expose positional data. When this positional data implements
the appropriate traits, geometric APIs can be used. For example, this allows
[graphs](../graphs) to support splitting edges at midpoints, extruding faces
along translation vectors, and flattening faces into a best-fit plane regardless
of the choice of mathematics crate ([`cgmath`], [`glam`], etc.).

[space]: https://en.wikipedia.org/wiki/euclidean_space

[`cgmath`]: https://crates.io/crates/cgmath
[`decorum`]: https://crates.io/crates/decorum
[`glam`]: https://crates.io/crates/glam
[`nalgebra`]: https://crates.io/crates/nalgebra
[`theon`]: https://crates.io/crates/theon
