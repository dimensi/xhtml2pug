import fs from 'fs';
import path from 'path';

import test from 'ava';

import { convert } from '../convert';

function generateTests() {
  const dir = path.resolve(__dirname, '../../../../data');

  const inputFiles = fs.readdirSync(dir);

  inputFiles
    .filter(file => file.includes('.html'))
    .forEach(inputFile => {
      const htmlPath = path.join(dir, inputFile);

      test(`should convert ${inputFile} to match snapshot`, t => {
        const html = fs.readFileSync(htmlPath, 'utf-8');
        // eslint-disable-next-line functional/no-let
        let options;
        try {
          const optionsPath = path.join(dir, inputFile.replace('.html', '.json'));
          options = JSON.parse(fs.readFileSync(optionsPath, 'utf-8'));
          // eslint-disable-next-line no-empty
        } catch (e) {}
        t.snapshot(convert(html, options));
        // console.log(convert(html, options))
      });
    });
}

generateTests();
