import fs from 'fs'
import path from 'path'

import test from 'ava';

import { convert } from '../convert';


function generateTests() {
  const dir = path.resolve(__dirname, '../../../../data')

  const inputFiles = fs.readdirSync(dir)

  const index = 8
  inputFiles
    .filter(file => file.includes('.html'))
    .slice(0, index + 1)
    .forEach((inputFile) => {
      const htmlPath = path.join(dir, inputFile)
      const pugPath = path.join(dir, inputFile.replace('.html', '.pug'))

      test(`should convert ${path.basename(pugPath)} to output matching ${inputFile}`, (t) => {
        const html = fs.readFileSync(htmlPath, 'utf-8')
        const pug = fs.readFileSync(pugPath, 'utf-8')
        console.log(convert(html))
        t.is(convert(html), pug)
      })
  })
}


generateTests()
