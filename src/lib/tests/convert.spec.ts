import fs from 'fs'
import path from 'path'

import test from 'ava';

import { convert } from '../convert';


function generateTests() {
  const dir = path.resolve(__dirname, '../../../../data')

  const inputFiles = fs.readdirSync(dir)

  const index = 16
  inputFiles
    .filter(file => file.includes('.html'))
    .slice(index, index + 1)
    .forEach((inputFile) => {
      const htmlPath = path.join(dir, inputFile)
      const pugPath = path.join(dir, inputFile.replace('.html', '.pug'))

      test(`should convert ${path.basename(pugPath)} to output matching ${inputFile}`, (t) => {
        const html = fs.readFileSync(htmlPath, 'utf-8')
        const pug = fs.readFileSync(pugPath, 'utf-8')
        // eslint-disable-next-line functional/no-let
        let options
        try {
          const optionsPath = path.join(dir, inputFile.replace('.html', '.json'))
          options = JSON.parse(fs.readFileSync(optionsPath, 'utf-8'))
        } catch (e) {
          options = {}
        }
        console.log(convert(html, options))
        t.is(convert(html, options), pug)
      })
  })
}


generateTests()
