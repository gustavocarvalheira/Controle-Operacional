(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"./src/routes/NavigationTimingReporter.tsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t("./node_modules/react-redux/es/index.js"),a=t("./src/framework/reporter/performance.tsx"),i=t("./src/log/datapupLogger.ts"),u=t("./src/routes/RoutingContext.tsx"),s=t("./src/store/selectors/session.ts"),c=t("./src/util/performance.ts"),l=function(e){return Math.round(1e3*e)};n.default=function(e){var n=e.to,t=e.from,d=r.useRef(null),f=Object(a.c)(),m=Object(u.c)(),p=Object(o.f)((function(e){return e.debug.originalSpanCarrier})),g=Object(o.f)((function(e){return e.session.user.id})),v=Object(o.f)((function(e){return e.tracing}),o.d),h=v.originalSpan,w=v.tracer;return r.useEffect((function(){if(w)if(d.current||n.pathname===t.pathname){if(d.current){var e,r,o,a,u=d.current.pathname,v=d.current.time,b=Date.now();d.current=null;var j={to:null!==(e=null===(r=m(n.pathname))||void 0===r?void 0:r.route.name)&&void 0!==e?e:"unknown",from:null!==(o=null===(a=m(u))||void 0===a?void 0:a.route.name)&&void 0!==o?o:"unknown",loggedIn:Object(s.a)(g)},x={tags:j};p&&(x.childOf=h),w.startSpan("client.navigation",x).setBeginMicros(l(v)).setEndMicros(l(b)).finish(),f&&f.reportClientNav(j,new c.a(v,b)),i.a.log("client navigation",{duration:b-v,to:n.pathname,toRouteName:j.to,from:u,fromRouteName:j.from,loggedIn:j.loggedIn})}}else d.current={pathname:t.pathname,time:Date.now()}}),[w,n.pathname,t.pathname]),null}}}]);
//# sourceMappingURL=reporting.70a72b4c.chunk.js.map