(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{154:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(161),c=n.n(s),l=n(299),p=n(191),u=n(233),m=n(156),f=n.n(m),h=n(172),d=n(190),g=n(176),v=n(178),E=n(180),y=n(182),N=n(184),b=n(186),C=n(234),x=(n(307),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("img",{src:"logos/logo-192x192.png",className:"page-logo"})},t}(i.a.Component)),w=n(236),k=n(266),T=n(241),A=n(205);n.d(t,"pageQuery",function(){return O});var I=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes,n=e.page,a=e.pages,r=e.total,o=e.limit,s=e.prev,m=e.next,I=this.props.data.authors.edges;return i.a.createElement(A.a,{location:this.props.location},i.a.createElement(h.a,{className:"home-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,{title:f.a.siteTitle}),i.a.createElement(u.a,{postEdges:t}),i.a.createElement(d.a,{config:f.a,onClose:this.handleOnClose}),i.a.createElement(g.a,null,i.a.createElement("div",{className:"home-template"},i.a.createElement(E.a,{cover:f.a.siteCover},i.a.createElement(y.a,{overlay:f.a.siteCover},i.a.createElement(N.a,{logo:f.a.siteLogo,title:f.a.siteTitle}),i.a.createElement(b.a,{navigation:f.a.siteNavigation,onClick:this.handleOnClick})),i.a.createElement("div",{className:"vertical"},i.a.createElement("div",{className:"main-header-content inner"},i.a.createElement(x,null),i.a.createElement(C.a,{text:f.a.siteTitle}),i.a.createElement(w.a,{text:f.a.siteDescription}),i.a.createElement(T.a,{urls:f.a.siteSocialUrls,color:"currentColor"}))),i.a.createElement(l.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"-45",spy:!0,smooth:!0,duration:500},i.a.createElement("span",{className:"hidden"},"Scroll Down"))),i.a.createElement(k.a,{page:n,pages:a,total:r,limit:o,prev:s,next:m},i.a.createElement(p.a,{postEdges:t,postAuthors:I}))),i.a.createElement(v.a,{copyright:f.a.copyright,promoteGatsby:f.a.promoteGatsby}))))},t}(i.a.Component),O="3144631907";t.default=I},156:function(e,t){e.exports={blogPostDir:"posts",blogAuthorDir:"authors",blogAuthorId:"johnmcmahon",siteTitle:"Ignite",siteTitleAlt:"Starter Ignite Code Generation Platform",siteLogo:"https://github.com/StarterInc/Ignite/blob/gh-pages/logos/logo-512x512.png?raw=true",siteUrl:"https://starterinc.github.io",pathPrefix:"/Ignite",siteDescription:"Starter Ignite Documentation Site",siteCover:"https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA19964-640x350.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"John McMahon",sitePaginationLimit:10,googleAnalyticsID:"UA-x-1",siteSocialUrls:["https://github.com/StarterInc/Ignite","https://twitter.com/TechnoCharms","mailto:info@starter.io"],postDefaultCategoryID:"Tech",userLinks:[{label:"GitHub",url:"https://github.com/StarterInc/Ignite",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/TechnoCharms",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:info@starter.io",iconClassName:"fa fa-envelope"}],copyright:{label:"Starter Ignite",year:"2019"},themeColor:"#ff9900",backgroundColor:"#e0e0e0",promoteGatsby:!0}},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},177:function(e,t,n){},178:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=s},179:function(e,t,n){},180:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return i.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=l},181:function(e,t,n){},182:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},183:function(e,t,n){},184:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(36),c=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},185:function(e,t,n){},186:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},187:function(e,t,n){},190:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=(n(25),n(76)),i=n.n(o),s=n(0),c=n.n(s),l=(n(77),n(36));var p=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:l.Link,to:"/about/"}),t},u=(n(174),n(175),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?c.a.createElement("a",{className:"subscribe-button icon-feed",href:e},"Subscribe"):null},t}(c.a.Component)),m=function(){return null},f=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},h=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},d=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(h,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?m:o?f:h;var p=Object.assign({},l,{key:t.key||n});return c&&(p.nestedItems=c.map(e)),Object(s.createElement)(a,p)},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=p(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(d)),c.a.createElement(u,{url:t.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=g},191:function(e,t,n){"use strict";n(158);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(36),c=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?i.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(i.a.Component)),l=n(192),p=n(156),u=n.n(p),m=n(193),f=n(194),h=n(195),d=n(196),g=n(197),v=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:g.a.getAuthor(t,e.node.frontmatter.author,u.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return i.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,p=e.date,u=e.post_class?e.post_class:"post";return i.a.createElement(f.a,{className:u,key:t},i.a.createElement(h.a,null,i.a.createElement("h2",{className:"post-title"},i.a.createElement(s.Link,{to:n},t))),i.a.createElement("section",{className:"post-excerpt"},i.a.createElement("p",null,a," ",i.a.createElement(s.Link,{className:"read-more",to:n},"»"))),i.a.createElement("footer",{className:"post-meta"},i.a.createElement(c,{avatar:r.image,name:r.name}),i.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),i.a.createElement(l.a,{prefix:" on ",tags:o}),i.a.createElement(d.a,{date:p})))}))},t}(i.a.Component));t.a=v},192:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(271),c=n.n(s),l=n(36),p=(n(228),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?i.a.createElement("span",null,t,n.map(function(e,t,n){return i.a.createElement("span",{key:e},i.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=p},193:function(e,t,n){"use strict";n(158);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(36),c=(n(229),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=c},194:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(230),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return i.a.createElement("article",{className:n},t)},t}(i.a.Component));t.a=s},195:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(231),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},196:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(273),c=n.n(s),l=(n(232),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return i.a.createElement("time",{className:"post-date",dateTime:c()(new Date(e)).format("YYYY-MM-DD")},c()(new Date(e)).format("DD MMMM YYYY"))},t}(i.a.Component));t.a=l},197:function(e,t,n){"use strict";n(78);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var o=r(e);return this.hasAuthor(e,t)?o.find(a(t)):o.find(a(n))},e}();t.a=o},205:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(275),n(276),n(37);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(161),c=n.n(s),l=n(156),p=n.n(l),u=(n(252),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.a.pathPrefix?p.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,p.a.siteTitle+" |  "+this.getLocalTitle()),i.a.createElement("meta",{name:"description",content:p.a.siteDescription})),e)},t}(i.a.Component))},208:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},209:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(161),c=n.n(s),l=n(156),p=n.n(l),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var u=o.frontmatter;e=u.title,t=u.description?u.description:o.excerpt,n=u.cover,a=p.a.siteUrl+p.a.pathPrefix+s}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;var m="/"===p.a.pathPrefix?"":p.a.pathPrefix;n=p.a.siteUrl+m+n;var f=p.a.siteUrl+p.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return l&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:l?a:f}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=u},234:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(235),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h1",{className:"page-title"},e):null},t}(i.a.Component));t.a=s},235:function(e,t,n){},236:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(237),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h2",{className:"page-description"},e):null},t}(i.a.Component));t.a=s},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(274),c=(n(251),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?i.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return i.a.createElement(s.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(i.a.Component));t.a=c},251:function(e,t,n){},252:function(e,t,n){},266:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(208),c=(n(25),n(36)),l=(n(238),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,i.a.createElement(c.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(i.a.Component)),p=(n(239),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return i.a.createElement("nav",{className:"pagination"},i.a.createElement(l,{className:"newer-posts",url:a,text:"← Newer Posts"}),i.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.a.createElement(l,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(i.a.Component)),u=(n(240),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),i.a.createElement(s.a,{className:c},i.a.createElement("div",{className:"extra-pagination inner"},i.a.createElement(p,{page:t,pages:n,prev:a,next:r})),o,i.a.createElement(p,{page:t,pages:n,prev:a,next:r}))},t}(i.a.Component));t.a=u},307:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-index-jsx-f530181faca4fb7a23e1.js.map