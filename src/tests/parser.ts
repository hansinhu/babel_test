import { resolve } from 'path'
import fs from 'fs'
import { parse } from '@babel/parser'

const entryFilePath = resolve(__dirname, '../mock/mock1.js');

console.log(entryFilePath)

const rawCode = fs.readFileSync(entryFilePath, 'utf8');

const programAST = parse(rawCode, {
	sourceType: 'module',
  plugins: ['typescript']
}).program

console.log(programAST.body[0])
console.log('---------')
console.log(programAST.body[1])
