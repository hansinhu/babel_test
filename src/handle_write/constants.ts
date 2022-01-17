const TokenTypes = {
  Keyword: "Keyword",
  Identifier: "Identifier",
  Punctuator: "Punctuator",
  String: "String"
}

const AST_Types = {
  Literal: "Literal",
  Identifier: "Identifier",
  AssignmentExpression: "AssignmentExpression",
  VariableDeclarator: "VariableDeclarator",
  VariableDeclaration: "VariableDeclaration",
  Program: "Program"
}

export {
  TokenTypes,
  AST_Types
}