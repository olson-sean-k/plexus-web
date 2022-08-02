(function() {var implementors = {};
implementors["decorum"] = [{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"decorum/struct.ConstrainedFloat.html\" title=\"struct decorum::ConstrainedFloat\">ConstrainedFloat</a>&lt;T, P&gt;&gt; for <a class=\"struct\" href=\"decorum/struct.ConstrainedFloat.html\" title=\"struct decorum::ConstrainedFloat\">ConstrainedFloat</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"decorum/trait.Float.html\" title=\"trait decorum::Float\">Float</a> + <a class=\"trait\" href=\"decorum/trait.Primitive.html\" title=\"trait decorum::Primitive\">Primitive</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Constraint&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["decorum::proxy::ConstrainedFloat"]},{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;T&gt; for <a class=\"struct\" href=\"decorum/struct.ConstrainedFloat.html\" title=\"struct decorum::ConstrainedFloat\">ConstrainedFloat</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"decorum/trait.Float.html\" title=\"trait decorum::Float\">Float</a> + <a class=\"trait\" href=\"decorum/trait.Primitive.html\" title=\"trait decorum::Primitive\">Primitive</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Constraint&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["decorum::proxy::ConstrainedFloat"]}];
implementors["plexus"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/buffer/enum.BufferError.html\" title=\"enum plexus::buffer::BufferError\">BufferError</a>&gt; for <a class=\"enum\" href=\"plexus/buffer/enum.BufferError.html\" title=\"enum plexus::buffer::BufferError\">BufferError</a>","synthetic":false,"types":["plexus::buffer::BufferError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/geometry/partition/enum.BinaryPartition.html\" title=\"enum plexus::geometry::partition::BinaryPartition\">BinaryPartition</a>&gt; for <a class=\"enum\" href=\"plexus/geometry/partition/enum.BinaryPartition.html\" title=\"enum plexus::geometry::partition::BinaryPartition\">BinaryPartition</a>","synthetic":false,"types":["plexus::geometry::partition::BinaryPartition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.ArcKey.html\" title=\"struct plexus::graph::ArcKey\">ArcKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.ArcKey.html\" title=\"struct plexus::graph::ArcKey\">ArcKey</a>","synthetic":false,"types":["plexus::graph::edge::ArcKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.ArcView.html\" title=\"struct plexus::graph::ArcView\">ArcView</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.ArcView.html\" title=\"struct plexus::graph::ArcView\">ArcView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Arc&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::ArcView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.ArcOrphan.html\" title=\"struct plexus::graph::ArcOrphan\">ArcOrphan</a>&lt;'a, G&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.ArcOrphan.html\" title=\"struct plexus::graph::ArcOrphan\">ArcOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::ArcOrphan"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.EdgeKey.html\" title=\"struct plexus::graph::EdgeKey\">EdgeKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.EdgeKey.html\" title=\"struct plexus::graph::EdgeKey\">EdgeKey</a>","synthetic":false,"types":["plexus::graph::edge::EdgeKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.EdgeView.html\" title=\"struct plexus::graph::EdgeView\">EdgeView</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.EdgeView.html\" title=\"struct plexus::graph::EdgeView\">EdgeView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Edge&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::EdgeView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.EdgeOrphan.html\" title=\"struct plexus::graph::EdgeOrphan\">EdgeOrphan</a>&lt;'a, G&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.EdgeOrphan.html\" title=\"struct plexus::graph::EdgeOrphan\">EdgeOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::EdgeOrphan"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.FaceKey.html\" title=\"struct plexus::graph::FaceKey\">FaceKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.FaceKey.html\" title=\"struct plexus::graph::FaceKey\">FaceKey</a>","synthetic":false,"types":["plexus::graph::face::FaceKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.FaceView.html\" title=\"struct plexus::graph::FaceView\">FaceView</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.FaceView.html\" title=\"struct plexus::graph::FaceView\">FaceView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Face&lt;G&gt;&gt; + Consistent + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::face::FaceView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.FaceOrphan.html\" title=\"struct plexus::graph::FaceOrphan\">FaceOrphan</a>&lt;'a, G&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.FaceOrphan.html\" title=\"struct plexus::graph::FaceOrphan\">FaceOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::face::FaceOrphan"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.Ring.html\" title=\"struct plexus::graph::Ring\">Ring</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.Ring.html\" title=\"struct plexus::graph::Ring\">Ring</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Arc&lt;G&gt;&gt; + Consistent + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::face::Ring"]},{"text":"impl&lt;'k, B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.Path.html\" title=\"struct plexus::graph::Path\">Path</a>&lt;'k, B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.Path.html\" title=\"struct plexus::graph::Path\">Path</a>&lt;'k, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Arc&lt;G&gt;&gt; + AsStorage&lt;Vertex&lt;G&gt;&gt; + Consistent + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.VertexKey.html\" title=\"struct plexus::graph::VertexKey\">VertexKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.VertexKey.html\" title=\"struct plexus::graph::VertexKey\">VertexKey</a>","synthetic":false,"types":["plexus::graph::vertex::VertexKey"]},{"text":"impl&lt;B, M, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.VertexView.html\" title=\"struct plexus::graph::VertexView\">VertexView</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.VertexView.html\" title=\"struct plexus::graph::VertexView\">VertexView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow&lt;Target = M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: AsStorage&lt;Vertex&lt;G&gt;&gt; + Parametric&lt;Data = G&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::vertex::VertexView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.VertexOrphan.html\" title=\"struct plexus::graph::VertexOrphan\">VertexOrphan</a>&lt;'a, G&gt;&gt; for <a class=\"struct\" href=\"plexus/graph/struct.VertexOrphan.html\" title=\"struct plexus::graph::VertexOrphan\">VertexOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::vertex::VertexOrphan"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/graph/enum.GraphError.html\" title=\"enum plexus::graph::GraphError\">GraphError</a>&gt; for <a class=\"enum\" href=\"plexus/graph/enum.GraphError.html\" title=\"enum plexus::graph::GraphError\">GraphError</a>","synthetic":false,"types":["plexus::graph::GraphError"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/graph/enum.Selector.html\" title=\"enum plexus::graph::Selector\">Selector</a>&lt;K&gt;&gt; for <a class=\"enum\" href=\"plexus/graph/enum.Selector.html\" title=\"enum plexus::graph::Selector\">Selector</a>&lt;K&gt;","synthetic":false,"types":["plexus::graph::Selector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/graph/enum.GraphKey.html\" title=\"enum plexus::graph::GraphKey\">GraphKey</a>&gt; for <a class=\"enum\" href=\"plexus/graph/enum.GraphKey.html\" title=\"enum plexus::graph::GraphKey\">GraphKey</a>","synthetic":false,"types":["plexus::graph::GraphKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/primitive/cube/enum.Plane.html\" title=\"enum plexus::primitive::cube::Plane\">Plane</a>&gt; for <a class=\"enum\" href=\"plexus/primitive/cube/enum.Plane.html\" title=\"enum plexus::primitive::cube::Plane\">Plane</a>","synthetic":false,"types":["plexus::primitive::cube::Plane"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/primitive/struct.NGon.html\" title=\"struct plexus::primitive::NGon\">NGon</a>&lt;G, N&gt;&gt; for <a class=\"struct\" href=\"plexus/primitive/struct.NGon.html\" title=\"struct plexus::primitive::NGon\">NGon</a>&lt;G, N&gt;","synthetic":false,"types":["plexus::primitive::NGon"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/primitive/enum.EdgeEdge.html\" title=\"enum plexus::primitive::EdgeEdge\">EdgeEdge</a>&lt;S&gt;&gt; for <a class=\"enum\" href=\"plexus/primitive/enum.EdgeEdge.html\" title=\"enum plexus::primitive::EdgeEdge\">EdgeEdge</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["plexus::primitive::EdgeEdge"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/primitive/enum.BoundedPolygon.html\" title=\"enum plexus::primitive::BoundedPolygon\">BoundedPolygon</a>&lt;G&gt;&gt; for <a class=\"enum\" href=\"plexus/primitive/enum.BoundedPolygon.html\" title=\"enum plexus::primitive::BoundedPolygon\">BoundedPolygon</a>&lt;G&gt;","synthetic":false,"types":["plexus::primitive::BoundedPolygon"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"plexus/primitive/struct.UnboundedPolygon.html\" title=\"struct plexus::primitive::UnboundedPolygon\">UnboundedPolygon</a>&lt;G&gt;&gt; for <a class=\"struct\" href=\"plexus/primitive/struct.UnboundedPolygon.html\" title=\"struct plexus::primitive::UnboundedPolygon\">UnboundedPolygon</a>&lt;G&gt;","synthetic":false,"types":["plexus::primitive::UnboundedPolygon"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"plexus/enum.MeshArity.html\" title=\"enum plexus::MeshArity\">MeshArity</a>&gt; for <a class=\"enum\" href=\"plexus/enum.MeshArity.html\" title=\"enum plexus::MeshArity\">MeshArity</a>","synthetic":false,"types":["plexus::MeshArity"]}];
implementors["theon"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"theon/query/struct.Unit.html\" title=\"struct theon::query::Unit\">Unit</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"theon/query/struct.Unit.html\" title=\"struct theon::query::Unit\">Unit</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.InnerSpace.html\" title=\"trait theon::space::InnerSpace\">InnerSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Unit"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"theon/query/struct.Line.html\" title=\"struct theon::query::Line\">Line</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"theon/query/struct.Line.html\" title=\"struct theon::query::Line\">Line</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Line"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"theon/query/enum.LineLine.html\" title=\"enum theon::query::LineLine\">LineLine</a>&lt;S&gt;&gt; for <a class=\"enum\" href=\"theon/query/enum.LineLine.html\" title=\"enum theon::query::LineLine\">LineLine</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::LineLine"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"theon/query/enum.LinePlane.html\" title=\"enum theon::query::LinePlane\">LinePlane</a>&lt;S&gt;&gt; for <a class=\"enum\" href=\"theon/query/enum.LinePlane.html\" title=\"enum theon::query::LinePlane\">LinePlane</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::LinePlane"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"theon/query/struct.Ray.html\" title=\"struct theon::query::Ray\">Ray</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"theon/query/struct.Ray.html\" title=\"struct theon::query::Ray\">Ray</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Ray"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"theon/query/struct.Aabb.html\" title=\"struct theon::query::Aabb\">Aabb</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"theon/query/struct.Aabb.html\" title=\"struct theon::query::Aabb\">Aabb</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::Aabb"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"theon/query/enum.PlaneRay.html\" title=\"enum theon::query::PlaneRay\">PlaneRay</a>&lt;S&gt;&gt; for <a class=\"enum\" href=\"theon/query/enum.PlaneRay.html\" title=\"enum theon::query::PlaneRay\">PlaneRay</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"theon/space/trait.EuclideanSpace.html\" title=\"trait theon::space::EuclideanSpace\">EuclideanSpace</a>,&nbsp;</span>","synthetic":false,"types":["theon::query::PlaneRay"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()