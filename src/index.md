<div align="center">
    <img alt="Plexus" src="img/plexus.svg" width="320"/>
</div>

**Plexus** is a [Rust library](https://crates.io/crates/plexus) for polygonal
mesh processing. It provides [primitives](user-guide/primitives),
[buffers](user-guide/buffers), and [graphs](user-guide/graphs) that are generic
over their [geometry](user-guide/geometry). Plexus supports types from the
[`cgmath`](https://crates.io/crates/cgmath),
[`mint`](https://crates.io/crates/mint), and
[`nalgebra`](https://crates.io/crates/nalgebra) crates.

!!! warning
    Plexus is still in its initial development phase. Crates published to
    [https://crates.io](https://crates.io) in the `0.0.x` series do **not** obey
    [SemVer](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
    and are unstable.

Plexus avoids exposing low-level topological operations such as inserting
individual vertices into a graph. These kinds of operations are easily performed
incorrectly and often require user code to verify the results. Instead, Plexus
exposes more abstract operations that maintain topological consistency while
being agnostic to geometry.

The [user guide](user-guide/getting-started.md) and [API
documentation](rustdoc/plexus/index.html) on this website are based on changes
to the [`master` branch](https://github.com/olson-sean-k/plexus).  At this time,
these changes may differ significantly from crates published to registries like
[https://crates.io](https://crates.io). See
[https://doc.rs](https://docs.rs/plexus) for documentation for published
versions of Plexus.
