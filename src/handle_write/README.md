## 编译器一般分三步走

Parsing（解析）：负责将代码解析然后生成AST

Transformation（转换）： 根据AST来对代码做一些增删改的操作。

Code Generation （代码生成）：根据转换后AST重新生成新的代码。

## 1. Parsing（解析

tokenizer 词法分析 -> token -> parser 语法分析 -> AST

### 1.1 词法分析 tokenizer

### 1.2 语法分析 parser

### 1.3 遍历器 traverser, ast是一颗树形结构，采用深度优先进行遍历

traverser 接受两个参数ast，visitor
traverser负责遍历AST，visitor包含接受不同类型的节点和它们父节点的方法

### 1.4 转换器 transformer

有了遍历ast的函数，接下来定义处理AST节点的函数transformer， 
transformer的作用是调用traverser生成新的ast，同时我们需要定义traverser visitor参数的具体实现，
以实现对ast节点的增删改：

### 1.5 代码生成器 codeGeneration

最后就是根据新的AST来重新生成代码了。
