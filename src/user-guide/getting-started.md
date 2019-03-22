To get started with Plexus, add a dependency to `Cargo.toml`.

```toml
[dependencies]
plexus = "0.0.11" # Unstable. Require exact version.
```

!!! warning
    Plexus is still in its initial development phase. At this time, it is best
    to take strict dependencies on a specific version. Using carets, tildes, or
    Kleene stars in dependency requirements will likely cause spurious build
    failures between releases.

Plexus interacts with other crates in the Rust ecosystem. Most importantly, it
uses [Decorum](https://crates.io/crates/decorum) for constrained and hashable
float-point types and various math crates to represent mesh geometry.
[nalgebra](https://crates.io/crates/nalgebra) is highly recommended for
geometric types, but other crates like [cgmath](https://crates.io/crates/cgmath)
and [mint](https://crates.io/crates/mint) are also supported. Consider also
taking dependencies on these crates.

```toml
[dependencies]
decorum = "^0.1.1"
nalgebra = "^0.17.0"
plexus = "0.0.11" # Unstable. Require exact version.
```

## Crate Features

Plexus exposes two classes of features: geometry and IO.

Geometry features integrate with math crates and optionally implement [geometric
traits](../geometry) for types in those crates. These features are prefixed with
`geometry-`, such as `geometry-nalgebra`.

!!! note
    It is highly recommended to enable the geometry feature if a supported crate
    is used for geometric types.

IO features expose sub-modules in the `io` module for mesh formats and encodings
that can be used to serialize and deserialize mesh data and are prefixed with
`io-`. For example, the `io-ply` feature enables the `io::ply` module and
[PLY](https://en.wikipedia.org/wiki/ply_(file_format)) encoding features.

By default, the `geometry-nalgebra` feature is enabled.
