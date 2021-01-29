const b = require('benny');
const { convert } = require('../build/main');
const html2jade = require('html2jade');
const fs = require('fs');
const path = require('path')
const html = fs.readFileSync(path.join(__dirname, './html-example.html'), 'utf-8');

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
