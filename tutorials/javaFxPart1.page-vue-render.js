
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Imagine yourself as a director of a play. First you provision the props that you will feature in your play. These can be hand props for your actors to interact with or even set dressings just to liven up the background. You then decide where to place the props for every scene. With a proper script in hand, you can finally approach a theatre and request for a stage. Thereafter, it’s just a matter of pulling the curtains on your masterpiece.")]),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/javafx/JavaFxHierarchy.png"}}),_v(" "),_m(3),_v(" "),_c('p',[_v("Well, that's a very high-level view of how JavaFX works. The actual implementation of a Java FX is a bit more (ahem...) \"involved\". This tutorial takes you through the steps of building a typical Java FX application, using a chatbot application called Duke as a running example. Given below is what the end result can look like if you follow this tutorial until the end:")]),_v(" "),_c('video',{attrs:{"oncontextmenu":"return false;","width":"700px","autoplay":"","muted":"","loop":""},domProps:{"muted":true}},[_c('source',{attrs:{"src":"videos/javafx/DynamicStyleDemo.mp4","type":"video/mp4"}})]),_v(" "),_c('p',[_v("Let's get started!")]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('div',{attrs:{"id":"javafx-gradle"}},[_m(8),_v(" "),_c('pre',[_m(9),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("After updating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file, remember to reload the Gradle dependencies using your IDE UI, or by running the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean build")]),_v(". If using an IDE, you can restart the IDE for good measure.")])]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('div',{staticClass:"code-block"},[_m(12),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(13),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('div',{staticClass:"code-block"},[_m(17),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(18),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_m(19),_v(" "),_c('div',{staticClass:"code-block"},[_m(20),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(21),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("JavaFX creates the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Application")]),_v(" instance by calling the no-argument constructor. If there is no other constructor in the class (such as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")]),_v(" we created above), there is no need to provide such a constructor because Java automatically provides a no-argument constructor when there are no other constructors.")]),_v(" "),_c('p',[_v("But if you already have an existing constructor which takes arguments in that class (in which case Java will not provide a no-argument constructor automatically), you need to create an overloaded constructor with no arguments yourself. An example given below:")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("Main.java")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"Main.java","class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//...")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("final")]),_v(" String DEFAULT_FILE_PATH = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"duke/example.txt\"")]),_v(";\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Main")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Application")]),_v(" ")]),_v("{\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Existing constructor")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String filePath)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Overloaded constructor")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")]),_v(" ")]),_v("{")]),_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v("(DEFAULT_FILE_PATH);")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("}")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("This approach enables JavaFX to create the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Application")]),_v(" instance using the newly defined no-argument constructor, while preserving the functionality of the existing constructor.")])]),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("The following warning issued by Java runtime can be ignored. This warning appears when you use a later JavaFX version (e.g., 17) with a JDK version that doesn't support the "),_c('em',[_v("modules")]),_v(" feature yet (e.g., Java 11).")]),_v(" "),_c('blockquote',[_c('p',[_v("WARNING: Unsupported JavaFX configuration: classes were loaded from 'unnamed module @...")])])]),_v(" "),_c('p',[_v("Congratulations! You have created your first GUI application!")]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('hr'),_v(" "),_m(27),_v(" "),_m(28),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#javafx-tutorial-part-1-introduction"}},[_v("JavaFX tutorial part 1 – Introduction‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#lifecycle-of-a-javafx-application"}},[_v("Lifecycle of a JavaFX  application‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-the-project"}},[_v("Setting up the project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-java-fx"}},[_v("Setting up Java FX‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#writing-your-first-java-fx-program"}},[_v("Writing your first Java FX program‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exercises"}},[_v("Exercises‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(29)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"javafx-tutorial-part-1-introduction"}},[_v("JavaFX tutorial part 1 – Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javafx-tutorial-part-1-introduction","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"lifecycle-of-a-javafx-application"}},[_v("Lifecycle of a JavaFX  application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lifecycle-of-a-javafx-application","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A JavaFX application is like a play you are directing. Instead of creating props, you create "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s are the fundamental building blocks of a JavaFX application), and place them onto a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" (a scene is a graph of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s). Then, you set your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" on a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" provided by JavaFX. When you call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage#show()")]),_v(" method, JavaFX renders a window with your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" on it.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-the-project"}},[_v("Setting up the project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-the-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To start, clone "),_c('a',{attrs:{"href":"https://github.com/se-edu/javafx-tutorial"}},[_v("this starter repo")]),_v(" to your computer, and open it in your favorite editor. As usual, configure the IDE to use the correct JDK version as well ("),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/sdk.html#set-up-jdk"}},[_v("example")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-java-fx"}},[_v("Setting up Java FX"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-java-fx","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note: this tutorial assumes you will be using "),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html"}},[_v("Gradle")]),_v(" to manage dependencies of your project.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Update your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" to include the following lines:")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("repositories {\n")]),_c('span',[_v("    mavenCentral()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("dependencies {\n")]),_c('span',[_v("    String javaFxVersion = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'17.0.7'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-base'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-controls'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-fxml'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'win'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'mac'")]),_v("\n")]),_c('span',[_v("    implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.openjfx'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'javafx-graphics'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" javaFxVersion, "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("classifier:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'linux'")]),_v("\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"writing-your-first-java-fx-program"}},[_v("Writing your first Java FX program"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#writing-your-first-java-fx-program","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("As is customary, let’s start off with a simple “Hello World” program. Let's say you have a class named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Duke")]),_v(" that you want to make a GUI for. Let's call this GUI class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")]),_v(". When using Java FX, this GUI class needs to extend "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("javafx.application.Application")]),_v(" which in turn requires you to override the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Application#start(Stage)")]),_v(" method and provide a concrete implementation. The parameter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" is the "),_c('em',[_v("primary stage")]),_v(" that JavaFX provides.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("Main.java")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"Main.java","class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.application.Application;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.Scene;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.control.Label;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.stage.Stage;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Main")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Application")]),_v(" ")]),_v("{\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Override")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("start")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Stage stage)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        Label helloWorld = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Label("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Hello World!\"")]),_v("); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Creating a new Label control")]),_v("\n")]),_c('span',[_v("        Scene scene = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Scene(helloWorld); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Setting the scene to be our Label")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("        stage.setScene(scene); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Setting the stage to show our screen")]),_v("\n")]),_c('span',[_v("        stage.show(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Render the stage.")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note how we have created a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" to contain the text that we want to show. We then create the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v(" and set its content. Finally, we set the stage and show it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Next, we create another Java class, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(", as an entry point to our application (this class is needed to work around a classpath issue -- we can ignore the reason for now).")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(" class is reproduced below in its entirety.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("Launcher.java")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"Launcher.java","class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.application.Application;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/**")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v(" * A launcher class to workaround classpath issues.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v(" */")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Launcher")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String[] args)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        Application.launch(Main.class, args);\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Now that we have changed the entry point to our application, we need to update the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClass")]),_v("attribute in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" accordingly to point at the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("application {")]),_v("\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("mainClass.set("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Launcher\"")]),_v(")")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("}")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Now, run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Launcher")]),_v(" and you should see something like this:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/HelloWorld.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/HelloWorld.png","alt":"Hello World"}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"exercises"}},[_v("Exercises"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exercises","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("We mentioned that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s are the fundamental building blocks of JavaFX and used a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" as our root node in the HelloWorld application.")]),_v(" "),_c('ol',[_c('li',[_v("What are some of the other types of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s?")]),_v(" "),_c('li',[_v("How does JavaFX group them?")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v("s can be interacted with like Plain Old Java Objects (POJO).")]),_v(" "),_c('ol',[_c('li',[_v("What properties of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" can you change programmatically?")]),_v(" "),_c('li',[_v("Try changing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(" to have a font of Arial at size 50.")])])]),_v(" "),_c('li',[_c('p',[_v("You’ve learnt that a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" can be thought of as a window.")]),_v(" "),_c('ol',[_c('li',[_v("Can you have more than one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" in an application?")]),_v(" "),_c('li',[_v("Try creating another stage and showing it! What happens?")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/javaFx.html"}},[_c('span',{staticClass:"fas fa-arrow-up",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_v("ToC")])]),_v(" | "),_c('span',{staticClass:"badge rounded-pill bg-primary"},[_c('strong',[_c('span',{staticClass:"large"},[_v("What's next?")])])]),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/javaFxPart2.html"}},[_c('span',{staticClass:"fas fa-arrow-right",attrs:{"aria-hidden":"true"}}),_v(" JavaFX tutorial part 2 - "),_c('strong',[_v("Creating a GUI for Duke")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(" on Tue, 13 Aug 2024, 23:06:55 GMT+8]")])])])}
}];
  