import test from 'ava';

import { convert } from '../convert';

test('convert', async t => {
  const result = await convert(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pug</title>
    <script type="text/javascript">
      foo = true;
      bar = function () {};
      if (foo) {
        bar(1 + 5)
      }
    </script>
  </head>
  <body>
    <h1>Pug - node template engine</h1>
    <div id="container" class="col" data-element=1 data-element-1=2>
      <nz-page-header class="site-page-header" (nzBack)="onBack()" nzBackIcon nzTitle="Title" nzSubtitle="This is a subtitle"></nz-page-header>
      <p>You are amazing</p>
      <p>Pug is a terse and simple
         templating language with a
         strong focus on performance
         and powerful features.</p>
    </div>
  </body>
</html>`);

  t.snapshot(result);
});
