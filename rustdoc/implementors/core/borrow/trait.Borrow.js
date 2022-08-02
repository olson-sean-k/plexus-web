(function() {var implementors = {};
implementors["plexus"] = [{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.ArcKey.html\" title=\"struct plexus::graph::ArcKey\">ArcKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.ArcView.html\" title=\"struct plexus::graph::ArcView\">ArcView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::Target: AsStorage&lt;Arc&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + Parametric,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::ArcView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.ArcKey.html\" title=\"struct plexus::graph::ArcKey\">ArcKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.ArcOrphan.html\" title=\"struct plexus::graph::ArcOrphan\">ArcOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::ArcOrphan"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.EdgeKey.html\" title=\"struct plexus::graph::EdgeKey\">EdgeKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.EdgeView.html\" title=\"struct plexus::graph::EdgeView\">EdgeView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::Target: AsStorage&lt;Edge&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + Parametric,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::EdgeView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.EdgeKey.html\" title=\"struct plexus::graph::EdgeKey\">EdgeKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.EdgeOrphan.html\" title=\"struct plexus::graph::EdgeOrphan\">EdgeOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::edge::EdgeOrphan"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.FaceKey.html\" title=\"struct plexus::graph::FaceKey\">FaceKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.FaceView.html\" title=\"struct plexus::graph::FaceView\">FaceView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::Target: AsStorage&lt;Face&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + Parametric,&nbsp;</span>","synthetic":false,"types":["plexus::graph::face::FaceView"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.VertexKey.html\" title=\"struct plexus::graph::VertexKey\">VertexKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.VertexView.html\" title=\"struct plexus::graph::VertexView\">VertexView</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Reborrow,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::Target: AsStorage&lt;Vertex&lt;&lt;B as Parametric&gt;::Data&gt;&gt; + Parametric,&nbsp;</span>","synthetic":false,"types":["plexus::graph::vertex::VertexView"]},{"text":"impl&lt;'a, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"plexus/graph/struct.VertexKey.html\" title=\"struct plexus::graph::VertexKey\">VertexKey</a>&gt; for <a class=\"struct\" href=\"plexus/graph/struct.VertexOrphan.html\" title=\"struct plexus::graph::VertexOrphan\">VertexOrphan</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"plexus/graph/trait.GraphData.html\" title=\"trait plexus::graph::GraphData\">GraphData</a>,&nbsp;</span>","synthetic":false,"types":["plexus::graph::vertex::VertexOrphan"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()