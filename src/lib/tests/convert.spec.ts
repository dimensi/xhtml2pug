import fs from 'fs'
import path from 'path'

import test from 'ava';

import { convert } from '../convert';


function generateTests() {
  const dir = path.resolve(__dirname, '../../../../data')

  const inputFiles = fs.readdirSync(dir)

  inputFiles
    .filter(file => file.includes('.html'))
    .forEach((inputFile) => {
      const htmlPath = path.join(dir, inputFile)
      const pugPath = path.join(dir, inputFile.replace('.html', '.pug'))

      test(`should convert ${path.basename(pugPath)} to output matching ${inputFile}`, (t) => {
        const html = fs.readFileSync(htmlPath, 'utf-8')
        // eslint-disable-next-line functional/no-let
        let options
        try {
          const optionsPath = path.join(dir, inputFile.replace('.html', '.json'))
          options = JSON.parse(fs.readFileSync(optionsPath, 'utf-8'))
        } catch (e) {
          options = {}
        }
        t.snapshot(convert(html, options))
      })
  })
}


generateTests()
