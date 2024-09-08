
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Reason: Chrome’s PDF engine preserves hyperlinks used in Web pages.")])]),_v(" "),_c('p',[_v("Here are the steps to convert the project documentation files to PDF format.")]),_v(" "),_m(3),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',{staticClass:"text-success"},[_v("Adding a page break manually")])]),_v(" "),_c('p',[_v("In some cases, you might want to force a page break at a certain point in the generated PDF file. In those case, you can do so by inserting the following into the corresponding place in your source file.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("style")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"page-break-after: always;\"")]),_v(">")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(">")]),_v("\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(4)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"saving-web-documents-as-pdf-files"}},[_v("Saving web documents as PDF files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-web-documents-as-pdf-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use Chrome ("),_c('mark',[_c('span',{staticClass:"text-danger"},[_v("NOT any other Browser")])]),_v(")")]),_v(" for converting documentation to PDF format.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Go to your generated documentation site on GitHub using Chrome.")])]),_v(" "),_c('li',[_c('p',[_v("Within Chrome, click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Print")]),_v(" option in Chrome’s menu.")])]),_v(" "),_c('li',[_c('p',[_v("Set the destination to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Save as PDF")]),_v(", then click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Save")]),_v(" to save a copy of the file in PDF format."),_c('br'),_v(" "),_c('mark',[_v("For best results, use the settings indicated in the screenshot below.")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/chrome_save_as_pdf.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/chrome_save_as_pdf.png","alt":"Saving documentation as PDF files in Chrome"}})])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Sun, 8 Sept 2024, 15:24:14 GMT+8]")])])])}
}];
  