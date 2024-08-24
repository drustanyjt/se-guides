
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("This tweak does not apply if you use Gradle to run code even within Intellij. In that case, refer to 'Enabling assertions' sections of the "),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html#enabling-assertions"}},[_c('em',[_v("Gradle tutorial")])]),_v(".")])]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_c('pic',{attrs:{"src":"/guides/tutorials/images/intellij/softWraps-before.png"}})],1),_v(" "),_c('p',[_v("Luckily, "),_c('strong',[_v("you can use the 'soft wrap' feature of Intellij to get the editor window to put "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("they are called 'soft' because the line break is for displaying purposes only -- it will not appear in the saved code")]},proxy:true}])},[_c('em',[_v("soft")])]),_v(" line breaks in the content so that horizontal scrolling is no longer required")],1),_v(". Here is how the same code from the above example looks after enabling the soft-wraps feature (notice how the whole text is visible now, due to the soft line breaks added by the editor):")]),_v(" "),_c('p',[_c('pic',{attrs:{"src":"/guides/tutorials/images/intellij/softWraps-after.png"}})],1),_v(" "),_m(6),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#intellij-idea-useful-settings"}},[_v("Intellij IDEA: Useful settings‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#enabling-assertions"}},[_v("Enabling assertions‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#enabling-soft-wrapping"}},[_v("Enabling soft wrapping‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(7)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"intellij-idea-useful-settings"}},[_v("Intellij IDEA: Useful settings"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#intellij-idea-useful-settings","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"enabling-assertions"}},[_v("Enabling assertions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#enabling-assertions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Edit Configurations...")]),_v(".")]),_v(" "),_c('li',[_v("Select the run configuration of interest.")]),_v(" "),_c('li',[_v("Click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Modify options")]),_v(" link and choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Add VM options")]),_c('br'),_v(" "),_c('img',{attrs:{"src":"/guides/tutorials/images/intellij/addVmOptions.png","width":"800"}})]),_v(" "),_c('li',[_v("Add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-ea")]),_v(" to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VM options")]),_v(" box.\n"),_c('img',{attrs:{"src":"/guides/tutorials/images/intellij/enableAssertions.png","width":"800"}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"enabling-soft-wrapping"}},[_v("Enabling soft wrapping"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#enabling-soft-wrapping","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("While it is common to enforce a maximum line length for code written in some languages (typically, for code made up of "),_c('em',[_v("statements")]),_v(" such as Java), it is also common not to enforce such a limit for source content that contain paragraph-like structures (e.g., Markdown, HTML). In such cases, you'll need to scroll the editor window horizontally to read the content, which can be a frustrating experience. Here's an example (notice how the text continues beyond the visible area of the editor window and you need to use the horizontal scrolling to see the hidden part):")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Read "),_c('a',{attrs:{"href":"https://www.jetbrains.com/idea/guide/tips/enable-soft-wrap/"}},[_v("this")]),_v(" to find how to enable soft wraps.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(" on Sat, 24 Aug 2024, 13:54:10 GMT+8]")])])])}
}];
  