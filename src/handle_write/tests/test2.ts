
import { tokenizer } from "../tokenizer"
import { parser } from '../parser'

const tokens = tokenizer(`
	let user1 = "张三";
	var user2 = "李四";
	const age = 12;
	const man = true;
`)
const ast = parser(tokens)

console.log(JSON.stringify(ast))
