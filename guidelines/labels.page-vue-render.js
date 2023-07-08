
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#working-with-github-labels"}},[_v("Working with GitHub labels‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#label-groups"}},[_v("Label groups‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-labels"}},[_v("Common labels‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#priority-p"}},[_v("Priority (p.)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#status-s"}},[_v("Status (s.)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#category-c"}},[_v("Category (c.)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#difficulty-d"}},[_v("Difficulty (d.)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#effort-e"}},[_v("Effort (e.)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#aspect-a"}},[_v("Aspect (a-)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-f"}},[_v("Feature (f-)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tech-t"}},[_v("Tech (t-)‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#special-labels"}},[_v("Special labels‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#other-guidelines"}},[_v("Other guidelines‎")])])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p'),_c('h1',{attrs:{"id":"working-with-github-labels"}},[_c('span',{staticClass:"anchor",attrs:{"id":"working-with-github-labels"}}),_v("Working with GitHub labels"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#working-with-github-labels","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_v("As a project grows, issue/PR labels can play an increasingly important role in managing a large number of issues/PRs. This document has some guidelines that can improve consistency across projects and help make the use of labels more productive.")])]),_v(" "),_c('p',[_v("Unless mentioned otherwise, "),_c('em',[_v("labels are applied to issues only")]),_v(" (not PRs).")]),_v(" "),_c('h2',{attrs:{"id":"label-groups"}},[_c('span',{staticClass:"anchor",attrs:{"id":"label-groups"}}),_v("Label groups"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#label-groups","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While GitHub does not have the concept of label groups, we can simulate label groups using systematic label naming.\ni.e. labels having the same prefix are considered part of a label group.")]),_v(" "),_c('p',[_v("There are two types of label groups:")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Exclusive groups")]),_v(": No more than one label from the group can be applied to an issue")]),_v(" "),_c('li',[_c('strong',[_v("Non-exclusive groups")]),_v(": Multiple labels from a group can be applied to an issue")])]),_v(" "),_c('p',[_c('em',[_v("Common label groups")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("exclusive: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.")]),_v(" status, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.")]),_v(" priority, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.")]),_v(" category, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.")]),_v(" difficulty, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("e.")]),_v(" effort,")]),_v(" "),_c('li',[_v("non-exclusive: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-")]),_v(" aspect, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f-")]),_v(" feature, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-")]),_v(" tech,")])]),_v(" "),_c('h2',{attrs:{"id":"common-labels"}},[_c('span',{staticClass:"anchor",attrs:{"id":"common-labels"}}),_v("Common labels"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-labels","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"priority-p"}},[_c('span',{staticClass:"anchor",attrs:{"id":"priority-p"}}),_v("Priority ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#priority-p","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.Critical")]),_v(": Would like to fix it ASAP and release as a hot patch.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.Urgent")]),_v(": Would like to handle in the very next release.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.High")]),_v(": Enhances user experience significantly, would like to do in the next few releases.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.Medium")]),_v(": Marginal impact on user experience.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.Low")]),_v(": Very little impact, unlikely to do in the near future.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p.Zero")]),_v(": Unlikely to do, ever.")])]),_v(" "),_c('p',[_v("NOTE: An issue is considered as "),_c('em',[_v("accepted")]),_v(" when a priority label has been assigned.")]),_v(" "),_c('h3',{attrs:{"id":"status-s"}},[_c('span',{staticClass:"anchor",attrs:{"id":"status-s"}}),_v("Status ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#status-s","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Open issues\n"),_c('ul',[_c('li',[_v("No status: New issue yet to be triaged.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.OnHold")]),_v(": The work on the issue has been put on hold pending some other event.")])])]),_v(" "),_c('li',[_v("Open PR\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.ToReview")]),_v(": Waiting for the review.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.Ongoing")]),_v(": The PR is being worked on.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.ToMerge")]),_v(": Main reviewer approved the changes.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.MergeApproved")]),_v(": Both main reviewer and the code quality reviewer has approved the merge. PR can be merged.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s.OnHold")]),_v(": The work on the PR has been put on hold pending some other event.")])])])]),_v(" "),_c('h3',{attrs:{"id":"category-c"}},[_c('span',{staticClass:"anchor",attrs:{"id":"category-c"}}),_v("Category ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#category-c","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Changes to "),_c('em',[_v("functionality")]),_v(", categorized based on size\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Enhancement")]),_v(": An enhancement to an existing functionality (not big enough to be considered as a user story).")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Story")]),_v(" : A user story."),_c('br'),_v("\nOR "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Feature")]),_v(": A new feature.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Epic")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Theme")]),_v(": A feature that be broken down into many user-stories/features.")])])]),_v(" "),_c('li',[_v("Other work\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Bug")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Task")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Chore")]),_v(": Other work items such as updating documentation.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c.Message")]),_v(": Issue used as a means of discussing something with the dev team."),_c('br'),_v("\ne.g. a request for help on setting up dev environment.")])])])]),_v(" "),_c('h3',{attrs:{"id":"difficulty-d"}},[_c('span',{staticClass:"anchor",attrs:{"id":"difficulty-d"}}),_v("Difficulty ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#difficulty-d","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.Easy")]),_v(": For new contributors to do as their first PR. MUST be simple enough to be contained in one commit.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.Moderate")]),_v(": Moderate difficulty. Small localized change.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.Hard")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.VeryHard")]),_v(": More difficult issues that are better left for committers or more senior developers.")])]),_v(" "),_c('h3',{attrs:{"id":"effort-e"}},[_c('span',{staticClass:"anchor",attrs:{"id":"effort-e"}}),_v("Effort ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("e.")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#effort-e","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This label can be used to indicate how much effort is expected for (or was spent on) an issue.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("e.1")]),_v(" is roughly equal to an hour of work, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("e.2")]),_v(" is two hours of work, and so on. Recommended values: 1,2,4,8,16,32")]),_v(" "),_c('p',[_v("Effort labels can be applied to PRs indicate effort for reviewing (by the main reviewer). Those applied for issues can indicate\nthe effort for fixing the issue.")]),_v(" "),_c('h3',{attrs:{"id":"aspect-a"}},[_c('span',{staticClass:"anchor",attrs:{"id":"aspect-a"}}),_v("Aspect ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspect-a","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Classifies the issues based on the non-functional aspect it tackles. Some examples:")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Label")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-AccessControl")])]),_v(" "),_c('td',[_v("Controlling access to user groups, authentication, privacy, anonymity")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-CodeQuality")])]),_v(" "),_c('td',[_v("Refactorings that are mainly to improve code/design quality")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Concurrency")])]),_v(" "),_c('td',[_v("Things related to concurrent access, session control")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-DevOps")])]),_v(" "),_c('td',[_v("CI, release management, version control, dev docs")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Docs")])]),_v(" "),_c('td',[_v("User docs, product website")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-FaultTolerance")])]),_v(" "),_c('td',[_v("Resilience to user errors, environmental problems")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Performance")])]),_v(" "),_c('td',[_v("Speed of operation")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Persistence")])]),_v(" "),_c('td',[_v("Saving data permanently")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Scalability")])]),_v(" "),_c('td',[_v("Related to behavior at increasing loads")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Security")])]),_v(" "),_c('td',[_v("Protection from security threats")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-Testing")])]),_v(" "),_c('td',[_v("Testing efficiency and robustness (as opposed to testing a specific feature)")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-UIX")])]),_v(" "),_c('td',[_v("User interface, User experience, Responsiveness")])])])])]),_v(" "),_c('h3',{attrs:{"id":"feature-f"}},[_c('span',{staticClass:"anchor",attrs:{"id":"feature-f"}}),_v("Feature ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f-")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-f","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Classifies the issue based on the feature it involves. These labels depend on the project.\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f-Admin")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f-Sessions")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f-Delete")])]),_v(" "),_c('h3',{attrs:{"id":"tech-t"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tech-t"}}),_v("Tech ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tech-t","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Classifies the issue based on the tool/technology it involves. Some examples given below.")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Label")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-CSS")])]),_v(" "),_c('td',[_v("CSS, Bootstrap")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-HTML")])]),_v(" "),_c('td',[_v("HTML, Browsers")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-JS")])]),_v(" "),_c('td',[_v("Javascript, JQuery")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t-JSTL")])]),_v(" "),_c('td',[_v("JSTL, JSP, Servlets")])])])])]),_v(" "),_c('h3',{attrs:{"id":"special-labels"}},[_c('span',{staticClass:"anchor",attrs:{"id":"special-labels"}}),_v("Special labels"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#special-labels","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("good first issue")]),_v(": for first time contributors (note that "),_c('a',{attrs:{"href":"https://help.github.com/en/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels"}},[_v("GitHub treats this label in a special way")]),_v(")")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("kudos")]),_v(": to appreciate good work done in a PR")])]),_v(" "),_c('h2',{attrs:{"id":"other-guidelines"}},[_c('span',{staticClass:"anchor",attrs:{"id":"other-guidelines"}}),_v("Other guidelines"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-guidelines","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("When choosing label colors:\n"),_c('ul',[_c('li',[_v("Choose bright colors for labels that should get more attention. "),_c('a',{attrs:{"href":"https://github.com/oss-generic/process/labels?sort=name-asc%5BHere%5D"}},[_v("https://github.com/oss-generic/process/labels?sort=name-asc[Here]")]),_v(" are some sample labels with suitable colors.")]),_v(" "),_c('li',[_v("Label groups that represent a scale (e.g., difficulty, effort, severity) can be given increasingly darker shades of the same color ("),_c('a',{attrs:{"href":"https://github.com/oss-generic/process/labels?q=e."}},[_v("example")]),_v(")")])])]),_v(" "),_c('li',[_v("Use UpperCamelCase for label names; Keep group prefixes short and use lower case.")])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(" on Sat, 8 Jul 2023, 23:58:09 GMT+8]")])])])}
}];
  