const TokenTypes = {
  Keyword: "Keyword",        // 关键词
  Identifier: "Identifier", // 标识符
  Punctuator: "Punctuator", // 标点符号
  String: "String",          // 字符串
  Numeric: "Numeric",       // 数字
  Boolean: "Boolean",       // 布尔值
}

const AST_Types = {
  Literal: "Literal",                           // 文字
  Identifier: "Identifier",                     // 标识符
  AssignmentExpression: "AssignmentExpression", // 赋值表达式
  VariableDeclarator: "VariableDeclarator",     // 变量声明器
  VariableDeclaration: "VariableDeclaration",   // 变量声明
  Program: "Program",                            // 程序
}

export {
  TokenTypes,
  AST_Types,
}