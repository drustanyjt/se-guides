
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('box',[_c('p',[_v("The coding standard is primarily based on "),_c('a',{attrs:{"href":"https://github.com/dennisdoomen/CSharpGuidelines"}},[_v("CSharpGuidelines")]),_v(" (by Aviva Solutions) but differs from it in these ways:")]),_v(" "),_c('ul',[_c('li',[_v("Structure of the document is adapted from "),_c('a',{attrs:{"href":"http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf"}},[_v("C# coding standards for .NET")]),_v(" and "),_c('a',{attrs:{"href":"http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf"}},[_v("C# Coding Style Guide")]),_v(".")]),_v(" "),_c('li',[_v("Some examples were taken from other sources listed under "),_c('a',{attrs:{"href":"#references"}},[_v("References")]),_v(".")])])]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Do not use namespace name with dots. This will make it easier to map namespaces to the directory layout.")])]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("This will make your code more readable and also make it easier to find the .cs file for a particular class.")]),_v(" "),_m(11),_v(" "),_m(12),_m(13),_v(" "),_m(14),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Sequence declaration within type groups are based on StyleCop's SA1202 ordering: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("public, internal, protected internal, protected, private")]),_v(".")])]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_m(18),_v(" "),_c('p',[_v("When an expression does not fit, follow the general guidelines:")]),_v(" "),_m(19),_v(" "),_c('p',[_v("Example of breaking up method calls:")]),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_c('p',[_v("Example of breaking an arithmetic expression:")]),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('p',[_v("The top one is preferred, since the break occurs outside the parenthesized expression, which is higher-level.")]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_m(27),_v(" "),_m(28),_v(" "),_m(29),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('p',[_v("English is the preferred language for international development.")]),_v(" "),_m(37),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('ul',[_c('li',[_v("Pascal casing: the first letter of every word is capitalized.")]),_v(" "),_c('li',[_v("Camel casing: the first letter of every word, except for the first word, is capitalized.")])])]),_v(" "),_m(38),_m(39),_v(" "),_c('p',[_v("Unless the full name is excessive:")]),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Avoid boolean variables that represent the negation of things. e.g., use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IsInitialized")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IsNotInitialized")]),_v(".")])]),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_c('p',[_v("Hungarian notation is a defined set of pre and postfixes which are applied to names to reflect the type of the variable. This style was used in early Windows programming, but is now obsolete.")]),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('em',[_v("Exception")]),_v(": All fields and variable names that contain GUI elements like button should be postfixed with their type name without abbreviations. e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cancelButton")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nameTextBox")]),_v(".")])]),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_c('p',[_v("Explicitly declare all identifiers with the appropriate access modifiers instead of allowing the default.")]),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('p',[_v("When the type of a variable is clear from the context, use var in the declaration.")]),_v(" "),_m(65),_c('p',[_v("Do not use var when the type is not apparent from the right side of the assignment.")]),_v(" "),_m(66),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("To know more about when to use/not to use implicit typing read "),_c('a',{attrs:{"href":"https://blogs.msdn.microsoft.com/ericlippert/2011/04/20/uses-and-misuses-of-implicit-typing/"}},[_v("Uses and misuses of implicit typing")]),_v(".")])]),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}})],1),_v(" "),_m(72)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"c-coding-standard"}},[_c('span',{staticClass:"anchor",attrs:{"id":"c-coding-standard"}}),_v("C# coding standard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#c-coding-standard","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Important:")]),_v(" Use "),_c('a',{attrs:{"href":"https://github.com/dennisdoomen/CSharpGuidelines"}},[_v("CSharpGuidelines")]),_v(" for any topics not covered in this document.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"file-organization"}},[_c('span',{staticClass:"anchor",attrs:{"id":"file-organization"}}),_v("File Organization"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#file-organization","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-source-file-name-and-class-name-should-always-match"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-source-file-name-and-class-name-should-always-match"}}),_v("1. Source file name and class name should always match."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-source-file-name-and-class-name-should-always-match","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("MyClass.cs → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("public class MyClass { ... }")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-directory-names-should-follow-namespace-for-the-class"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-directory-names-should-follow-namespace-for-the-class"}}),_v("2. Directory names should follow namespace for the class."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-directory-names-should-follow-namespace-for-the-class","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("System.Windows.Forms.Control")]),_v(" should use the path System\\Windows\\Forms\\Control.cs")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"formatting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"formatting"}}),_v("Formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"layout"}},[_c('span',{staticClass:"anchor",attrs:{"id":"layout"}}),_v("Layout"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#layout","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-avoid-putting-multiple-namespaces-or-classes-per-file"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-avoid-putting-multiple-namespaces-or-classes-per-file"}}),_v("1. Avoid putting multiple namespaces or classes per file."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-avoid-putting-multiple-namespaces-or-classes-per-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-place-using-directives-at-the-top-of-the-file-grouped-and-ordered-alphabetically"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-place-using-directives-at-the-top-of-the-file-grouped-and-ordered-alphabetically"}}),_v("2. Place "),_c('em',[_v("using")]),_v(" directives at the top of the file, grouped and ordered alphabetically."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-place-using-directives-at-the-top-of-the-file-grouped-and-ordered-alphabetically","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// .NET namespaces first")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" System;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" System.Collections;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Then any other namespaces in alphabetical order")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" Company.Business;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" Company.Standard;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" Telerik.Ajax;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" Telerik.WebControls;\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-maintain-a-common-order-for-each-file"}},[_c('span',{staticClass:"anchor",attrs:{"id":"3-maintain-a-common-order-for-each-file"}}),_v("3. Maintain a common order for each file."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-maintain-a-common-order-for-each-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Member variable")]),_v(" "),_c('li',[_v("Constructors and Finalizer")]),_v(" "),_c('li',[_v("Nested Enums, Structs and Classes")]),_v(" "),_c('li',[_v("Properties")]),_v(" "),_c('li',[_v("Methods")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"indentation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"indentation"}}),_v("Indentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#indentation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-basic-indentation-should-be-4-spaces-not-tabs"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-basic-indentation-should-be-4-spaces-not-tabs"}}),_v("1. Basic indentation should be 4 spaces(not tabs)."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-basic-indentation-should-be-4-spaces-not-tabs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// A Hello World! program in C#.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("using")]),_v(" System;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("namespace")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("HelloWorld")]),_v("\n")]),_c('span',[_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Hello")]),_v(" \n")]),_c('span',[_v("    {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Main")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}}),_v(")")]),_v(" \n")]),_c('span',[_v("        {\n")]),_c('span',[_v("            Console.WriteLine("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Hello World!\"")]),_v(");\n")]),_c('span',[_v("        }\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-maximum-line-length-is-130-characters"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-maximum-line-length-is-130-characters"}}),_v("2. Maximum line length is 130 characters."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-maximum-line-length-is-130-characters","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Break after a comma")]),_v(" "),_c('li',[_v("Break after an operator")]),_v(" "),_c('li',[_v("Align the new line with the beginning of the expression at the same level on the previous line")]),_v(" "),_c('li',[_v("Prefer higher-level breaks to lower-level breaks")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("longMethodCall(expr1, expr2,\n")]),_c('span',[_v("               expr3, expr4, expr5);\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("longMethodCall(expr1, expr2\n")]),_c('span',[_v("        ,expr3, expr4, expr5);\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" result = a * b / (c - g + f) +\n")]),_c('span',[_v("             "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(" * z;\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" result = a * b / (c - g +\n")]),_c('span',[_v("             f) + "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(" * z;\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-always-place-curly-braces-on-a-new-line"}},[_c('span',{staticClass:"anchor",attrs:{"id":"3-always-place-curly-braces-on-a-new-line"}}),_v("3. Always place curly braces on a new line."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-always-place-curly-braces-on-a-new-line","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is known as the "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Indent_style#Allman_style"}},[_v("https://en.wikipedia.org/wiki/Indent_style#Allman_style")]),_v("[Allman style].")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("while")]),_v(" (x < y)\n")]),_c('span',[_v("{\n")]),_c('span',[_v("    firstMethod();\n")]),_c('span',[_v("    secondMethod();\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("lastMethod();\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"4-always-put-curly-braces-even-if-it-might-not-be-required"}},[_c('span',{staticClass:"anchor",attrs:{"id":"4-always-put-curly-braces-even-if-it-might-not-be-required"}}),_v("4. Always put curly braces even if it might not be required."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-always-put-curly-braces-even-if-it-might-not-be-required","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Such as having only one statement in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("if")]),_v(" clause. This is to enforce consistency.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (x > y) \n")]),_c('span',[_v("{\n")]),_c('span',[_v("    doSomething();\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"white-space"}},[_c('span',{staticClass:"anchor",attrs:{"id":"white-space"}}),_v("White Space"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#white-space","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-general-guidelines"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-general-guidelines"}}),_v("1. General guidelines."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-general-guidelines","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Keywords like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("if")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("while")]),_v(" should be followed by a white space.")]),_v(" "),_c('li',[_v("Semicolons in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("for")]),_v(" statements should be followed by a white space.")]),_v(" "),_c('li',[_v("Commas should be followed by a white space.")]),_v(" "),_c('li',[_v("Add a white space around operators like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("+")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("==")]),_v(" etc.")]),_v(" "),_c('li',[_v("Do not add white space after "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("(")]),_v(" and before "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(")")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_v("a = (b + c) * d;")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("while")]),_v(" ("),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v(")")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_v("doSomething(a, b, c, d)")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v(" (i = "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v("; i < "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("10")]),_v("; i++)")])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_v("a=(b+c)*d;")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("while")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v(")")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_v("doSomething(a,b,c,d)")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline cs"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("for")]),_v("(i="),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(";i<"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("10")]),_v(";i++)")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"naming"}},[_c('span',{staticClass:"anchor",attrs:{"id":"naming"}}),_v("Naming"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#naming","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-all-names-should-be-written-in-english"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-all-names-should-be-written-in-english"}}),_v("1. All names should be written in English."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-all-names-should-be-written-in-english","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-use-proper-casing-for-language-elements"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-use-proper-casing-for-language-elements"}}),_v("2. Use proper casing for language elements."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-use-proper-casing-for-language-elements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Language element")]),_v(" "),_c('th',[_v("Casing")]),_v(" "),_c('th',[_v("Example")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Class, Struct")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AppDomain")])])]),_v(" "),_c('tr',[_c('td',[_v("Interface")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IBusinessService")])])]),_v(" "),_c('tr',[_c('td',[_v("Enumeration type")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ErrorLevel")])])]),_v(" "),_c('tr',[_c('td',[_v("Enumeration values")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FatalError")])])]),_v(" "),_c('tr',[_c('td',[_v("Event")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Click")])])]),_v(" "),_c('tr',[_c('td',[_v("Private field")]),_v(" "),_c('td',[_v("Camel")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listItem")])])]),_v(" "),_c('tr',[_c('td',[_v("Protected field")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainPanel")])])]),_v(" "),_c('tr',[_c('td',[_v("Constant field")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MaximumItems")])])]),_v(" "),_c('tr',[_c('td',[_v("Constant local variable")]),_v(" "),_c('td',[_v("Camel")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("maximumItems")])])]),_v(" "),_c('tr',[_c('td',[_v("Read-only static field")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RedValue")])])]),_v(" "),_c('tr',[_c('td',[_v("Local variable")]),_v(" "),_c('td',[_v("Camel")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listOfValues")])])]),_v(" "),_c('tr',[_c('td',[_v("Method")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ToString")])])]),_v(" "),_c('tr',[_c('td',[_v("Namespace")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("System.Drawing")])])]),_v(" "),_c('tr',[_c('td',[_v("Parameter")]),_v(" "),_c('td',[_v("Camel")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typeName")])])]),_v(" "),_c('tr',[_c('td',[_v("Type parameter")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TView")])])]),_v(" "),_c('tr',[_c('td',[_v("Property")]),_v(" "),_c('td',[_v("Pascal")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("BackColor")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-avoid-using-abbreviations"}},[_c('span',{staticClass:"anchor",attrs:{"id":"3-avoid-using-abbreviations"}}),_v("3. Avoid using abbreviations."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-avoid-using-abbreviations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Avoid abbreviations longer than 5 characters.")]),_v(" "),_c('li',[_v("Abbreviations must be widely known and accepted.")]),_v(" "),_c('li',[_v("Use upper case for 2-character abbreviations, and Pascal Case for longer abbreviations.")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("UIControl\n")]),_c('span',[_v("HtmlSource\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("UiControl\n")]),_c('span',[_v("HTMLSource\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"4-prefix-boolean-variables-with-can-is-or-has"}},[_c('span',{staticClass:"anchor",attrs:{"id":"4-prefix-boolean-variables-with-can-is-or-has"}}),_v("4. Prefix boolean variables with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Can")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Is")]),_v(", or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Has")]),_v("."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-prefix-boolean-variables-with-can-is-or-has","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Examples: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CanEvaluate")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IsVisible")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HasLicense")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"5-do-not-include-the-parent-class-name-within-a-property-name"}},[_c('span',{staticClass:"anchor",attrs:{"id":"5-do-not-include-the-parent-class-name-within-a-property-name"}}),_v("5. Do not include the parent class name within a property name."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#5-do-not-include-the-parent-class-name-within-a-property-name","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("Customer.Name\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("Customer.CustomerName\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"6-do-not-use-hungarian-notation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"6-do-not-use-hungarian-notation"}}),_v("6. Do not use Hungarian Notation."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#6-do-not-use-hungarian-notation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("Name\n")]),_c('span',[_v("Colors\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("strName\n")]),_c('span',[_v("ColorsEnum\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"commenting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"commenting"}}),_v("Commenting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commenting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-general-guidelines-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-general-guidelines-2"}}),_v("1. General guidelines."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-general-guidelines-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Place the comment on a separate line, not at the end of a line of code.")]),_v(" "),_c('li',[_v("Begin comment text with an upper case letter.")]),_v(" "),_c('li',[_v("Insert one space between comment delimiter ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//")]),_v(") and comment text.")]),_v(" "),_c('li',[_v("Use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("//")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("///")]),_v(" but never "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/* ... */")]),_v(".")]),_v(" "),_c('li',[_v("The length of comment should not exceed the length of code.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-document-all-public-protected-and-internal-types-and-members"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-document-all-public-protected-and-internal-types-and-members"}}),_v("2. Document all public, protected and internal types and members."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-document-all-public-protected-and-internal-types-and-members","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Documenting your code allows Visual Studio to pop-up the documentation when your class is used somewhere else. You can form your documentation using "),_c('a',{attrs:{"href":"https://msdn.microsoft.com/en-us/library/5ast78ax.aspx"}},[_v("https://msdn.microsoft.com/en-us/library/5ast78ax.aspx")]),_v("[XML tags].")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_v("/// <"),_c('span',{pre:true,attrs:{"class":"hljs-selector-tag"}},[_v("summary")]),_v(">\n")]),_c('span',[_v("/// Get "),_c('span',{pre:true,attrs:{"class":"hljs-selector-tag"}},[_v("a")]),_v(" value indicating whether the user has "),_c('span',{pre:true,attrs:{"class":"hljs-selector-tag"}},[_v("a")]),_v(" license.\n")]),_c('span',[_v("/// </"),_c('span',{pre:true,attrs:{"class":"hljs-selector-tag"}},[_v("summary")]),_v(">\n")]),_c('span',[_v("/// <returns>\n")]),_c('span',[_v("/// <c>true</c> if the user has "),_c('span',{pre:true,attrs:{"class":"hljs-selector-tag"}},[_v("a")]),_v(" license; otherwise <c>false</c>.\n")]),_c('span',[_v("/// </returns>\n")]),_c('span',[_v("public bool HasLicense() { ... }\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"language-conventions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"language-conventions"}}),_v("Language Conventions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#language-conventions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"1-do-not-omit-access-modifiers"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-do-not-omit-access-modifiers"}}),_v("1. Do not omit access modifiers."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-do-not-omit-access-modifiers","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("WriteEvent")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(" message")]),_v(")")]),_v("\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("WriteEvent")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(" message")]),_v(")")]),_v("\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"2-always-use-the-built-in-c-data-type-aliases-instead-of-the-net-common-type-system"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-always-use-the-built-in-c-data-type-aliases-instead-of-the-net-common-type-system"}}),_v("2. Always use the built-in C# data type aliases, instead of the .NET common type system."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-always-use-the-built-in-c-data-type-aliases-instead-of-the-net-common-type-system","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("short")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("int")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("long")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_v("Int16\n")]),_c('span',[_v("Int32\n")]),_c('span',[_v("Int64\n")]),_c('span',[_v("String\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-only-use-var-when-the-type-is-very-obvious"}},[_c('span',{staticClass:"anchor",attrs:{"id":"3-only-use-var-when-the-type-is-very-obvious"}}),_v("3. Only use var when the type is very obvious."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-only-use-var-when-the-type-is-very-obvious","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" welcomeMessage = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"This is a welcome message!\"")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" account = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Account();\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("int")]),_v(" result = ExampleClass.ResultSoFar();\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"4-favor-object-and-collection-initializers-over-separate-statements"}},[_c('span',{staticClass:"anchor",attrs:{"id":"4-favor-object-and-collection-initializers-over-separate-statements"}}),_v("4. Favor Object and Collection initializers over separate statements."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-favor-object-and-collection-initializers-over-separate-statements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" startInfo = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ProcessStartInfo("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"myapp.exe\"")]),_v(");\n")]),_c('span',[_v("{\n")]),_c('span',[_v("    StandardOutput = Console.Output,\n")]),_c('span',[_v("    UseShellExecute = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("};\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")]),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs cs"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("var")]),_v(" startInfo = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ProcessStartInfo("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"myapp.exe\"")]),_v(");\n")]),_c('span',[_v("startInfo.StandardOutput = Console.Output;\n")]),_c('span',[_v("startInfo.UseShellExecute = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v(";\n")])])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"references"}},[_c('span',{staticClass:"anchor",attrs:{"id":"references"}}),_v("References"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#references","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://msdn.microsoft.com/en-us/library/ff926074.aspx"}},[_v("C# Coding Coventions (C# Programming Guide)")]),_v(" -- From Microsoft")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf"}},[_v("C# coding standards for .NET")]),_v(" -- By Lance Hunt")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf"}},[_v("C# Coding Style Guide")]),_v(" -- By Mike Krüger")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/dennisdoomen/CSharpGuidelines"}},[_v("CSharpGuidelines")]),_v(" -- From Aviva Solutions")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.4")]),_v(" on Wed, 14 Jul 2021, 1:59:52 GMT+8]")])])])}
}];
  