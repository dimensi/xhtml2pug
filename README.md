# xhtml2pug

Converts **HTML** and **Vue** like syntax to **Pug** templating language.  
Requires Node.js version `14` or higher.

Turns this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <div id="content">
      <h1 class="title">Hello World!</h1>
    </div>
  </body>
</html>
```

Into this

```pug
doctype html
html(lang='en')
  head
    title Hello World!
   body
    #content
      h1.title Hello World!
```

## Install

Get it on [npm](https://www.npmjs.com/package/xhtml2pug):

```bash
npm install -g xhtml2pug
```

## Usage

### CLI

Accept input from a file or stdin and write to stdout:

```bash
# choose a file
xhtml2pug < example.html

# use pipe
echo '<h1>foo</h1>' | xhtml2pug -f
```

Write output to a file:

```bash
xhtml2pug < example.html > example.pug
```

See `xhtml2pug --help` for more information.

### Programmatically

```js
import { convert } from "xhtml2pug";

const html = '<header><h1 class="title">Hello World!</h1></header>';
const pug = html2pug(html, { tabs: true });
```

### Cli Options

```bash
  -b, --bodyLess      Don't wrap into html > body
                                           [boolean] [default: false]
  -t, --tabs          Use tabs as indent              [boolean] [default: false]
  -s, --spaces        Number of spaces for indent          [number] [default: 2]
  -a, --attrComma     Commas in attributes [boolean] [default: false]
  -e, --encode        Encode html characters           [boolean] [default: true]
  -q, --doubleQuotes  Use double quotes for attributes[boolean] [default: false]
  -i, --inlineCSS     Place all classes in class attribute
                                                      [boolean] [default: false]
  -c, --classesAtEnd  Place all classes after attributes
                                                      [boolean] [default: false]
  -p, --parser        html for any standard html, vue for any vue-like html
                             [string] [choices: "html", "vue"] [default: "html"]
```

### Api Options

```ts
export interface PublicOptions {
  /** Don't wrap into html > body */
  bodyLess: boolean;
  /** Commas in attributes */
  attrComma: boolean;
  /**  Encode html characters */
  encode: boolean;
  /** Use double quotes for attributes */
  doubleQuotes: boolean;
  /** Place all classes in class attribute */
  inlineCSS: boolean;
  /** Symbol for indents, can be anything */
  symbol: string;
  /** Html for any standard html, vue for any vue-like html */
  parser: "html" | "vue";
  /** Place all classes after attributes */
  classesAtEnd: boolean;
}
```
