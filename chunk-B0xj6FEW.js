import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$ as KE,Bn as hh,Bt as Uo$1,Cn as eI,D as EI,Dr as sh,Et as RL,F as Gp,Fn as gr,Fr as uu,H as IE,Ir as vI,K as JE,Kt as Vw,L as HE,Ln as hE,Mt as TL,N as GI,Pr as uh,R as HI,Rt as UE,S as Dg,Tn as eh,Tr as sd,Vn as hj,Vr as xI,Vt as Up,W as Ie,Wn as iI,Wt as Vf,Xn as k,Xr as zI,Xt as YE,Yr as xw,Yt as Xp,Zt as YI,an as Zl,bn as cu,br as rh,ct as Lv,f as Bw,gn as bh,hn as bL,in as Zi$1,jn as g,kn as ew,kt as SL,l as BE,lr as ou,m as CL,mn as bD,n as $I,nn as Yp,nr as nI,nt as Kp,on as _D,or as oI,ot as Li$1,p as C,pn as au,qn as jE,r as $w,s as Aw,sn as _L,t as $E,tn as Yl,tr as me,vn as ch,w as Du,wt as Qp,x as Df,xn as di$1,yr as rI,z as Hw,zt as UI}from"./chunk-CYoSJ9Oz.js";import{A as Y,B as fn$1,C as Ti$1,H as hn$1,I as dn$1,S as Rn$1,W as ie,X as mt,_ as Ms,a as Dn$1,ct as xi$1,d as In$1,et as qi$1,g as Mn$1,h as Ln$1,j as Yi$1,k as Xi$1,lt as y,n as At,o as Ds,p as Ki$1,r as Be,st as wn$1,t as As,x as Re$1,y as Pn$1}from"./chunk-C3iF_hnz.js";import"./chunk-iIi0tk2P.js";import{n as Ot,u as re}from"./chunk-DWoI6_fs.js";import{g as Yt,i as Fn$1,m as We,n as Dn$2,s as K,v as _}from"./chunk-CisYEBzY.js";import{B as S,o as f$1,s as f,t as Ce,z as L}from"./main-LOP4WCQX.js";import{t as H}from"./chunk-D31JjM2w.js";import{a as Yt$1,l as xt,n as Kn$1,s as qe,t as Jn$1}from"./chunk-CMv8_6D1.js";import"./chunk-3kDJxjHB.js";import{i as U}from"./chunk-CHHmapra.js";import{t as H$1}from"./chunk-bEakXTid.js";import{n as et,r as nt}from"./chunk-DUut_i6K.js";import{t as d}from"./chunk-9Mtxs1Nr2.js";import{n as s$1,t as f$2}from"./chunk-DqckIfxo2.js";import{n as mt$1,r as xe}from"./chunk-Bkm69JyF2.js";import{a as li$1,i as ii$1,n as ci$1,o as mi$1,r as ei$1,s as vs,t as Ci$1}from"./chunk-9jbQFNHy2.js";var qt=(()=>{class i extends S{static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵcmp=hE({type:i,selectors:[[``,`data-p-icon`,`minus`]],features:[Up],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(sd(),Xp(0,`path`,0))},encapsulation:2})}return i})();var Ut=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ci=[`icon`];var di=[`input`];var pi=(i,a,e)=>({checked:i,class:a,dataP:e});function ui(i,a){if(i&1&&Kp(0,`span`,7),i&2){let e=KE(3);EI(e.cx(`icon`)),Qp(`ngClass`,e.checkboxIcon())(`pBind`,e.ptm(`icon`)),Yp(`data-p`,e.dataP)}}function mi(i,a){if(i&1&&(sd(),Kp(0,`svg`,8)),i&2){let e=KE(3);EI(e.cx(`icon`)),Qp(`pBind`,e.ptm(`icon`)),Yp(`data-p`,e.dataP)}}function hi(i,a){if(i&1&&(jE(0,ui,1,5,`span`,5),jE(1,mi,1,4,`:svg:svg`,6)),i&2){let e=KE(2);BE(e.checkboxIcon()?0:-1),Lv(),BE(e.checkboxIcon()?-1:1)}}function _i(i,a){if(i&1&&(sd(),Kp(0,`svg`,9)),i&2){let e=KE(2);EI(e.cx(`icon`)),Qp(`pBind`,e.ptm(`icon`)),Yp(`data-p`,e.dataP)}}function fi(i,a){if(i&1&&(jE(0,hi,2,2),jE(1,_i,1,4,`:svg:svg`,4)),i&2){let e=KE();BE(e.checked?0:-1),Lv(),BE(e._indeterminate()?1:-1)}}function gi(i,a){}function bi(i,a){i&1&&Gp(0,gi,0,0,`ng-template`)}var vi=`
    ${Ut}

    /* Native checkbox directive: retain browser interaction and accessibility while using the active theme color. */
    input.p-checkbox.p-component {
        accent-color: dt('checkbox.checked.background');
        cursor: pointer;
    }

    input.p-checkbox.p-component.p-disabled,
    input.p-checkbox.p-component[readonly] {
        cursor: default;
    }

    .p-checkbox > .p-checkbox-native-icon:empty::before {
        content: '\xE2\u0153\u201C';
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        line-height: 1;
    }

    .p-checkbox-checked > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.color');
    }

    .p-checkbox-checked > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.disabled.color');
    }

    /* For ngx-prime */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var Ci={root:({instance:i})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":i.size()===`small`,"p-checkbox-lg p-inputfield-lg":i.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var Qt=(()=>{class i extends Y{name=`checkbox`;style=vi;classes=Ci;static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Wt=new C(`CHECKBOX_INSTANCE`);var xi={provide:K,useExisting:Uo$1(()=>$e),multi:!0};var $e=(()=>{class i extends xe{componentName=`Checkbox`;hostName=Du(``);value=Du();binary=Du(void 0,{transform:xw});ariaLabelledBy=Du();ariaLabel=Du();tabindex=Du(void 0,{transform:Aw});inputId=Du();inputStyle=Du();styleClass=Du();inputClass=Du();indeterminate=Du(!1,{transform:xw});formControl=Du();checkboxIcon=Du();readonly=Du(void 0,{transform:xw});autofocus=Du(void 0,{transform:xw});trueValue=Du(!0);falseValue=Du(!1);variant=Du();size=Du();onChange=CL();onFocus=CL();onBlur=CL();inputViewChild=TL(`input`);get checked(){return this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():dn$1(this.value(),this.modelValue())}_indeterminate=Ie(void 0);checkboxIconTemplate=_L(`icon`,{descendants:!1});templates=SL(Pn$1);_checkboxIconTemplate;focused=!1;_componentStyle=g(Qt);bindDirectiveInstance=g(Ds,{self:!0});$pcCheckbox=g(Wt,{optional:!0,skipSelf:!0})??void 0;$variant=ew(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());constructor(){super(),RL()&&console.warn('`<p-checkbox>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pCheckbox>` instead.'),di$1(()=>{this._indeterminate.set(this.indeterminate())})}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,t=this.injector.get(_,null,{optional:!0,self:!0}),o=this.formControl(),l=t&&!o?t.value:this.modelValue();this.binary()?(n=this._indeterminate()?this.trueValue():this.checked?this.falseValue():this.trueValue(),this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=l.filter(x=>!ie(x,this.value())):n=l?[...l,this.value()]:[this.value()],this.onModelChange(n),this.writeModelValue(n),o&&o.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=hE({type:i,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,t,o){n&1&&ch(o,t.checkboxIconTemplate,ci,4)(o,t.templates,Pn$1,4),n&2&&oI(2)},viewQuery:function(n,t){n&1&&uh(t.inputViewChild,di,5),n&2&&oI()},hostVars:6,hostBindings:function(n,t){n&2&&(Yp(`data-p-highlight`,t.checked)(`data-p-checked`,t.checked)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),EI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{hostName:[1,`hostName`],value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],styleClass:[1,`styleClass`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[HI([xi,Qt,{provide:Wt,useExisting:i},{provide:xi$1,useExisting:i}]),IE([Ds]),Up],decls:5,vars:27,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`indeterminate`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,t){n&1&&(Li$1(0,`input`,1,0),rh(`focus`,function(l){return t.onInputFocus(l)})(`blur`,function(l){return t.onInputBlur(l)})(`change`,function(l){return t.handleChange(l)}),ou(),Li$1(2,`div`,2),jE(3,fi,2,2),Gp(4,bi,1,0,null,3),ou()),n&2&&(vI(t.inputStyle()),EI(t.cn(t.cx(`input`),t.inputClass())),Qp(`checked`,t.checked)(`indeterminate`,!!t._indeterminate())(`pBind`,t.ptm(`input`)),Yp(`id`,t.inputId())(`value`,t.value())(`name`,t.name())(`tabindex`,t.tabindex())(`required`,t.required()?``:void 0)(`readonly`,t.readonly()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel()),Lv(2),EI(t.cx(`box`)),Qp(`pBind`,t.ptm(`box`)),Yp(`data-p`,t.dataP),Lv(),BE(!t.checkboxIconTemplate()&&!t._checkboxIconTemplate?3:-1),Lv(),Qp(`ngTemplateOutlet`,t.checkboxIconTemplate()||t._checkboxIconTemplate)(`ngTemplateOutletContext`,GI(23,pi,t.checked,t.cx(`icon`),t.dataP)))},dependencies:[$w,Bw,Hw,Dn$1,f,qt,Ms,Ds],encapsulation:2})}return i})();var Zt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var yi=[`removeicon`];var ki=[`*`];function Ii(i,a){if(i&1){let e=YE();Li$1(0,`img`,2),rh(`error`,function(t){Zl(e);return Yl(KE().imageError(t))}),ou()}if(i&2){let e=KE();EI(e.cx(`image`)),Qp(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Vf)(`alt`,e.resolvedAlt())}}function Ti(i,a){if(i&1&&Kp(0,`span`,4),i&2){let e=KE(2);EI(e.resolvedIcon()),Qp(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function Si(i,a){if(i&1&&jE(0,Ti,1,4,`span`,3),i&2)BE(KE().resolvedIcon()?0:-1)}function Mi(i,a){if(i&1&&(Li$1(0,`div`,5),xI(1),ou()),i&2){let e=KE();EI(e.cx(`label`)),Qp(`pBind`,e.ptm(`label`)),Lv(),bh(e.resolvedLabel())}}function Oi(i,a){if(i&1){let e=YE();Li$1(0,`span`,9),rh(`click`,function(t){Zl(e);return Yl(KE(3).close(t))})(`keydown`,function(t){Zl(e);return Yl(KE(3).onKeydown(t))}),ou()}if(i&2){let e=KE(3);EI(e.resolvedRemoveIcon()),Qp(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),Yp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function wi(i,a){if(i&1){let e=YE();sd(),Li$1(0,`svg`,10),rh(`click`,function(t){Zl(e);return Yl(KE(3).close(t))})(`keydown`,function(t){Zl(e);return Yl(KE(3).onKeydown(t))}),ou()}if(i&2){let e=KE(3);EI(e.cx(`removeIcon`)),Qp(`pBind`,e.ptm(`removeIcon`)),Yp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Di(i,a){if(i&1&&(jE(0,Oi,1,6,`span`,7),jE(1,wi,1,5,`:svg:svg`,8)),i&2){let e=KE(2);BE(e.resolvedRemoveIcon()?0:-1),Lv(),BE(e.resolvedRemoveIcon()?-1:1)}}function Vi(i,a){}function Fi(i,a){i&1&&Gp(0,Vi,0,0,`ng-template`)}function Ei(i,a){if(i&1){let e=YE();Li$1(0,`span`,11),rh(`click`,function(t){Zl(e);return Yl(KE(2).close(t))})(`keydown`,function(t){Zl(e);return Yl(KE(2).onKeydown(t))}),Gp(1,Fi,1,0,null,12),ou()}if(i&2){let e=KE(2);EI(e.cx(`removeIcon`)),Qp(`pBind`,e.ptm(`removeIcon`)),Yp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),Lv(),Qp(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function Ni(i,a){if(i&1&&(jE(0,Di,2,2),jE(1,Ei,2,6,`span`,6)),i&2){let e=KE();BE(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),Lv(),BE(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var Li={root:({instance:i})=>({display:!i.visible&&`none`})};var Bi={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var Jt=(()=>{class i extends Y{name=`chip`;style=Zt;classes=Bi;inlineStyles=Li;static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var ei=new C(`CHIP_INSTANCE`);var ti=(()=>{class i extends As{componentName=`Chip`;$pcChip=g(ei,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=Du();icon=Du();image=Du();alt=Du();styleClass=Du();disabled=Du(!1,{transform:xw});removable=Du(!1,{transform:xw});removeIcon=Du();onRemove=CL();onImageError=CL();visible=!0;get removeAriaLabel(){return this.config.getTranslation(Mn$1.ARIA).removeLabel}chipProps=Du();resolvedLabel=ew(()=>this.chipProps()?.label??this.label());resolvedIcon=ew(()=>this.chipProps()?.icon??this.icon());resolvedImage=ew(()=>this.chipProps()?.image??this.image());resolvedAlt=ew(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=ew(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=ew(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=ew(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=g(Jt);removeIconTemplate;templates=SL(Pn$1);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){e.key===`Enter`||e.key===`Backspace`?this.close(e):(e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),this.close(e))}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵcmp=hE({type:i,selectors:[[`p-chip`]],contentQueries:function(n,t,o){if(n&1&&(ch(o,t.templates,Pn$1,4),sh(o,yi,4)),n&2){oI();let l;nI(l=rI())&&(t.removeIconTemplate=l.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(Yp(`aria-label`,t.resolvedLabel())(`data-p`,t.dataP),vI(t.sx(`root`)),EI(t.cn(t.cx(`root`),t.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[HI([Jt,{provide:ei,useExisting:i},{provide:xi$1,useExisting:i}]),IE([Ds]),Up],ngContentSelectors:ki,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,t){n&1&&(JE(),eI(0),jE(1,Ii,1,5,`img`,0)(2,Si,1,1),jE(3,Mi,2,4,`div`,1),jE(4,Ni,2,2)),n&2&&(Lv(),BE(t.resolvedImage()?1:2),Lv(2),BE(t.resolvedLabel()?3:-1),Lv(),BE(t.resolvedRemovable()?4:-1))},dependencies:[$w,Bw,Hw,L,Dn$1,Ds],encapsulation:2})}return i})();var ii=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        align-self: center;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled):hover {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }

    .p-floatlabel-in .p-multiselect-filter {
        padding-block-start: dt('multiselect.padding.y');
        padding-block-end: dt('multiselect.padding.y');
    }
`;var oi=i=>({$implicit:i});var Ai=(i,a)=>({checked:i,class:a});function zi(i,a){}function Hi(i,a){i&1&&Gp(0,zi,0,0,`ng-template`)}function $i(i,a){if(i&1&&Gp(0,Hi,1,0,null,2),i&2){let e=a.class,n=KE(2);Qp(`ngTemplateOutlet`,n.itemCheckboxIconTemplate())(`ngTemplateOutletContext`,zI(2,Ai,n.selected(),e))}}function Ri(i,a){i&1&&Gp(0,$i,1,5,`ng-template`,null,0,YI)}function Ki(i,a){if(i&1&&(Li$1(0,`span`),xI(1),ou()),i&2){let e=KE();Lv(),bh(e.label()??`empty`)}}function Gi(i,a){i&1&&eh(0)}var ji=[`item`];var qi=[`header`];var Ui=[`emptyfilter`];var Qi=[`empty`];var Wi=[`itemcheckboxicon`];var Yi=[`headercheckboxicon`];var Xi=[`group`];var Zi=[`loader`];var Ji=[`filter`];var en=[`footer`];var tn=[`selecteditems`];var nn=[`loadingicon`];var on=[`filtericon`];var ln=[`removetokenicon`];var an=[`chipicon`];var sn=[`clearicon`];var rn=[`dropdownicon`];var cn=[`overlay`];var dn=[`filterInput`];var pn=[`focusInput`];var un=[`items`];var mn=[`scroller`];var hn=[`lastHiddenFocusableEl`];var _n=[`firstHiddenFocusableEl`];var fn=[`headerCheckbox`];var gn=[[[`p-header`]],[[`p-footer`]]];var bn=[`p-header`,`p-footer`];var vn=()=>({class:`p-multiselect-chip-icon`});var Cn=(i,a)=>({$implicit:i,removeChip:a});var xn=i=>({dataP:i});var li=i=>({options:i});var yn=(i,a,e)=>({checked:i,partialSelected:a,class:e});var Ke=i=>({height:i});var ai=(i,a)=>({$implicit:i,options:a});var kn=()=>({});function In(i,a){if(i&1&&(au(0),xI(1),cu()),i&2){let e=KE(2);Lv(),bh(e.label()||`empty`)}}function Tn(i,a){if(i&1&&xI(0),i&2)uu(` `,KE(3).getSelectedItemsLabel(),` `)}function Sn(i,a){i&1&&eh(0)}function Mn(i,a){if(i&1){let e=YE();Li$1(0,`span`,22),rh(`click`,function(t){Zl(e);let o=KE(3).$implicit;return Yl(KE(4).removeOption(o,t))}),Gp(1,Sn,1,0,`ng-container`,23),ou()}if(i&2){let e=KE(7);EI(e.cx(`chipIcon`)),Qp(`pBind`,e.ptm(`chipIcon`)),Yp(`aria-hidden`,!0),Lv(),Qp(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,$I(6,vn))}}function On(i,a){if(i&1&&jE(0,Mn,2,7,`span`,21),i&2){let e=KE(6);BE(!e.$disabled()&&!e.readonly()?0:-1)}}function wn(i,a){i&1&&Gp(0,On,1,1,`ng-template`,null,4,YI)}function Dn(i,a){if(i&1){let e=YE();Li$1(0,`div`,17,3)(2,`p-chip`,20),rh(`onRemove`,function(t){let o=Zl(e).$implicit;return Yl(KE(4).removeOption(o,t))}),jE(3,wn,2,0),ou()()}if(i&2){let e=a.$implicit,n=KE(4);EI(n.cx(`chipItem`)),Qp(`pBind`,n.ptm(`chipItem`)),Lv(2),EI(n.cx(`pcChip`)),Qp(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly())(`removeIcon`,n.chipIcon()),Lv(),BE(n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate?3:-1)}}function Vn(i,a){if(i&1&&$E(0,Dn,4,11,`div`,19,HE),i&2)UE(KE(3).chipSelectedItems())}function Fn(i,a){if(i&1&&(au(0),xI(1),cu()),i&2){let e=KE(3);Lv(),bh(e.placeholder()||`empty`)}}function En(i,a){if(i&1&&(jE(0,Tn,1,1)(1,Vn,2,0),jE(2,Fn,2,1,`ng-container`)),i&2){let e=KE(2);BE(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?0:1),Lv(2),BE(!e.modelValue()||e.modelValue().length===0?2:-1)}}function Nn(i,a){if(i&1&&(jE(0,In,2,1,`ng-container`),jE(1,En,3,2)),i&2){let e=KE();BE(e.display()===`comma`?0:-1),Lv(),BE(e.display()===`chip`?1:-1)}}function Ln(i,a){i&1&&eh(0)}function Bn(i,a){if(i&1&&(au(0),xI(1),cu()),i&2){let e=KE(2);Lv(),bh(e.placeholder()||`empty`)}}function Pn(i,a){if(i&1&&(Gp(0,Ln,1,0,`ng-container`,23),jE(1,Bn,2,1,`ng-container`)),i&2){let e=KE();Qp(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,zI(3,Cn,e.selectedOptions,e.removeOption.bind(e))),Lv(),BE(!e.modelValue()||e.modelValue().length===0?1:-1)}}function An(i,a){if(i&1){let e=YE();sd(),Li$1(0,`svg`,25),rh(`click`,function(t){Zl(e);return Yl(KE(2).clear(t))}),ou()}if(i&2){let e=KE(2);EI(e.cx(`clearIcon`)),Qp(`pBind`,e.ptm(`clearIcon`)),Yp(`aria-hidden`,!0)}}function zn(i,a){}function Hn(i,a){i&1&&Gp(0,zn,0,0,`ng-template`)}function $n(i,a){if(i&1){let e=YE();Li$1(0,`span`,22),rh(`click`,function(t){Zl(e);return Yl(KE(2).clear(t))}),Gp(1,Hn,1,0,null,26),ou()}if(i&2){let e=KE(2);EI(e.cx(`clearIcon`)),Qp(`pBind`,e.ptm(`clearIcon`)),Yp(`aria-hidden`,!0),Lv(),Qp(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Rn(i,a){if(i&1&&(au(0),jE(1,An,1,4,`:svg:svg`,24),jE(2,$n,2,5,`span`,19),cu()),i&2){let e=KE();Lv(),BE(!e.clearIconTemplate&&!e._clearIconTemplate?1:-1),Lv(),BE(e.clearIconTemplate||e._clearIconTemplate?2:-1)}}function Kn(i,a){i&1&&eh(0)}function Gn(i,a){if(i&1&&Gp(0,Kn,1,0,`ng-container`,26),i&2){let e=KE(2);Qp(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function jn(i,a){if(i&1&&Kp(0,`span`,17),i&2){let e=KE(3);EI(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon())),Qp(`pBind`,e.ptm(`loadingIcon`)),Yp(`aria-hidden`,!0)}}function qn(i,a){if(i&1&&Kp(0,`span`,17),i&2){let e=KE(3);EI(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),Qp(`pBind`,e.ptm(`loadingIcon`)),Yp(`aria-hidden`,!0)}}function Un(i,a){if(i&1&&(au(0),jE(1,jn,1,4,`span`,19),jE(2,qn,1,4,`span`,19),cu()),i&2){let e=KE(2);Lv(),BE(e.loadingIcon()?1:-1),Lv(),BE(e.loadingIcon()?-1:2)}}function Qn(i,a){if(i&1&&(au(0),jE(1,Gn,1,1,`ng-container`),jE(2,Un,3,2,`ng-container`),cu()),i&2){let e=KE();Lv(),BE(e.loadingIconTemplate||e._loadingIconTemplate?1:-1),Lv(),BE(!e.loadingIconTemplate&&!e._loadingIconTemplate?2:-1)}}function Wn(i,a){if(i&1&&Kp(0,`span`,29),i&2){let e=KE(3);EI(e.cx(`dropdownIcon`)),Qp(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon()),Yp(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Yn(i,a){if(i&1&&(sd(),Kp(0,`svg`,30)),i&2){let e=KE(3);EI(e.cx(`dropdownIcon`)),Qp(`pBind`,e.ptm(`dropdownIcon`)),Yp(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Xn(i,a){if(i&1&&(au(0),jE(1,Wn,1,6,`span`,27),jE(2,Yn,1,5,`:svg:svg`,28),cu()),i&2){let e=KE(2);Lv(),BE(e.dropdownIcon()?1:-1),Lv(),BE(e.dropdownIcon()?-1:2)}}function Zn(i,a){}function Jn(i,a){i&1&&Gp(0,Zn,0,0,`ng-template`)}function eo(i,a){if(i&1&&(Li$1(0,`span`,17),Gp(1,Jn,1,0,null,23),ou()),i&2){let e=KE(2);EI(e.cx(`dropdownIcon`)),Qp(`pBind`,e.ptm(`dropdownIcon`)),Yp(`aria-hidden`,!0),Lv(),Qp(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,UI(6,xn,e.dropdownIconDataP))}}function to(i,a){if(i&1&&(jE(0,Xn,3,2,`ng-container`),jE(1,eo,2,8,`span`,19)),i&2){let e=KE();BE(!e.dropdownIconTemplate&&!e._dropdownIconTemplate?0:-1),Lv(),BE(e.dropdownIconTemplate||e._dropdownIconTemplate?1:-1)}}function io(i,a){i&1&&eh(0)}function no(i,a){i&1&&eh(0)}function oo(i,a){if(i&1&&Gp(0,no,1,0,`ng-container`,23),i&2){let e=KE(3);Qp(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,UI(2,li,e.filterOptions))}}function lo(i,a){if(i&1&&(sd(),Kp(0,`svg`,38)),i&2){let e=KE().class,n=KE(5);EI(e),Qp(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function ao(i,a){}function so(i,a){i&1&&Gp(0,ao,0,0,`ng-template`)}function ro(i,a){if(i&1&&(jE(0,lo,1,3,`:svg:svg`,37),Gp(1,so,1,0,null,23)),i&2){let e=a.class,n=KE(5);BE(!n.headerCheckboxIconTemplate()&&!n._headerCheckboxIconTemplate&&n.allSelected()?0:-1),Lv(),Qp(`ngTemplateOutlet`,n.headerCheckboxIconTemplate()||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,GI(3,yn,n.allSelected(),n.partialSelected(),e))}}function co(i,a){if(i&1){let e=YE();Li$1(0,`p-checkbox`,36,8),rh(`onChange`,function(t){Zl(e);return Yl(KE(4).onToggleAll(t))}),Gp(2,ro,2,7,`ng-template`,null,9,YI),ou(),bD()}if(i&2){let e=KE(4);Qp(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),_D()}}function po(i,a){if(i&1&&(sd(),Kp(0,`svg`,41)),i&2)Qp(`pBind`,KE(5).ptm(`filterIcon`))}function uo(i,a){}function mo(i,a){i&1&&Gp(0,uo,0,0,`ng-template`)}function ho(i,a){if(i&1&&(Li$1(0,`span`,42),Gp(1,mo,1,0,null,26),ou()),i&2){let e=KE(5);Qp(`pBind`,e.ptm(`filterIcon`)),Lv(),Qp(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function _o(i,a){if(i&1){let e=YE();Li$1(0,`p-iconfield`,39)(1,`input`,40,10),rh(`input`,function(t){Zl(e);return Yl(KE(4).onFilterInputChange(t))})(`keydown`,function(t){Zl(e);return Yl(KE(4).onFilterKeyDown(t))})(`click`,function(t){Zl(e);return Yl(KE(4).onInputClick(t))})(`blur`,function(t){Zl(e);return Yl(KE(4).onFilterBlur(t))}),ou(),Li$1(3,`p-inputicon`,39),jE(4,po,1,1,`:svg:svg`,41),jE(5,ho,2,2,`span`,42),ou()()}if(i&2){let e=KE(4);EI(e.cx(`pcFilterContainer`)),Qp(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),Lv(),EI(e.cx(`pcFilter`)),Qp(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),Yp(`autocomplete`,e.autocomplete())(`aria-owns`,e.id()+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder())(`aria-label`,e.ariaFilterLabel()),Lv(2),Qp(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),Lv(),BE(!e.filterIconTemplate&&!e._filterIconTemplate?4:-1),Lv(),BE(e.filterIconTemplate||e._filterIconTemplate?5:-1)}}function fo(i,a){if(i&1&&(jE(0,co,4,7,`p-checkbox`,34),jE(1,_o,6,20,`p-iconfield`,35)),i&2){let e=KE(3);BE(e.showToggleAll()&&!e.selectionLimit()?0:-1),Lv(),BE(e.filter()?1:-1)}}function go(i,a){if(i&1&&(Li$1(0,`div`,17),eI(1),jE(2,oo,1,4,`ng-container`)(3,fo,2,2),ou()),i&2){let e=KE(2);EI(e.cx(`header`)),Qp(`pBind`,e.ptm(`header`)),Lv(2),BE(e.filterTemplate||e._filterTemplate?2:3)}}function bo(i,a){i&1&&eh(0)}function vo(i,a){if(i&1&&Gp(0,bo,1,0,`ng-container`,23),i&2){let e=a.$implicit,n=a.options;KE(2);Qp(`ngTemplateOutlet`,iI(9))(`ngTemplateOutletContext`,zI(2,ai,e,n))}}function Co(i,a){i&1&&eh(0)}function xo(i,a){if(i&1&&Gp(0,Co,1,0,`ng-container`,23),i&2){let e=a.options,n=KE(4);Qp(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,UI(2,li,e))}}function yo(i,a){i&1&&Gp(0,xo,1,4,`ng-template`,null,12,YI)}function ko(i,a){if(i&1){let e=YE();Li$1(0,`p-scroller`,43,11),rh(`onLazyLoad`,function(t){Zl(e);return Yl(KE(2).onLazyLoad.emit(t))}),Gp(2,vo,1,5,`ng-template`,null,2,YI),jE(4,yo,2,0),ou()}if(i&2){let e=KE(2);vI(UI(9,Ke,e.scrollHeight())),Qp(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize())(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy())(`options`,e.virtualScrollOptions()),Lv(4),BE(e.loaderTemplate||e._loaderTemplate?4:-1)}}function Io(i,a){i&1&&eh(0)}function To(i,a){if(i&1&&Gp(0,Io,1,0,`ng-container`,23),i&2){KE();let e=iI(9),n=KE();Qp(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,zI(3,ai,n.visibleOptions(),$I(2,kn)))}}function So(i,a){if(i&1&&(Li$1(0,`span`),xI(1),ou()),i&2){let e=KE(2).$implicit,n=KE(3);Lv(),bh(n.getOptionGroupLabel(e.optionGroup))}}function Mo(i,a){if(i&1&&eh(0,48),i&2){let e=KE(2).$implicit;Qp(`ngTemplateOutlet`,KE(3).groupTemplate)(`ngTemplateOutletContext`,UI(2,oi,e.optionGroup))}}function Oo(i,a){if(i&1&&(Li$1(0,`li`,47),jE(1,So,2,1,`span`),jE(2,Mo,1,4,`ng-container`,48),ou()),i&2){let e=KE(),n=e.$implicit,t=e.$index,o=KE().options,l=KE(2);EI(l.cx(`optionGroup`)),Qp(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,UI(7,Ke,o.itemSize+`px`)),Yp(`id`,l.id()+`_`+l.getOptionIndex(t,o)),Lv(),BE(!l.groupTemplate&&n.optionGroup?1:-1),Lv(),BE(n.optionGroup&&l.groupTemplate?2:-1)}}function wo(i,a){if(i&1){let e=YE();Li$1(0,`li`,49),rh(`onClick`,function(t){Zl(e);let o=KE().$index,l=KE().options,x=KE(2);return Yl(x.onOptionSelect(t,!1,x.getOptionIndex(o,l)))})(`onMouseEnter`,function(t){Zl(e);let o=KE().$index,l=KE().options,x=KE(2);return Yl(x.onOptionMouseEnter(t,x.getOptionIndex(o,l)))}),ou()}if(i&2){let e=KE(),n=e.$implicit,t=e.$index,o=KE().options,l=KE(2);Qp(`pBind`,l.getPTOptions(n,l.getItemOptions,t,`option`))(`id`,l.id()+`_`+l.getOptionIndex(t,o))(`option`,n)(`selected`,l.isSelected(n))(`label`,l.getOptionLabel(n))(`disabled`,l.isOptionDisabled(n))(`template`,l.itemTemplate()||l._itemTemplate)(`itemCheckboxIconTemplate`,l.itemCheckboxIconTemplate()||l._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,l.focusedOptionIndex()===l.getOptionIndex(t,o))(`ariaPosInset`,l.getAriaPosInset(l.getOptionIndex(t,o)))(`ariaSetSize`,l.ariaSetSize)(`variant`,l.$variant())(`highlightOnSelect`,l.highlightOnSelect())(`pt`,l.pt)(`unstyled`,l.unstyled())}}function Do(i,a){if(i&1&&(jE(0,Oo,3,9,`li`,45),jE(1,wo,1,16,`li`,46)),i&2){let e=a.$implicit,n=KE(3);BE(n.isOptionGroup(e)?0:-1),Lv(),BE(n.isOptionGroup(e)?-1:1)}}function Vo(i,a){if(i&1&&xI(0),i&2)uu(` `,KE(4).emptyFilterMessageLabel,` `)}function Fo(i,a){i&1&&eh(0)}function Eo(i,a){if(i&1&&Gp(0,Fo,1,0,`ng-container`,26),i&2){let e=KE(4);Qp(`ngTemplateOutlet`,e.emptyFilterTemplate()||e._emptyFilterTemplate||e.emptyTemplate()||e._emptyFilterTemplate)}}function No(i,a){if(i&1&&(Li$1(0,`li`,47),jE(1,Vo,1,1)(2,Eo,1,1,`ng-container`),ou()),i&2){let e=KE().options,n=KE(2);EI(n.cx(`emptyMessage`)),Qp(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,UI(5,Ke,e.itemSize+`px`)),Lv(),BE(!n.emptyFilterTemplate()&&!n._emptyFilterTemplate&&!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function Lo(i,a){if(i&1&&xI(0),i&2)uu(` `,KE(4).emptyMessageLabel,` `)}function Bo(i,a){i&1&&eh(0)}function Po(i,a){if(i&1&&Gp(0,Bo,1,0,`ng-container`,26),i&2){let e=KE(4);Qp(`ngTemplateOutlet`,e.emptyTemplate()||e._emptyTemplate)}}function Ao(i,a){if(i&1&&(Li$1(0,`li`,47),jE(1,Lo,1,1)(2,Po,1,1,`ng-container`),ou()),i&2){let e=KE().options,n=KE(2);EI(n.cx(`emptyMessage`)),Qp(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,UI(5,Ke,e.itemSize+`px`)),Lv(),BE(!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function zo(i,a){if(i&1&&(Li$1(0,`ul`,44,13),$E(2,Do,2,2,null,null,HE),jE(4,No,3,7,`li`,45),jE(5,Ao,3,7,`li`,45),ou()),i&2){let e=a.$implicit,n=a.options,t=KE(2);vI(n.contentStyle),EI(t.cn(t.cx(`list`),n.contentStyleClass)),Qp(`pBind`,t.ptm(`list`)),Yp(`aria-label`,t.listLabel),Lv(2),UE(e),Lv(2),BE(t.hasFilter()&&t.isEmpty()?4:-1),Lv(),BE(!t.hasFilter()&&t.isEmpty()?5:-1)}}function Ho(i,a){i&1&&eh(0)}function $o(i,a){if(i&1&&(Li$1(0,`div`),eI(1,1),Gp(2,Ho,1,0,`ng-container`,26),ou()),i&2){let e=KE(2);Lv(2),Qp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function Ro(i,a){if(i&1){let e=YE();Li$1(0,`div`,31)(1,`span`,32,5),rh(`focus`,function(t){Zl(e);return Yl(KE().onFirstHiddenFocus(t))}),ou(),Gp(3,io,1,0,`ng-container`,26),jE(4,go,4,4,`div`,19),Li$1(5,`div`,17),jE(6,ko,5,11,`p-scroller`,33),jE(7,To,1,6,`ng-container`),Gp(8,zo,6,8,`ng-template`,null,6,YI),ou(),jE(10,$o,3,1,`div`),Li$1(11,`span`,32,7),rh(`focus`,function(t){Zl(e);return Yl(KE().onLastHiddenFocus(t))}),ou()()}if(i&2){let e=KE();EI(e.cn(e.cx(`overlay`),e.panelStyleClass())),Qp(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle()),Yp(`data-p`,e.overlayDataP)(`id`,e.id()+`_list`),Lv(),Qp(`pBind`,e.ptm(`firstHiddenFocusableEl`)),Yp(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),Lv(2),Qp(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate),Lv(),BE(e.showHeader()?4:-1),Lv(),EI(e.cx(`listContainer`)),hh(`max-height`,e.virtualScroll()?`auto`:e.scrollHeight()||`auto`),Qp(`pBind`,e.ptm(`listContainer`)),Lv(),BE(e.virtualScroll()?6:-1),Lv(),BE(e.virtualScroll()?-1:7),Lv(3),BE(e.footerFacet()||e.footerTemplate||e._footerTemplate?10:-1),Lv(),Qp(`pBind`,e.ptm(`lastHiddenFocusableEl`)),Yp(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var Ko=`
    ${ii}

    /* For ngx-prime */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var Go={root:({instance:i})=>({position:i.$appendTo()===`self`?`relative`:void 0})};var jo={root:({instance:i})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":i.display===`chip`,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-focus":i.focused,"p-inputwrapper-filled":i.$filled(),"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-multiselect-open":i.overlayVisible,"p-multiselect-fluid":i.hasFluid,"p-multiselect-sm p-inputfield-sm":i.size()===`small`,"p-multiselect-lg p-inputfield-lg":i.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:i})=>({"p-multiselect-label":!0,"p-placeholder":i.label()===i.placeholder(),"p-multiselect-label-empty":!i.placeholder()&&!i.defaultLabel&&(!i.modelValue()||i.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:i})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":i.selected&&i.highlightOnSelect,"p-disabled":i.disabled,"p-focus":i.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var Re=(()=>{class i extends Y{name=`multiselect`;style=Ko;classes=jo;inlineStyles=Go;static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var ni=new C(`MULTISELECT_INSTANCE`);var qo=new C(`MULTISELECT_ITEM_INSTANCE`);var Uo={provide:K,useExisting:Uo$1(()=>Ge),multi:!0};var Qo=(()=>{class i extends As{$pcMultiSelectItem=g(qo,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected(),focused:this.focused(),disabled:this.disabled()}})}option=Du();selected=Du(void 0,{transform:xw});label=Du();disabled=Du(void 0,{transform:xw});itemSize=Du(void 0,{transform:Aw});focused=Du(void 0,{transform:xw});ariaPosInset=Du();ariaSetSize=Du();variant=Du(void 0);template=Du();checkIconTemplate=Du();itemCheckboxIconTemplate=Du();highlightOnSelect=Du(void 0,{transform:xw});onClick=CL();onMouseEnter=CL();_componentStyle=g(Re);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option(),selected:this.selected()}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option(),selected:this.selected()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=Df(i)))(t||i)}})();static ɵcmp=hE({type:i,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,t){n&1&&rh(`click`,function(l){return t.onOptionClick(l)})(`mouseenter`,function(l){return t.onOptionMouseEnter(l)}),n&2&&(Yp(`aria-label`,t.label())(`aria-setsize`,t.ariaSetSize())(`aria-posinset`,t.ariaPosInset())(`aria-selected`,t.selected())(`data-p-selected`,t.selected())(`data-p-focused`,t.focused())(`data-p-highlight`,t.selected())(`data-p-disabled`,t.disabled())(`aria-checked`,t.selected()),EI(t.cx(`option`)),hh(`height`,t.itemSize(),`px`))},inputs:{option:[1,`option`],selected:[1,`selected`],label:[1,`label`],disabled:[1,`disabled`],itemSize:[1,`itemSize`],focused:[1,`focused`],ariaPosInset:[1,`ariaPosInset`],ariaSetSize:[1,`ariaSetSize`],variant:[1,`variant`],template:[1,`template`],checkIconTemplate:[1,`checkIconTemplate`],itemCheckboxIconTemplate:[1,`itemCheckboxIconTemplate`],highlightOnSelect:[1,`highlightOnSelect`]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[HI([Re]),Up],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&(Li$1(0,`p-checkbox`,1),jE(1,Ri,2,0),ou(),bD(),jE(2,Ki,2,1,`span`),Gp(3,Gi,1,0,`ng-container`,2)),n&2&&(Qp(`ngModel`,t.selected())(`binary`,!0)(`tabindex`,-1)(`variant`,t.variant())(`ariaLabel`,t.label())(`pt`,t.getPTOptions(`pcOptionCheckbox`))(`unstyled`,t.unstyled()),_D(),Lv(),BE(t.itemCheckboxIconTemplate()?1:-1),Lv(),BE(t.template()?-1:2),Lv(),Qp(`ngTemplateOutlet`,t.template())(`ngTemplateOutletContext`,UI(11,oi,t.option())))},dependencies:[$w,Hw,$e,Fn$1,Dn$2,Yt,Dn$1],encapsulation:2})}return i})();var Ge=(()=>{class i extends xe{zone=g(me);filterService=g(Ln$1);overlayService=g(Rn$1);componentName=`MultiSelect`;id=Du();_generatedId;get resolvedId(){return this.id()||(this._generatedId??=At(`pn_id_`))}ariaLabel=Du();styleClass=Du();panelStyle=Du();panelStyleClass=Du();inputId=Du();readonly=Du(void 0,{transform:xw});group=Du(void 0,{transform:xw});filter=Du(!0,{transform:xw});filterPlaceHolder=Du();filterLocale=Du();overlayVisible=bL(!1);tabindex=Du(0,{transform:Aw});dataKey=Du();ariaLabelledBy=Du();displaySelectedLabel=Du(!0);maxSelectedLabels=Du(3);selectionLimit=Du(void 0,{transform:Aw});selectedItemsLabel=Du();showToggleAll=Du(!0,{transform:xw});emptyFilterMessage=Du(``);emptyMessage=Du(``);resetFilterOnHide=Du(!1,{transform:xw});dropdownIcon=Du();chipIcon=Du();optionLabel=Du();optionValue=Du();optionDisabled=Du();optionGroupLabel=Du(`label`);optionGroupChildren=Du(`items`);showHeader=Du(!0,{transform:xw});filterBy=Du();scrollHeight=Du(`200px`);lazy=Du(!1,{transform:xw});virtualScroll=Du(void 0,{transform:xw});loading=Du(!1,{transform:xw});virtualScrollItemSize=Du(void 0,{transform:Aw});loadingIcon=Du();virtualScrollOptions=Du();overlayOptions=Du();ariaFilterLabel=Du();filterMatchMode=Du(`contains`);tooltip=Du(``);tooltipPosition=Du(`right`);tooltipPositionStyle=Du(`absolute`);tooltipStyleClass=Du();autofocusFilter=Du(!1,{transform:xw});display=Du(`comma`);autocomplete=Du(`off`);showClear=Du(!1,{transform:xw});autofocus=Du(void 0,{transform:xw});placeholder=Du();options=Du();filterValue=Du();selectAll=Du();focusOnHover=Du(!0,{transform:xw});filterFields=Du();selectOnFocus=Du(!1,{transform:xw});autoOptionFocus=Du(!1,{transform:xw});highlightOnSelect=Du(!0,{transform:xw});size=Du();variant=Du();fluid=Du(void 0,{transform:xw});appendTo=Du(void 0);motionOptions=Du(void 0);onChange=CL();onFilter=CL();onFocus=CL();onBlur=CL();onClick=CL();onClear=CL();onPanelShow=CL();onPanelHide=CL();onLazyLoad=CL();onRemove=CL();onSelectAllChange=CL();overlayViewChild=TL(`overlay`);filterInputChild=TL(`filterInput`);focusInputViewChild=TL(`focusInput`);itemsViewChild=TL(`items`);scroller=TL(`scroller`);lastHiddenFocusableElementOnOverlay=TL(`lastHiddenFocusableEl`);firstHiddenFocusableElementOnOverlay=TL(`firstHiddenFocusableEl`);headerCheckboxViewChild=TL(`headerCheckbox`);footerFacet=_L(In$1);headerFacet=_L(wn$1);_componentStyle=g(Re);bindDirectiveInstance=g(Ds,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=Ie(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate=_L(`item`,{descendants:!1});groupTemplate;loaderTemplate;headerTemplate=_L(`header`,{descendants:!1});filterTemplate;footerTemplate;emptyFilterTemplate=_L(`emptyfilter`,{descendants:!1});emptyTemplate=_L(`empty`,{descendants:!1});selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate=_L(`itemcheckboxicon`,{descendants:!1});headerCheckboxIconTemplate=_L(`headercheckboxicon`,{descendants:!1});templates=SL(Pn$1);_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=ew(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=ew(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=g(ni,{optional:!0,skipSelf:!0})??void 0;pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=Ie(null);_filterValue=Ie(null);_options=Ie([]);startRangeIndex=Ie(-1);focusedOptionIndex=Ie(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage()||this.config.getTranslation(Mn$1.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage()||this.config.getTranslation(Mn$1.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&y(this.modelValue())&&this.showClear()&&!this.$disabled()&&!this.readonly()&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(Mn$1.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group()?this.flatOptions(this._options()):this._options()||[]}visibleOptions=ew(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=Be(e)&&Ce.isObject(e[0]);if(this._filterValue()){let t;if(n?t=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode(),this.filterLocale()):t=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group()){let o=this._options()||[],l=[];return o.forEach(x=>{let Z=this.getOptionGroupChildren(x).filter(ri=>t.includes(ri)),Xe=this.optionGroupChildren();Z.length>0&&l.push(s(r({},x),{[typeof Xe==`string`?Xe:`items`]:[...Z]}))}),this.flatOptions(l)}return t}return e});label=ew(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel()){if(y(this.maxSelectedLabels())&&n?.length>(this.maxSelectedLabels()||0))return this.getSelectedItemsLabel();e=``;for(let t=0;t<n.length;t++)t!==0&&(e+=`, `),e+=this.getLabelByValue(n[t])}else e=this.placeholder()||``;return e});chipSelectedItems=ew(()=>y(this.maxSelectedLabels())&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels()||0)?this.modelValue()?.slice(0,this.maxSelectedLabels()):this.modelValue());constructor(){super(),di$1(()=>{let e=this.modelValue(),n=this.getAllVisibleAndNonVisibleOptions();n&&y(n)&&(this.optionValue()&&this.optionLabel()&&e?this.selectedOptions=n.filter(t=>e.includes(t[this.optionLabel()])||e.includes(t[this.optionValue()])):this.selectedOptions=e,this.cd.markForCheck())}),di$1(()=>{this._placeholder.set(this.placeholder())}),di$1(()=>{let e=this.options();Ti$1(this._options(),e)||this._options.set(e||[])}),di$1(()=>{this._filterValue.set(this.filterValue())})}onInit(){this.autoUpdateModel(),this.filterBy()&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){let e=this.selectionLimit();return e&&this.modelValue()&&this.modelValue().length===e}onAfterViewInit(){this.overlayVisible()&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild()?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,t,o)=>{n.push({optionGroup:t,group:!0,index:o});let l=this.getOptionGroupChildren(t);return l&&l.forEach(x=>n.push(x)),n},[])}autoUpdateModel(){if(this.selectOnFocus()&&this.autoOptionFocus()&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,t=-1){let{originalEvent:o,option:l}=e;if(this.$disabled()||this.isOptionDisabled(l))return;let x=this.isSelected(l),C=[];x?C=this.modelValue().filter(Z=>!ie(Z,this.getOptionValue(l),this.equalityKey()||``)):C=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(C,o),t!==-1&&this.focusedOptionIndex.set(t),n&&qi$1(this.focusInputViewChild()?.nativeElement),this.onChange.emit({originalEvent:e,value:C,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,t=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(t,!0)),t===-1&&(t=this.findNearestSelectedOptionIndex(n)),n!==-1&&t!==-1){let o=Math.min(n,t),l=Math.max(n,t),x=this.visibleOptions().slice(o,l+1).filter(C=>this.isValidOption(C)).map(C=>this.getOptionValue(C));this.updateModel(x,e)}}searchFields(){return(this.filterBy()||this.optionLabel()||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let t=-1;return this.hasSelectedOption()&&(n?(t=this.findPrevSelectedOptionIndex(e),t=t===-1?this.findNextSelectedOptionIndex(e):t):(t=this.findNextSelectedOptionIndex(e),t=t===-1?this.findPrevSelectedOptionIndex(e):t)),t>-1?t:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?hn$1(this.visibleOptions().slice(0,e),t=>this.isValidSelectedOption(t)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(t=>this.isValidSelectedOption(t)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue()?null:this.dataKey()}hasSelectedOption(){return y(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group()||this.optionGroupLabel())&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){if(this.maxSelectionLimitReached()&&!this.isSelected(e))return!0;let n=this.optionDisabled();return n?Re$1(e,n):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(t=>ie(t,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale()).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel()?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let t=(this.group()?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&ie(this.getOptionValue(o),e,this.equalityKey()||``));return t?this.getOptionLabel(t):null}getSelectedItemsLabel(){let e=/{(.*?)}/,t=this.selectedItemsLabel()||this.config.getTranslation(Mn$1.SELECTION_MESSAGE);return e.test(t)?t.replace(t.match(e)[0],this.modelValue().length+``):t}getOptionLabel(e){let n=this.optionLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Re$1(e,n):!this.optionLabel()&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){let n=this.optionGroupLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){let n=this.optionGroupChildren();return e?n?Re$1(e,n):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let t=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(t,e),e.preventDefault();break}!n&&fn$1(e.key)&&(!this.overlayVisible()&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible()&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible()&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex()),this.changeFocusedOptionIndex(e,t),!this.overlayVisible()&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:t}=e;if(n){let o=t.value.length;t.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:t}=e;if(n){let o=t.value.length;t.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible()?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible()&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){if(!n){let t=this.overlayVisible();if(t&&this.hasFocusableElements())qi$1(e.shiftKey?this.lastHiddenFocusableElementOnOverlay()?.nativeElement:this.firstHiddenFocusableElementOnOverlay()?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];!this.isSelected(o)&&this.onOptionSelect({originalEvent:e,option:o})}t&&this.hide(this.filter())}}}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){let n=this.focusInputViewChild();if(this.$disabled()||this.loading()||this.readonly()||e.target?.isSameNode?.(n?.nativeElement))return;let t=this.overlayViewChild();if(!t||!t.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible()?this.hide(!0):this.show(!0)}n?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}onFirstHiddenFocus(e){let n=this.focusInputViewChild();qi$1(e.relatedTarget===n?.nativeElement?Yi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible()&&this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible()&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller()?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}onLastHiddenFocus(e){let n=this.focusInputViewChild();qi$1(e.relatedTarget===n?.nativeElement?Xi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover()&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly())){if(this.selectAll()!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(C=>{let Z=this.optionDisabled();return this.isSelected(C)&&(Z?Re$1(C,Z):C&&C.disabled!==void 0?C.disabled:!1)}),t=this.allSelected()?this.visibleOptions().filter(C=>!this.isValidOption(C)&&this.isSelected(C)):this.visibleOptions().filter(C=>this.isSelected(C)||this.isValidOption(C)),l=[...this.filter()&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(C=>this.isSelected(C)&&this.isValidOption(C)):[],...n,...t].map(C=>this.getOptionValue(C)),x=[...new Set(l)];this.updateModel(x,e),(!x.length||x.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!x.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),xt.focus(this.headerCheckboxViewChild()?.inputViewChild()?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll()}scrollInView(e=-1){let n=e!==-1?`${this.resolvedId}_${e}`:this.focusedOptionId,t=this.itemsViewChild();if(t&&t.nativeElement){let o=Ki$1(t.nativeElement,`li[id="${n}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll()&&this.scroller()?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.resolvedId}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:y(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this._options()?.length||0)}show(e){this.overlayVisible.set(!0);let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus()?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&qi$1(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible.set(!1),this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter(),this.overlayOptions()?.mode===`modal`&&qe(),e&&qi$1(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Ki$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,this.virtualScroll()?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll()&&this.scroller()?.setContentEl(this.itemsViewChild()?.nativeElement),this._options()&&this._options().length)if(this.virtualScroll()){let t=this.modelValue()?this.focusedOptionIndex():-1;t!==-1&&this.scroller()?.scrollToIndex(t)}else{let t=Ki$1(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);t&&t.scrollIntoView({block:`nearest`,inline:`nearest`})}let n=this.filterInputChild();n&&n.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter()&&n.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){let e=this.filterInputChild();e&&e.nativeElement&&(e.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(){this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let t=this.modelValue().filter(o=>!ie(o,e,this.equalityKey()||``));this.updateModel(t,n),this.onChange.emit({originalEvent:n,value:t,itemValue:e}),this.onRemove.emit({newValue:t,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(t=>this.isValidOption(t)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?hn$1(this.visibleOptions().slice(0,e),t=>this.isValidOption(t)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?hn$1(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return hn$1(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let t=-1,o=!1;return this.focusedOptionIndex()!==-1?(t=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),t=t===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):t+this.focusedOptionIndex()):t=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),t!==-1&&(o=!0),t===-1&&this.focusedOptionIndex()===-1&&(t=this.findFirstFocusedOptionIndex()),t!==-1&&this.changeFocusedOptionIndex(e,t),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return mt(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label()===this.placeholder(),clearable:this.showClear(),disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display()===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels()?this.value.length<=this.maxSelectedLabels():!0),empty:!this.placeholder()&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,t,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(t,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||i)};static ɵcmp=hE({type:i,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,t,o){if(n&1&&(ch(o,t.footerFacet,In$1,5)(o,t.headerFacet,wn$1,5)(o,t.itemTemplate,ji,4)(o,t.headerTemplate,qi,4)(o,t.emptyFilterTemplate,Ui,4)(o,t.emptyTemplate,Qi,4)(o,t.itemCheckboxIconTemplate,Wi,4)(o,t.headerCheckboxIconTemplate,Yi,4)(o,t.templates,Pn$1,4),sh(o,Xi,4)(o,Zi,4)(o,Ji,4)(o,en,4)(o,tn,4)(o,nn,4)(o,on,4)(o,ln,4)(o,an,4)(o,sn,4)(o,rn,4)),n&2){oI(9);let l;nI(l=rI())&&(t.groupTemplate=l.first),nI(l=rI())&&(t.loaderTemplate=l.first),nI(l=rI())&&(t.filterTemplate=l.first),nI(l=rI())&&(t.footerTemplate=l.first),nI(l=rI())&&(t.selectedItemsTemplate=l.first),nI(l=rI())&&(t.loadingIconTemplate=l.first),nI(l=rI())&&(t.filterIconTemplate=l.first),nI(l=rI())&&(t.removeTokenIconTemplate=l.first),nI(l=rI())&&(t.chipIconTemplate=l.first),nI(l=rI())&&(t.clearIconTemplate=l.first),nI(l=rI())&&(t.dropdownIconTemplate=l.first)}},viewQuery:function(n,t){n&1&&uh(t.overlayViewChild,cn,5)(t.filterInputChild,dn,5)(t.focusInputViewChild,pn,5)(t.itemsViewChild,un,5)(t.scroller,mn,5)(t.lastHiddenFocusableElementOnOverlay,hn,5)(t.firstHiddenFocusableElementOnOverlay,_n,5)(t.headerCheckboxViewChild,fn,5),n&2&&oI(8)},hostVars:6,hostBindings:function(n,t){n&1&&rh(`click`,function(l){return t.onContainerClick(l)}),n&2&&(Yp(`id`,t.resolvedId)(`data-p`,t.containerDataP),vI(t.sx(`root`)),EI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{id:[1,`id`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],panelStyle:[1,`panelStyle`],panelStyleClass:[1,`panelStyleClass`],inputId:[1,`inputId`],readonly:[1,`readonly`],group:[1,`group`],filter:[1,`filter`],filterPlaceHolder:[1,`filterPlaceHolder`],filterLocale:[1,`filterLocale`],overlayVisible:[1,`overlayVisible`],tabindex:[1,`tabindex`],dataKey:[1,`dataKey`],ariaLabelledBy:[1,`ariaLabelledBy`],displaySelectedLabel:[1,`displaySelectedLabel`],maxSelectedLabels:[1,`maxSelectedLabels`],selectionLimit:[1,`selectionLimit`],selectedItemsLabel:[1,`selectedItemsLabel`],showToggleAll:[1,`showToggleAll`],emptyFilterMessage:[1,`emptyFilterMessage`],emptyMessage:[1,`emptyMessage`],resetFilterOnHide:[1,`resetFilterOnHide`],dropdownIcon:[1,`dropdownIcon`],chipIcon:[1,`chipIcon`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],optionGroupLabel:[1,`optionGroupLabel`],optionGroupChildren:[1,`optionGroupChildren`],showHeader:[1,`showHeader`],filterBy:[1,`filterBy`],scrollHeight:[1,`scrollHeight`],lazy:[1,`lazy`],virtualScroll:[1,`virtualScroll`],loading:[1,`loading`],virtualScrollItemSize:[1,`virtualScrollItemSize`],loadingIcon:[1,`loadingIcon`],virtualScrollOptions:[1,`virtualScrollOptions`],overlayOptions:[1,`overlayOptions`],ariaFilterLabel:[1,`ariaFilterLabel`],filterMatchMode:[1,`filterMatchMode`],tooltip:[1,`tooltip`],tooltipPosition:[1,`tooltipPosition`],tooltipPositionStyle:[1,`tooltipPositionStyle`],tooltipStyleClass:[1,`tooltipStyleClass`],autofocusFilter:[1,`autofocusFilter`],display:[1,`display`],autocomplete:[1,`autocomplete`],showClear:[1,`showClear`],autofocus:[1,`autofocus`],placeholder:[1,`placeholder`],options:[1,`options`],filterValue:[1,`filterValue`],selectAll:[1,`selectAll`],focusOnHover:[1,`focusOnHover`],filterFields:[1,`filterFields`],selectOnFocus:[1,`selectOnFocus`],autoOptionFocus:[1,`autoOptionFocus`],highlightOnSelect:[1,`highlightOnSelect`],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{overlayVisible:`overlayVisibleChange`,onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[HI([Uo,Re,{provide:ni,useExisting:i},{provide:xi$1,useExisting:i}]),IE([Ds]),Up],ngContentSelectors:bn,decls:15,vars:50,consts:[[`focusInput`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[3,`pt`,`class`,`unstyled`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`],[`pMultiSelectItem`,``,`pRipple`,``,3,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,t){n&1&&(JE(gn),Li$1(0,`div`,14)(1,`input`,15,0),rh(`focus`,function(l){return t.onInputFocus(l)})(`blur`,function(l){return t.onInputBlur(l)})(`keydown`,function(l){return t.onKeyDown(l)}),ou()(),Li$1(3,`div`,16),rh(`mouseleave`,function(){return t.labelContainerMouseLeave()}),Li$1(4,`div`,17),jE(5,Nn,2,2),jE(6,Pn,2,6),ou()(),jE(7,Rn,3,2,`ng-container`),Li$1(8,`div`,17),jE(9,Qn,3,2,`ng-container`)(10,to,2,2),ou(),Li$1(11,`p-overlay`,18,1),rh(`visibleChange`,function(l){return t.overlayVisible.set(l)})(`onBeforeEnter`,function(l){return t.onOverlayBeforeEnter(l)})(`onAfterLeave`,function(l){return t.onOverlayAfterLeave(l)})(`onHide`,function(){return t.onOverlayHide()}),Gp(13,Ro,13,24,`ng-template`,null,2,YI),ou()),n&2&&(Qp(`pBind`,t.ptm(`hiddenInputContainer`)),Yp(`data-p-hidden-accessible`,!0),Lv(),Qp(`pTooltip`,t.tooltip())(`pTooltipUnstyled`,t.unstyled())(`tooltipPosition`,t.tooltipPosition())(`positionStyle`,t.tooltipPositionStyle())(`tooltipStyleClass`,t.tooltipStyleClass())(`pAutoFocus`,t.autofocus())(`pBind`,t.ptm(`hiddenInput`)),Yp(`aria-disabled`,t.$disabled())(`id`,t.inputId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-haspopup`,`listbox`)(`aria-expanded`,t.overlayVisible()??!1)(`aria-controls`,t.overlayVisible()?t.id()+`_list`:null)(`tabindex`,t.$disabled()?-1:t.tabindex())(`aria-activedescendant`,t.focused?t.focusedOptionId:void 0)(`value`,t.modelValue())(`name`,t.name())(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0),Lv(2),EI(t.cx(`labelContainer`)),Qp(`pBind`,t.ptm(`labelContainer`))(`pTooltip`,t.tooltip())(`pTooltipUnstyled`,t.unstyled())(`tooltipDisabled`,t._disableTooltip)(`tooltipPosition`,t.tooltipPosition())(`positionStyle`,t.tooltipPositionStyle())(`tooltipStyleClass`,t.tooltipStyleClass()),Lv(),EI(t.cx(`label`)),Qp(`pBind`,t.ptm(`label`)),Yp(`data-p`,t.labelDataP),Lv(),BE(!t.selectedItemsTemplate&&!t._selectedItemsTemplate?5:-1),Lv(),BE(t.selectedItemsTemplate||t._selectedItemsTemplate?6:-1),Lv(),BE(t.isVisibleClearIcon?7:-1),Lv(),EI(t.cx(`dropdown`)),Qp(`pBind`,t.ptm(`dropdown`)),Lv(),BE(t.loading()?9:10),Lv(2),Qp(`hostAttrSelector`,t.$attrSelector)(`visible`,t.overlayVisible())(`options`,t.overlayOptions())(`target`,`@parent`)(`appendTo`,t.$appendTo())(`unstyled`,t.unstyled())(`pt`,t.ptm(`pcOverlay`))(`motionOptions`,t.motionOptions()))},dependencies:[$w,Bw,Hw,Vw,Qo,mt$1,Dn$1,mi$1,ci$1,Yt$1,f,ii$1,f$1,d,ei$1,li$1,et,ti,$e,Fn$1,Dn$2,Yt,Ms,Ds],encapsulation:2})}return i})();var si=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Zi$1({type:i});static ɵinj=gr({imports:[Ge,Dn$1,Dn$1]})}return i})();var Yo=(i,a)=>a.listing._id;function Xo(i,a){if(i&1){let e=YE();Li$1(0,`div`,10),rh(`click`,function(){let t=Zl(e).$implicit;return Yl(KE().view(t.listing))}),Li$1(1,`app-listing-short`,11),rh(`relationClick`,function(t){Zl(e);return Yl(KE().viewRelation(t))}),ou()()}if(i&2){let e=a.$implicit;Lv(),Qp(`entity`,e.listing)(`agent`,e.relations.agent)(`agency`,e.relations.agency)(`developer`,e.relations.developer)(`complex`,e.relations.complex)}}function Zo(i,a){i&1&&(Li$1(0,`p`,9),xI(1,`За заданими критеріями оголошень не знайдено.`),ou())}var Jo={apartment:`Квартира`,house:`Будинок`,room:`Кімната`,land:`Земельна ділянка`,office:`Офіс`,"retail-space":`Торгове приміщення`,warehouse:`Склад`,garage:`Гараж`,"parking-space":`Паркомісце`,"commercial-building":`Комерційна будівля`,"industrial-property":`Промислова нерухомість`,"agricultural-property":`Сільськогосподарська нерухомість`,"unfinished-construction":`Незавершене будівництво`};var el={sale:`Продаж`,"long-term-rent":`Довгострокова оренда`,"short-term-rent":`Короткострокова оренда`,"commercial-lease":`Комерційна оренда`,"land-sale":`Продаж землі`,other:`Інше`};var tl={draft:`Чернетка`,"pending-review":`На розгляді`,active:`Активне`,reserved:`Заброньоване`,rented:`Здано в оренду`,sold:`Продано`,expired:`Термін минув`,paused:`Призупинено`,rejected:`Відхилено`,archived:`Архівоване`};var Aa=(()=>{class i{constructor(){this._router=g(re),this.translateService=g(Dg),this.propertyTypeOptions=Object.entries(Jo).map(([e,n])=>({value:e,label:n})),this.listingTypeOptions=Object.entries(el).map(([e,n])=>({value:e,label:n})),this.listingStatusOptions=Object.entries(tl).map(([e,n])=>({value:e,label:n})),this.searchTerm=Ie(``),this.selectedPropertyTypes=Ie([]),this.selectedListingType=Ie(null),this.selectedStatus=Ie(null),this.results=ew(()=>{let e=this.searchTerm().trim().toLowerCase(),n=this.selectedPropertyTypes(),t=this.selectedListingType(),o=this.selectedStatus();return U.filter(l=>{let x=s$1(l);return!(e&&![l.title,l.publicLocation,x?.city,x?.address].filter(Boolean).join(` `).toLowerCase().includes(e)||n.length&&(!x||!n.includes(x.type))||t&&l.listingType!==t||o&&l.status!==o)}).map(l=>({listing:l,relations:f$2(l)}))})}view(e){this._router.navigate([`/listing`,e._id])}viewRelation(e){this._router.navigate([`/`,e.type,e.id])}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=hE({type:i,selectors:[[`ng-component`]],decls:14,vars:14,consts:[[1,`explore`],[1,`explore__header`],[`translate`,``,1,`explore__title`],[`pInputText`,``,`type`,`text`,1,`explore__search`,3,`ngModelChange`,`placeholder`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,1,`explore__filter`,3,`ngModelChange`,`options`,`placeholder`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,1,`explore__filter`,3,`ngModelChange`,`options`,`placeholder`,`showClear`,`ngModel`],[`pButton`,``,`routerLink`,`/map`,`severity`,`secondary`,`size`,`small`,`translate`,``,1,`explore__map-link`],[1,`explore__grid`],[1,`explore__row`],[`translate`,``,1,`explore__empty`],[1,`explore__row`,3,`click`],[3,`relationClick`,`entity`,`agent`,`agency`,`developer`,`complex`]],template:function(n,t){n&1&&(Li$1(0,`div`,0)(1,`div`,1)(2,`h1`,2),xI(3,`Пошук`),ou(),Li$1(4,`input`,3),rh(`ngModelChange`,function(l){return t.searchTerm.set(l)}),ou(),bD(),Li$1(5,`p-multiSelect`,4),rh(`ngModelChange`,function(l){return t.selectedPropertyTypes.set(l)}),ou(),bD(),Li$1(6,`p-select`,5),rh(`ngModelChange`,function(l){return t.selectedListingType.set(l)}),ou(),bD(),Li$1(7,`p-select`,5),rh(`ngModelChange`,function(l){return t.selectedStatus.set(l)}),ou(),bD(),Li$1(8,`a`,6),xI(9,`Карта`),ou()(),Li$1(10,`div`,7),$E(11,Xo,2,5,`div`,8,Yo,!1,Zo,2,0,`p`,9),ou()()),n&2&&(Lv(4),Qp(`placeholder`,t.translateService.translate(`Адреса, місто або назва оголошення`)())(`ngModel`,t.searchTerm()),_D(),Lv(),Qp(`options`,t.propertyTypeOptions)(`placeholder`,t.translateService.translate(`Тип нерухомості`)())(`ngModel`,t.selectedPropertyTypes()),_D(),Lv(),Qp(`options`,t.listingTypeOptions)(`placeholder`,t.translateService.translate(`Тип угоди`)())(`showClear`,!0)(`ngModel`,t.selectedListingType()),_D(),Lv(),Qp(`options`,t.listingStatusOptions)(`placeholder`,t.translateService.translate(`Статус`)())(`showClear`,!0)(`ngModel`,t.selectedStatus()),_D(),Lv(4),UE(t.results()))},dependencies:[H$1,Fn$1,We,Dn$2,Yt,Ot,Kn$1,Jn$1,nt,et,vs,Ci$1,si,Ge,hj],styles:[`.explore__header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--%NS%sp-2);margin-bottom:var(--%NS%sp-4)}.explore__title[_ngcontent-%COMP%]{margin:0 var(--%NS%sp-4) 0 0}.explore__search[_ngcontent-%COMP%]{min-width:220px;flex:1 1 220px}.explore__filter[_ngcontent-%COMP%]{min-width:180px}.explore__map-link[_ngcontent-%COMP%]{margin-left:auto}.explore__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:var(--%NS%sp-4)}.explore__row[_ngcontent-%COMP%]{cursor:pointer}.explore__empty[_ngcontent-%COMP%]{color:var(--%NS%c-text-muted)}`]})}}return i})();export{Aa as ExploreComponent};