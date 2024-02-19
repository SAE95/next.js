// Generated by Framer (8184e1b)
import{jsx as _jsx}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,Image,useLocaleInfo,useVariantState,withCSS,withFX}from"framer";import{LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";const MotionDivWithFX=withFX(motion.div);const cycleOrder=["Y6hLHv1s9","Ia6F9vIyM","TXk98huj2"];const serializationHash="framer-0VyJL";const variantClassNames={Ia6F9vIyM:"framer-v-1x3tddo",TXk98huj2:"framer-v-1m4ilyg",Y6hLHv1s9:"framer-v-tepphb"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transitions={default:{damping:60,delay:0,mass:1,stiffness:500,type:"spring"}};const transition1={delay:0,duration:1.3,ease:[.44,0,.56,1],type:"tween"};const animation={opacity:1,rotate:0,scale:1,x:0,y:5};const toResponsiveImage=value=>{if(typeof value==="object"&&value!==null&&typeof value.src==="string"){return value;}return typeof value==="string"?{src:value}:undefined;};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/_jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const humanReadableVariantMap={L:"Y6hLHv1s9",M:"Ia6F9vIyM",S:"TXk98huj2"};const getProps=({height,id,image,width,...props})=>{var _humanReadableVariantMap_props_variant,_ref;return{...props,Az4829dHT:image!==null&&image!==void 0?image:props.Az4829dHT,variant:(_ref=(_humanReadableVariantMap_props_variant=humanReadableVariantMap[props.variant])!==null&&_humanReadableVariantMap_props_variant!==void 0?_humanReadableVariantMap_props_variant:props.variant)!==null&&_ref!==void 0?_ref:"Y6hLHv1s9"};};const createLayoutDependency=(props,variants)=>variants.join("-")+props.layoutDependency;const Component=/*#__PURE__*/React.forwardRef(function(props,ref){const{activeLocale,setLocale}=useLocaleInfo();const{style,className,layoutId,variant,Az4829dHT,...restProps}=getProps(props);const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"Y6hLHv1s9",transitions,variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const ref1=React.useRef(null);const defaultLayoutId=React.useId();const sharedStyleClassNames=[];return /*#__PURE__*/_jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/_jsx(Transition,{value:transition,children:/*#__PURE__*/_jsx(MotionDivWithFX,{...restProps,__framer__loop:animation,__framer__loopEffectEnabled:true,__framer__loopRepeatDelay:0,__framer__loopRepeatType:"mirror",__framer__loopTransition:transition1,__perspectiveFX:false,__smartComponentFX:true,__targetOpacity:1,animate:variants,className:cx(serializationHash,...sharedStyleClassNames,"framer-tepphb",className,classNames),"data-framer-name":"L",initial:variant,layoutDependency:layoutDependency,layoutId:"Y6hLHv1s9",onHoverEnd:()=>setGestureState({isHovered:false}),onHoverStart:()=>setGestureState({isHovered:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),onTapStart:()=>setGestureState({isPressed:true}),ref:ref!==null&&ref!==void 0?ref:ref1,style:{...style},...addPropertyOverrides({Ia6F9vIyM:{"data-framer-name":"M"},TXk98huj2:{"data-framer-name":"S"}},baseVariant,gestureVariant),children:/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fit",sizes:"200px",...toResponsiveImage(Az4829dHT),...{positionX:"center",positionY:"center"}},className:"framer-170e91f","data-framer-name":"Pokemon_img",layoutDependency:layoutDependency,layoutId:"BMzSvNffF",...addPropertyOverrides({Ia6F9vIyM:{background:{alt:"",fit:"fit",sizes:"150px",...toResponsiveImage(Az4829dHT),...{positionX:"center",positionY:"center"}}},TXk98huj2:{background:{alt:"",fit:"fit",sizes:"100px",...toResponsiveImage(Az4829dHT),...{positionX:"center",positionY:"center"}}}},baseVariant,gestureVariant)})})})});});const css=['.framer-0VyJL[data-border="true"]::after, .framer-0VyJL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-0VyJL.framer-m21bs2, .framer-0VyJL .framer-m21bs2 { display: block; }",".framer-0VyJL.framer-tepphb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-0VyJL .framer-170e91f { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 200px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0VyJL.framer-tepphb { gap: 0px; } .framer-0VyJL.framer-tepphb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-0VyJL.framer-tepphb > :first-child { margin-left: 0px; } .framer-0VyJL.framer-tepphb > :last-child { margin-right: 0px; } }",".framer-0VyJL.framer-v-1x3tddo .framer-170e91f { height: var(--framer-aspect-ratio-supported, 150px); width: 150px; }",".framer-0VyJL.framer-v-1m4ilyg .framer-170e91f { height: var(--framer-aspect-ratio-supported, 100px); width: 100px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 200
 * @framerIntrinsicWidth 200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"Ia6F9vIyM":{"layout":["auto","auto"]},"TXk98huj2":{"layout":["auto","auto"]}}}
 * @framerVariables {"Az4829dHT":"image"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 */const FramerILyiSQizq=withCSS(Component,css,"framer-0VyJL");export default FramerILyiSQizq;FramerILyiSQizq.displayName="Img";FramerILyiSQizq.defaultProps={height:200,width:200};addPropertyControls(FramerILyiSQizq,{variant:{options:["Y6hLHv1s9","Ia6F9vIyM","TXk98huj2"],optionTitles:["L","M","S"],title:"Variant",type:ControlType.Enum},Az4829dHT:{title:"Image",type:ControlType.ResponsiveImage}});addFonts(FramerILyiSQizq,[]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerILyiSQizq","slots":[],"annotations":{"framerIntrinsicWidth":"200","framerImmutableVariables":"true","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"auto\",\"auto\"]},\"Ia6F9vIyM\":{\"layout\":[\"auto\",\"auto\"]},\"TXk98huj2\":{\"layout\":[\"auto\",\"auto\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"200","framerDisplayContentsDiv":"false","framerVariables":"{\"Az4829dHT\":\"image\"}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./ILyiSQizq.map