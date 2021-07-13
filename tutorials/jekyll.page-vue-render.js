
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Given below are some information useful for when you want to update documentation in a project that uses Jekyll.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('p',[_v("Do the following to set up the GitHub Pages website of your project:")]),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Recommendation:")]),_v(" Limit your content to Markdown and GFMD syntax only i.e., avoid kramdown-specific syntax that are not compatible with Markdown/GFMD")])]),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('ul',[_m(11),_v(" "),_c('li',[_m(12),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution")]),_v(": Modifying these files requires some knowledge and experience with Jekyll. You should only modify them (at your own risk) if you need greater control over the site’s layout.")])])],1)]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}})],1),_v(" "),_m(13)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-jekyll-for-project-documentation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-jekyll-for-project-documentation"}}),_v("Using Jekyll for project documentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-jekyll-for-project-documentation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://jekyllrb.com/"}},[_v("Jekyll")]),_v(" is a popular tool for generating static websites from markdown-like text")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-github-pages-for-jekyll"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-github-pages-for-jekyll"}}),_v("Setting up GitHub Pages for Jekyll"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-github-pages-for-jekyll","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("As GitHub has native support for Jekyll, it can convert your documentation into HTML and deploy it on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("githhub.io")]),_v(" URL of your project.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Go to your repo's "),_c('span',{staticClass:"border border-secondary border-bottom-0 pr-1 pl-1 mr-1 ml-1 rounded-top"},[_c('small',[_v("settings "),_c('span',{staticClass:"fas fa-cog",attrs:{"aria-hidden":"true"}})])]),_v(" tab.")]),_v(" "),_c('li',[_v("Scroll down to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHub Pages")]),_v(" section.")]),_v(" "),_c('li',[_v("Set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Source")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master branch /docs folder")]),_v(" (assuming project documentation is in that folder).")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The project website will be available at "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://{your_org}.github.io/{your_repo}")]),_v(" the next time the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch is updated. Example: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://myorg.github.io/myrepo")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"updating-documents"}},[_c('span',{staticClass:"anchor",attrs:{"id":"updating-documents"}}),_v("Updating documents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#updating-documents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Jekyll uses "),_c('a',{attrs:{"href":"https://kramdown.gettalong.org/syntax.html"}},[_c('strong',[_v("kramdown")])]),_v(" (a superset of Markdown) for writing content. You can use Intellij (or any other text editor) to update the relevant "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(" files.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Previewing changes locally")]),_v(": There are several ways to preview changes locally.\n"),_c('ul',[_c('li',[_c('strong',[_v("Option 1 -- Intellij preview")]),_v(": Intellij supports previewing Markdown files, as explained "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/markdown.html"}},[_v("here")]),_v(". While the preview shown by Intellij is somewhat rudimentary, it is good enough for most cases.")]),_v(" "),_c('li',[_c('strong',[_v("Option 2 -- Run Jekyll locally")]),_v(": You can "),_c('a',{attrs:{"href":"https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll"}},[_v("set up Jekyll locally and run it")]),_v(" to see the exact way the update affects the final outcome.")])])]),_v(" "),_c('li',[_c('strong',[_v("Previewing changes on GitHub")]),_v(":\n"),_c('ul',[_c('li',[_c('strong',[_v("Option 1 -- Github preview")]),_v(": You can see a basic preview of the page by navigating to the corresponding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(" source file in GitHub.")]),_v(" "),_c('li',[_c('strong',[_v("Option 2 -- Use Netlify PR preview")]),_v(": You can set up Netlify to show previews of PRs (to learn how, read the "),_c('a',{attrs:{"href":"/guides/tutorials/netlify.html"}},[_c('em',[_v("Using Netlify")])]),_v(" guide). This method shows a preview of the exact way the update affects the final outcome.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"site-wide-settings"}},[_c('span',{staticClass:"anchor",attrs:{"id":"site-wide-settings"}}),_v("Site-wide settings"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#site-wide-settings","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Typically, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("_config.yml")]),_v(" file specifies project-specific site-wide settings."),_c('br'),_v("\nAn example is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("title")]),_v(" property, which defines the title of your site, usually the name of your project.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The files in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/_include")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/_layouts")]),_v(" control the template of the pages; the files in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/_sass")]),_v(" control the style of the pages.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.4")]),_v(" on Wed, 14 Jul 2021, 1:59:52 GMT+8]")])])])}
}];
  