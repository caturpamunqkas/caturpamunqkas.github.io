(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,o){"use strict";o.r(e);o(44);var l={head:function(){return{title:"Contact - Catur Pamungkas"}},methods:{loadMAP:function(){mapboxgl.accessToken="pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw";var map=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-73.9751,40.7289],zoom:13}),t=new mapboxgl.Popup({offset:40}).setText("756 Livingston Street, Brooklyn, NY 11201"),e=document.createElement("div");e.id="marker",new mapboxgl.Marker(e).setLngLat([-73.9751,40.7289]).setPopup(t).addTo(map),map.addControl(new mapboxgl.NavigationControl,"bottom-right")}},mounted:function(){var t=this;setTimeout((function(){t.loadMAP()}),500)}},n=o(34),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pb-5"},[o("div",{staticClass:"pb-2"},[o("h1",{staticClass:"title title--h1 first-title title__separate"},[t._v("Contact")])]),t._v(" "),o("div",{staticClass:"map",attrs:{id:"map"}}),t._v(" "),o("h2",{staticClass:"title title--h3"},[t._v("Contact Form")]),t._v(" "),o("form",{staticClass:"contact-form",attrs:{id:"contact-form","data-toggle":"validator"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-12 col-md-6"},[o("i",{staticClass:"font-icon icon-user"}),t._v(" "),o("input",{staticClass:"input input__icon form-control",attrs:{type:"text",id:"nameContact",name:"nameContact",placeholder:"Full name",required:"required",autocomplete:"on",oninvalid:"setCustomValidity('Fill in the field')",onkeyup:"setCustomValidity('')"}}),t._v(" "),o("div",{staticClass:"help-block with-errors"})]),t._v(" "),o("div",{staticClass:"form-group col-12 col-md-6"},[o("i",{staticClass:"font-icon icon-envelope"}),t._v(" "),o("input",{staticClass:"input input__icon form-control",attrs:{type:"email",id:"emailContact",name:"emailContact",placeholder:"Email address",required:"required",autocomplete:"on",oninvalid:"setCustomValidity('Email is incorrect')",onkeyup:"setCustomValidity('')"}}),t._v(" "),o("div",{staticClass:"help-block with-errors"})]),t._v(" "),o("div",{staticClass:"form-group col-12 col-md-12"},[o("textarea",{staticClass:"textarea form-control",attrs:{id:"messageContact",name:"messageContact",placeholder:"Your Message",rows:"4",required:"required",oninvalid:"setCustomValidity('Fill in the field')",onkeyup:"setCustomValidity('')"}}),t._v(" "),o("div",{staticClass:"help-block with-errors"})])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-6 order-2 order-md-1 text-center text-md-left"},[o("div",{staticClass:"hidden",attrs:{id:"validator-contact"}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-6 order-1 order-md-2 text-right"},[o("button",{staticClass:"btn",attrs:{type:"submit"}},[o("i",{staticClass:"font-icon icon-send"}),t._v(" Send Message")])])])])])}],!1,null,null,null);e.default=component.exports}}]);