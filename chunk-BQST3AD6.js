import{$ as KE,Cn as eI,D as EI,Dr as sh,F as Gp,Fn as gr,Fr as uu,H as IE,Ir as vI,K as JE,Ln as hE,R as HI,Tn as eh,Vr as xI,Vt as Up,W as Ie,Xn as k,ct as Lv,in as Zi,jn as g,kt as SL,l as BE,lr as ou,nr as nI,or as oI,ot as Li,p as C,qn as jE,r as $w,sn as _L,vn as ch,w as Du,wt as Qp,x as Df,xn as di,yr as rI,z as Hw}from"./chunk-CYoSJ9Oz.js";import{A as Y,W as ie$1,_ as Ms,a as Dn,ct as xi,d as In,o as Ds,st as wn,t as As,y as Pn}from"./chunk-C3iF_hnz.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&eh(0)}function se(t,r){if(t&1&&(Li(0,`div`,1),eI(1,1),Gp(2,pe,1,0,`ng-container`,2),ou()),t&2){let e=KE();EI(e.cx(`header`)),Qp(`pBind`,e.ptm(`header`)),Lv(2),Qp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&xI(0),t&2)uu(` `,KE(2).header(),` `)}function ue(t,r){t&1&&eh(0)}function fe(t,r){if(t&1&&(Li(0,`div`,1),jE(1,me,1,1),Gp(2,ue,1,0,`ng-container`,2),ou()),t&2){let e=KE();EI(e.cx(`title`)),Qp(`pBind`,e.ptm(`title`)),Lv(),BE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Lv(),Qp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&xI(0),t&2)uu(` `,KE(2).subheader(),` `)}function he(t,r){t&1&&eh(0)}function ye(t,r){if(t&1&&(Li(0,`div`,1),jE(1,_e,1,1),Gp(2,he,1,0,`ng-container`,2),ou()),t&2){let e=KE();EI(e.cx(`subtitle`)),Qp(`pBind`,e.ptm(`subtitle`)),Lv(),BE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Lv(),Qp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&eh(0)}function ge(t,r){t&1&&eh(0)}function be(t,r){if(t&1&&(Li(0,`div`,1),eI(1,2),Gp(2,ge,1,0,`ng-container`,2),ou()),t&2){let e=KE();EI(e.cx(`footer`)),Qp(`pBind`,e.ptm(`footer`)),Lv(2),Qp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Df(t)))(n||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var ne=new C(`CARD_INSTANCE`);var Me=(()=>{class t extends As{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=Du();subheader=Du();style=Du();styleClass=Du();headerFacet=_L(wn);footerFacet=_L(In);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=_L(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Ie(null);constructor(){super(),di(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=SL(Pn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=hE({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(ch(l,n.headerFacet,wn,5)(l,n.footerFacet,In,5)(l,n.contentTemplate,ie,4)(l,n.templates,Pn,4),sh(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){oI(4);let d;nI(d=rI())&&(n.headerTemplate=d.first),nI(d=rI())&&(n.titleTemplate=d.first),nI(d=rI())&&(n.subtitleTemplate=d.first),nI(d=rI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(vI(n._style()),EI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[HI([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),IE([Ds]),Up],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(JE(de),jE(0,se,3,4,`div`,0),Li(1,`div`,1),jE(2,fe,3,5,`div`,0),jE(3,ye,3,5,`div`,0),Li(4,`div`,1),eI(5),Gp(6,Te,1,0,`ng-container`,2),ou(),jE(7,be,3,4,`div`,0),ou()),i&2&&(BE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Lv(),EI(n.cx(`body`)),Qp(`pBind`,n.ptm(`body`)),Lv(),BE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Lv(),BE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Lv(),EI(n.cx(`content`)),Qp(`pBind`,n.ptm(`content`)),Lv(2),Qp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Lv(),BE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[$w,Hw,Dn,Ms,Ds],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Zi({type:t});static ɵinj=gr({imports:[Me,Dn,Ms,Dn,Ms]})}return t})();export{Ve as n,Me as t};