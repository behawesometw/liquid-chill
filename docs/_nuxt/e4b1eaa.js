(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{458:function(t,e,n){"use strict";n.r(e);n(75);var r=n(23),l={data:function(){return{tabSync:null}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","keyword","slug"]).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}},c=n(44),o=n(34),v=n.n(o),m=n(406),d=n(198),y=n(195),f=n(193),_=n(196),h=n(127),w=n(194),V=n(65),k=n(197),x=n(454),S=n(462),I=n(461),L=n(453),C=n(441),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},t._l(t.articles,(function(t){return n("NuxtLink",{key:t.slug,attrs:{to:{name:"cocktail-slug",params:{slug:t.slug}}}})})),1),t._v(" "),n("div",[n("v-tabs",{model:{value:t.tabSync,callback:function(e){t.tabSync=e},expression:"tabSync"}},[n("v-tabs-slider",{attrs:{color:"white"}}),t._v(" "),n("v-tab",{staticClass:"white--text"},[t._v("All")])],1),t._v(" "),n("v-tabs-items",{staticClass:"overflow-y-auto",staticStyle:{height:"80vh"},model:{value:t.tabSync,callback:function(e){t.tabSync=e},expression:"tabSync"}},[n("v-tab-item",[n("v-list",{attrs:{"three-line":""}},[n("v-list-item-group",[n("transition-group",{attrs:{name:"scroll-y-transition"}},[t._l(t.articles,(function(e,i){return[0!=i?n("v-divider",{key:e.slug}):t._e(),t._v(" "),n("v-list-item",{key:i,attrs:{to:{name:"cocktail-slug",params:{slug:e.slug}},nuxt:!0}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),n("v-list-item-subtitle",t._l(e.keyword.split(" "),(function(e,i){return n("v-chip",{key:i,staticClass:"mr-1 mb-1"},[t._v(t._s(e))])})),1)],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)]}))],2)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a,VChip:d.a,VDivider:y.a,VIcon:f.a,VList:_.a,VListItem:h.a,VListItemAction:w.a,VListItemContent:V.a,VListItemGroup:k.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VTab:x.a,VTabItem:S.a,VTabs:I.a,VTabsItems:L.a,VTabsSlider:C.a})}}]);