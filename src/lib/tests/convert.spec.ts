import fs from 'fs';
import path from 'path';

import test from 'ava';

import { convert } from '../convert';

const vueOnly = ['vue.html'];
const htmlOnly = [
  'conditional2.html',
  'conditional3.html',
  'default-html.html',
  'html5boilerplate.html',
  'pre1.html',
  'pre2.html',
  'pre3.html',
  'test.html',
];

function generateTests(parser: 'html' | 'vue') {
  const dir = path.resolve(__dirname, '../../../../data');

  const inputFiles = fs.readdirSync(dir);

  inputFiles
    .filter(file =>
      file.includes('.html') && parser === 'html'
        ? !vueOnly.find(name => file.includes(name))
        : !htmlOnly.find(name => file.includes(name))
    )
    .forEach(inputFile => {
      const htmlPath = path.join(dir, inputFile);

      test(`parser ${parser}: should convert ${inputFile} to match snapshot`, t => {
        const html = fs.readFileSync(htmlPath, 'utf-8');
        // eslint-disable-next-line functional/no-let
        let options;
        try {
          const optionsPath = path.join(dir, inputFile.replace('.html', '.json'));
          options = JSON.parse(fs.readFileSync(optionsPath, 'utf-8'));
          // eslint-disable-next-line no-empty
        } catch (e) {}
        t.snapshot(convert(html, { ...options, parser }));
        // console.log(convert(html, options))
      });
    });
}

generateTests('html');
generateTests('vue');
