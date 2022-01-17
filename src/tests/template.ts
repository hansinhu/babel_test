import template from '@babel/template'

const importStr = `import { myTestImport } from '@hansin/test-traverse'`;

const myImport = template(importStr, {
	sourceType: 'module'
});

console.log('myImport: ')
console.log(myImport())

const fntStr = `
	import { Haha } from './hehe'
	function age () {
		return 30
	}
	/* test hqhwhqqw */
	function name () {
		return 'hansin'
	}
`;

const fnImport = template(fntStr, {
	sourceType: 'module'
});

console.log('fnImport2: ')
console.log(fnImport())