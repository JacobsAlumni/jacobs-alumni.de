(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{4292:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5671),o=n(3144),c=n(9340),u=n(6215),a=n(1120),i=n(4651),f=n(9008),l=n(1664),s=n(7294),d=n(5893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}function v(e){return(0,i.withRouter)(function(t){(0,c.Z)(u,t);var n=p(u);function u(){return(0,r.Z)(this,u),n.apply(this,arguments)}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){this.props.router.replace(e)}},{key:"render",value:function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.default,{children:[(0,d.jsx)("title",{children:"Redirecting \u2026"}),(0,d.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,d.jsx)(l.default,{href:e,children:(0,d.jsx)("a",{children:"Click here to be redirected"})})]})}}]),u}(s.Component))}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},u=n(1063),a=n(4651),i=n(7426);var f={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),s=c.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?u.resolveHref(o,e.as):a||c}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var _=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,g=i.useIntersection({rootMargin:"200px"}),E=r(g,2),k=E[0],R=E[1],w=c.default.useCallback((function(e){k(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,k]);c.default.useEffect((function(){var e=R&&n&&u.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=f[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,R,m,n,o]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:i,scroll:a}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof m?m:o&&o.locale,C=o&&o.isLocaleDomain&&u.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);L.href=C||u.addBasePath(u.addLocale(p,M,o&&o.defaultLocale))}return c.default.cloneElement(t,L)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,i=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],d=l[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,u=r.elements;return u.set(e,t),c.observe(e),function(){u.delete(e),c.unobserve(e),0===u.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=n(7294),c=n(3447),u="undefined"!==typeof IntersectionObserver;var a=new Map},7242:function(e,t,n){"use strict";n.r(t);var r=n(4292);t.default=(0,r.Z)("/chapters/")},1259:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alumni-chapters",function(){return n(7242)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=1259,e(e.s=t);var t}));var t=e.O();_N_E=t}]);