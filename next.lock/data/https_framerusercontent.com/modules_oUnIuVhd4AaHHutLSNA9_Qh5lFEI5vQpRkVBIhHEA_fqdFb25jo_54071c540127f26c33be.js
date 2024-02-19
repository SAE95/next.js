// Generated by Framer (c75d380)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,useLocaleInfo,useVariantState,withCSS}from"framer";import{LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";import ImgShadow from"https://framerusercontent.com/modules/hJKthiZjwoVQ1llB2X9L/esOAYRvUT5x3tRA6rPmf/cE9xFgMBI.js";import NameNumber from"https://framerusercontent.com/modules/aBMm5dtH2eYjI1hDmCPi/CDht5bIRl0yNSZokMGRg/gAv82Ef9q.js";import NameID from"https://framerusercontent.com/modules/acywJTdZT9XuXd3QC4o2/uMkJh8C6Q5kbPLjHHgRR/Mg7hK0Q4n.js";const NameIDFonts=getFonts(NameID);const ImgShadowFonts=getFonts(ImgShadow);const NameNumberFonts=getFonts(NameNumber);const cycleOrder=["I908:9386;847:16361"];const serializationHash="framer-WCGsA";const variantClassNames={"I908:9386;847:16361":"framer-v-1ljr0vp"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transitions={default:{damping:60,delay:0,mass:1,stiffness:500,type:"spring"}};const toResponsiveImage=value=>{if(typeof value==="object"&&value!==null&&typeof value.src==="string"){return value;}return typeof value==="string"?{src:value}:undefined;};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/_jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const getProps=({height,id,image,pokemonGeneration,width,...props})=>{var _ref;return{...props,WYiskvS2A:(_ref=pokemonGeneration!==null&&pokemonGeneration!==void 0?pokemonGeneration:props.WYiskvS2A)!==null&&_ref!==void 0?_ref:"1",xauA0S70D:image!==null&&image!==void 0?image:props.xauA0S70D};};const createLayoutDependency=(props,variants)=>variants.join("-")+props.layoutDependency;const Component=/*#__PURE__*/React.forwardRef(function(props,ref){const{activeLocale,setLocale}=useLocaleInfo();const{style,className,layoutId,variant,WYiskvS2A,xauA0S70D,...restProps}=getProps(props);const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"I908:9386;847:16361",transitions,variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const ref1=React.useRef(null);const defaultLayoutId=React.useId();const sharedStyleClassNames=[];return /*#__PURE__*/_jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/_jsx(Transition,{value:transition,children:/*#__PURE__*/_jsx(motion.div,{...restProps,animate:variants,className:cx(serializationHash,...sharedStyleClassNames,"framer-1ljr0vp",className,classNames),"data-border":true,"data-framer-name":"Variant 1",initial:variant,layoutDependency:layoutDependency,layoutId:"I908:9386;847:16361",onHoverEnd:()=>setGestureState({isHovered:false}),onHoverStart:()=>setGestureState({isHovered:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),onTapStart:()=>setGestureState({isPressed:true}),ref:ref!==null&&ref!==void 0?ref:ref1,style:{"--border-bottom-width":"1px","--border-color":"rgb(0, 0, 0)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(252, 252, 252)",borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5,...style},children:/*#__PURE__*/_jsxs(motion.div,{className:"framer-11zrskt","data-framer-name":"Frame 132",layoutDependency:layoutDependency,layoutId:"I908:9386;847:16361;847:16467",style:{backgroundColor:"rgb(177, 222, 136)",borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5},children:[/*#__PURE__*/_jsx(motion.div,{className:"framer-2xaff3-container",layoutDependency:layoutDependency,layoutId:"OR1tz34xl-container",children:/*#__PURE__*/_jsx(NameID,{height:"100%",id:"OR1tz34xl",layoutId:"OR1tz34xl",QtUSoDzXG:0,style:{height:"100%",width:"100%"},v5kLjWpi5:"name",variant:"zbUWz8Y77",width:"100%"})}),/*#__PURE__*/_jsx(motion.div,{className:"framer-4k57nu-container",layoutDependency:layoutDependency,layoutId:"ZzmZ_yZIS-container",children:/*#__PURE__*/_jsx(ImgShadow,{height:"100%",id:"ZzmZ_yZIS",layoutId:"ZzmZ_yZIS",O3ttRDi1p:toResponsiveImage(xauA0S70D),variant:"jM_lbpQHT",width:"100%"})}),/*#__PURE__*/_jsx(motion.div,{className:"framer-1qkfskl-container",layoutDependency:layoutDependency,layoutId:"W4BdR198e-container",children:/*#__PURE__*/_jsx(NameNumber,{FJxRazr0h:WYiskvS2A,height:"100%",id:"W4BdR198e",kpPS25GlK:"pokemon-Name",layoutId:"W4BdR198e",MIhdJppq1:false,style:{height:"100%",width:"100%"},tSqJ77SR6:"var(--token-76571fb1-2855-4641-b55c-93f8e13115ad, rgb(47, 48, 45))",variant:"uUa5Af7iR",width:"100%"})})]})})})});});const css=['.framer-WCGsA[data-border="true"]::after, .framer-WCGsA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-WCGsA.framer-6c6h0x, .framer-WCGsA .framer-6c6h0x { display: block; }",".framer-WCGsA.framer-1ljr0vp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 193px; justify-content: center; min-width: 200px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: 216px; }",".framer-WCGsA .framer-11zrskt { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: 1px; }",".framer-WCGsA .framer-2xaff3-container, .framer-WCGsA .framer-1qkfskl-container { flex: none; height: 28px; position: relative; width: 100%; }",".framer-WCGsA .framer-4k57nu-container { flex: none; height: auto; position: relative; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WCGsA.framer-1ljr0vp { gap: 0px; } .framer-WCGsA.framer-1ljr0vp > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-WCGsA.framer-1ljr0vp > :first-child { margin-left: 0px; } .framer-WCGsA.framer-1ljr0vp > :last-child { margin-right: 0px; } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 193
 * @framerIntrinsicWidth 216
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"],"constraints":["200px",null,null,null]}}}
 * @framerVariables {"WYiskvS2A":"pokemonGeneration","xauA0S70D":"image"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 */const FramerfqdFb25jo=withCSS(Component,css,"framer-WCGsA");export default FramerfqdFb25jo;FramerfqdFb25jo.displayName="pokemon-card-suplementary";FramerfqdFb25jo.defaultProps={height:193,width:216};addPropertyControls(FramerfqdFb25jo,{WYiskvS2A:{defaultValue:"1",displayTextArea:false,placeholder:"",title:"Pokemon Generation",type:ControlType.String},xauA0S70D:{title:"Image",type:ControlType.ResponsiveImage}});addFonts(FramerfqdFb25jo,[...NameIDFonts,...ImgShadowFonts,...NameNumberFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerfqdFb25jo","slots":[],"annotations":{"framerVariables":"{\"WYiskvS2A\":\"pokemonGeneration\",\"xauA0S70D\":\"image\"}","framerImmutableVariables":"true","framerIntrinsicWidth":"216","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"],\"constraints\":[\"200px\",null,null,null]}}}","framerIntrinsicHeight":"193","framerContractVersion":"1","framerDisplayContentsDiv":"false"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./fqdFb25jo.map