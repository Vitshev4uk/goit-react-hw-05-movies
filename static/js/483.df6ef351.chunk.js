"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{483:function(e,a,s){s.r(a),s.d(a,{default:function(){return g}});var r=s(861),t=s(439),n=s(757),i=s.n(n),c=s(791),l=s(243),o=s(689),d=s(87),h="BackLink_Link__f0OY6",u=s(184);var v=function(e){var a=e.children,s=e.to;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d.rU,{className:h,to:s,children:a})})},p="MoviePage_Image__5NCih",m="MoviePage_Container__QUoiI",_="MoviePage_ContInfo__N4jst",x="MoviePage_Descr__8tPjP",j="MoviePage_Text__ZrXQ+",f="MoviePage_Link__h+XMh";var g=function(){var e,a,s=c.useState([]),n=(0,t.Z)(s,2),h=n[0],g=n[1],k=c.useState([]),b=(0,t.Z)(k,2),N=b[0],w=b[1],P=c.useState(""),M=(0,t.Z)(P,2),C=M[0],Z=M[1],U=null!==(e=null===(a=(0,o.TH)().state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/",I=(0,o.UO)().movieId;console.log(I),c.useEffect((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var a,s,r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(I),{params:{api_key:"5d366bada9007998a52c381f067bc493"}});case 3:a=e.sent,s=a.data,r=a.data.genres,t=a.data.release_date,g(s),w(r),Z(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[I]);var L=C.substring(0,4);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{to:U,children:"back to homepage"}),(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(h.poster_path),alt:"",width:200,className:p}),(0,u.jsxs)("div",{className:_,children:[(0,u.jsxs)("h2",{children:[h.title," (",L,")"]}),(0,u.jsxs)("p",{className:j,children:[(0,u.jsx)("span",{className:x,children:"Overview:"}),(0,u.jsx)("br",{})," ",h.overview]}),(0,u.jsxs)("p",{children:[" ",(0,u.jsx)("span",{className:x,children:"Genres:"})]}),N.map((function(e){return(0,u.jsx)("p",{children:e.name},e.id)}))]})]}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{className:f,to:"cast",children:"Cast"})})}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{className:f,to:"revievs",children:"Reviews"})})}),(0,u.jsx)(c.Suspense,{fallback:(0,u.jsx)("div",{children:"...Loading"}),children:(0,u.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=483.df6ef351.chunk.js.map