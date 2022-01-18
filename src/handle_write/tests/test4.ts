
import { tokenizer } from "../tokenizer"
import { parser } from '../parser'
import { transformer } from '../transformer'
import { codeGenerator } from '../codeGenerator'

const tokens = tokenizer(`
	let user1 = "张三";
	var user2 = "李四";
	const age = 12;
	const man = true;
`)
const ast = parser(tokens)
const newAST = transformer(ast)
const newCode = codeGenerator(newAST)

console.log(newCode)
