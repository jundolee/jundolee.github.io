"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,l){var n=l(7294),a=l(1883);t.Z=()=>{var e;const t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return n.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&n.createElement("p",null,(null==t?void 0:t.summary)||null," "))}},8678:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{let{location:t,title:l,children:r}=e;const i="/"===t.pathname;let o;return o=i?n.createElement("h1",{className:"main-heading"},n.createElement(a.Link,{to:"/"},l)):n.createElement(a.Link,{className:"header-link-home",to:"/"},l),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},o),n.createElement("main",null,r),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{var t,l,r;let{description:i,title:o,children:c}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?o+" | "+u:o),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(l=m.siteMetadata)||void 0===l||null===(r=l.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:s}),c)}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var n=l(7294),a=l(1883),r=l(8771),i=l(8678),o=l(9357);t.default=e=>{var t;let{data:l,location:o}=e;const c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?n.createElement(i.Z,{location:o,title:c},n.createElement(r.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:o,title:c},n.createElement(r.Z,null),n.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt||e.frontmatter.description},itemProp:"excerpt"}))))}))))};const c=()=>n.createElement(o.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-fc7e937bc2d9234002b5.js.map