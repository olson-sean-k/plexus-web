## About

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

Unlike many other mesh processing libraries, Plexus avoids exposing low-level
topological operations such as inserting individual vertices. These kinds of
operations are easily performed incorrectly and often require manual
verification. Instead, Plexus exposes more abstract operations that maintain
topological consistency while being agnostic to geometry. Graphs are
manipulated in a way that is more similar to 3D modeling software, for example.

Please see the [user guide](user-guide/getting-started.md) to learn about using
Plexus.

## Contributing

Both the [code](https://github.com/olson-sean-k/plexus) and
[documentation](https://github.com/olson-sean-k/plexus-web) repositories for
Plexus are hosted on GitHub.

Plexus is developed, built, and tested using the latest stable release of Rust.
It is also tested on the stable, beta, and nightly channels using Travis CI.
Code is formatted using the nightly build of `rustfmt`. Please see the
contribution documentation in each repository for more details.

## License

Plexus is distributed under the MIT license.
