import{r as p}from"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const v=""+new URL("ochando_amused-nTe_AlI6.png",import.meta.url).href,h=""+new URL("ochando_serious--p1WtgpZ.png",import.meta.url).href;var f={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=p,x=Symbol.for("react.element"),R=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,k=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function y(t,r,a){var e,n={},o=null,s=null;a!==void 0&&(o=""+a),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(s=r.ref);for(e in r)O.call(r,e)&&!w.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:x,type:t,key:o,ref:s,props:n,_owner:k.current}}c.Fragment=R;c.jsx=y;c.jsxs=y;f.exports=c;var l=f.exports;const E=new URL(""+new URL("ayayay-KJZsedpu.mp3",import.meta.url).href,import.meta.url).toString(),u=({variant:t="serious",speed:r=.5,...a})=>{const e=p.useRef(new Audio(E)),[n,o]=p.useState(!1),s=new URL(Object.assign({"../../assets/ochando_amused.png":v,"../../assets/ochando_serious.png":h})[`../../assets/ochando_${t}.png`],import.meta.url).toString(),g=()=>{e.current.pause(),e.current.currentTime=0,e.current.play(),o(!0),setTimeout(()=>o(!1),1500)};return p.useEffect(()=>{e.current.play()},[]),l.jsx("div",{className:`spinner-container ${n&&"spinner-clicked"}`,...a,style:{...a.style||{},animationDuration:`${1/r}s`},onClick:g,children:l.jsx("img",{src:s,alt:"ochando",draggable:"false"})})};try{u.displayName="Spinner",u.__docgenInfo={description:"David Ochando spinning",displayName:"Spinner",props:{variant:{defaultValue:{value:"serious"},description:"Variant of David's mood",name:"variant",required:!1,type:{name:"enum",value:[{value:'"serious"'},{value:'"amused"'}]}},speed:{defaultValue:{value:"0.5"},description:"Speed (in rotations per second)",name:"speed",required:!1,type:{name:"number"}}}}}catch{}const j={title:"Ochando/Spinner",component:u,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{}};var d,m,_;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    // primary: true,
  }
}`,...(_=(m=i.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const L=["Normal"];export{i as Normal,L as __namedExportsOrder,j as default};
//# sourceMappingURL=Spinner.stories-nZv5Ac2X.js.map
