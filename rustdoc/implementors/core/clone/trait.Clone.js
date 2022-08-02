(function() {var implementors = {};
implementors["decorum"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"decorum/struct.ConstrainedFloat.html\" title=\"struct decorum::ConstrainedFloat\">ConstrainedFloat</a>&lt;T, P&gt;","synthetic":false,"types":["decorum::proxy::ConstrainedFloat"]}];
implementors["plexus"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/geometry/partition/enum.BinaryPartition.html\" title=\"enum plexus::geometry::partition::BinaryPartition\">BinaryPartition</a>","synthetic":false,"types":["plexus::geometry::partition::BinaryPartition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.ArcKey.html\" title=\"struct plexus::graph::ArcKey\">ArcKey</a>","synthetic":false,"types":["plexus::graph::edge::ArcKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.ArcView.html\" title=\"struct plexus::graph::ArcView\">ArcView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Arc&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;View&lt;B, Arc&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::ArcView"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.EdgeKey.html\" title=\"struct plexus::graph::EdgeKey\">EdgeKey</a>","synthetic":false,"types":["plexus::graph::edge::EdgeKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.EdgeView.html\" title=\"struct plexus::graph::EdgeView\">EdgeView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Edge&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;View&lt;B, Edge&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::EdgeView"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.FaceKey.html\" title=\"struct plexus::graph::FaceKey\">FaceKey</a>","synthetic":false,"types":["plexus::graph::face::FaceKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.FaceView.html\" title=\"struct plexus::graph::FaceView\">FaceView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Face&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;View&lt;B, Face&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::face::FaceView"]},{"text":"impl&lt;'k, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.Path.html\" title=\"struct plexus::graph::Path\">Path</a>&lt;'k, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::Target: AsStorage&lt;Arc&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + AsStorage&lt;Vertex&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + Consistent + Parametric,&nbsp;</span>","synthetic":false,"types":["plexus::graph::path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.VertexKey.html\" title=\"struct plexus::graph::VertexKey\">VertexKey</a>","synthetic":false,"types":["plexus::graph::vertex::VertexKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/graph/struct.VertexView.html\" title=\"struct plexus::graph::VertexView\">VertexView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Vertex&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;View&lt;B, Vertex&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::vertex::VertexView"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/graph/enum.Selector.html\" title=\"enum plexus::graph::Selector\">Selector</a>&lt;K&gt;","synthetic":false,"types":["plexus::graph::Selector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/graph/enum.GraphKey.html\" title=\"enum plexus::graph::GraphKey\">GraphKey</a>","synthetic":false,"types":["plexus::graph::GraphKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/primitive/cube/enum.Plane.html\" title=\"enum plexus::primitive::cube::Plane\">Plane</a>","synthetic":false,"types":["plexus::primitive::cube::Plane"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/cube/struct.Bounds.html\" title=\"struct plexus::primitive::cube::Bounds\">Bounds</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["plexus::primitive::cube::Bounds"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/cube/struct.Cube.html\" title=\"struct plexus::primitive::cube::Cube\">Cube</a>","synthetic":false,"types":["plexus::primitive::cube::Cube"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/sphere/struct.Bounds.html\" title=\"struct plexus::primitive::sphere::Bounds\">Bounds</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["plexus::primitive::sphere::Bounds"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/sphere/struct.UvSphere.html\" title=\"struct plexus::primitive::sphere::UvSphere\">UvSphere</a>","synthetic":false,"types":["plexus::primitive::sphere::UvSphere"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/struct.NGon.html\" title=\"struct plexus::primitive::NGon\">NGon</a>&lt;G, N&gt;","synthetic":false,"types":["plexus::primitive::NGon"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/primitive/enum.EdgeEdge.html\" title=\"enum plexus::primitive::EdgeEdge\">EdgeEdge</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["plexus::primitive::EdgeEdge"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/primitive/enum.BoundedPolygon.html\" title=\"enum plexus::primitive::BoundedPolygon\">BoundedPolygon</a>&lt;G&gt;","synthetic":false,"types":["plexus::primitive::BoundedPolygon"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/primitive/struct.UnboundedPolygon.html\" title=\"struct plexus::primitive::UnboundedPolygon\">UnboundedPolygon</a>&lt;G&gt;","synthetic":false,"types":["plexus::primitive::UnboundedPolygon"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"plexus/enum.MeshArity.html\" title=\"enum plexus::MeshArity\">MeshArity</a>","synthetic":false,"types":["plexus::MeshArity"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/struct.Perimeter.html\" title=\"struct plexus::Perimeter\">Perimeter</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["plexus::Perimeter"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"plexus/struct.Keys.html\" title=\"struct plexus::Keys\">Keys</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"plexus/graph/trait.ClosedView.html\" title=\"trait plexus::graph::ClosedView\">ClosedView</a>,&nbsp;</span>","synthetic":false,"types":["plexus::Keys"]}];
implementors["theon"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"theon/query/struct.Unit.html\" title=\"struct theon::query::Unit\">Unit</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.InnerSpace.html\" title=\"trait theon::space::InnerSpace\">InnerSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Unit"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"theon/query/struct.Line.html\" title=\"struct theon::query::Line\">Line</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Line"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"theon/query/enum.LineLine.html\" title=\"enum theon::query::LineLine\">LineLine</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::LineLine"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"theon/query/enum.LinePlane.html\" title=\"enum theon::query::LinePlane\">LinePlane</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::LinePlane"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"theon/query/struct.Ray.html\" title=\"struct theon::query::Ray\">Ray</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Ray"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"theon/query/struct.Aabb.html\" title=\"struct theon::query::Aabb\">Aabb</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Aabb"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"theon/query/struct.Plane.html\" title=\"struct theon::query::Plane\">Plane</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Plane"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"theon/query/enum.PlaneRay.html\" title=\"enum theon::query::PlaneRay\">PlaneRay</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::PlaneRay"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()