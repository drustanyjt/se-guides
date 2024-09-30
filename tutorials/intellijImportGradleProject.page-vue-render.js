
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_c('div',{attrs:{"id":"importing-gradle-project"}},[_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("If the project comes with Gradle support, you will see a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file in your project root.")])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("IntelliJ IDEA has the Gradle plugin installed by default.  If you have disabled it, go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" to re-enable it."),_c('br'),_v("\nIf your project involves GUI programming, similarly ensure the JavaFX plugin has not been disabled.")])]),_v(" "),_m(2),_v(" "),_c('div',{staticClass:"indented-level1",attrs:{"id":"configure-intellij-sdk"}},[_m(3),_v(" "),_c('div',{staticClass:"indented-level1"},[_c('panel',{attrs:{"peek":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Intellij: Setting the JVM for Gradle")])]},proxy:true}])},[_v(" "),_c('p',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" and ensure the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle JVM")]),_v(" is set as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project SDK ...")]),_v(", so that Gradle will use the same JDK used by the project.")]),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/gradle/intellijSetGradleJvm.png"}}),_v(" "),_c('p',[_v("Also take note of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Build and run using:")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run tests using:")]),_v(" settings. They are useful if you want to control whether you want Intellij to use Gradle to build/run/test your project.")])],1)],1)]),_v(" "),_m(4)],1),_c('p')]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(5)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"intellij-idea-importing-a-gradle-project"}},[_v("Intellij IDEA: Importing a Gradle project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#intellij-idea-importing-a-gradle-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Open Intellij.")]),_v(" "),_c('li',[_v("If you are in the welcome screen, Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Open")]),_v(". Otherwise, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Open")]),_v("."),_c('br'),_v("\ni. Select the project directory, and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")]),_v("."),_c('br'),_v("\nii. If there are any further prompts, accept the defaults but do ensure that the selected version of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle JVM")]),_v(" matches the JDK being used for the project.")]),_v(" "),_c('li',[_v("Confirm the correct Java version is being used for Gradle, as follows:")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("(a) Confirm the project JDK is set to the one you are supposed to use for the project, as explained "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/sdk.html#set-up-jdk"}},[_v("here")]),_v("."),_c('br'),_v("\n(b) Confirm the correct JVM is used for Gradle, as given in the panel below:")])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"4"}},[_c('li',[_v("After the importing of the project is complete (which could take a few minutes), you will see the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle Toolbar")]),_v(" in the IDEA interface "),_c('span',{staticClass:"dimmed"},[_v("e.g., look for the elephant icon (on Windows, this appears on the right-edge of the IDE window) and click it")]),_v("."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/GradleIcon.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/GradleIcon.png","alt":"Gradle icon"}})])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Mon, 30 Sept 2024, 10:12:16 GMT+8]")])])])}
}];
  