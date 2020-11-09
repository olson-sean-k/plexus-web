<div align="center">
    <img alt="Plexus" src="img/plexus.svg" width="320"/>
</div>

**Plexus** is a highly composable [Rust library][crate] for computational
geometry and polygonal mesh processing. It provides
[primitives](user-guide/primitives), [buffers](user-guide/buffers), and
[graphs](user-guide/graphs) that are generic over their
[geometry](user-guide/geometry) and provide ergonomic geometric APIs for
supported types. Plexus does not require that any particular types be used,
however, and arbitrary data is supported.

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

The [user guide](user-guide/getting-started.md) and [API documentation][api] on
this website are based on changes to the [`master` branch][repository]. At this
time, these changes may differ significantly from crates published to registries
like [https://crates.io](https://crates.io). See
[https://docs.rs](https://docs.rs/plexus) for documentation for published
versions of Plexus.

For contributing changes to Plexus, see the [contributor
guide](contributor-guide/tools-and-hosting.md).

[api]: rustdoc/plexus/index.html
[crate]: https://crates.io/crates/plexus
[repository]: https://github.com/olson-sean-k/plexus
