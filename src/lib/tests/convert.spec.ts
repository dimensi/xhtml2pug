import test from 'ava';

import { convert } from '../convert';

test('convert', async t => {
  const result = await convert(`<h1>Pug - node template engine</h1>
    <div id="container" class="col" data-element=1 data-element-1=2>
      <p>You are amazing</p>
      <p>Pug is a terse and simple
         templating language with a
         strong focus on performance
         and powerful features.</p>
    </div>`, {
    inlineCSS: true
  });

  t.is(result, `html
  body
    h1 Pug - node template engine
    #container.col(data-element="1" data-element-1="2")
      p You are amazing
      p
        | Pug is a terse and simple
        | templating language with a
        | strong focus on performance
        | and powerful features.`)
});
