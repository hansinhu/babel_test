# `@babel/traverse`

Babel Traverse 模块维护整体的树状态，负责替换、移除和添加节点

# `@babel/generator`

将 AST 转换为代码。

# `@babel/parser`

JavaScript 解析器

# `@babel/template`

从字符串模板生成 AST。

# 手写简版AST解析脚本

为什么需要学习AST相关的知识呢？因为AST实在是太重要了，你可能对它不了解，但是它无处不在。更具体一点：

浏览器js引擎拿到js的第一件事就是解析js生成AST，随后才是解释执行，编译优化执行。
`webpack`
`babel`
`eslint`
`prettier`
...

例子太多太多了，就不一一举例说明了，这些工具背后的原理都离不开AST。
这些工具都涉及到一个过程：

`拆解代码->生成AST->遍历AST并修改->重新生成代码。`

代码只是一串字符串，如果要对代码做修改需要对字符串进行细粒度的拆分，也就是一个字符一个字符地遍历代码，将每个字符拆分成对应的一小块（`token`）；
遍历完成后生成`token`列表，根据`token`与`token`之间的关系（也就是语法规则），将其组合起来，就成了一个树形的表示。这颗树就是`AST`。
得到`AST`以后就可以遍历这颗树然后对树的节点做一些转换操作（增删改）。
操作做完后，再根据修改过后的`AST`将代码输出出来。

所以AST其实是一个中间产物。

## 什么是AST

经过上面的介绍其实我们已经对`AST`有了一个大致的了解了。`AST` 全称 `abstract syntax tree` (抽象语法树)。它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。生成AST整体上分为两个步骤：

## 实现一个简单的JS编译器

## 编译器一般分三步走

Parsing（解析）：负责将代码解析然后生成AST

Transformation（转换）： 根据AST来对代码做一些增删改的操作。

Code Generation （代码生成）：根据转换后AST重新生成新的代码。

## 1. Parsing（解析

tokenizer 词法分析 -> token -> parser 语法分析 -> AST

### 1.1 词法分析(lexical analyzer) tokenizer

词法分析器也叫`scanner`（扫描器），顾名思义就是扫描我们的代码，遍历每个字符，使用预先定义好的规则将每个字符转换成`token`(词法单元)

### 1.2 语法分析（Syntax analyzer） parser

语法分析就是将遍历得到的`token`列表，根据语法规则将`token`关联起来，形成一棵树形结构，这棵树就是`AST`。所以`AST`表示的是源代码的语法结构，树上的每个节点表示的是源代码中的一种结构。

### 1.3 遍历器 traverser, ast是一颗树形结构，采用深度优先进行遍历

traverser 接受两个参数ast，visitor
traverser负责遍历AST，visitor包含接受不同类型的节点和它们父节点的方法

### 1.4 转换器 transformer

有了遍历ast的函数，接下来定义处理AST节点的函数transformer， 
transformer的作用是调用traverser生成新的ast，同时我们需要定义traverser visitor参数的具体实现，
以实现对ast节点的增删改：

### 1.5 代码生成器 codeGeneration

最后就是根据新的AST来重新生成代码了。

