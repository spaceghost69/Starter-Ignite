(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),l=a(76),i=a.n(l),c=a(0),o=a.n(c),s=a(166),m=a(162),u=(a(213),a(7)),d=a.n(u),p=a(156),h=a(175),f=a.n(h),g=a(182),v=(a(221),a(222)),E=function(e,t,a){return void 0!==a&&a.length>0?a:e.endsWith("success.html")?"Final Step":"Step "+t},b=function(e,t){return t===e?"active":t<e?"":t>=e?"complete":void 0},N=function(e){return o.a.createElement(p.b,{query:"3819603454",render:function(t){var a=t.allMdx.edges.map(function(e){return e.node.fields}),n=e.stepNumber;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"sheet"},o.a.createElement("ol",{className:"multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top"},a.map(function(e,t){var r=e.slug,l=e.stepNumber,i=e.short;return o.a.createElement("li",{key:t,className:b(l,n)+" multi-step-item multi-step-item-expand"},a[t+1]&&o.a.createElement("div",{className:"multi-step-divider"}),o.a.createElement("div",{className:"multi-step-indicator"},o.a.createElement("div",{className:"multi-step-indicator-label"},E(r,l,i)),o.a.createElement(p.a,{className:"multi-step-icon","data-multi-step-icon":""+l,to:r})))})))))},data:v})},y=a(171),w=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"onboarding-main"},o.a.createElement(g.a,{components:{h1:y.a.H1,h2:y.a.H2,h3:y.a.H3,h4:y.a.H4,p:y.a.P}},this.props.codeBody),o.a.createElement("div",{className:"social"},o.a.createElement("div",{className:"social-buttons"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("div",{className:"btn-group-item"},o.a.createElement(p.a,{to:"onboarding/one.html",className:"btn btn-primary"},"Get Started"))))))},t}(c.Component),S=a(165),_=a(172),x=a(173),C=a(160),T=a(164),k=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this._codeTabs=new _.a,this._codeClipboard=new x.a},a.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},a.render=function(){var e=this.props.data.mdx,t=e.code.body,a=e.excerpt,n=e.timeToRead,r=e.frontmatter,l=r.mainPage,i=r.title,c=r.stepNumber,s=r.description,m=r.needsAuth,u=this.props.pageContext,d=u.previous,h=u.next;return o.a.createElement(T.a,{needsAuth:m},o.a.createElement("div",{className:"onboarding"},o.a.createElement(f.a,null,o.a.createElement("title",null,i),o.a.createElement("meta",{name:"description",content:a}),o.a.createElement("meta",{name:"og:description",content:a}),o.a.createElement("meta",{name:"twitter:description",content:a}),o.a.createElement("meta",{name:"og:title",content:i}),o.a.createElement("meta",{name:"og:type",content:"article"}),o.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),o.a.createElement("meta",{name:"twitter:data1",content:n+" min read"})),o.a.createElement("header",{className:"header"},o.a.createElement(C.a,{opaque:!l,fixed:l}),l&&o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"intro blog-intro text-center col"},o.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},o.a.createElement("h1",{className:"h1"},i),o.a.createElement("h2",{className:"h3"},s)))))),o.a.createElement("main",{className:"content"},o.a.createElement("div",{className:"clay-site-container container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},!l&&o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{stepNumber:c}),o.a.createElement("div",{className:"article-header"},o.a.createElement("h1",{className:"clay-h1"},i),o.a.createElement("cite",{className:"clay-h4"},s)),o.a.createElement("article",null,o.a.createElement(g.a,{components:{h1:y.a.H1,h2:y.a.H2,h3:y.a.H3,h4:y.a.H4,p:y.a.P}},t),o.a.createElement("div",{className:"social"},o.a.createElement("div",{className:"social-buttons"},o.a.createElement("div",{className:"btn-group"},d.fields&&o.a.createElement("div",{className:"btn-group-item"},o.a.createElement(p.a,{to:d.fields.slug,className:"btn btn-secondary"},"Previous")),h.fields&&h.fields.slug.startsWith("onboarding")&&o.a.createElement("div",{className:"btn-group-item"},o.a.createElement(p.a,{to:h.fields.slug,className:"btn btn-primary"},"Next Step"))))))),l&&o.a.createElement(w,{codeBody:t}))))),o.a.createElement(S.a,null)))},t}(c.Component);a.d(t,"pageQuery",function(){return L});var L="2860948260";t.default=function(e){var t=e.children,a=i()(e,["children"]);return o.a.createElement(s.MDXScopeProvider,{__mdxScope:r()({},m.a)},o.a.createElement(k,a,t))}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return o}),a.d(t,"d",function(){return s});a(36),a(37),a(180);var n=a(169),r=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},l=n.Nothing,i=function(e){var t=e.email,a=e.password;if(!o())return new Promise(function(e,n){l.signInWithEmailAndPassword(t,a).then(function(t){var a=t.data_,n=a.createdAt,l=a.email,i=a.id,c=a.token;r({createdAt:n,email:l,id:i,token:c}),e()}).catch(function(e){n(alert(e.error_description))})})},c=function(e){var t=e.email,a=e.password;if(!o())return new Promise(function(e,n){l.createUser({email:t,password:a}).then(function(t){e()}).catch(function(e){n(alert(e))})})},o=function(){return!!l.currentUser},s=function(){return r({}),l.signOut()}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(35),o=a.n(c);a.d(t,"a",function(){return o.a});a(157);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),l=a(0),i=a.n(l),c=a(4),o=a.n(c),s=a(54),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},160:function(e,t,a){"use strict";a(178);var n=a(38),r=a.n(n),l=a(7),i=a.n(l),c=a(179),o=a(0),s=a.n(o),m=a(156),u=a(170),d=a.n(u),p=a(155),h=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._rootNode=c.window||c.document,t._addScroll=t._addScroll.bind(r()(t)),t}i()(t,e);var a=t.prototype;return a._getScrollTop=function(){return this._rootNode===c.window?this._rootNode.pageYOffset:this._rootNode===c.document?this._rootNode.defaultView.pageYOffset:void 0},a._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},a._handleLogout=function(){var e=this;Object(p.d)().then(function(){e.forceUpdate()}).catch(function(e){alert(e),c.window.location.reload()})},a.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},a.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},a.render=function(){var e=this.props,t=e.fixed,a=void 0===t||t,n=e.opaque,r=void 0!==n&&n,l=e.effect,i=void 0!==l&&l,c=e.sidebarHamburguerIcon,o=void 0!==c&&c,u=d()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":a,scroll:i,"bg-primary":r});return s.a.createElement("nav",{ref:"navElement",className:u},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(m.a,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",alt:"Starter StackGen Logo",src:"/logos/StackGenLogo-2019.png"})),o&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"}))),s.a.createElement("ul",{className:"navbar-nav ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(m.a,{className:"nav-link ml-lg-3",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link ml-lg-3",href:"http://stackgen.io/"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(m.a,{className:"nav-link ml-lg-3",to:"/updates/"},"Updates")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/StarterInc/StackGen",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/images/home/GitHub-Mark-64px.svg",alt:""}))))))},t}(o.Component);t.a=h},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(174);t.a={React:r.a,MDXTag:l.MDXTag}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(155),o=(a(181),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={email:"",password:""},t.handleUpdate=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t._handleSignUp=function(e){e.preventDefault(),Object(c.b)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t._handleSubmit=function(e){e.preventDefault(),Object(c.a)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"clay-site-container container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"sheet"},i.a.createElement("div",{className:"sheet-header"},i.a.createElement("h2",{className:"sheet-title"},"Login")),i.a.createElement("form",{method:"post",onSubmit:function(t){e._handleSubmit(t)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypeEmail"},"Email"),i.a.createElement("input",{className:"form-control",autoComplete:"email",type:"email",name:"email",onChange:this.handleUpdate,id:"basicInputTypeEmail"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypePassword"},"Password"),i.a.createElement("input",{className:"form-control",autoComplete:"current-password",id:"basicInputTypePassword",onChange:this.handleUpdate,placeholder:"Enter password",name:"password",type:"password"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"btn-group"},i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("a",{className:"btn btn-secondary",onClick:function(t){e._handleSignUp(t)},href:"#no"},"Sign Up")))))))))))},t}(l.Component)),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={login:!1},a}r()(t,e);var a=t.prototype;return a.changeLoginState=function(e){this.setState(function(){return{login:e}})},a.componentDidMount=function(){this.setState({login:!!Object(c.c)()})},a.render=function(){return this.props.needsAuth&&!this.state.login?i.a.createElement(o,{changeLoginState:this.changeLoginState.bind(this)}):this.props.children},t}(l.Component);t.a=s},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg text-center text-sm-left mb-4 mb-lg-0"}),r.a.createElement("div",{className:"col-lg text-center text-sm-right"},r.a.createElement("div",null,r.a.createElement("br",null),"Powered by ",r.a.createElement("a",{href:"http://docs.stackgen.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"title align-middle"},"StackGen"))),"Built with ❤️ in San Francisco by ",r.a.createElement("a",{href:"http://www.starter.io",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"logo",alt:"starter logo",src:"/logos/starter_logo_vertical_color@x2.png"}))))))};t.a=l},171:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"H1",function(){return i}),a.d(n,"H2",function(){return c}),a.d(n,"H3",function(){return o}),a.d(n,"H4",function(){return s}),a.d(n,"P",function(){return m});var r=a(0),l=a.n(r),i=function(e){return l.a.createElement("h1",{className:"clay-h1"},e.children)},c=function(e){return l.a.createElement("h2",{className:"clay-h2"},e.children)},o=function(e){return l.a.createElement("h3",{className:"clay-h3"},e.children)},s=function(e){return l.a.createElement("h4",{className:"clay-h4"},e.children)},m=function(e){return l.a.createElement("p",{className:"clay-p"},e.children)};t.a=n},172:function(e,t,a){"use strict";var n=a(158),r=a.n(n),l=a(187),i=a.n(l),c=function(){function e(){var e=this,t=[];Array.prototype.slice.call(document.querySelectorAll(".code-container")).forEach(function(a){t.push({label:e._getTabLabelFromElement(a),element:a}),a.nextElementSibling&&r.a.hasClass(a.nextElementSibling,"code-container")||(t.length>1&&e._renderTabs(t),t=[])})}var t=e.prototype;return t._getTabLabelFromElement=function(e){return e.getAttribute("data-label")},t._hide=function(e){r.a.addClasses(e,"hide")},t._hideAll=function(e){var t=this;e.forEach(function(e){t._hide(e.element)})},t._renderTabs=function(e){var t=this,a=r.a.buildFragment('<div class="tabContainer"></div>'),n=new i.a({elementClasses:"nav-code-tabs",tabs:e},a);n.on("changeRequest",function(e){var a=e.state.tab;t._hideAll(n.tabs),t._show(n.tabs[a].element)}),this._hideAll(n.tabs),this._show(n.tabs[0].element),e[0].element.parentNode.insertBefore(a,e[0].element)},t._show=function(e){r.a.removeClasses(e,"hide")},e}();t.a=c},173:function(e,t,a){"use strict";var n=a(189),r=a.n(n),l=a(190),i=a.n(l),c=function(){},o=function(){function e(){this.clayTooltip=new r.a(new c),this.clayClipboard=new i.a({selector:".code-container .btn-copy",text:function(e){return e.setAttribute("title","Copied"),setTimeout(function(){e.setAttribute("title","Copy")},2e3),e.parentNode.querySelector("pre code").innerText}})}return e.prototype.dispose=function(){this.clayTooltip.dispose(),this.clayClipboard.dispose()},e}();t.a=o},213:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(77),i="".startsWith;n(n.P+n.F*a(78)("startsWith"),"String",{startsWith:function(e){var t=l(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})},221:function(e,t,a){"use strict";var n=a(11),r=a(15),l=a(77),i="".endsWith;n(n.P+n.F*a(78)("endsWith"),"String",{endsWith:function(e){var t=l(this,e,"endsWith"),a=arguments.length>1?arguments[1]:void 0,n=r(t.length),c=void 0===a?n:Math.min(r(a),n),o=String(e);return i?i.call(t,o,c):t.slice(c-o.length,c)===o}})},222:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{slug:"onboarding/one.html",stepNumber:1,short:"Select"}}},{node:{fields:{slug:"onboarding/two.html",stepNumber:2,short:"Clone"}}},{node:{fields:{slug:"onboarding/three.html",stepNumber:3,short:"Design"}}},{node:{fields:{slug:"onboarding/four.html",stepNumber:4,short:"Run"}}},{node:{fields:{slug:"onboarding/success.html",stepNumber:5,short:"Success"}}}]}}}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-5-c-99519-e-43-d-7-bd-6-d-2771-e-717590-a-0-c-5-c-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-4c1aedc04e7f47368527.js.map