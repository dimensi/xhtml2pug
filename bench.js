const b = require('benny');
const { convert } = require('./build/main/index');
const html2jade = require('html2jade');
const fs = require('fs/promises');
const html = `<div class="Box-body px-5 pb-5">
        <article class="markdown-body entry-content container-lg" itemprop="text"><h1><a id="" class="anchor" aria-hidden="true" href="#"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/4837a86bf830ac64f449a1a203e1bf84d41bda16b9c3dad4ef12fc50ec529076/68747470733a2f2f6d656469612e7468692e6e672f756d6272656c6c612f62616e6e6572732f7468696e672d756d6272656c6c612e7376673f31353831323937373739"><img src="https://camo.githubusercontent.com/4837a86bf830ac64f449a1a203e1bf84d41bda16b9c3dad4ef12fc50ec529076/68747470733a2f2f6d656469612e7468692e6e672f756d6272656c6c612f62616e6e6572732f7468696e672d756d6272656c6c612e7376673f31353831323937373739" alt="thi.ng/umbrella" data-canonical-src="https://media.thi.ng/umbrella/banners/thing-umbrella.svg?1581297779" style="max-width:100%;"></a></h1>
<p><a href="https://github.com/thi-ng/umbrella/actions?query=workflow%3Atest-all"><img src="https://camo.githubusercontent.com/a32e34cc493d5a1988a5c577004f2f04c3d5bbab0c48d7eb70763b6938d7ac57/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f7468692d6e672f756d6272656c6c612f746573742d616c6c" alt="Build status" data-canonical-src="https://img.shields.io/github/workflow/status/thi-ng/umbrella/test-all" style="max-width:100%;"></a>
<a href="https://codeclimate.com/github/thi-ng/umbrella/maintainability" rel="nofollow"><img src="https://camo.githubusercontent.com/05be6c2cbbb92bf21673800a96d1bba3fc827f1cde810d928c775d616039fc0e/68747470733a2f2f6170692e636f6465636c696d6174652e636f6d2f76312f6261646765732f35393239343034313961646235626638616261662f6d61696e7461696e6162696c697479" alt="Code Climate" data-canonical-src="https://api.codeclimate.com/v1/badges/592940419adb5bf8abaf/maintainability" style="max-width:100%;"></a>
<a href="https://www.patreon.com/thing_umbrella" rel="nofollow"><img src="https://camo.githubusercontent.com/30769f9470f623db56c689c8c1722d7bcb51efb1e1128d464958b58f27090872/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70617472656f6e2d646f6e6174652d79656c6c6f772e737667" alt="Become a patron" data-canonical-src="https://img.shields.io/badge/patreon-donate-yellow.svg" style="max-width:100%;"></a>
<a href="https://discord.gg/JhYcmBw" rel="nofollow"><img src="https://camo.githubusercontent.com/2fa3e1290fa45192bbef5d4d3fe741e8575474da1e111537f92f0f48e8dd43d5/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3434353736313030383833373938343235362e737667" alt="Discord chat" data-canonical-src="https://img.shields.io/discord/445761008837984256.svg" style="max-width:100%;"></a>
<a href="https://twitter.com/thing_umbrella" rel="nofollow"><img src="https://camo.githubusercontent.com/350e6ac96ff4d34b1da8e5e58cd05676e83cadc5ede1bbd2a604189d9939dbf3/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f7468696e675f756d6272656c6c612e7376673f6c6162656c3d2534307468696e675f756d6272656c6c61267374796c653d736f6369616c" alt="Twitter Follow" data-canonical-src="https://img.shields.io/twitter/follow/thing_umbrella.svg?label=%40thing_umbrella&amp;style=social" style="max-width:100%;"></a></p>
<h2><a id="user-content-about" class="anchor" aria-hidden="true" href="#about"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>About</h2>
<blockquote>
<p>"A collection of functional programming libraries that can be composed together.
Unlike a framework, thi.ng is a suite of instruments and you (the user) must be
the composer of. Geared towards versatility, not any specific type of music."
— <a href="https://twitter.com/logantpowell/status/1186334119812304901" rel="nofollow">@loganpowell</a> via Twitter</p>
</blockquote>
<p>Mono-repository for 148+ thi.ng TypeScript/ES6 projects, a wide
collection of largely data transformation oriented packages and building
blocks for (non-exhaustive list of topics):</p>
<p><strong>Please visit <a href="https://thi.ng" rel="nofollow">thi.ng</a> for additional information &amp; topic based
search of packages relevant to your use cases...</strong></p>
<ul>
<li>Functional programming (composition, memoization, transducers, multi-methods)</li>
<li>Data structures &amp; data transformations for wide range of use cases (list,
sets, maps, joins, spatial indexing, clocks)</li>
<li>ES6 iterators/generators</li>
<li>Immutable data handling, state containers, transacted state updates, Undo-Redo
history</li>
<li>Vector &amp; matrix implementations with optional support for strided layouts,
SIMD etc.</li>
<li>Value-based equivalence</li>
<li>Data driven UI component toolkits (multiple approaches)</li>
<li>Reactive programming, stream / transducer based dataflow graphs / pipelines</li>
<li>WebWorker workflow abstractions</li>
<li>DSP building blocks: oscillators, noise generators, filters, 1D FFT/IFFT,
muxers, rate converters</li>
<li>2D geometry generation, shape primitives, processing, conversion &amp;
visualization</li>
<li>Canvas abstractions &amp; SVG conversion</li>
<li>Semi-declarative WebGL 1/2 abstraction layer</li>
<li>DSL for shader functions defined in TypeScript and cross-compilation to GLSL,
JS, VEX etc.</li>
<li>Date/time iterators, formatters, math</li>
<li>PEG-style parser combinators, FSM primitives</li>
<li>Forth-style pointfree DSL for functional composition</li>
<li>S-expression parser &amp; runtime infrastructure for custom DSL creation</li>
<li>Multi-format pixel buffers, conversions, Porter-Duff alpha-blending operators</li>
<li>Color space/format conversions, matrix based color manipulation, cosine
gradients</li>
<li>Canvas-based Immediate mode GUI components</li>
<li>Low-level tooling for binary data, shared memory/WASM/WebGL interop</li>
<li>etc. (see package overview below)</li>
</ul>
<p><strong>...all with a keen eye on simplicity, re-use &amp; minimalism without
sacrificing flexibility.</strong></p>
<p><strong>This project is NOT a framework</strong>, provides no turn-key,
one-size-fits-all approach and instead encourages a mix &amp; match
philosophy for various key aspects of application design (in &amp; outside
the browser). Most customization points only expect certain
interfaces/type signatures rather than concrete implementations.</p>
<p>All packages:</p>
<ul>
<li>are versioned independently</li>
<li>distributed in ES2017 syntax and multiple formats (ESM, CommonJS, UMD)
with TypeScript typings &amp; change logs</li>
<li>highly modular with largely only a few closely related functions or
single function / class per file to help w/ tree shaking</li>
<li>provide re-exports of all their publics for full library imports</li>
<li>have either none or only @thi.ng internal runtime dependencies</li>
<li>declare public interfaces, enums &amp; types in an <code>api.ts</code> and/or
<code>constants.ts</code> file (larger packages only)</li>
<li>have auto-generated online documentation at <a href="http://docs.thi.ng" rel="nofollow">docs.thi.ng</a></li>
<li>licensed under Apache Software License 2.0</li>
</ul>
<p>Most packages:</p>
<ul>
<li>have been used in production</li>
<li>have detailed, individual README files w/ small usage examples</li>
</ul>
<h2><a id="user-content-examples" class="anchor" aria-hidden="true" href="#examples"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Examples</h2>
<p>There's a steadily growing number (~100) of standalone examples
(different complexities, often combining functionality from several
packages) in the <a href="/thi-ng/umbrella/blob/develop/examples/README.md"><strong>examples</strong></a> directory.</p>
<table>
<thead>
<tr>
<th>Example screenshots</th>
<th>(small selection)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/svg-waveform.jpg"><img src="/thi-ng/umbrella/raw/develop/assets/examples/svg-waveform.jpg" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/imgui/imgui-all.png"><img src="/thi-ng/umbrella/raw/develop/assets/imgui/imgui-all.png" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/shader-ast/shader-ast-raymarch.jpg"><img src="/thi-ng/umbrella/raw/develop/assets/shader-ast/shader-ast-raymarch.jpg" width="240" style="max-width:100%;"></a></td>
</tr>
<tr>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/adaptive-threshold.png"><img src="/thi-ng/umbrella/raw/develop/assets/examples/adaptive-threshold.png" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/crypto-chart.png"><img src="/thi-ng/umbrella/raw/develop/assets/examples/crypto-chart.png" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/commit-table-ssr.png"><img src="/thi-ng/umbrella/raw/develop/assets/examples/commit-table-ssr.png" width="240" style="max-width:100%;"></a></td>
</tr>
<tr>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/text-canvas.png"><img src="/thi-ng/umbrella/raw/develop/assets/examples/text-canvas.png" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/geom/tessel.png"><img src="/thi-ng/umbrella/raw/develop/assets/geom/tessel.png" width="240" style="max-width:100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="/thi-ng/umbrella/blob/develop/assets/examples/soa-ecs-100k.png"><img src="/thi-ng/umbrella/raw/develop/assets/examples/soa-ecs-100k.png" width="240" style="max-width:100%;"></a></td>
</tr>
</tbody>
</table>
<h2><a id="user-content-blog-posts" class="anchor" aria-hidden="true" href="#blog-posts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Blog posts</h2>
<ul>
<li>
<p><a href="https://medium.com/@thi.ng/how-to-ui-in-2018-ac2ae02acdf3" rel="nofollow">How to UI in 2018</a></p>
</li>
<li>
<p>"Of umbrellas, transducers, reactive streams &amp; mushrooms" (ongoing series):</p>
<ul>
<li><a href="https://medium.com/@thi.ng/of-umbrellas-transducers-reactive-streams-mushrooms-pt-1-a8717ce3a170" rel="nofollow">Part 1 - Project &amp; series overview</a></li>
<li><a href="https://medium.com/@thi.ng/of-umbrellas-transducers-reactive-streams-mushrooms-pt-2-9c540beb0023" rel="nofollow">Part 2 - HOFs, Transducers, Reducers</a></li>
<li><a href="https://medium.com/@thi.ng/of-umbrellas-transducers-reactive-streams-mushrooms-pt-3-a1c4e621db9b" rel="nofollow">Part 3 - Convolution, 1D/2D Cellular automata</a></li>
<li><a href="https://medium.com/@thi.ng/of-umbrellas-transducers-reactive-streams-mushrooms-pt-4-62d8e71e5603" rel="nofollow">Part 4 - Disjoint Sets, Graph analysis, Signed Distance Fields</a></li>
</ul>
</li>
</ul>
<h2><a id="user-content-community--contributing" class="anchor" aria-hidden="true" href="#community--contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Community &amp; contributing</h2>
<p>Join our little community on our <a href="https://discord.gg/JhYcmBw" rel="nofollow">Discord
server</a> or get in touch via
<a href="https://twitter.com/thing_umbrella" rel="nofollow">Twitter</a> or the <a href="https://github.com/thi-ng/umbrella/issues">issue
tracker</a>. If you'd like to
contribute, please first read <a href="/thi-ng/umbrella/blob/develop/CONTRIBUTING.md">this document</a>.</p>
<p>In general, we welcome contributions of all kinds (docs, examples, bug
fixes, feature requests, financial contributions etc.). You can find a
fairly detailed overview for contributors here:
<a href="https://github.com/thi-ng/umbrella/blob/develop/CONTRIBUTING.md">CONTRIBUTING.md</a>.</p>
<p><strong>Note:</strong> The default branch for this repo is <code>develop</code>. As of 2020-12-08,
we've also renamed <code>master</code> to the more suitable <code>main</code> branch. If you have
local clones, please follow the <a href="https://www.hanselman.com/blog/easily-rename-your-git-default-branch-from-master-to-main" rel="nofollow">advice &amp; short instructions in this
article</a>
to update your local version.</p>
<h2><a id="user-content-projects" class="anchor" aria-hidden="true" href="#projects"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Projects</h2>

<h3><a id="user-content-latest-additions-2021-01-21" class="anchor" aria-hidden="true" href="#latest-additions-2021-01-21"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Latest additions (2021-01-21)</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/args"><code>@thi.ng/args</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/args" rel="nofollow"><img src="https://camo.githubusercontent.com/bdfd729d5812d1092622064ed5a1b3809c7afe8473f91d905c51bd8f51aee12a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f617267732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/args.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/args/CHANGELOG.md">changelog</a></td>
<td>Declarative &amp; functional CLI arg parsing &amp; coercions</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/distance"><code>@thi.ng/distance</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/distance" rel="nofollow"><img src="https://camo.githubusercontent.com/bcd8264786d415f2b78cb88f94556ac6f5472328ab45fea614bd42218986137b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f64697374616e63652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/distance.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/distance/CHANGELOG.md">changelog</a></td>
<td>n-D distance metrics &amp; K-nearest neighborhoods</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/base-n"><code>@thi.ng/base-n</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/base-n" rel="nofollow"><img src="https://camo.githubusercontent.com/7b8a26171fdc8c27353ee0e42904e44f92d4ccdd394178c1cf5727aa091a47dd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f626173652d6e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/base-n.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/base-n/CHANGELOG.md">changelog</a></td>
<td>Arbitrary base-n encoding/decoding with presets</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ksuid"><code>@thi.ng/ksuid</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/ksuid" rel="nofollow"><img src="https://camo.githubusercontent.com/aa912c1a569f25cee4b8a2b05d0736338d717133d8ad4f6b1b44e356053d5f2e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6b737569642e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/ksuid.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ksuid/CHANGELOG.md">changelog</a></td>
<td>K-sortable unique identifiers, binary &amp; base-N encoded</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-fundamentals" class="anchor" aria-hidden="true" href="#fundamentals"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Fundamentals</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/args"><code>@thi.ng/args</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/args" rel="nofollow"><img src="https://camo.githubusercontent.com/bdfd729d5812d1092622064ed5a1b3809c7afe8473f91d905c51bd8f51aee12a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f617267732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/args.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/args/CHANGELOG.md">changelog</a></td>
<td>Declarative &amp; functional CLI arg parsing &amp; coercions</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/api"><code>@thi.ng/api</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/api" rel="nofollow"><img src="https://camo.githubusercontent.com/10a5106befe3efdafea16247fa1dd4caed69521ce91efa7cad6d8bfd04c2a6f3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6170692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/api.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/api/CHANGELOG.md">changelog</a></td>
<td>Common types, decorators, mixins</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bench"><code>@thi.ng/bench</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/bench" rel="nofollow"><img src="https://camo.githubusercontent.com/8ffe35dd054d3ae9cd95dbf29d7bf65a61c5f7cca6e4539d13d5ea6a961b4722/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f62656e63682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/bench.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bench/CHANGELOG.md">changelog</a></td>
<td>Basic benchmarking helpers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/checks"><code>@thi.ng/checks</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/checks" rel="nofollow"><img src="https://camo.githubusercontent.com/23a9c3b21c242b95f44042f60023decf76df62ccd1202bd7cc6d9bed4a2665dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f636865636b732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/checks.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/checks/CHANGELOG.md">changelog</a></td>
<td>Type &amp; value checks</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/compare"><code>@thi.ng/compare</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/compare" rel="nofollow"><img src="https://camo.githubusercontent.com/ba89d68b867dace5f89217755c418de24ae6e7956e8bc7cc083a5087b01dbaf7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f636f6d706172652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/compare.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/compare/CHANGELOG.md">changelog</a></td>
<td>Comparators</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/compose"><code>@thi.ng/compose</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/compose" rel="nofollow"><img src="https://camo.githubusercontent.com/46691b5227294dfe92f74180f812ce9a0b08eec11f2f3337e77717bdceb253dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f636f6d706f73652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/compose.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/compose/CHANGELOG.md">changelog</a></td>
<td>Functional composition helpers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/date"><code>@thi.ng/date</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/date" rel="nofollow"><img src="https://camo.githubusercontent.com/0dcaccb3d4a4b64b3fe946dfe4aca8ca9e1eb5f1117cd51e0aa41d60a4e369c0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f646174652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/date.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/date/CHANGELOG.md">changelog</a></td>
<td>Date/time iterators, formatters, rounding</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/defmulti"><code>@thi.ng/defmulti</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/defmulti" rel="nofollow"><img src="https://camo.githubusercontent.com/4822c3e9e66df9d4d958b424f25a95ddd6c4fc9880c9e8eee5a3f17b81f22c99/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6465666d756c74692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/defmulti.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/defmulti/CHANGELOG.md">changelog</a></td>
<td>Dynamic multiple dispatch</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/distance"><code>@thi.ng/distance</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/distance" rel="nofollow"><img src="https://camo.githubusercontent.com/bcd8264786d415f2b78cb88f94556ac6f5472328ab45fea614bd42218986137b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f64697374616e63652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/distance.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/distance/CHANGELOG.md">changelog</a></td>
<td>n-D distance metrics &amp; K-nearest neighborhoods</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/equiv"><code>@thi.ng/equiv</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/equiv" rel="nofollow"><img src="https://camo.githubusercontent.com/3bcd0d29c2931841d4d3d063558f2259be5faeec19edf7e9832fc8fa3b50e42c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f65717569762e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/equiv.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/equiv/CHANGELOG.md">changelog</a></td>
<td>Deep value equivalence checking</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/errors"><code>@thi.ng/errors</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/errors" rel="nofollow"><img src="https://camo.githubusercontent.com/a99acd334d5d7479fe58fddbfa3b3169da85c06d881c92d55edaedbafc737a25/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6572726f72732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/errors.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/errors/CHANGELOG.md">changelog</a></td>
<td>Custom error types</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hex"><code>@thi.ng/hex</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hex" rel="nofollow"><img src="https://camo.githubusercontent.com/fe8d277b0abb56875b930f6a7ce2137c483f753e166f2b9ddeadcf04d5b6d753/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6865782e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hex.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hex/CHANGELOG.md">changelog</a></td>
<td>Hex value formatters for U4-64 words</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/memoize"><code>@thi.ng/memoize</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/memoize" rel="nofollow"><img src="https://camo.githubusercontent.com/0c3cb0351202c71aa0715868c3382437b43700802362d3b0269167453060989d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d656d6f697a652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/memoize.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/memoize/CHANGELOG.md">changelog</a></td>
<td>Function memoization w/ customizable caching</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/oquery"><code>@thi.ng/oquery</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/oquery" rel="nofollow"><img src="https://camo.githubusercontent.com/3668539bd6a97a4cc55257c14ef1f3ffc1c017b32e28b1975cea9bda8467dae7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6f71756572792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/oquery.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/oquery/CHANGELOG.md">changelog</a></td>
<td>Pattern based query engine for JS objects</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/parse"><code>@thi.ng/parse</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/parse" rel="nofollow"><img src="https://camo.githubusercontent.com/29b8217f8a61df80adcd27c19f1f8aa1476128767ca97d9e5b776214d1149399/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f70617273652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/parse.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/parse/CHANGELOG.md">changelog</a></td>
<td>Parser combinators &amp; AST generator/transformer</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/paths"><code>@thi.ng/paths</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/paths" rel="nofollow"><img src="https://camo.githubusercontent.com/bcfd13a73b6ba6fc68fa709983b0b5b05ab0a1259fec4c656f2b9776700e6f49/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f70617468732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/paths.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/paths/CHANGELOG.md">changelog</a></td>
<td>Immutable nested object accessors</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/strings"><code>@thi.ng/strings</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/strings" rel="nofollow"><img src="https://camo.githubusercontent.com/ce6a85d900404e72a70fc73f4196c5247808d192f0e707ed07564fc4ba65ec5b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f737472696e67732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/strings.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/strings/CHANGELOG.md">changelog</a></td>
<td>Higher-order string formatting utils</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/system"><code>@thi.ng/system</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/system" rel="nofollow"><img src="https://camo.githubusercontent.com/8f1d684b08ae3875d4c888770a080b1257ae867b2143346eb11332c26e01d18d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f73797374656d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/system.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/system/CHANGELOG.md">changelog</a></td>
<td>Minimal life cycle container for stateful app components</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-maths" class="anchor" aria-hidden="true" href="#maths"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Maths</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dual-algebra"><code>@thi.ng/dual-algebra</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dual-algebra" rel="nofollow"><img src="https://camo.githubusercontent.com/b870c0479d2374c5098b968c98832e3adb48bcbc3cfff7d6f0d24fb9a85d6f44/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6475616c2d616c67656272612e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dual-algebra.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dual-algebra/CHANGELOG.md">changelog</a></td>
<td>Dual number algebra / automatic differentiation</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dsp"><code>@thi.ng/dsp</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dsp" rel="nofollow"><img src="https://camo.githubusercontent.com/551f58fc974c671a26e72c36e7b7952294cc2e47165afe580fa09874dbe81a70/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6473702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dsp.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dsp/CHANGELOG.md">changelog</a></td>
<td>DSP utils, composable signal gens/processors</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fuzzy"><code>@thi.ng/fuzzy</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/fuzzy" rel="nofollow"><img src="https://camo.githubusercontent.com/355df2b95bc8f89afaa54c5634bfd79407163f0452c70560091ac6222bafe692/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f66757a7a792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/fuzzy.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fuzzy/CHANGELOG.md">changelog</a></td>
<td>Fuzzy logic primitives &amp; rule inference engine</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/intervals"><code>@thi.ng/intervals</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/intervals" rel="nofollow"><img src="https://camo.githubusercontent.com/6bc84e9c66586d4c6135279d5c6211df77dde02d8f09e6f8419183e958047fb3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f696e74657276616c732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/intervals.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/intervals/CHANGELOG.md">changelog</a></td>
<td>Open/closed intervals, queries, set ops</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/math"><code>@thi.ng/math</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/math" rel="nofollow"><img src="https://camo.githubusercontent.com/08664985873ac4f372400a4b8c0af7100eb642b42f8e871659e383d86ec763ad/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d6174682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/math.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/math/CHANGELOG.md">changelog</a></td>
<td>Assorted common math functions &amp; utilities</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/matrices"><code>@thi.ng/matrices</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/matrices" rel="nofollow"><img src="https://camo.githubusercontent.com/d3eb06166d76978660009218a53c92abf62052ba58b007a7745d2ba90836b11a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d617472696365732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/matrices.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/matrices/CHANGELOG.md">changelog</a></td>
<td>Matrix operations</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sparse"><code>@thi.ng/sparse</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/sparse" rel="nofollow"><img src="https://camo.githubusercontent.com/365ac3ab289b85c281b0322f6152345e30c0183c7e425e1e17c6f6221f61c6be/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7370617273652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/sparse.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sparse/CHANGELOG.md">changelog</a></td>
<td>Sparse matrix &amp; vector impls</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vectors"><code>@thi.ng/vectors</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/vectors" rel="nofollow"><img src="https://camo.githubusercontent.com/24b39453b944218c6cb51483aabde1b7c68d927ca68c44770615fc208cd54f3e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f766563746f72732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/vectors.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vectors/CHANGELOG.md">changelog</a></td>
<td>Fixed &amp; arbitrary-length vector ops</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-randomness" class="anchor" aria-hidden="true" href="#randomness"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Randomness</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/colored-noise"><code>@thi.ng/colored-noise</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/colored-noise" rel="nofollow"><img src="https://camo.githubusercontent.com/b94dede35b14743f376331f35de62ea493f61e612d5dd2c4721a9fdc479489c2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f636f6c6f7265642d6e6f6973652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/colored-noise.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/colored-noise/CHANGELOG.md">changelog</a></td>
<td>1D colored noise generators</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ksuid"><code>@thi.ng/ksuid</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/ksuid" rel="nofollow"><img src="https://camo.githubusercontent.com/aa912c1a569f25cee4b8a2b05d0736338d717133d8ad4f6b1b44e356053d5f2e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6b737569642e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/ksuid.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ksuid/CHANGELOG.md">changelog</a></td>
<td>K-sortable unique identifiers, binary &amp; base-N encoded</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/random"><code>@thi.ng/random</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/random" rel="nofollow"><img src="https://camo.githubusercontent.com/3c3e53bb34eb9bb7ba2029d3879706d2d632e2d15ad09dec8b59150bbca0dc15/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72616e646f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/random.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/random/CHANGELOG.md">changelog</a></td>
<td>Seedable PRNG implementations, distributions &amp; utilities</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-file-format-support" class="anchor" aria-hidden="true" href="#file-format-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>File format support</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bencode"><code>@thi.ng/bencode</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/bencode" rel="nofollow"><img src="https://camo.githubusercontent.com/eacdc154d05b56038570506fdce7bce27891660f359adbba31bf172e4da8f71e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f62656e636f64652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/bencode.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bencode/CHANGELOG.md">changelog</a></td>
<td>Bencode binary format encoding</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/csv"><code>@thi.ng/csv</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/csv" rel="nofollow"><img src="https://camo.githubusercontent.com/30dadf0e6f515463b4d19980503f5b27c25c4a51d1c79cb62d1d7ccceb197a5d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6373762e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/csv.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/csv/CHANGELOG.md">changelog</a></td>
<td>Customizable CSV parser/object mapper</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dot"><code>@thi.ng/dot</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dot" rel="nofollow"><img src="https://camo.githubusercontent.com/bcf411c6f8c79ece66b7987ce4da87e2fb12b3318142c7841b65407c2bbd1335/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f646f742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dot.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dot/CHANGELOG.md">changelog</a></td>
<td>Graphviz DOM &amp; export</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dsp-io-wav"><code>@thi.ng/dsp-io-wav</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dsp-io-wav" rel="nofollow"><img src="https://camo.githubusercontent.com/2a1fb4bcd5be299958d0dcbb52774f622ae2971f70b13666fca2ffbcf54d3745/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6473702d696f2d7761762e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dsp-io-wav.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dsp-io-wav/CHANGELOG.md">changelog</a></td>
<td>WAV file format exporter</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-io-obj"><code>@thi.ng/geom-io-obj</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-io-obj" rel="nofollow"><img src="https://camo.githubusercontent.com/886293f0572c480b09bde1a33a4efe7bf569afd7d91c5666b6fac3b44f8936ca/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d696f2d6f626a2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-io-obj.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-io-obj/CHANGELOG.md">changelog</a></td>
<td>Wavefront OBJ model parser</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-css"><code>@thi.ng/hiccup-css</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-css" rel="nofollow"><img src="https://camo.githubusercontent.com/831ae7e348c816bdcacc485c89c5fdf43a70bf1e383c748e1e599ad837977a83/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d6373732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-css.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-css/CHANGELOG.md">changelog</a></td>
<td>CSS from nested JS data structures</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-html"><code>@thi.ng/hiccup-html</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-html" rel="nofollow"><img src="https://camo.githubusercontent.com/684332b01eb9bbc43a8a40a3888ed2d2bc77eaf8eb18d5b1272c4e6b5fd1aa0a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d68746d6c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-html.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-html/CHANGELOG.md">changelog</a></td>
<td>Type-checked HTML5 element wrappers for hiccup</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-markdown"><code>@thi.ng/hiccup-markdown</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-markdown" rel="nofollow"><img src="https://camo.githubusercontent.com/0963407bf9fe43c2340cd0f29326f19150074e0bf9a38d057a8bbc2cbdc670bf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d6d61726b646f776e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-markdown.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-markdown/CHANGELOG.md">changelog</a></td>
<td>Hiccup-to-Markdown serialization</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-svg"><code>@thi.ng/hiccup-svg</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-svg" rel="nofollow"><img src="https://camo.githubusercontent.com/65512650f7e754201936e8b17b0668c5cbbdf840f0a8b11dd81a90acf8269ec8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d7376672e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-svg.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-svg/CHANGELOG.md">changelog</a></td>
<td>hiccup based SVG vocab</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/iges"><code>@thi.ng/iges</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/iges" rel="nofollow"><img src="https://camo.githubusercontent.com/b63d4747c48533bd0d77aaf0b36a5d44b044323c0b226770b72ccb5814573265/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f696765732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/iges.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/iges/CHANGELOG.md">changelog</a></td>
<td>IGES format geometry serialization</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/mime"><code>@thi.ng/mime</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/mime" rel="nofollow"><img src="https://camo.githubusercontent.com/0c67bc270348af765708b8b4cd3a8c16e087ce9724b9f2e96709495c8c3fc437/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d696d652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/mime.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/mime/CHANGELOG.md">changelog</a></td>
<td>File extension to MIME type mappings</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/prefixes"><code>@thi.ng/prefixes</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/prefixes" rel="nofollow"><img src="https://camo.githubusercontent.com/41cfeffdb2f3dca23e19b7d021269cdb1b9d46792d3bf87d9557bb7fe76028ce/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f70726566697865732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/prefixes.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/prefixes/CHANGELOG.md">changelog</a></td>
<td>Linked Data, RDF &amp; xmlns prefixes/URLs</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sax"><code>@thi.ng/sax</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/sax" rel="nofollow"><img src="https://camo.githubusercontent.com/91996ea61650150966eefdd1e44ff72d91fb9c59a8e4b6ea6c81a23a5d236889/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7361782e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/sax.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sax/CHANGELOG.md">changelog</a></td>
<td>SAX-like XML parser / transducer</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-iterator-stream--sequence-processing" class="anchor" aria-hidden="true" href="#iterator-stream--sequence-processing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterator, stream &amp; sequence processing</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/csp"><code>@thi.ng/csp</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/csp" rel="nofollow"><img src="https://camo.githubusercontent.com/a4004361babbc87ff08b11089b067418b5c587163fb2fb425c8eb9db87763eb4/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6373702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/csp.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/csp/CHANGELOG.md">changelog</a></td>
<td>Channel based async ops</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fsm"><code>@thi.ng/fsm</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/fsm" rel="nofollow"><img src="https://camo.githubusercontent.com/9d257d02f18d646b1c53d5ecde6dfa1ebb34f73b271128ff04d2b422f89ca764/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f66736d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/fsm.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fsm/CHANGELOG.md">changelog</a></td>
<td>FSM / parser primitives</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/grid-iterators"><code>@thi.ng/grid-iterators</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/grid-iterators" rel="nofollow"><img src="https://camo.githubusercontent.com/3ee90c300de7c33a7786468e111ac3a14a3b1f7b791063d4b03b89ea275ae981/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f677269642d6974657261746f72732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/grid-iterators.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/grid-iterators/CHANGELOG.md">changelog</a></td>
<td>2D grid iterator strategies</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/iterators"><code>@thi.ng/iterators</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/iterators" rel="nofollow"><img src="https://camo.githubusercontent.com/a82c5baff7de35e757e01df26cf73e684d349552ddffad904ea03cee6e1b9e5d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6974657261746f72732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/iterators.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/iterators/CHANGELOG.md">changelog</a></td>
<td>ES6 generators / iterators</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/seq"><code>@thi.ng/seq</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/seq" rel="nofollow"><img src="https://camo.githubusercontent.com/da5ab5b51b36c090c7748d1a8c43d77efd87194c642ce5357219aa3556c60e52/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7365712e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/seq.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/seq/CHANGELOG.md">changelog</a></td>
<td>Lisp/Clojure-style sequence abstraction</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers"><code>@thi.ng/transducers</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers" rel="nofollow"><img src="https://camo.githubusercontent.com/a2e7b61aa91d4a6c4258a1c02e6923f9ebde0dfdb564fea064928cf2f937b4a3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers/CHANGELOG.md">changelog</a></td>
<td>Composable data transformations</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-binary"><code>@thi.ng/transducers-binary</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers-binary" rel="nofollow"><img src="https://camo.githubusercontent.com/823d94dfe5ac9477481d10e84895618494c3d081d9e1f3c75c5d9ee92717cfd1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732d62696e6172792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers-binary.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-binary/CHANGELOG.md">changelog</a></td>
<td>Binary data related transducers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-fsm"><code>@thi.ng/transducers-fsm</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers-fsm" rel="nofollow"><img src="https://camo.githubusercontent.com/54e4bbaaf01c2cb364070653c874577c259787aaa90843e481995e98ad950510/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732d66736d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers-fsm.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-fsm/CHANGELOG.md">changelog</a></td>
<td>Finite state transducer</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-hdom"><code>@thi.ng/transducers-hdom</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers-hdom" rel="nofollow"><img src="https://camo.githubusercontent.com/edcf9c51405532b2579ffc3641c42cba8956f06eca4d3b070ffa3f94c97db311/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732d68646f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers-hdom.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-hdom/CHANGELOG.md">changelog</a></td>
<td>Transducer based hdom UI updates</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-patch"><code>@thi.ng/transducers-patch</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers-patch" rel="nofollow"><img src="https://camo.githubusercontent.com/59bb10414d963f02819cba52ae3dbcadac8872e0563364b7ae956de3a33d4888/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732d70617463682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers-patch.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-patch/CHANGELOG.md">changelog</a></td>
<td>Patch-based, array &amp; object editing</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-stats"><code>@thi.ng/transducers-stats</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/transducers-stats" rel="nofollow"><img src="https://camo.githubusercontent.com/8661d14ec883495286a6301b50ec9bd50440beed0d826378d62175b97ae5ef67/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7472616e736475636572732d73746174732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/transducers-stats.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/transducers-stats/CHANGELOG.md">changelog</a></td>
<td>Technical / statistical analysis</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-reactive-programming" class="anchor" aria-hidden="true" href="#reactive-programming"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Reactive programming</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream"><code>@thi.ng/rstream</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream" rel="nofollow"><img src="https://camo.githubusercontent.com/647f0e29db8699b78eace6916f2ae802f6aa75d4d15a1b1fd3b31a63c0fb6f6b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream/CHANGELOG.md">changelog</a></td>
<td>Push-based, reactive event stream primitves</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-csp"><code>@thi.ng/rstream-csp</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-csp" rel="nofollow"><img src="https://camo.githubusercontent.com/cb142e2874996ad103baa9aed853a6dbd4feef1ca1eae07f5c1e6b620e574c98/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d6373702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-csp.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-csp/CHANGELOG.md">changelog</a></td>
<td>Adapter bridge CSP -&gt; rstream</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-dot"><code>@thi.ng/rstream-dot</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-dot" rel="nofollow"><img src="https://camo.githubusercontent.com/496a20fbb2b5fb0867e56447c0edc696be6351d1448a316a8723156cdcdf131f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d646f742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-dot.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-dot/CHANGELOG.md">changelog</a></td>
<td>Graphviz visualization of rstream topologies</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-gestures"><code>@thi.ng/rstream-gestures</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-gestures" rel="nofollow"><img src="https://camo.githubusercontent.com/35b9d7a117c3f2b000c8edc7673bdb378d0d42a7a06cc4b3613fedc9c6147490/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d67657374757265732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-gestures.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-gestures/CHANGELOG.md">changelog</a></td>
<td>Mouse &amp; touch event stream abstraction</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-graph"><code>@thi.ng/rstream-graph</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-graph" rel="nofollow"><img src="https://camo.githubusercontent.com/ad7ba8626a2829d11e4f76e3e1a48ffdc1d5982b1b97369484d4a3128cc3dfbe/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d67726170682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-graph.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-graph/CHANGELOG.md">changelog</a></td>
<td>Declarative dataflow graph construction</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-log"><code>@thi.ng/rstream-log</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-log" rel="nofollow"><img src="https://camo.githubusercontent.com/a14425c14296a59a1670e18515094f78d9367bbf3660a47a0c33c546f17c2b86/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d6c6f672e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-log.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-log/CHANGELOG.md">changelog</a></td>
<td>Hierarchical structured data logging</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-log-file"><code>@thi.ng/rstream-log-file</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-log-file" rel="nofollow"><img src="https://camo.githubusercontent.com/27a43f7c4f6f6e8eec4fcfeeecc91e0f6ffd56c25ba6fa225d0e535182704687/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d6c6f672d66696c652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-log-file.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-log-file/CHANGELOG.md">changelog</a></td>
<td>Log-file output handler</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-query"><code>@thi.ng/rstream-query</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rstream-query" rel="nofollow"><img src="https://camo.githubusercontent.com/1763e9444d40edd91c00e19f3c54d3d9f4d7b61921375235e42fb529023c259c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7273747265616d2d71756572792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rstream-query.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rstream-query/CHANGELOG.md">changelog</a></td>
<td>Triple store &amp; query engine</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-data-structures" class="anchor" aria-hidden="true" href="#data-structures"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Data structures</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/adjacency"><code>@thi.ng/adjacency</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/adjacency" rel="nofollow"><img src="https://camo.githubusercontent.com/83d27b80b0eb5e01979e9ce68db54528981de21be4e5c10af1dc9d0e41130f8d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f61646a6163656e63792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/adjacency.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/adjacency/CHANGELOG.md">changelog</a></td>
<td>Adjacency matrices &amp; graph algorithms</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/arrays"><code>@thi.ng/arrays</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/arrays" rel="nofollow"><img src="https://camo.githubusercontent.com/97857d4f1d30a0087f1829fa4e0927e88b1dcde0557fb8b192b198d7391c214c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6172726179732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/arrays.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/arrays/CHANGELOG.md">changelog</a></td>
<td>Array utilities</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/associative"><code>@thi.ng/associative</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/associative" rel="nofollow"><img src="https://camo.githubusercontent.com/49f42049abdfb0054f733cdaa87495571428cfe32c42c8996f60c77859e6a8af/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6173736f636961746976652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/associative.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/associative/CHANGELOG.md">changelog</a></td>
<td>Alt Set &amp; Map implementations</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/atom"><code>@thi.ng/atom</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/atom" rel="nofollow"><img src="https://camo.githubusercontent.com/06ec3ec1c30137277e054e64a9ac7e0f019e013eac393788dc52fc56cc62ee99/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f61746f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/atom.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/atom/CHANGELOG.md">changelog</a></td>
<td>Immutable value wrappers, views, history</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bitfield"><code>@thi.ng/bitfield</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/bitfield" rel="nofollow"><img src="https://camo.githubusercontent.com/91195afb1884ee1a13c52d1c71efc61bc33a56d3f9e60171253ef7dbe124f9a7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6269746669656c642e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/bitfield.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bitfield/CHANGELOG.md">changelog</a></td>
<td>1D/2D bit field implementations</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/cache"><code>@thi.ng/cache</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/cache" rel="nofollow"><img src="https://camo.githubusercontent.com/a7beee01deba6a89fee8f5d7a9e15681363f07815ea7680f1dda2d77748e00df/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f63616368652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/cache.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/cache/CHANGELOG.md">changelog</a></td>
<td>In-memory caches / strategies</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dcons"><code>@thi.ng/dcons</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dcons" rel="nofollow"><img src="https://camo.githubusercontent.com/45b262ddb730d996776e8ced0f082f926c878116c02ecc46057e654ab6e0cf0e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f64636f6e732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dcons.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dcons/CHANGELOG.md">changelog</a></td>
<td>Doubly-linked list</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/diff"><code>@thi.ng/diff</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/diff" rel="nofollow"><img src="https://camo.githubusercontent.com/0a171fca75d85fcd1901870df45011b03bb8f5af5624bf91604562d889e9c54a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f646966662e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/diff.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/diff/CHANGELOG.md">changelog</a></td>
<td>Array &amp; object diffing</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dgraph"><code>@thi.ng/dgraph</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dgraph" rel="nofollow"><img src="https://camo.githubusercontent.com/4168e667903d717c06e1bfc503ba7b23d3b71111c6922d4fe20cadde0d1a7ea2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6467726170682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dgraph.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dgraph/CHANGELOG.md">changelog</a></td>
<td>Dependency graph</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ecs"><code>@thi.ng/ecs</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/ecs" rel="nofollow"><img src="https://camo.githubusercontent.com/bd7ebb268a29f4dd525c9d79b57c178990a6155bd3b44d4620b2797be9206272/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6563732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/ecs.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ecs/CHANGELOG.md">changelog</a></td>
<td>Entity-Component System</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/egf"><code>@thi.ng/egf</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/egf" rel="nofollow"><img src="https://camo.githubusercontent.com/dbaaf720a11d2b7667f6f69c4bb343a18a823a03875bb576791674ffb9a17062/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6567662e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/egf.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/egf/CHANGELOG.md">changelog</a></td>
<td>Extensible Graph Format</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/gp"><code>@thi.ng/gp</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/gp" rel="nofollow"><img src="https://camo.githubusercontent.com/9cd00a32c9dc5833cf17b2f72954e75b565354e84693c172c84707effe514eb9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/gp.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/gp/CHANGELOG.md">changelog</a></td>
<td>Genetic programming helpers / AST gen</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/heaps"><code>@thi.ng/heaps</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/heaps" rel="nofollow"><img src="https://camo.githubusercontent.com/feffb7c237df702444a8a8297d97d9c25917ac53949e56003fafb967a9c470f3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68656170732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/heaps.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/heaps/CHANGELOG.md">changelog</a></td>
<td>Binary &amp; d-ary heap impls</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/idgen"><code>@thi.ng/idgen</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/idgen" rel="nofollow"><img src="https://camo.githubusercontent.com/e3ccf389047a5e7fecddabcf523216a9c6cfcbba63e8d1c1ac1d78d2c2013051/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f696467656e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/idgen.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/idgen/CHANGELOG.md">changelog</a></td>
<td>Versioned ID generation / free-list</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ramp"><code>@thi.ng/ramp</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/ramp" rel="nofollow"><img src="https://camo.githubusercontent.com/35db4c41831615e357f2a59f173d886e692d1397f05101e8def759c90503c903/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72616d702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/ramp.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/ramp/CHANGELOG.md">changelog</a></td>
<td>Parametric, interpolated lookup tables</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/quad-edge"><code>@thi.ng/quad-edge</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/quad-edge" rel="nofollow"><img src="https://camo.githubusercontent.com/afb9d440ada0d3058a72217aedd8027d9320b52b40503371f60a8e22ff40df64/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f717561642d656467652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/quad-edge.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/quad-edge/CHANGELOG.md">changelog</a></td>
<td>Quad-edge, dual-graph data structure</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/resolve-map"><code>@thi.ng/resolve-map</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/resolve-map" rel="nofollow"><img src="https://camo.githubusercontent.com/fa9f4dda7409e5c9696ae574e9ad274324037ef1eefe2267ae2d5b5fe5808215/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7265736f6c76652d6d61702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/resolve-map.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/resolve-map/CHANGELOG.md">changelog</a></td>
<td>DAG computations &amp; value resolution</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vclock"><code>@thi.ng/vclock</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/vclock" rel="nofollow"><img src="https://camo.githubusercontent.com/501c00d1e01fffb08bc154cf341a3551d19c1c17134ce468313a06a322e0bdbf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f76636c6f636b2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/vclock.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vclock/CHANGELOG.md">changelog</a></td>
<td>Vector clock functions / comparators</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/zipper"><code>@thi.ng/zipper</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/zipper" rel="nofollow"><img src="https://camo.githubusercontent.com/7edfb37bc78a86c935f4e6adf24acf4f36609700f1d4bded25f7325ff44206e5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7a69707065722e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/zipper.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/zipper/CHANGELOG.md">changelog</a></td>
<td>Immutable tree editing / navigation</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-frontend--ui" class="anchor" aria-hidden="true" href="#frontend--ui"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Frontend / UI</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/adapt-dpi"><code>@thi.ng/adapt-dpi</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/adapt-dpi" rel="nofollow"><img src="https://camo.githubusercontent.com/2d5fd49696500b1091e61198a4533b9a6663f1851db93e479e63e12c1a7e1f4b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f61646170742d6470692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/adapt-dpi.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/adapt-dpi/CHANGELOG.md">changelog</a></td>
<td>HDPI canvas adaptation / styling util</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dl-asset"><code>@thi.ng/dl-asset</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dl-asset" rel="nofollow"><img src="https://camo.githubusercontent.com/14dcc8afba308b364c72d60380e73c83de695d84dfc6ca9a046a8bf70dab7c33/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f646c2d61737365742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dl-asset.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/download/CHANGELOG.md">changelog</a></td>
<td>Asset download trigger helper</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdiff"><code>@thi.ng/hdiff</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hdiff" rel="nofollow"><img src="https://camo.githubusercontent.com/51083f0098c8aa72e43599be62c87d08e4bd66ba5784074e9bb09b85e6b2c094/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68646966662e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hdiff.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdiff/CHANGELOG.md">changelog</a></td>
<td>String diffing w/ hiccup output (includes CLI)</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom"><code>@thi.ng/hdom</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hdom" rel="nofollow"><img src="https://camo.githubusercontent.com/9ba4476ac56169ba9af0b76c51363a27c0cc667d9464f7a94f9b2ec34d47ade1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68646f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hdom.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom/CHANGELOG.md">changelog</a></td>
<td>Hiccup based VDOM &amp; diffing</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-canvas"><code>@thi.ng/hdom-canvas</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hdom-canvas" rel="nofollow"><img src="https://camo.githubusercontent.com/b0bf21466e5fd7c2a8f3422125a9d0d278c0b14025b70ade03cfada4ac490bb5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68646f6d2d63616e7661732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hdom-canvas.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-canvas/CHANGELOG.md">changelog</a></td>
<td>hdom adapter for hiccup-canvas</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-components"><code>@thi.ng/hdom-components</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hdom-components" rel="nofollow"><img src="https://camo.githubusercontent.com/6f68c0b31f889391802b35de10ada32cd52f6abaa9c7d1f674966ba1ea25ec20/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68646f6d2d636f6d706f6e656e74732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hdom-components.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-components/CHANGELOG.md">changelog</a></td>
<td>hdom based UI components</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-mock"><code>@thi.ng/hdom-mock</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hdom-mock" rel="nofollow"><img src="https://camo.githubusercontent.com/e6983bbb562aa86a856b443a1bcdbad7dfee4ba098c5133a35178def67bed1b0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f68646f6d2d6d6f636b2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hdom-mock.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hdom-mock/CHANGELOG.md">changelog</a></td>
<td>hdom mock implementation (testing / prototyping)</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup"><code>@thi.ng/hiccup</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup" rel="nofollow"><img src="https://camo.githubusercontent.com/4f1dad1b8d551b8f2a2daa200ea9407ee645dce4fe9c2729e9d23e816b95bec3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup/CHANGELOG.md">changelog</a></td>
<td>S-expression based HTML/XML serialization</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-canvas"><code>@thi.ng/hiccup-canvas</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-canvas" rel="nofollow"><img src="https://camo.githubusercontent.com/75a239555d30bcd94cc1a3b55a1eb31fa3ada50499d3f9d0cd896a1d58cb83dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d63616e7661732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-canvas.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-canvas/CHANGELOG.md">changelog</a></td>
<td>hiccup interpreter for canvas api</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-carbon-icons"><code>@thi.ng/hiccup-carbon-icons</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/hiccup-carbon-icons" rel="nofollow"><img src="https://camo.githubusercontent.com/049b862587013f7cc6b92408eeabf12d03856aca68c60ad511c856678e695c9d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6869636375702d636172626f6e2d69636f6e732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/hiccup-carbon-icons.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/hiccup-carbon-icons/CHANGELOG.md">changelog</a></td>
<td>IBM Carbon icons in hiccup format</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/imgui"><code>@thi.ng/imgui</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/imgui" rel="nofollow"><img src="https://camo.githubusercontent.com/3edd599824001c792002476bb674c61bbe2c13b7ecc8ee316d468521e838c1f7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f696d6775692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/imgui.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/imgui/CHANGELOG.md">changelog</a></td>
<td>Immediate mode GUI</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/interceptors"><code>@thi.ng/interceptors</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/interceptors" rel="nofollow"><img src="https://camo.githubusercontent.com/1da16eb46199534e5359b45e8eafdef642975d80aed9250a30b7118688174e90/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f696e746572636570746f72732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/interceptors.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/interceptors/CHANGELOG.md">changelog</a></td>
<td>Composable event handlers &amp; processor</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom"><code>@thi.ng/rdom</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rdom" rel="nofollow"><img src="https://camo.githubusercontent.com/8f805c63b19d4818432683666244b512da925c95dc9be1e60f6c4e7b2b2c23d5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72646f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rdom.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom/CHANGELOG.md">changelog</a></td>
<td>Reactive, diff-less, async UI components</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom-canvas"><code>@thi.ng/rdom-canvas</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rdom-canvas" rel="nofollow"><img src="https://camo.githubusercontent.com/1afef3448feed1df638b377d179b66db9045addbb62edb08eb459e4731d879dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72646f6d2d63616e7661732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rdom-canvas.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom-canvas/CHANGELOG.md">changelog</a></td>
<td>rdom component wrapper for thi.ng/hiccup-canvas</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom-components"><code>@thi.ng/rdom-components</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rdom-components" rel="nofollow"><img src="https://camo.githubusercontent.com/95141eb9d3f27e154a97f6a8473d1b252d4c6e5610f6af1c17720c59e27374ec/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72646f6d2d636f6d706f6e656e74732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rdom-components.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rdom-components/CHANGELOG.md">changelog</a></td>
<td>Unstyled, customizable component collection</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/router"><code>@thi.ng/router</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/router" rel="nofollow"><img src="https://camo.githubusercontent.com/e14a3b275f13c30c29e9f8b5ae3ada2a12ed1d831bf7ffdb4ee3af9875338bb0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f726f757465722e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/router.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/router/CHANGELOG.md">changelog</a></td>
<td>Customizable browser &amp; non-browser router</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/text-canvas"><code>@thi.ng/text-canvas</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/text-canvas" rel="nofollow"><img src="https://camo.githubusercontent.com/0e434c58e76b08a697119ed482d8f972fea03ea82ce6aa6ce3e013dd98b61342/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f746578742d63616e7661732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/text-canvas.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/text-canvas/CHANGELOG.md">changelog</a></td>
<td>Text-mode canvas, drawing, tables, charts</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-geometry-image--visualization" class="anchor" aria-hidden="true" href="#geometry-image--visualization"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Geometry, image &amp; visualization</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/color"><code>@thi.ng/color</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/color" rel="nofollow"><img src="https://camo.githubusercontent.com/9784fecb0bd077f3d5501a040768637c50318410824fb85c1ef3f20d682db48a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f636f6c6f722e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/color.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/color/CHANGELOG.md">changelog</a></td>
<td>Color conversions, gradients</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dgraph-dot"><code>@thi.ng/dgraph-dot</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dgraph-dot" rel="nofollow"><img src="https://camo.githubusercontent.com/26acfb9c23e53d9fda0cde37da96c32242cc9d11fb2c39dc0d606f690dba7287/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6467726170682d646f742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dgraph-dot.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dgraph-dot/CHANGELOG.md">changelog</a></td>
<td>Dependency graph -&gt; Graphviz</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fuzzy-viz"><code>@thi.ng/fuzzy-viz</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/fuzzy-viz" rel="nofollow"><img src="https://camo.githubusercontent.com/12b8622ccdac12720d8a6c0c2da346b7f23d3f43bfb109861e368ed9e2a18e82/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f66757a7a792d76697a2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/fuzzy-viz.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/fuzzy-viz/CHANGELOG.md">changelog</a></td>
<td>Visualization, instrumentation for @thi.ng/fuzzy</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom"><code>@thi.ng/geom</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom" rel="nofollow"><img src="https://camo.githubusercontent.com/d1604ec7514a9cb7ebe0f906705be07ae326de53830946da5815bcd20435ee11/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom/CHANGELOG.md">changelog</a></td>
<td>2D only geometry types &amp; ops</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-accel"><code>@thi.ng/geom-accel</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-accel" rel="nofollow"><img src="https://camo.githubusercontent.com/6b0d22335510c8f340d9d9c31f11e586646a45dbf854668b1685dff636bcf551/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d616363656c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-accel.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-accel/CHANGELOG.md">changelog</a></td>
<td>Spatial indexing data structures</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-api"><code>@thi.ng/geom-api</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-api" rel="nofollow"><img src="https://camo.githubusercontent.com/4ef9e43ff6130e1561346cc503f2d7ae0b8e6d58842307e78e41449185f2bebf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d6170692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-api.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-api/CHANGELOG.md">changelog</a></td>
<td>Shared types &amp; interfaces</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-arc"><code>@thi.ng/geom-arc</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-arc" rel="nofollow"><img src="https://camo.githubusercontent.com/d163266902ab1eda92815d1353bccacd89112641d2d54bac390aeb2e8c13acdd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d6172632e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-arc.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-arc/CHANGELOG.md">changelog</a></td>
<td>2D elliptic arc utils</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-clip-line"><code>@thi.ng/geom-clip-line</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-clip-line" rel="nofollow"><img src="https://camo.githubusercontent.com/9a2fadd5fe4e3d2fdf9433871e5ff86669a1dcee253429509187065703fdd673/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d636c69702d6c696e652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-clip-line.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-clip-line/CHANGELOG.md">changelog</a></td>
<td>2D line clipping</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-clip-poly"><code>@thi.ng/geom-clip-poly</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-clip-poly" rel="nofollow"><img src="https://camo.githubusercontent.com/6a8ed54f05e6e6d416a2c83689175084aa8f9728d51a40820e862a702cc7f01e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d636c69702d706f6c792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-clip-poly.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-clip-poly/CHANGELOG.md">changelog</a></td>
<td>2D convex polygon clipping</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-closest-point"><code>@thi.ng/geom-closest-point</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-closest-point" rel="nofollow"><img src="https://camo.githubusercontent.com/b19bc61377dd900dbabb82c31486e40ff8b857c6940a71757828f2062d325a65/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d636c6f736573742d706f696e742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-closest-point.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-closest-point/CHANGELOG.md">changelog</a></td>
<td>Closest point helpers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-fuzz"><code>@thi.ng/geom-fuzz</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-fuzz" rel="nofollow"><img src="https://camo.githubusercontent.com/d579f155de12f86fad051279379e86cdc8cd33d9701d7e7d8a29d210f8de01a8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d66757a7a2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-fuzz.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-fuzz/CHANGELOG.md">changelog</a></td>
<td>Fuzzy 2D shape drawing / filling</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-hull"><code>@thi.ng/geom-hull</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-hull" rel="nofollow"><img src="https://camo.githubusercontent.com/2b2cc3307f844452f6477b4385eb10b3b83dd3131655d8555cdd7d46d423b687/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d68756c6c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-hull.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-hull/CHANGELOG.md">changelog</a></td>
<td>2D convex hull (Graham scan)</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-isec"><code>@thi.ng/geom-isec</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-isec" rel="nofollow"><img src="https://camo.githubusercontent.com/f61560f863108ba2cea8077b9d4a29d0d0659b874a708f837c37a4c32e749fb2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d697365632e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-isec.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-isec/CHANGELOG.md">changelog</a></td>
<td>Point &amp; shape intersection tests</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-isoline"><code>@thi.ng/geom-isoline</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-isoline" rel="nofollow"><img src="https://camo.githubusercontent.com/49bc491173d1447fc7f0a268c81d1b436f050a130adc4a680c4d2828123bfe7c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d69736f6c696e652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-isoline.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-isoline/CHANGELOG.md">changelog</a></td>
<td>2D contour line extraction</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-poly-utils"><code>@thi.ng/geom-poly-utils</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-poly-utils" rel="nofollow"><img src="https://camo.githubusercontent.com/48966d21c04e98b9b182b17b14fdbe7deb5d11727c753de6f4bfe196fdb886dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d706f6c792d7574696c732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-poly-utils.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-poly-utils/CHANGELOG.md">changelog</a></td>
<td>2D polygon helpers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-resample"><code>@thi.ng/geom-resample</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-resample" rel="nofollow"><img src="https://camo.githubusercontent.com/2a1f33c534ba7323b8559d6fbd7bd34a7f674155be8495bfda3b3d64a2a8fb92/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d726573616d706c652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-resample.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-resample/CHANGELOG.md">changelog</a></td>
<td>nD polyline / curve resampling</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-splines"><code>@thi.ng/geom-splines</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-splines" rel="nofollow"><img src="https://camo.githubusercontent.com/4cb811b84698cc72d2a98fb38806a6cefe22f49808fa8d2e022b2d8281eb69fb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d73706c696e65732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-splines.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-splines/CHANGELOG.md">changelog</a></td>
<td>nD cubic / quadratic spline ops</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-subdiv-curve"><code>@thi.ng/geom-subdiv-curve</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-subdiv-curve" rel="nofollow"><img src="https://camo.githubusercontent.com/b9374655346d001dff2c511e0b0d54dd7aea0d8f5f472642ce5b49066a51b802/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d7375626469762d63757276652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-subdiv-curve.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-subdiv-curve/CHANGELOG.md">changelog</a></td>
<td>nD iterative subdivision curves</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-tessellate"><code>@thi.ng/geom-tessellate</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-tessellate" rel="nofollow"><img src="https://camo.githubusercontent.com/fc5dac429595f8156dd2b0fa738e33b012ddd54bc03607071be8b121382387dc/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d74657373656c6c6174652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-tessellate.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-tessellate/CHANGELOG.md">changelog</a></td>
<td>nD convex polygon tessellators</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-voronoi"><code>@thi.ng/geom-voronoi</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/geom-voronoi" rel="nofollow"><img src="https://camo.githubusercontent.com/97e3a57f6354d8e53570e4c6962dadc0de10e56b4b6486068082181d65244e11/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f67656f6d2d766f726f6e6f692e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/geom-voronoi.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/geom-voronoi/CHANGELOG.md">changelog</a></td>
<td>2D iterative delaunay/voronoi</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/lsys"><code>@thi.ng/lsys</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/lsys" rel="nofollow"><img src="https://camo.githubusercontent.com/83bf090e672b92beecdbea6159179890fdb697954988c2b7497c4d6fe1cba2d9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6c7379732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/lsys.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/lsys/CHANGELOG.md">changelog</a></td>
<td>Extensible L-System architecture</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pixel"><code>@thi.ng/pixel</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/pixel" rel="nofollow"><img src="https://camo.githubusercontent.com/ebc623cf50d16471e4cb0434c9af449f49d2eef557c6c520bb8b42a01835bf4f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f706978656c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/pixel.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pixel/CHANGELOG.md">changelog</a></td>
<td>Multi-format pixel buffers</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/poisson"><code>@thi.ng/poisson</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/poisson" rel="nofollow"><img src="https://camo.githubusercontent.com/eab44aea533f9268d930cbbe35886c975f8f476c588bc8b4dae5f4b315884361/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f706f6973736f6e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/poisson.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/poisson/CHANGELOG.md">changelog</a></td>
<td>nD Poisson disk sampling</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/porter-duff"><code>@thi.ng/porter-duff</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/porter-duff" rel="nofollow"><img src="https://camo.githubusercontent.com/a6964430c105e4b231f14c15cfa53e2b4404951020144783315aef9695bd1fe8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f706f727465722d647566662e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/porter-duff.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/porter-duff/CHANGELOG.md">changelog</a></td>
<td>Alpha blending / compositing ops</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/scenegraph"><code>@thi.ng/scenegraph</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/scenegraph" rel="nofollow"><img src="https://camo.githubusercontent.com/9e1e980a14e393f530644f808f0840918a1df0f27d04598be3a2088ccc425831/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7363656e6567726170682e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/scenegraph.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/scenegraph/CHANGELOG.md">changelog</a></td>
<td>Extensible 2D/3D scenegraph</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/simd"><code>@thi.ng/simd</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/simd" rel="nofollow"><img src="https://camo.githubusercontent.com/cf4af3d107c1e577e3807208f9dc935588ca7b920755c87b1b25a6a73f857952/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f73696d642e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/simd.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/simd/CHANGELOG.md">changelog</a></td>
<td>WebAssembly SIMD vector batch processing</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/viz"><code>@thi.ng/viz</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/viz" rel="nofollow"><img src="https://camo.githubusercontent.com/3d43205849c6444569b15eb2c2fc2b43cc47f8c4972875cbf1b04bb88b0f1d79/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f76697a2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/viz.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/viz/CHANGELOG.md">changelog</a></td>
<td>Declarative &amp; functional data visualization toolkit</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-webgl--gpgpu" class="anchor" aria-hidden="true" href="#webgl--gpgpu"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>WebGL / GPGPU</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast"><code>@thi.ng/shader-ast</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/shader-ast" rel="nofollow"><img src="https://camo.githubusercontent.com/55429ee10db96add1ba4a01a6e4db1891d0289c509982bebafccd11aeba5f395/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7368616465722d6173742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/shader-ast.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast/CHANGELOG.md">changelog</a></td>
<td>AST DSL for x-platform shader code</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-glsl"><code>@thi.ng/shader-ast-glsl</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/shader-ast-glsl" rel="nofollow"><img src="https://camo.githubusercontent.com/2ffc55f11c761552b1b4da2d1c205fb691dc4d9ffc227aedd786c9c78c1a897d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7368616465722d6173742d676c736c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/shader-ast-glsl.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-glsl/CHANGELOG.md">changelog</a></td>
<td>GLSL code generator</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-js"><code>@thi.ng/shader-ast-js</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/shader-ast-js" rel="nofollow"><img src="https://camo.githubusercontent.com/3f3ba07c1450b7b8f25124ddb000b3ddec590cee796a8b9cc580364e53f6893e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7368616465722d6173742d6a732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/shader-ast-js.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-js/CHANGELOG.md">changelog</a></td>
<td>JS code generator</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-stdlib"><code>@thi.ng/shader-ast-stdlib</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/shader-ast-stdlib" rel="nofollow"><img src="https://camo.githubusercontent.com/ba7b1f1fa326f01815153860ec2f7847698aeeb5f64506776fec281cc560685e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f7368616465722d6173742d7374646c69622e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/shader-ast-stdlib.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/shader-ast-stdlib/CHANGELOG.md">changelog</a></td>
<td>100+ useful AST shader functions</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl"><code>@thi.ng/webgl</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/webgl" rel="nofollow"><img src="https://camo.githubusercontent.com/25d2e417096a4e4c529cb5ccae90c296393e81fd2b99d1d4cf5604c61f5f2704/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f776562676c2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/webgl.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl/CHANGELOG.md">changelog</a></td>
<td>WebGL 1/2 / GPGPU facilities</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl-msdf"><code>@thi.ng/webgl-msdf</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/webgl-msdf" rel="nofollow"><img src="https://camo.githubusercontent.com/1af3421e9cc43c03df2a50eea5136bdc2c65c699f85a4f34cebc598de0188df2/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f776562676c2d6d7364662e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/webgl-msdf.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl-msdf/CHANGELOG.md">changelog</a></td>
<td>MSDF font rendering</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl-shadertoy"><code>@thi.ng/webgl-shadertoy</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/webgl-shadertoy" rel="nofollow"><img src="https://camo.githubusercontent.com/141b260c0141f07175a72acdd11c2a413a1423c11696dab77b5452b8e8582214/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f776562676c2d736861646572746f792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/webgl-shadertoy.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/webgl-shadertoy/CHANGELOG.md">changelog</a></td>
<td>Shadertoy-like WebGL setup</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-low-level-binary-memory-management" class="anchor" aria-hidden="true" href="#low-level-binary-memory-management"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Low-level, binary, memory management</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/base-n"><code>@thi.ng/base-n</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/base-n" rel="nofollow"><img src="https://camo.githubusercontent.com/7b8a26171fdc8c27353ee0e42904e44f92d4ccdd394178c1cf5727aa091a47dd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f626173652d6e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/base-n.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/base-n/CHANGELOG.md">changelog</a></td>
<td>Arbitrary base-n encoding/decoding with presets</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/binary"><code>@thi.ng/binary</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/binary" rel="nofollow"><img src="https://camo.githubusercontent.com/716396218de544eb759783ae1ceede54da6dbc42c988935484d4770912ca406f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f62696e6172792e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/binary.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/binary/CHANGELOG.md">changelog</a></td>
<td>Assorted binary / bitwise ops, utilities</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bitstream"><code>@thi.ng/bitstream</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/bitstream" rel="nofollow"><img src="https://camo.githubusercontent.com/aaa5c195cc959894fc520e417e99311a7e8f5b06a010e83ac11e83099a24225f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f62697473747265616d2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/bitstream.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/bitstream/CHANGELOG.md">changelog</a></td>
<td>Bitwise input / output streams</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dlogic"><code>@thi.ng/dlogic</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/dlogic" rel="nofollow"><img src="https://camo.githubusercontent.com/2f67965a6e62e223a77175aa33304a4d248825f8a079ca6d8099630c3370596c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f646c6f6769632e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/dlogic.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/dlogic/CHANGELOG.md">changelog</a></td>
<td>Digital logic ops / constructs</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/leb128"><code>@thi.ng/leb128</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/leb128" rel="nofollow"><img src="https://camo.githubusercontent.com/50c291fbf709bfe00ea1b475df394a8e0c352891539ffe9697bb111447691750/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6c65623132382e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/leb128.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/leb128/CHANGELOG.md">changelog</a></td>
<td>WASM based LEB128 varint encoder / decoder</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/malloc"><code>@thi.ng/malloc</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/malloc" rel="nofollow"><img src="https://camo.githubusercontent.com/8a3557d3a40a3d9515d0fc34edefb1ac3a45b2b48d96bdf101456bb9d65b5a12/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d616c6c6f632e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/malloc.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/malloc/CHANGELOG.md">changelog</a></td>
<td>Raw &amp; typed array memory pool &amp; allocator</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/morton"><code>@thi.ng/morton</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/morton" rel="nofollow"><img src="https://camo.githubusercontent.com/6828ff43d00d34931ec2d2e76c50a88efc73cdd37c8da28537e64af8e08ef30b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f6d6f72746f6e2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/morton.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/morton/CHANGELOG.md">changelog</a></td>
<td>Z-order-curve / Morton coding</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/range-coder"><code>@thi.ng/range-coder</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/range-coder" rel="nofollow"><img src="https://camo.githubusercontent.com/447192d27012727d7d06d39975a2c1987260faf48606d6d71ce84c9abd81f7a8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f72616e67652d636f6465722e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/range-coder.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/range-coder/CHANGELOG.md">changelog</a></td>
<td>Binary data Range encoder / decoder</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rle-pack"><code>@thi.ng/rle-pack</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/rle-pack" rel="nofollow"><img src="https://camo.githubusercontent.com/d55c208bc17caa3760da00925572ca654076f620225a8f0a83e2e9141ea0dd69/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f726c652d7061636b2e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/rle-pack.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/rle-pack/CHANGELOG.md">changelog</a></td>
<td>Run-length encoding data compression</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/soa"><code>@thi.ng/soa</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/soa" rel="nofollow"><img src="https://camo.githubusercontent.com/39dd9f9e9966915cd9d941226d870db119dda752ea27f2a8ec640d742fe23361/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f736f612e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/soa.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/soa/CHANGELOG.md">changelog</a></td>
<td>Memory mapped data structures &amp; serialization</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/unionstruct"><code>@thi.ng/unionstruct</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/unionstruct" rel="nofollow"><img src="https://camo.githubusercontent.com/11f660b7b2879391d3739c37a67db72fcc1fa0153039df6f0f3cc7cb48db55c0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f756e696f6e7374727563742e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/unionstruct.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/unionstruct/CHANGELOG.md">changelog</a></td>
<td>Wrapper for C-like structs / unions</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vector-pools"><code>@thi.ng/vector-pools</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/vector-pools" rel="nofollow"><img src="https://camo.githubusercontent.com/252c4d648e3b93306f0c8be080340f1f523b0fa6ddff267c78cc24c13ffe5f29/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f766563746f722d706f6f6c732e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/vector-pools.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/vector-pools/CHANGELOG.md">changelog</a></td>
<td>Data structures for memory mapped vectors</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-dsls" class="anchor" aria-hidden="true" href="#dsls"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>DSLs</h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Version</th>
<th>Changelog</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pointfree"><code>@thi.ng/pointfree</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/pointfree" rel="nofollow"><img src="https://camo.githubusercontent.com/fdb8291fac1f7549accac946ec791ee171f93aa28623194efdaa21e82eb41e63/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f706f696e74667265652e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/pointfree.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pointfree/CHANGELOG.md">changelog</a></td>
<td>Stack-based DSL &amp; functional composition</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pointfree-lang"><code>@thi.ng/pointfree-lang</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/pointfree-lang" rel="nofollow"><img src="https://camo.githubusercontent.com/50e4e285dbb49e71058009a43456f32f9bab392446af5b06fc666f536e6190ec/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f706f696e74667265652d6c616e672e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/pointfree-lang.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/pointfree-lang/CHANGELOG.md">changelog</a></td>
<td>Forth-like syntax layer for @thi.ng/pointfree</td>
</tr>
<tr>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sexpr"><code>@thi.ng/sexpr</code></a></td>
<td><a href="https://www.npmjs.com/package/@thi.ng/sexpr" rel="nofollow"><img src="https://camo.githubusercontent.com/b4fb0feb21b9d8f5662b49544561e12108cec93d7d4fd7f57a491d01aacb0ec1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407468692e6e672f73657870722e737667" alt="version" data-canonical-src="https://img.shields.io/npm/v/@thi.ng/sexpr.svg" style="max-width:100%;"></a></td>
<td><a href="/thi-ng/umbrella/blob/develop/packages/sexpr/CHANGELOG.md">changelog</a></td>
<td>S-Expression parser &amp; runtime infrastructure</td>
</tr>
</tbody>
</table>
<h2><a id="user-content-building" class="anchor" aria-hidden="true" href="#building"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Building</h2>
<div class="highlight highlight-source-shell"><pre>git clone https://github.com/thi-ng/umbrella.git
<span class="pl-c1">cd</span> umbrella

yarn install
yarn build</pre></div>
<p>Once the entire mono-repo has been fully built at least once before,
individual packages can then be (re)built like so:</p>
<div class="highlight highlight-source-shell"><pre>lerna run build --scope @thi.ng/transducers</pre></div>
<h3><a id="user-content-building-example-projects" class="anchor" aria-hidden="true" href="#building-example-projects"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Building example projects</h3>
<p>Please see the <a href="https://github.com/thi-ng/umbrella/wiki/Example-build-instructions">example build
instructions</a>
in the wiki for further details.</p>
<h3><a id="user-content-testing" class="anchor" aria-hidden="true" href="#testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Testing</h3>
<p>(most, but not all packages have tests)</p>
<div class="highlight highlight-source-shell"><pre>yarn <span class="pl-c1">test</span>

<span class="pl-c"><span class="pl-c">#</span> or individually</span>
lerna run <span class="pl-c1">test</span> --scope @thi.ng/rstream</pre></div>
<h3><a id="user-content-coverage" class="anchor" aria-hidden="true" href="#coverage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Coverage</h3>
<p>The resulting reports will be saved under <code>/packages/*/coverage/lcov-report/</code>.</p>
<div class="highlight highlight-source-shell"><pre>yarn cover</pre></div>
<h3><a id="user-content-documentation" class="anchor" aria-hidden="true" href="#documentation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Documentation</h3>
<p>Autogenerated documentation (using
<a href="https://github.com/TypeStrong/typedoc">TypeDoc</a>) will be saved under
<code>/packages/*/doc/</code> and is also available at <a href="http://docs.thi.ng" rel="nofollow">docs.thi.ng</a>.</p>
<div class="highlight highlight-source-shell"><pre>yarn doc</pre></div>
<p>Furthermore, an experimental <a href="https://github.com/microsoft/tsdoc">tsdoc</a>-based
documentation repo provides an alternative markdown output including
cross-references between all packages, but currently isn't frequently updated
(only every few months):</p>
<p><a href="https://github.com/thi-ng/umbrella-docs-temp">https://github.com/thi-ng/umbrella-docs-temp</a></p>
<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>License</h2>
<p>© 2015 - 2021 Karsten Schmidt // Apache Software License 2.0</p>
<h2><a id="user-content-contributors-" class="anchor" aria-hidden="true" href="#contributors-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Contributors <g-emoji class="g-emoji" alias="sparkles" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2728.png">✨</g-emoji></h2>
<p>Thanks goes to these wonderful people (<a href="https://allcontributors.org/docs/en/emoji-key" rel="nofollow">emoji key</a>):</p>



<table>
  <tbody><tr>
    <td align="center"><a href="http://thi.ng" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/52302?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Karsten Schmidt</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=postspectacular" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/commits?author=postspectacular" title="Documentation"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a> <a href="#maintenance-postspectacular" title="Maintenance"><g-emoji class="g-emoji" alias="construction" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png">🚧</g-emoji></a> <a href="#financial-postspectacular" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="https://github.com/nkint"><img src="https://avatars3.githubusercontent.com/u/609314?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Alberto</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=nkint" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="#example-nkint" title="Examples"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3Ankint" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-nkint" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a> <a href="#financial-nkint" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://www.arthurcarabott.com/" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/66132?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Arthur Carabott</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=acarabott" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="#ideas-acarabott" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a> <a href="#example-acarabott" title="Examples"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></a> <a href="#blog-acarabott" title="Blogposts"><g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png">📝</g-emoji></a> <a href="#financial-acarabott" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://andrewachter.de" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/179225?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>André Wachter</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=andrew8er" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="#ideas-andrew8er" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3Aandrew8er" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
    <td align="center"><a href="https://github.com/gavinpc-mindgrub"><img src="https://avatars1.githubusercontent.com/u/29873545?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Gavin Cannizzaro</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=gavinpc-mindgrub" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3Agavinpc-mindgrub" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-gavinpc-mindgrub" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a></td>
    <td align="center"><a href="https://github.com/loganpowell"><img src="https://avatars1.githubusercontent.com/u/3408191?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Logan Powell</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=loganpowell" title="Documentation"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3Aloganpowell" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-loganpowell" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a> <a href="#financial-loganpowell" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://marcinignac.com" rel="nofollow"><img src="https://avatars2.githubusercontent.com/u/171001?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Marcin Ignac</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Avorg" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/arcticnoah"><img src="https://avatars2.githubusercontent.com/u/7544636?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>arcticnoah</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=arcticnoah" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a></td>
    <td align="center"><a href="https://github.com/allforabit"><img src="https://avatars3.githubusercontent.com/u/537189?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>allforabit</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Aallforabit" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/commits?author=allforabit" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="#ideas-allforabit" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a> <a href="#financial-allforabit" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="https://yifanwu.studio/" rel="nofollow"><img src="https://avatars2.githubusercontent.com/u/15613549?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Yifan Wu</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3AIvanWoo" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/commits?author=IvanWoo" title="Documentation"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
    <td align="center"><a href="https://pngupngu.com/" rel="nofollow"><img src="https://avatars0.githubusercontent.com/u/250297?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>stwind</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=stwind" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3Astwind" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
    <td align="center"><a href="https://github.com/evilive3000"><img src="https://avatars1.githubusercontent.com/u/5011293?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>evilive</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=evilive3000" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a></td>
    <td align="center"><a href="https://github.com/Bnaya"><img src="https://avatars0.githubusercontent.com/u/1304862?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Bnaya Peretz</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=Bnaya" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3ABnaya" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-Bnaya" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a></td>
    <td align="center"><a href="https://github.com/oljeger"><img src="https://avatars0.githubusercontent.com/u/19798833?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>oljeger</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Aoljeger" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://shevchenkonik.com" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/8392253?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Nik Shevchenko</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Ashevchenkonik" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/commits?author=shevchenkonik" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a></td>
    <td align="center"><a href="https://github.com/Mateiadrielrafael"><img src="https://avatars0.githubusercontent.com/u/39400800?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Matei Adriel</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=Mateiadrielrafael" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/issues?q=author%3AMateiadrielrafael" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-Mateiadrielrafael" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a></td>
    <td align="center"><a href="https://github.com/pgrimaud"><img src="https://avatars1.githubusercontent.com/u/1866496?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Pierre Grimaud</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/commits?author=pgrimaud" title="Documentation"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
    <td align="center"><a href="http://matt.is" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/165223?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Matt Huebert</b></sub></a><br><a href="#financial-mhuebert" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://raphaelsaunier.com" rel="nofollow"><img src="https://avatars2.githubusercontent.com/u/170256?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Raphael Saunier</b></sub></a><br><a href="#financial-raphaelsaunier" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://owoga.com" rel="nofollow"><img src="https://avatars0.githubusercontent.com/u/1719584?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Eric Ihli</b></sub></a><br><a href="#financial-eihli" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="https://davidpham87.github.io" rel="nofollow"><img src="https://avatars3.githubusercontent.com/u/7083286?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>David Pham</b></sub></a><br><a href="#financial-davidpham87" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://plugins.ro" rel="nofollow"><img src="https://avatars0.githubusercontent.com/u/7951?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>TBD</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Atbd" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#ideas-tbd" title="Ideas, Planning, &amp; Feedback"><g-emoji class="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji></a></td>
    <td align="center"><a href="http://twitter.com/pedroteixeira" rel="nofollow"><img src="https://avatars3.githubusercontent.com/u/14740?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Pedro Henriques dos Santos Teixeira</b></sub></a><br><a href="#financial-pedroteixeira" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="http://jamieowen.com" rel="nofollow"><img src="https://avatars3.githubusercontent.com/u/248957?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Jamie Owen</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Ajamieowen" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
    <td align="center"><a href="https://github.com/rkesters"><img src="https://avatars3.githubusercontent.com/u/5572145?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Robert Kesteson</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Arkesters" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="https://github.com/thi-ng/umbrella/commits?author=rkesters" title="Code"><g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji></a></td>
    <td align="center"><a href="https://github.com/chancyk"><img src="https://avatars1.githubusercontent.com/u/1731217?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Chancy Kennedy</b></sub></a><br><a href="#financial-chancyk" title="Financial"><g-emoji class="g-emoji" alias="dollar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png">💵</g-emoji></a></td>
    <td align="center"><a href="https://jarredsumner.com" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/709451?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Jarred Sumner</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3AJarred-Sumner" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a></td>
    <td align="center"><a href="https://418sec.com" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/55323451?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>Jamie Slome</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3AJamieSlome" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#security-JamieSlome" title="Security"><g-emoji class="g-emoji" alias="shield" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e1.png">🛡️</g-emoji></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/d3v53c"><img src="https://avatars.githubusercontent.com/u/64132745?v=4?s=100" width="100px;" alt="" style="max-width:100%;"><br><sub><b>d3v53c</b></sub></a><br><a href="https://github.com/thi-ng/umbrella/issues?q=author%3Ad3v53c" title="Bug reports"><g-emoji class="g-emoji" alias="bug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png">🐛</g-emoji></a> <a href="#security-d3v53c" title="Security"><g-emoji class="g-emoji" alias="shield" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e1.png">🛡️</g-emoji></a></td>
  </tr>
</tbody></table>



<p>This project follows the <a href="https://github.com/all-contributors/all-contributors">all-contributors</a> specification. Contributions of any kind welcome!</p>
</article>
      </div>`;

const promised = html =>
  new Promise((resolve, reject) => {
    html2jade.convertHtml(html, {}, (err, jade) => {
      if (err) {
        reject(err);
      }
      resolve(jade);
    });
  });

b.suite(
  'Convert html 2 pug',
  b.add('my own convert', () => convert(html)),
  b.add('jade convert',  () => promised(html)),
  b.cycle(),
  b.complete(),
  b.save({ file: 'convert', version: '1.0.0' }),
);
