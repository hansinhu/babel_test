
import { tokenizer } from "../tokenizer"
import { parser } from '../parser'
import { transformer } from '../transformer'

const tokens = tokenizer(`
	let user1 = "张三";
	var user2 = "李四";
	const age = 12;
	const man = true;
`)
const ast = parser(tokens)
const newAST = transformer(ast)

console.log(JSON.stringify(newAST))
