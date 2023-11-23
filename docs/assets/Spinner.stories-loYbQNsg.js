import{r as c}from"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";var _={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=c,x=Symbol.for("react.element"),S=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,O=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function y(t,r,s){var e,n={},a=null,o=null;s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(o=r.ref);for(e in r)g.call(r,e)&&!h.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:x,type:t,key:a,ref:o,props:n,_owner:O.current}}p.Fragment=S;p.jsx=y;p.jsxs=y;_.exports=p;var l=_.exports;const u=({variant:t="serious",speed:r=.5,...s})=>{const e=c.useRef(new Audio("./assets/ayayay.mp3")),[n,a]=c.useState(!1),o=()=>{e.current.pause(),e.current.currentTime=0,e.current.play(),a(!0),setTimeout(()=>a(!1),1500)};return c.useEffect(()=>{e.current.play()},[]),l.jsx("div",{className:`spinner-container ${n&&"spinner-clicked"}`,...s,style:{...s.style||{},animationDuration:`${1/r}s`},onClick:o,children:l.jsx("img",{src:`./assets/ochando_${t}.png`,alt:"ochando",draggable:"false"})})};try{u.displayName="Spinner",u.__docgenInfo={description:"David Ochando spinning",displayName:"Spinner",props:{variant:{defaultValue:{value:"serious"},description:"Variant of David's mood",name:"variant",required:!1,type:{name:"enum",value:[{value:'"serious"'},{value:'"amused"'}]}},speed:{defaultValue:{value:"0.5"},description:"Speed (in rotations per second)",name:"speed",required:!1,type:{name:"number"}}}}}catch{}const R={title:"Ochando/Spinner",component:u,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{}};var d,m,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    // primary: true,
  }
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const N=["Normal"];export{i as Normal,N as __namedExportsOrder,R as default};
//# sourceMappingURL=Spinner.stories-loYbQNsg.js.map
