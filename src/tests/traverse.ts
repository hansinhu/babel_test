import { resolve } from 'path'
import fs from 'fs'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import template from '@babel/template'
import generator from '@babel/generator'
import t from '@babel/types'

const entryFilePath = resolve(__dirname, '../mock/mock1.js');

console.log(entryFilePath)

const rawCode = fs.readFileSync(entryFilePath, 'utf8');
console.log('/*******************/')
console.log('rawCode：')
console.log(rawCode)
console.log('/*******************/')

const ast = parse(rawCode, {
	sourceType: 'module',
  plugins: ['typescript']
})

const exportName = 'getUserAge'

traverse(ast, {
	Program(path: any) {
		const lastImport = path.get('body').filter((p:any) => p.isImportDeclaration()).pop();

		if (lastImport) {
			const importStr = `
			import { ${exportName} } from './hehe'

			function age () {
				return 30
			}
			`;
			const myImport = template(importStr, {
				sourceType: 'module'
			});
			lastImport.insertAfter(myImport());
		}
	},

	VariableDeclaration: path => {
		var _obj$init;

		const obj = path.node.declarations.find(item => {
			return 'name' in item.id && item.id.name === 'services';
		}) as any;

		console.log('obj')
		console.log(obj)

		if ((obj === null || obj === void 0 ? void 0 : (_obj$init = obj.init) === null || _obj$init === void 0 ? void 0 : _obj$init.type) !== 'ObjectExpression') {
			return;
		}

		obj.init.properties.unshift({
			type: 'ObjectProperty',
			key: {
				type: 'Identifier',
				name: exportName
			},
			computed: false,
			shorthand: true,
			value: {
				type: 'Identifier',
				name: exportName
			}
		});
		console.log(t.objectMethod('method','Identifier', , ))
		// obj.init.properties.push({
		// 	type: 'ObjectProperty',
		// 	key: {
		// 		type: 'Identifier',
		// 		name: exportName
		// 	},
		// 	computed: false,
		// 	shorthand: true,
		// 	value: {
		// 		type: "",
		// 		name: '() => "aq"'
		// 	}
		// });
	}
});


let output = generator(ast, {}, rawCode);
console.log(output.code)
fs.writeFileSync(entryFilePath, output.code);

// prettyCode()

