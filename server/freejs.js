// ==UserScript==
// @name        FreeFs
// @description free-lance.ru interface patch
// @namespace   http://freejs.elisdn.ru/
// @include     http://www.free-lance.ru/*
// ==/UserScript

/*
 * FreeJS (free-lance.ru interface patch)
 * Author: Eliseev Dmitry Nikolaevich
 * Site1: http://freejs.elisdn.ru/
 * Site2: http://free-lance.ru/users/ElisDN
 * Email: mail@elisdn.ru
 */
 
if (
	!location.href.match(/iframe/) && 
	!location.href.match(/upload/) && 
	!location.href.match(/inframe/) && 
	!location.href.match(/share\.php/)
) {
 
var fj_scriptVersion = '1.14.10';
var fj_clientLastVersion = '1.6';
var fj_clientVersion = (fj_config['clientVersion'] != undefined) ? fj_config['clientVersion'] : 1;
fj_config['anchorsbg'] = (fj_config['anchorsbg'] != undefined) ? fj_config['anchorsbg'] : '#fda';

var fj_params = {

	'fj_modifyUserbar':[ 'Изменение шапки', true ],
	'fj_hideBlogs':[ 'Скрытие блогов', true ],
	'fj_ansverTemplates':[ 'Заготовки ответов на проекты', true ],
	'fj_bgNonReaded':[ 'Подсветка сообщений и проектов', true ],
	'fj_BBCodeBar':[ 'ВВ-панель для многострочных полей', true ],
	'fj_fieldIsCorrect':[ 'Автозаполнение &laquo;Поле заполнено корректно&raquo;', true ],
	'fj_profileGallery':[ 'Просмотр портфолио в режиме галереи', true ],
	'fj_profileLiterature':[ 'Библиотека в пользовательской панели', true ],
	'fj_Smiles':[ 'Смайлики в блогах', true ],
	'fj_checkMessages':[ 'Оповещение о новых сообщениях', true ],
	'fj_highlightCode':[ 'Подсветка синтаксиса программного кода в блогах', true ],
	'fj_visualAnchors':[ 'Маркировка комментариев в блогах', true ],
	'fj_highlightGuests':[ 'Подсветка посетителей в статистике', true ],
	'fj_noPRO':[ 'Вкладка "Не для PRO" для неPRO пользователей', true ],
	'fj_oldStyle':[ 'Изменение стиля', true ]

};

var fj_smiles = {
	':)':'smiley.gif',
	'=)':'lipsrsealed.gif',
	'8(':'shocked.gif',
	':P':'tongue.gif',
	'?(':'huh.gif',
	'O:-)': 'aa.gif',
	':-)': 'ab.gif',
	':-(': 'ac.gif',
	';-)': 'ad.gif',
	':-P': 'ae.gif',
	'8-)': 'af.gif',
	':D': 'ag.gif',
	':-D': 'ag.gif',
	':-[': 'ah.gif',
	'=-O': 'ai.gif',
	':-*': 'aj.gif',
	':-\'(': 'ak.gif',
	':-X': 'al.gif',
	'>:o': 'am.gif',
	':-|': 'an.gif',
	':-\\': 'ao.gif',
	'*смеюсь*': 'ap.gif',
	']:->': 'aq.gif',
	'[:-}': 'ar.gif',
	'*kissed*': 'as.gif',
	':-!': 'at.gif',
	'*засыпаю*': 'au.gif',
	'*stop*': 'av.gif',
	'*целую*': 'aw.gif',
	'@}->--': 'ax.gif',
	'*классно*': 'ay.gif',
	'*drink*': 'az.gif',
	'*сердце*': 'ba.gif',
	'@=': 'bb.gif',
	'*help*': 'bc.gif',
	'\\m/': 'bd.gif',
	'%-)': 'be.gif',
	' ok ': 'bf.gif',
	'*wassup*': 'bg.gif',
	'*извиняюсь*': 'bh.gif',
	'*bravo*': 'bi.gif',
	'*rofl*': 'bj.gif',
	'*пардон*': 'bk.gif',
	'*нет!*': 'bl.gif',
	'*crazy*': 'bm.gif',
	'*не знаю*': 'bn.gif',
	'*танцую*': 'bo.gif',
	'*yahoo*': 'bp.gif',
	'*acute*': 'bq.gif',
	'*бе-бе*': 'br.gif',
	'*bye*': 'bs.gif',
	'*бьюсь ап стену*': 'bt.gif',
	'*я счастлив*': 'bu.gif',
	'lol!': 'bv.gif',
	'*scratch*': 'bw.gif',
	'*yeees!*': 'bx.gif',
	'*polling*': 'by.gif',
	'*boss*': 'bz.gif',
	'*sarcastic*': 'ca.gif',
	'*boast*': 'cb.gif',
	'*вот так*': 'cc.gif',
	'*db*': 'cd.gif',
	'*ха-ха*': 'ce.gif',
	'*shout*': 'cf.gif',
	'*ништяк*': 'cg.gif',
	'[censored]': 'ch.gif',
	'*search*': 'ci.gif',
	'*выпендриваюсь*': 'cj.gif',
	'*чудо*': 'ck.gif',
	'*skull*': 'cl.gif',
	'*убегаю*': 'cm.gif',
	'*пью йад*': 'cn.gif',
	'*mnjam*': 'co.gif',
	'*чё так*': 'cp.gif',
	'^^': 'cq.gif',
	'*готово*': 'cr.gif',
	'*обнимаю*': 'cs.gif',
	'*notsofast*': 'ct.gif',
	'*фу*': 'cu.gif',
	'*реву*': 'cv.gif',
	'*глажу по голове*': 'cw.gif',
	'*преклоняюсь*': 'cx.gif',
	'*обиделся*': 'cy.gif',
	'*дай пять!*': 'cz.gif',
	'*подмигиваю*': 'da.gif',
	'*какой джигит*': 'db.gif',
	'x-)': 'dc.gif',
	'*byebye*': 'dd.gif',
	'*пожалуйста*': 'de.gif',
	'*yes*': 'df.gif',
	'*я в ударе*': 'dg.gif',
	'*ужас*': 'di.gif',
	'*злюсь*': 'dj.gif',
	'*дружба*': 'dk.gif',
	'*punish*': 'dl.gif',
	'*задумался*': 'dm.gif',
	'*ни в жизнь*': 'dn.gif',
	'*напеваю*': 'do.gif',
	'*зубрю*': 'dp.gif',
	'*жарко*': 'dr.gif',
	'*this*': 'ds.gif',
	'*эврика*': 'dt.gif',
	'*показываю язык*': 'du.gif',
	'*гадаю*': 'dw.gif',
	'*в расчёте*': 'dx.gif',
	'*жестоко наказываю*': 'dz.gif',
	'*жмурюсь*': 'ei.gif',
	'*ага*': 'eb.gif',
	'*в трансе*': 'ec.gif',
	'*обиделась*': 'eu.gif',
	'*люблю*': 'fi.gif',
	'*Вы мне нравитесь*': 'fk.gif',
	'*давай дружить*': 'fl.gif',
	'*демпер*': 'fm.gif',
	'*баян*': 'fx.gif',
	'*победитель*': 'hs.gif'
};

// jQuery JavaScript Library v1.3.2
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
// Sizzle CSS Selector Engine - v0.9.3
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

$j = jQuery.noConflict();

function fj_Go() {


	function fj_mysetCookie(name,value,days) {
		if (days) {
			var fj_date = new Date();
			fj_date.setTime(fj_date.getTime()+(days*24*60*60*1000));
			var fj_expires = "; expires="+fj_date.toGMTString();
		}
		else var fj_expires = "";
		document.cookie = name+"="+value+fj_expires+"; path=/";
	}

	function fj_mygetCookie(name) {
		var fj_nameEQ = name + "=";
		var fj_ca = document.cookie.split(';');
		for(var i=0;i < fj_ca.length;i++) {
			var fj_c = fj_ca[i];
			while (fj_c.charAt(0)==' ') fj_c = fj_c.substring(1,fj_c.length);
			if (fj_c.indexOf(fj_nameEQ) == 0) return fj_c.substring(fj_nameEQ.length,fj_c.length);
		}
		return null;
	}

	function fj_myeraseCookie(name) {
		fj_mysetCookie(name,"",-1);
	}
	
	function fj_str_replace(text, search, replace) {
		return text.split(search).join(replace);
	}


    var fj_rightLabelsX = 0;
	
	/* Quick panel */
	var fj_panel = '';
	fj_panel += "\
	<style type='text/css'>\
	a {\
		outline:none !important\
		}\
	.freejsblock {\
		position:absolute;\
		overflow:hidden;\
		z-index:100;\
		left:0;\
		top:0;\
		width:774px;\
		font-size:8pt !important;\
		border-right:#aaa 1px solid;\
		border-bottom:#aaa 1px solid;\
		background:#fff;\
		display:none;\
		}\
	.freejsblock .border {\
		border-right:#aaa 1px dotted;\
		}\
	.freejspanel {\
		width:386px;\
		float:left;\
		padding-bottom:1000px;\
		margin-bottom:-1000px;\
		}\
	.freejsblock hr {\
		border:none;\
		border-bottom:#ccc 1px solid;\
		}\
	.freejsblock ul {\
		width:346px;\
		padding:0;\
		list-style:none;\
		margin:0 0 10px 0;\
		}\
	.freejsblock p, .freejsblock table {\
		margin:0 0 10px 0;\
		}\
	.freejsblock p {\
		line-height:10pt !important;\
	}\
	.freejsblock ul.fj_sel li {\
		margin:2px 0 !important;\
		padding:0 !important;\
		width:346px;\
		height:30px;\
		border:none;\
		background:#fff url('http://www.free-lance.ru/images/sprite-inform.png') 0 0 no-repeat;\
		color:#333;\
		cursor:pointer;\
		}\
	.freejsblock ul.fj_sel li label {\
		display:block;\
		width:300px;\
		padding:8px 0 0 30px; \
		margin:0;\
		cursor:pointer;\
		}\
	.freejsblock ul.fj_sel li.on {\
		background:#fff url('http://www.free-lance.ru/images/sprite-inform.png') 0 center no-repeat;\
		}\
	.freejspadd {\
		padding:20px 20px 10px 20px;\
		}\
	.freejsblock a {\
		font-size:8pt !important;\
		font-weight:normal !important;\
		padding:0 !important;\
		color:#666 !important;\
		text-decoration:underline !important;\
		}\
	.freejsblock a:hover {\
		color:#09c !important;\
		}\
	.freejsblock h1, .freejsblock h2, .freejsblock h3 {\
		padding:0 !important;\
		font-weight:normal !important;\
		text-decoration:none !important;\
		color:#666 !important;\
		}\
	.freejsblock h1 {\
		font-size:16pt !important;\
		margin:6px 0 10px 0 !important;\
		}\
	.freejsblock h1 a {\
		font-size:16pt !important;\
		text-decoration:none !important;\
		color:#666 !important;\
		}\
	.freejsblock h1 a:hover {\
		color:#666 !important;\
		}\
	.freejsblock h2 {\
		font-size:14pt !important;\
		margin:0 0 16px 0 !important;\
		color:#666 !important;\
		}\
	.freejsblock h2 a {\
		font-size:14pt !important;\
		line-height:100%;\
		text-decoration:none !important;\
		color:#666 !important;\
		}\
	.freejsblock h2 a:hover {\
		color:#09c !important;\
		}\
	.freejslink {\
		position:absolute;\
		z-index:101;\
		left:20px;\
		top:0;\
		cursor:pointer;\
		width:90px;\
		height:30px;";
		
	if (fj_clientVersion < fj_clientLastVersion) {
        fj_panel += "background:url('http://freejs.elisdn.ru/images/linknew.png') left top no-repeat;";
    } else {
        fj_panel += "background:url('http://freejs.elisdn.ru/images/link.png') left top no-repeat;";
    }
    
	fj_panel += "padding:0;\
		}\
    .freejslink img {\
        margin:0 20px !important;\
       }\
	.freejsblock .paramItem .div {\
		float:left;\
		margin:0 20px 0 4px;\
	}\
	</style>\
	<div class='freejsblock'>\
		<div class='freejspanel border'>\
			<div class='freejspadd'>\
				<p style='float:right; margin-right:1px'><a target-'_blank' href='http://free-lance.ru/users/ElisDN'><img src='http://freejs.elisdn.ru/images/avatar.jpg' width='50px' heigth='50px' alt='ElisDN' /></a></p>\
				<h1><a target='_blank' href='http://freejs.elisdn.ru'><img style='margin:0 -3px -4px -3px;' src='http://freejs.elisdn.ru/images/logo.png' alt='FreeJS' />v"+fj_scriptVersion+"</a></h1>\
				<p><span class='fj_link' style='color:#09c;border-bottom:#09c 1px dotted;cursor:pointer'>Показать опции</span></p>\
					<ul class='fj_sel'>";
	for (var fj_key in fj_params) {
		fj_panel += "<li id='"+fj_key+"'><label>"+fj_params[fj_key][0]+"</label></li>\n";
	}
	fj_panel += "\
					</ul>\
				<table cellspacing='0' cellpadding='0' style='width:100%'>\
				</td><td valign='top' colspan='2'>\
				</td>\
				</tr><tr>\
				<td valign='top' width='50%'>\
					<a target='_blank' href='http://freejs.elisdn.ru'>Официальный сайт</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/features'>Опции скрипта</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/updates'>Обновления</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/news'>Новости</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/faq'>FAQ</a>\
				</td><td valign='top'>\
					<a target='_blank' href='http://freejs.elisdn.ru/feedback'>Обратная связь</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/thanks'>Благодарности</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/offers'>Предложения</a><br />\
					<a target='_blank' href='http://freejs.elisdn.ru/support'>Поддержка</a>\
					<a target='_blank' href='http://freejs.elisdn.ru/author'>Автор</a>\
				</td></tr>\
				<tr><td>\
					<br />Версия скрипта: "+fj_scriptVersion+"\
				</td><td>\
					<br />Версия клиента: "+fj_clientVersion+"<br />";
		if (fj_clientVersion != fj_clientLastVersion) fj_panel += "Новый клиент: "+fj_clientLastVersion+"<br /><a style='color:#f00 !important' href='http://freejs.elisdn.ru/download'>Обновить клиент</a>";
		fj_panel += " \
				</td></tr>\
				</table>\
			</div>\
		</div>\
		<div class='freejspanel fj_second'>\
			<div class='freejspadd'>\
				<iframe style='width:100%; height:432px; border:none' src='http://freejs.elisdn.ru/books.htm'></iframe>\
			</div>\
		</div>\
		<div style='clear:both'></div>\
	</div>\
	<div class='freejslink'>\
		<img src='http://freejs.elisdn.ru/images/spacer.gif' alt='FreeJS' />\
	</div>\
	";
	$j('body').append(fj_panel);

	$j('.freejslink').click(function(){
		($j('.freejsblock').css('display') == 'none') ? $j('.freejsblock').fadeIn(400) : $j('.freejsblock').fadeOut(400);
	});	
	
	$j('.freejsblock').hover(function(){$j(this).show();}, function(){$j(this).fadeOut(1000);});

	var fj_paramsCook = '';
	if (!fj_mygetCookie('fj_params')) {
		for (var fj_key in fj_params) {
			fj_paramsCook += '1|';
		}
		fj_mysetCookie('fj_params', fj_paramsCook, 7);
	}
	
	var fj_curparams = fj_mygetCookie('fj_params').split('|');
	var fj_ti = 0;
	$j('.fj_sel li').each(function(){
		fj_params[$j(this).attr('id')][1] = fj_curparams[fj_ti];
		(fj_curparams[fj_ti] == 1) ? $j(this).addClass('on') : $j(this).removeClass('on');
		fj_ti++;
	});
	
	function fj_setParamsCookie () {
		var fj_paramsCookie = '';
		for (var fj_key in fj_params) {
			fj_paramsCookie += ((fj_params[fj_key][1]==1) ? 1: 0) +'|';
			(fj_params[fj_key][1] == 1) ? $j('#'+fj_key).addClass('on') : $j('#'+fj_key).removeClass('on');
		}
		fj_mysetCookie('fj_params', fj_paramsCookie, 365);
	}	

	$j('.fj_sel li').click(function(){
		fj_params[$j(this).attr('id')][1] = (fj_params[$j(this).attr('id')][1] == 1) ? 0 : 1;
		fj_setParamsCookie();
	});

	var fj_seltgl = 0;
	fj_seltgl = fj_mygetCookie('fj_seltrigger');
	if (fj_seltgl != 1) {
		$j('.fj_sel').show();
		$j('.fj_link').text('Скрыть опции');
	} else {
		$j('.fj_sel').hide();
		$j('.fj_link').text('Показать опции');
	}

	$j('.fj_link').click(function(){
		if ($j('.fj_sel').css('display') == 'none') {
			$j('.fj_sel').fadeIn(400, function(){
				$j('.fj_link').text('Скрыть опции');
			});
			fj_mysetCookie('fj_seltrigger', 0, 7);
		} else {
			$j('.fj_sel').fadeOut(400, function() {
				$j('.fj_link').text('Показать опции');
			});
			fj_mysetCookie('fj_seltrigger', 1, 7);
		}
	});

	if (fj_params['fj_profileLiterature'][1] != 1) {
		$j('.fj_second').hide();
		$j('.freejsblock').css('width','385px');
	}
	
	function fj_on (param) {
		return (fj_params[param][1] == 1);
	}

// ########################################################
if (fj_on('fj_modifyUserbar')) {
	
	/* Modify positions of Bar items */
	
	$j('head').append("\
		<style type='text/css'>\
		.n-hr .n-hr-in a {\
			font-size:13px;\
			}\
		.b-userbar {\
			position:relative;\
			z-index:5\
			}\
		.b-userbar__top {\
			position:relative;\
			overflow:visible\
			}\
		.b-userbar, .b-userbar__top * {\
			font-weight:normal\
			}\
		li.b-userbar__login {\
			position:absolute;\
			z-index:10\
			}\
		li.b-userbar__login .login {\
			font-weight:normal !important;\
			}\
		#mb-account {\
			position:absolute;\
			left:414px;\
			top:6px;\
			border:none\
			}\
		li.b-userbar__drafts{\
			position:absolute;\
			left:382px;\
			top:36px;\
			border:none\
			}\
		li.b-userbar__services {\
			position:absolute;\
			left:630px;\
			top:36px;\
			border:none\
			}\
		li.b-userbar__pro {\
			position:absolute;\
			left:745px;\
			top:39px;\
			width:106px;\
			text-align:center;\
			padding-right:0;\
			border:none\
			}\
		li.b-userbar__pro-left {\
			position:absolute;\
			left:750px;\
			top:39px;\
			width:106px;\
			text-align:center;\
			padding-right:0;\
			border:none\
			}\
		li.b-userbar__projects {\
			position:absolute;\
			left:160px;\
			top:41px;\
			border:none\
			}\
		li.b-userbar__projects span {\
			font-weight:normal !important\
			}\
		li.b-userbar__projects span a {\
			font-weight:normal !important\
			}\
		li.b-userbar__account {\
			position:absolute;\
			left:492px;\
			top:41px;\
			width:150px;\
			border:none\
			}\
		li.b-userbar__account span a strong{\
			font-weight:normal !important\
			}\
		li.b-userbar__sbr {\
			position:absolute;\
			left:360px;\
			top:7px;\
			border:none\
			}\
		li.b-userbar__stat{\
			position:absolute;\
			left:270px;\
			top:36px;\
			border:none\
			}	\
		li.b-userbar__message {\
			position:absolute;\
			left:14px;\
			top:36px;\
			border:none\
			}\
		</style>\
	");	
	
	$j('li.b-userbar__lenta').remove();
	$j('ul.b-menu__list_right li.b-menu__item_first').removeClass('b-menu__item_first');
	$j('ul.b-menu__list_right').prepend("\
            <li class=\"b-menu__item b-menu__item_first\">\
				<a href=\"/lenta/\">Лента</a>\
            </li>\
	");
	
	var fj_mybar=document.createElement('li');
	fj_mybar.setAttribute("class", "mybar");
	fj_mybar.innerHTML = fj_config['mybarcontent'];
	$j('.b-userbar__toplist').append(fj_mybar)
	$j('.mybar').css({
		'position':'absolute',
		'left':'160px',
		'top':'10px',
		'border':'none'
	});	
	$j('.mybar a').css({
		'color':'#333',
		'text-decoration':'underline'
	});	
	
	/* Search */
	var fj_search=document.createElement('div');
	fj_search.setAttribute("class", "mysearch");
	fj_search.innerHTML = "\
	<form action=\"/search/\" name=\"searh_frm\" method=\"get\">\
		<input type=\"hidden\" name=\"type\" value=\"works\" />\
		<input type=\"hidden\" name=\"action\" value=\"search\" />\
		<input type=\"text\" name=\"search_string\" maxlength=\"100\" value=\"\" />\
	<button type=\"submit\">Go!</button>\
	</form>";
	$j('.b-userbar').append(fj_search);
	$j('.mysearch').css({
		'position':'absolute',
		'left':'600px',
		'top':'8px'
	});	
	$j('.mysearch input').css({
		'width':'140px'
	});
	$j('.mysearch button').css({
		'text-decoration':'none',
		'border':'none',
		'cursor':'pointer',
		'background':'transparent'
	});	

	/* Font Size */
	var fj_myfont=document.createElement('div');
	fj_myfont.setAttribute("class", "myfontsize");
	fj_myfont.innerHTML = "\
	<select name='myfont' class='myfont'>\
	<option value='8'>8pt</option>\
	<option value='9'>9pt</option>\
	<option value='10'>10pt</option>>\
	<option value='11'>11pt</option>\
	<option value='12'>12pt</option>\
	</select>\
	";
	$j('.b-userbar__top').append(fj_myfont);
	$j('.myfontsize').css({
		'position':'absolute',
		'left':'795px',
		'top':'8px'
	});	
	$j('.myfontsize select').css({
		'width':'50px',
	});	
	
	$j('head').append("\
		<style type='text/css'>\
			.font8pt {font-size: 8pt !important}\
			.font8pt div {font-size: 8pt}\
			.font9pt {font-size: 9pt !important}\
			.font9pt div {font-size: 9pt}\
			.font10pt {font-size: 10pt !important}\
			.font10pt div {font-size: 10pt}\
			.font11pt {font-size: 11pt !important}\
			.font11pt div {font-size: 11pt}\
			.font12pt {font-size: 12pt !important}\
			.font12pt div {font-size: 12pt}\
		</style>\
	");
	
	var fj_resizable = '.blog-one-cnt';
	if (location.href.match(/commune\/\?id\=([0-9]*)&site/)) fj_resizable += ', table table *';
	if (location.href.match(/articles/)) fj_resizable += ', .box2 p, .box2 div';
	var fj_fsize = fj_mygetCookie('fj_fontsize') ? fj_mygetCookie('fj_fontsize') : 8;
	$j('.myfont').val(fj_fsize);
	if (fj_fsize != 8){
		$j(fj_resizable).addClass('font' + fj_fsize + 'pt');
		$j('.bl_name, .bl').css({
			'font-size': '14pt !important'
		});			
	}
	
	$j('.myfont').change(function(){
		for (fj_i = 8; fj_i<13; fj_i++){
			$j(fj_resizable).removeClass('font' + fj_i + 'pt');
		}
		$j(fj_resizable).addClass('font' + $j('.myfont').val() + 'pt');
		$j('.bl_name, .bl').css({
			'font-size': '14pt !important'
		});	
		fj_mysetCookie('fj_fontsize', $j('.myfont').val(), 7);
	});
	
}

// ########################################################
if (fj_on('fj_hideBlogs')) {
	
	/* Hide/show blogs */
	if (location.href.match(/blogs/)) {
		var fj_bloglinks = ''; 
		var fj_flag = false;
		
		fj_bloglinks = "\
		<style type=\"text/css\">\
		.myblogslinks a {\
			outline:none !important;\
			}\
		.flt-out{\
			padding: 0 0 2px 0;\
			margin: 0 0 15px 0;\
			height:1%;\
			}\
		.flt-out .b1, .flt-out .b2{\
			border-left: 1px solid #F2F2F2;\
			border-right: 1px solid #F2F2F2;\
			background: #E6E6E5;\
			}\
		.flt-bar{\
			padding: 4px 15px 4px;\
			color: #4d4d4d;\
			background: #E6E6E5;\
			}\
		.flt-bar h3, .flt-bar h4{\
			font-size: 100%;\
			display:inline-block;\
			margin:0;\
			padding:0;\
			}\
		.flt-tgl-lnk2{\
			text-decoration:none !important;\
			color:#666 !important;\
			background:url(http://free-lance.ru/images/dot_666.png) repeat-x bottom left;\
			}\
		.flt-tgl-lnk2:link, .flt-tgl-lnk2:visited{\
			float:right;\
			text-decoration:none;\
			background:url(http://free-lance.ru/images/dot_666.png) repeat-x bottom left;\
			color:#666 !important;\
			}\
		.flt-tgl-lnk2:hover{\
			text-decoration:none;\
			color:#6BB24B !important;\
			background:url(http://free-lance.ru/images/dot_green.png) repeat-x bottom left;\
			}\
		.flt-lnk{\
			text-decoration:none !important;\
			background:url(http://free-lance.ru/images/dot_666.png) repeat-x bottom left;\
			color:#666 !important;\
			font-weight:400;\
			}\
		.flt-lnk:link, .flt-lnk:visited{\
			text-decoration:none !important;\
			background:url(http://free-lance.ru/images/dot_666.png) repeat-x bottom left;\
			color:#666 !important;\
			}\
		.flt-lnk:hover{\
			text-decoration:none !important;\
			color:#6BB24B !important;\
			background:url(http://free-lance.ru/images/dot_green.png) repeat-x bottom left;\
			}\
		.flt-cnt{\
			background: #F0EFED;\
			overflow:hidden;\
			position:relative;\
			display:none;\
			}\
		.flt-show .flt-cnt{\
			display:block;\
			}\
		.flt-block{\
			border-top: 1px solid #fff;\
			border-bottom: 1px solid #C5C5C5;\
			padding: 15px;\
			}\
		.flt-block:after{\
			content:'.';\
			display:block;\
			overflow:hidden;\
			clear:both;\
			height: 0;\
			visibility:hidden;\
			}\
		.flt-b-fc{\
			border-top: none !important;\
			}\
		.flt-b-lc{\
			border-bottom: none !important;\
			margin: 0 !important;\
			}\
		.flt-ppc{\
			margin: 0 0 17px 0 !important;\
			padding: 0 !important;\
			list-style: none !important;\
			}\
		.flt-ppc-opt{\
			float:left;\
			}\
		.flt-ppc li{\
			line-height:115%;\
			margin: 0 0 10px 6px !important;\
			}\
		.flt-block .flt-lbl{\
			display:block;\
			width: 150px;\
			font-weight:900;\
			float:left;\
			padding: 3px 0 0 0;\
			}\
		</style>";

		fj_bloglinks += "\
		<div class='flt-out flt-show'>\
		<b class='b1'></b>\
		<b class='b2'></b>\
		<div class='flt-bar'>\
			<a href='javascript: void(0);' class='flt-tgl-lnk2'>Развернуть</a>\
			<h3>Скрытые блоги <span id='flt-hide-cnt'></span></h3>\
		</div>\
		<div class='flt-cnt' id='flt-hide-content' style='display:none;'>\
		<div class='flt-block flt-b-fc flt-b-lc'><div class='flt-ppc-div'><ul class='flt-ppc'>";
				
		$j('.blog').each(function(){
			fj_bloglinks += '<li>&bull; &nbsp; <a class="showblog" rel="'+$j(this).attr('id')+'" href="#'+$j(this).attr('id')+'">'+($j(this).find('.bl_name').text() ? $j(this).find('.bl_name').text() : '<Без имени>')+'</a></li>';
		});
				
		fj_bloglinks += " </ul></div><div class='flt-ppc-opt'><a href='javascript: void();' class='flt-lnk showallblogs'>Восстановить все</a></div>\
		</div></div>\
		<b class='b2'></b>\
		<b class='b1'></b>\
		</div>";		

		$j('#rightcl').prepend('<div class="myblogslinks" >'+fj_bloglinks+'</div>');
		$j('#rightcl').append('<a name="bottom></a>');	
			
		$j('.showblog').css({'margin-right':'6px'});
		var fj_hidecnt = 0;
		var fj_curCookie = fj_mygetCookie('fj_hblogs') ? fj_mygetCookie('fj_hblogs') : '';
		
		if (!fj_curCookie) $j('.myblogslinks').hide();

		$j('.blog').each(function(){
			var fj_alink = $j('.showblog[rel="'+$j(this).attr('id')+'"]');
			if (fj_curCookie.indexOf($j(this).attr('id')+'|')+1) {
				$j(this).hide();
				fj_alink.parent().show(); 
				fj_flag=true;
				fj_hidecnt++;
			} else {
				fj_alink.parent().hide();
			}
			$j(this).find('.commline').prepend('<a href="#">Вверх</a>&nbsp;|&nbsp;<a href="#bottom">Вниз</a>&nbsp;|&nbsp;<a class="collapse" href="#'+$j(this).attr('id')+'">Скрыть</a>&nbsp;|');
		});
		$j('#flt-hide-cnt').text('('+fj_hidecnt+')');
		
		var fj_linkstgl = 1;
		fj_linkstgl = fj_mygetCookie('fj_blogtrigger');
		if (fj_linkstgl == 1) {
			$j('#flt-hide-content').show(200);
			$j('.flt-tgl-lnk2').text('Свернуть');
		} else {
			$j('#flt-hide-content').hide();
			$j('.flt-tgl-lnk2').text('Развернуть');
		}
		
		if (fj_flag) $j('.myblogslinks').show();
		
		$j('.flt-tgl-lnk2').unbind('click');
		$j('.flt-tgl-lnk2').click(function(){
			fj_linkstgl = (fj_linkstgl == 1) ? 2 : 1;
			if (fj_linkstgl == 2) {
				$j('#flt-hide-content').slideUp(400, function(){
					$j('.flt-tgl-lnk2').text('Развернуть');
				});
			} else {
				$j('#flt-hide-content').slideDown(400, function(){
					$j('.flt-tgl-lnk2').text('Свернуть');
				});
			}
			fj_mysetCookie('fj_blogtrigger', fj_linkstgl, 7);
			return false;
		});	
		
		$j('.showblog').click(function(){
			var fj_alink = $j(this);
			var fj_curCook = fj_mygetCookie('fj_hblogs') ? fj_mygetCookie('fj_hblogs') : '';
			var fj_curblog = fj_alink.attr('rel')+'|';
			fj_curCook = fj_curCook.substr(0, fj_curCook.indexOf(fj_curblog)) + fj_curCook.substr(fj_curCook.indexOf(fj_curblog)+fj_curblog.length);
			fj_mysetCookie('fj_hblogs', fj_curCook, 7);
			fj_alink.parent().fadeOut(200, function(){
				$j('#'+fj_alink.attr('rel')).show(1,function(){
					var fj_elementClicked = $j(fj_alink).attr("href");
					var fj_destination = $j(fj_elementClicked).offset().top;
					$j("html:not(:animated),body:not(:animated)").animate({ scrollTop: fj_destination-20}, (fj_destination-20)/2 );
					window.location.href = '#'+fj_alink.attr('rel');
				});
			});
			fj_hidecnt = fj_hidecnt-1;
			$j('#flt-hide-cnt').text('('+fj_hidecnt+')');
			if (fj_hidecnt == 0) $j('.myblogslinks').hide();
			return false;
		});
		$j('.showallblogs').click(function(){
			$j('.blog').each(function(){
				$j(this).show();
			});
			fj_myeraseCookie('fj_hblogs');
			$j('.myblogslinks').hide();
			$j('.showblog').parent().hide();
			fj_hidecnt = 0;
			$j('#flt-hide-cnt').text('('+fj_hidecnt+')');
			return false;
		});
		$j('.collapse').click(function(){
			var fj_blog = $j(this).parent().parent().parent();
			var fj_curCook = fj_mygetCookie('fj_hblogs') ? fj_mygetCookie('fj_hblogs') : '';
			fj_mysetCookie('fj_hblogs', fj_curCook + fj_blog.attr('id')+'|');
			$j('.myblogslinks').show();
			fj_blog.slideUp(400, function(){
				var fj_alink = $j('.showblog[rel="'+fj_blog.attr('id')+'"]');
				fj_alink.parent().slideDown(400);
				fj_hidecnt++;
				$j('#flt-hide-cnt').text('('+fj_hidecnt+')');
			});
			return false;
		});
		
	}
}

// ########################################################

	/* Hide blogs h1 "Comments:" */
	if (location.href.match(/blogs/)) {
        $j('h1.bl').css('display', 'none');
	}

// ########################################################
if (fj_on('fj_ansverTemplates')) {

	/* Add personal templates in the Projects */
	if (location.href.match(/projects\/\d+\/.*/)) {
		var fj_textarea = $j('#ps_text');
			
		var fj_templtexts = '';	
		var fj_mycard = fj_config['templates'];
		
		for (var i=0; i<fj_mycard.length; i++){
			fj_templtexts += (i+1)+') <a class="addcard" href="#">'+fj_mycard[i]+'<a/><br />';
		}
		fj_textarea.parent().append('<p>Вставить заготовку:<br /><br />'+fj_templtexts+'</p>');
		$j('.addcard').click(function(){
			fj_textarea.val(fj_textarea.val()+$j(this).text());
			return false;
		});
	}
}

// ########################################################
if (fj_on('fj_bgNonReaded')) {
	
	/* Background for non-readed messages in Contacts */
	if (location.href.match(/contacts/)) {
		$j('.qpr').each(function(){
			if ($j(this).find('.folders').text().match(/Ваше сообщение не прочитано/)){
				$j(this).css({'background':fj_config['noreadedbg']});
			}
		});
	}
	
	/* Background for non-readed messages in Projects */
	if (location.href.match(/projects/)) {
		$j('.project-preview').each(function(){
			if ($j(this).find('.frl-prj-mess').text().match(/Сообщение не прочитано/) && !$j(this).find('.ico-closed').attr('alt')){
				$j(this).css({'background':fj_config['noreadedbg'], 'border-left':'#ddd 1px solid', 'border-right':'#ddd 1px solid'});
			}
			if ($j(this).find('.fps2').html()){
				$j(this).css({'background':'#ddf0dd', 'border-left':'#ddd 1px solid', 'border-right':'#ddd 1px solid'});
			}
			if ($j(this).find('.fps4').html()){
				$j(this).css({'background':'#ffe6e0', 'border-left':'#ddd 1px solid', 'border-right':'#ddd 1px solid'});
			}
		});
	}	
}


// ########################################################
if (fj_on('fj_BBCodeBar')) {

    if (
        location.href.match(/\/contacts\/\?from\=/) || 
        location.href.match(/\/blogs\//) || 
        location.href.match(/\/commune\//) || 
        location.href.match(/\/defile\//) || 
        location.href.match(/\/projects\//) ||
        location.href.match(/\/setup\/portfolio/) ||
        location.href.match(/\/articles\//)
    ) {
		
		/* BBCode */
		var fj_bbpanel = '';
		fj_bbpanel += '<div style="float:right"><input type="button" class="fj_addheight" value="+" /><input type="button" class="fj_delheight" value="&ndash;" /></div>';
		fj_bbpanel += '<div class="fj_bbcode" style="float:left;position:relative">';
		fj_bbpanel += '<input type="button" value="b" />';
		fj_bbpanel += '<input type="button" value="i" />';
		fj_bbpanel += '<input type="button" value="p" />';
		fj_bbpanel += '<input type="button" value="ul" />';
		fj_bbpanel += '<input type="button" value="li" />';
		fj_bbpanel += '<input type="button" value="cut" />';
		fj_bbpanel += '<input type="button" value="h1" />';
		fj_bbpanel += '<input type="button" value="s" />';
		fj_bbpanel += '<input type="button" value="w" style="margin-left:10px" />';
		fj_bbpanel += '<input type="button" value="&copy;" style="margin-left:10px" />';
		fj_bbpanel += '<input type="button" value="&euro;" />';
		fj_bbpanel += '<input type="button" value="&bull;" />';
		fj_bbpanel += '<input type="button" value="&laquo;&raquo;" />';
		fj_bbpanel += '<input type="button" value="&#9786;" />';
		fj_bbpanel += '<div class="fj_smilePanel" style="display:none">';
		for (var fj_key in fj_smiles) {
			fj_bbpanel += '<img class="fj_smileButton" src="http://freejs.elisdn.ru/images/smiles/'+fj_smiles[fj_key]+'" alt="'+fj_key+'" title="'+fj_key+'" />';
		}
		fj_bbpanel += '</div>';
		fj_bbpanel += '</div>';
		fj_bbpanel += '<div style="text-align:center; margin:4px 62px 0 366px; font-size:8pt" class="fj_clocklabel"></div>';
		fj_bbpanel += '<div style="clear:both"></div><br />';
		
		var fj_textfield = 'textarea:visible:first';	
		
		var fj_selStart = 0;
		var fj_selEnd = 0;

		var fj_sdv = 0;
		
		function fj_clearnl(text){
			text = fj_str_replace(text, "\r", '');
			text = fj_str_replace(text, "\n", "\r\n");
			return text;
		}
		
		function fj_getSelect(obj){
			fj_textfield = obj;
			fj_selStart = obj.selectionStart;
			fj_selEnd = obj.selectionEnd;
		}
		
		
		function fj_initBB(){
		
			if (location.href.match(/projects\/\?pid\=/)) {
				$j('#ov-report').css({'width':'800px', 'margin':'0 0 0 -430px'});
				$j('.ov-col2').css({'width':'500px', 'float':'right'});
				$j('#complain_fmsg').css({'width':'495px', 'height':'90px'});
			}
		
			$j('.fj_bbcode input, .fj_addheight, .fj_delheight').css({
				'width':'24px', 
				'padding':'2px 0', 
				'margin':'0 !important',
				'text-align':'center', 
				'float':'left', 
				'cursor':'pointer', 
				'font-size':'11px !important',
				'border-top':'#eee 1px solid',
				'border-right':'#bbb 1px solid',
				'border-bottom':'#bbb 1px solid',
				'border-left':'#ddd 1px solid',
				'background':'#eee',
				'background': '-moz-linear-gradient(100% 100% 90deg, #fff, #ddd)',
				'background': '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ddd), to(#fff))',
				'background': '-webkit-linear-gradient(#fff, #ddd)',
				'background': '-o-linear-gradient(#fff, #ddd)'
			});	
			$j('.fj_clocklabel').css({'cursor':'pointer'});	

			$j('.fj_smilePanel').css({
				'width':'98%',
				'background':'#fff',
				'border':'#aaa 1px solid',
				'padding':'4px',
				'position':'absolute',
				'z-index':'100',
				'right':'0',
				'top':'20px',
				'display':'none'
			});
			
			$j('.fj_smileButton').css({'cursor':'pointer'});
			
			$j('.fj_addheight').unbind('click');
			$j('.fj_addheight').click(function(){
				$j(fj_textfield).animate({'height':'+=100'},400);
				return false;
			});
			
			$j('.fj_delheight').unbind('click');
			$j('.fj_delheight').click(function(){
				if ($j(fj_textfield).height() > 140) $j(fj_textfield).animate({'height':'-=100'},400);
				return false;
			});
		
			$j('textarea').unbind('change');
			$j('textarea').change(function(){
				fj_getSelect(this);
			});
			
			$j('textarea').unbind('click');
			$j('textarea').click(function(){
				fj_getSelect(this);
			});
			
			$j('textarea').unbind('keyup');
			$j('textarea').keyup(function(){
				fj_getSelect(this);
			});
			
			$j('textarea').unbind('select');
			$j('textarea').select(function(){
				fj_getSelect(this);
			});
			
			$j('.fj_bbcode input').unbind('click');
			$j('.fj_bbcode input').click(function(){
				var fj_temp = fj_clearnl($j(fj_textfield).val());
				var fj_s1 = fj_temp.substring(0,fj_selStart);
				var fj_s2 = fj_temp.substring(fj_selStart, fj_selEnd)
				var fj_s3 = fj_temp.substring(fj_selEnd);
				switch ($j(this).val()){
				case String.fromCharCode(9786):	
					$j('.fj_smilePanel').toggle();
					$j('.fj_smileButton').unbind('click');
					$j('.fj_smileButton').click(function(){
						$j('.fj_smilePanel').hide();
						var fj_temp = fj_clearnl($j(fj_textfield).val());
						var fj_s1 = fj_temp.substring(0,fj_selStart);
						var fj_s2 = fj_temp.substring(fj_selStart, fj_selEnd)
						var fj_s3 = fj_temp.substring(fj_selEnd);
						$j(fj_textfield).val(fj_s1 + ' ' + $j(this).attr('alt') +' ' + fj_s3);
						fj_textfield.selectionStart = fj_selEnd + ($j(this).val() +'  ').length;
						fj_textfield.focus();
						fj_textfield.selectionEnd = fj_textfield.selectionStart;
						fj_getSelect(fj_textfield);
					});
					break;
				case 'b': case 'i': case 'p': case 'ul': case 'li': case 'cut': case 'h1': case 's':
					var fj_opentag = '<'+$j(this).val()+'>';
					var fj_closetag = '</'+$j(this).val()+'>';
					$j(fj_textfield).val(fj_s1 + fj_opentag + fj_s2 + fj_closetag + fj_s3);
					fj_textfield.selectionStart = fj_selEnd + fj_opentag.length;
					break;
				case '«»':
					var fj_opentag = '«';
					var fj_closetag = '»';
					$j(fj_textfield).val(fj_s1 + fj_opentag + fj_s2 + fj_closetag + fj_s3);
					fj_textfield.selectionStart = fj_selEnd + 1;
					break;
				case 'w': 
					$j(fj_textfield).val(fj_s1 + 'http://' + fj_s2 + fj_s3);
					fj_textfield.selectionStart = fj_selEnd + 7;
					break;
				default:
					$j(fj_textfield).val(fj_s1 + $j(this).val() + ' ' + fj_s3);
					fj_textfield.selectionStart = fj_selEnd + ($j(this).val() + ' ').length;
					break;
				}
				fj_textfield.focus();
				fj_textfield.selectionEnd = fj_textfield.selectionStart;
				fj_getSelect(fj_textfield);
			});
			$j('.fj_clocklabel').unbind('click');
			$j('.fj_clocklabel').click(function(){
				var fj_temp = fj_clearnl($j(fj_textfield).val());
				var fj_s1 = fj_temp.substring(0,fj_selStart);
				var fj_s3 = fj_temp.substring(fj_selEnd);
				$j(fj_textfield).val(fj_s1 + $j(this).text() + ' ' + fj_s3);
				fj_textfield.selectionStart = fj_selEnd + ($j(this).text() + ' ').length;
			});
		}
		
		function fj_myClock(){
			var fj_currtime=new Date();  
			var fj_day   = fj_currtime.getDate();
			var fj_month = fj_currtime.getMonth()+1;
			var fj_year  = fj_currtime.getYear();
			if (fj_year < 2000) fj_year = fj_year + 1900;
			//var fj_hours=fj_currtime.getHours(); 
			//var fj_minutes=fj_currtime.getMinutes();  
			//var fj_seconds=fj_currtime.getSeconds();  
			var fj_timevalue = '';
			fj_timevalue += ((fj_day<10) ? '0' : '') + fj_day + ((fj_month<10) ? '-0' : '-') + fj_month + '-' + fj_year;  
			//fj_timevalue += "&nbsp;&nbsp;";  
			//fj_timevalue += fj_hours + ((fj_minutes<10) ? ':0' : ':') + fj_minutes;
			//fj_timevalue += ((fj_seconds<10) ? ':0' : ':') + fj_seconds;  
			$j('.myclock').html(fj_timevalue);
			setTimeout(fj_myClock, 10000);
		}
		
		function fj_addBBPanel(){
			var fj_bbflag = false;
			$j('textarea:enabled').each(function(){
				if ($j(this).css('display') != 'none'){
					if ($j(this).attr('rel') != 'bb'){
						$j(this).attr('rel','bb');
						$j(this).after(fj_bbpanel);
						$j("#editForm input:submit[name='btn']").after("&nbsp;<input tabindex=301 type=\"button\" class=\"btn cancelcomment\" value=\"Отмена\">");
						fj_bbflag = true;
					}
				}
			});
			if (fj_bbflag) {
				fj_initBB(); 
				fj_myClock();
				
				$j('.cancelcomment').click(function(){
					$j('#frm').hide();
					if (location.href.match(/&action\=edit/)){
						var a = window.location.href;
						a = a.split('&action=edit').join('');
						
						window.location.href = a;
					}
				});
			}
			

			
			
			setTimeout(fj_addBBPanel, 200);
		}
		fj_addBBPanel();
	}

}
	
// ########################################################
if (fj_on('fj_Smiles')) {

	if (location.href.match(/blogs\/view\.php.*/)) {
	/*	
		fj_smiles['Комментарий удален автором темы'] = 'k0420.gif';
		fj_smiles['Комментарий удален модератором'] = 'k0810.png';
		fj_smiles['Ответ от заблокированного пользователя'] = 'k0433.gif';
	*/	
		$j('.bl_text').each(function() {
			var fj_body = $j(this).html();
			for (var fj_key in fj_smiles) {
				fj_body = fj_str_replace(fj_body, fj_key, '<img class="fj_smile" src="http://freejs.elisdn.ru/images/smiles/'+fj_smiles[fj_key]+'" alt="*'+fj_key+'" title="'+fj_key+'" />');
				fj_body = fj_body.replace(/<a([^<>]*)<img[^>]*>([^>]*)>/g, '<a$1$2>');
				fj_body = fj_body.replace(/<img([^<>]*)<img[^>]*>([^>]*)>/g, '<img$1$2>');
			}
			$j(this).html(fj_body);
		});
		
		$j('.fj_smile').css({
			'margin':'0',
			'display':'inline-block',
			'vertical-align':'middle'
		});
	
	}
}

// ########################################################

if (location.href.match(/blogs\/viewgroup\.php.*/)) {

    $j('div.header').each(function() {
        $j(this).css('margin-bottom','10px');
    });

}


if (location.href.match(/commune\/.*/)) {

    $j('div[style="padding:10px 0 0 0"]').each(function() {
        $j(this).css('margin-bottom','10px');
    });

}

// ########################################################

if (fj_on('fj_fieldIsCorrect')) {

	/* Field is filled correct */
	function fj_setFileEvent(){
		$j('.input-file, input[name=yt_link]').change(function(){
			if(!$j('textarea.wdh100').val()) $j('textarea.wdh100').val('Поле заполнено корректно');
		});
	}
	function fj_findFileEvent(){
		var fj_bbflag = false;
		$j('.input-file, input[name=yt_link]').each(function(){
			if ($j(this).css('display') != 'none'){
				if ($j(this).attr('rel') != 'bb'){
					$j(this).attr('rel','bb');
					fj_bbflag = true;
				}
			}
		});
		if (fj_bbflag) {
			fj_setFileEvent(); 
		}
		setTimeout(fj_findFileEvent, 1000);
	}
	fj_findFileEvent();	
}
	
// ########################################################

if (fj_on('fj_profileGallery')) {

	if (
        location.href.match(/users/) && 
        !location.href.match(/users\/[a-zA-Z0-9_\-]*\/.*?\//) && 
        !location.href.match(/viewproj\.php/) && 
        ($j('.tab1 span span').text() == 'Портфолио' || $j('.tab1 span span').text() == 'Услуги')
    ) {
		
		function fj_isFrame(){
			if (typeof parent.fj_Parent == 'undefined') {
				return false; 
			} else {
				return true;
			}
		}

		var fj_gPage = '';
		
		fj_gPage += "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN' эhttp://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtdэ>\
<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"ru-ru\" lang=\"ru-ru\" >\
		<head>\
		<meta http-equiv='Content-Type' content='text/html; charset=windows-1251' />\
		<style type='text/css'>\
		html, body {\
			width:100% !important;\
			height:100% !important;\
			margin:0 !important;\
			padding:0 !important;\
			position:relative;\
			overflow:hidden;\
			font-family:verdana;\
			font-size:14px;\
			}\
		a img {\
			border:#0ad 2px solid;\
			}\
		a:visited img {\
			border:#ccc 2px solid;\
			}\
		a.active img {\
			border:#f00 2px solid;\
			}\
		a:hover img {\
			}\
		.fj_gPanel {\
			position:fixed;\
			z-index:10;\
			left:0;\
			top:0;\
			width:100%;\
			height:130px;\
			overflow:hidden;\
			background:#eee;\
			border-bottom:#999 1px solid;\
			}\
		.fj_gPanelLenta {\
			width:10000px;\
			position:relative;\
			left:35px;\
			}\
		.fj_gPanelLenta img {\
			height:100px;\
			margin:12px 0 5px 5px;\
			float:left;\
			}\
		.fj_myarrow {\
			position:fixed;\
			top:31px;\
			z-index:10;\
			width:30px;\
			height:101px;\
			background:#666;\
			opacity:0.6;\
			cursor:pointer;\
			}\
		.fj_myarrow label {\
			display:block;\
			margin-top:40px;\
			color:#fff;\
			text-align:center;\
			cursor:pointer;\
			}\
		.fj_arleft {\
			left:0;\
			}\
		.fj_arright {\
			right:0;\
			}\
		.fj_myFrame {\
			position:absolute;\
			z-index:1;\
			left:0;\
			top:0;\
			width:100%;\
			height:100%;\
			}\
		.fj_closeGallery {\
			position:fixed;\
			overflow:hidden;\
			top:0;\
			z-index:20;\
			width:30px;\
			height:30px;\
			background:#666;\
			opacity:0.6;\
			cursor:pointer;\
			}\
		.fj_closeGallery label {\
			display:block;\
			margin:0 !important;\
			padding:4px 0;\
			color:#fff;\
			text-align:center;\
			cursor:pointer;\
			}\
		.fj_clleft {\
			left:0;\
			}\
		.fj_clright {\
			right:0;\
			}\
		</style>\
		<script type='text/javascript' src='http://freejs.elisdn.ru/jscripts/jquery.js'></script>\
		<script>\
			function fj_Parent(){\
				return true;\
			}\
		</script>\
		</head>\
		<body>\
		<div class='fj_gPanel' height='130px'\>\
			<div id='fj_gPanelLenta' class='fj_gPanelLenta' style='left:35px'>\
		";
		var fj_fl = false;
		var fj_first = '/';
		var fj_i = 0;
		var fj_mem = '';
		
		$j('div.b-work a[href], td.even a[href]').each(function(){
			if ($j(this).attr('href') != fj_mem && $j(this).attr('href').match(/viewproj\.php\?prjid\=/)) {
				var fj_lnk = $j(this);
				fj_mem = fj_lnk.attr('href');
				var fj_img = $j(this).find('img');
				var fj_src=fj_img.attr('src');
				if (typeof fj_src == 'undefined') fj_src = 'http://freejs.elisdn.ru/images/noimg.png';
				if (!fj_fl) {fj_fl = true; fj_first = fj_lnk.attr('href');}
				fj_i++;
				fj_gPage += "<a target='fj_myFrame' id='lnk_"+fj_i+"' onclick='showWork("+fj_i+")' href='"+fj_mem+"&inframe'><img src='"+fj_src+"'  /></a>";
			}
		});
		
		fj_gPage += "\
			</div>\
			<div class='fj_myarrow fj_arleft'><label>&larr;</label></div>\
			<div class='fj_myarrow fj_arright'><label>&rarr;</label></div>\
			<div class='fj_closeGallery fj_clleft' onclick='myClose()'><label>x</label></div>\
			<div class='fj_closeGallery fj_clright' onclick='myClose()'><label>x</label></div>\
		</div>\
		<iframe style='width:100%;height:100%;position:absolute;left:0;top:0;z-index:1' id='fj_myFrame' name='fj_myFrame' src='"+fj_first+"&inframe'></iframe>'\
		<script type='text/javascript'>\
			$('#lnk_1').addClass('active');\
			function showWork(id){\
				$('a').removeClass('active');\
				$('#lnk_'+id).addClass('active');\
				fj_myFrame.location.href=$('#lnk_'+id).attr('href');\
				return false;\
			}\
			function myClose(id){\
				window.location.href = fj_myFrame.location.href.split('&inframe').join('');\
				return false;\
			}\
			$('.fj_arleft').click(function(){\
				$('.fj_gPanelLenta').animate({'left':'+=500'},600);\
            });\
            $('.fj_arright').click(function(){\
				$('.fj_gPanelLenta').animate({'left':'-=500'},600);\
            });\
		</script>\
		</body>\
		</html>\
		";
		
        var fj_slideShowButton = "\
        <style type='text/css'>\
            .fj_showGallery {\
                position:fixed;\
                right:"+fj_rightLabelsX+"px;\
                top:0;\
                z-index:500;\
                width:60px;\
                background:#6a6;\
                cursor:pointer;\
                }\
            .fj_showGallery p {\
                display:block;\
                margin:0 !important;\
                padding:4px 0 2px 0;\
                font-size:8pt;\
                color:#fff;\
                text-align:center;\
                cursor:pointer;\
                }\
            </style>\
        <div class='fj_showGallery'><p>Галерея<p></div>";
    
        $j('body').append(fj_slideShowButton);
        
        fj_rightLabelsX += 61;
    
        $j('.fj_showGallery').click(function(){
            if (!fj_isFrame()) document.writeln(fj_gPage);
        });
        
    }

}

// ########################################################

if (location.href.match(/users/)) {

	$j('.profile-advert').hide();
	$j('.page-profile').css('width','100% !important');	

}

// #######################################################

if (fj_on('fj_checkMessages')) {

    var fj_messTitle = Array($j('#userbar_message').text(), '****************');
    var fj_i=0;
    var fj_ContButt = false;

    var fj_showMessageButton = "\
        <style type='text/css'>\
            .fj_showMessageButton {\
                position:fixed;\
                right:"+fj_rightLabelsX+"px;\
                top:0;\
                padding:0 8px;\
                z-index:500;\
                background:#f63;\
                cursor:pointer;\
                display:none;\
                }\
            .fj_showMessageButton p {\
                display:block;\
                margin:0 !important;\
                padding:4px 0 2px 0;\
                font-size:8pt;\
                color:#fff;\
                text-align:center;\
                cursor:pointer;\
                }\
             .fj_showMessageButton p a {\
                font-size:8pt;\
                color:#fff !important;\
                }\
            </style>\
        <div class='fj_showMessageButton'><p><a href='/contacts'></a><p></div>";
    
    $j('body').append(fj_showMessageButton);        

    function fj_checkMessage(){
    
        if ($j('#userbar_message').text() && $j('#userbar_message').text() !== 'Мои контакты') {
           
           fj_i = fj_i==1 ? 0 : 1;
           $j('title').html(fj_messTitle[fj_i]);
           if (!fj_ContButt) {
                $j('.fj_showMessageButton a').text($j('#userbar_message').text());
                $j('.fj_showMessageButton').show();
                fj_ContButt = true;
            }
           
        } else {
           if (fj_ContButt) {
				$j('title').html('Удаленная работа (фриланс) на Free-lance.ru');
                $j('.fj_showMessageButton').hide();
                fj_ContButt = false;
            }
        }
          
        setTimeout(fj_checkMessage, 400);
    }

    fj_checkMessage(); 
   
}

// ########################################################

$j('.blog-one-cnt').each(function(){
	var fj_comm = $j(this).parent().parent();
	var fj_msgbox = fj_comm.find('.blog-one-cnt');
	var fj_commlink = $j(this).parent().find('a[href="javascript: void(0);"]');
	var fj_onclick = fj_commlink.attr('onclick');
	var fj_msgtext = '&raquo; '+fj_msgbox.html();
	fj_msgtext = fj_msgtext.replace(/<a[^>]*title=\"([^\"]*)\"[^>]*>[^<]*<\/a>/g, "$1");
	fj_msgtext = fj_msgtext.replace(/<br\/?>/g, "\\n&raquo; ");
	fj_msgtext = fj_msgtext.replace(/<[^>]*>/g, '');
	fj_msgtext = fj_msgtext.replace(/\"/g,'\\&quot;');
	fj_msgtext = fj_msgtext.replace(/\'/g,"\\'");
	fj_onclick = fj_onclick+' ';
	fj_onclick = fj_onclick.replace("function anonymous(event) {",'');
	fj_onclick = fj_onclick.replace("function onclick(event) {",'');
	fj_onclick = fj_onclick.replace(/\"/g,"'");
	fj_onclick = fj_onclick.replace('}', '');
	fj_onclick = fj_onclick.replace(/(\r|\n)/g, '');
	var fj_quotelink = "<a href='javascript:void(0);' onclick=\""+fj_onclick+"document.getElementById('frm').msg.value = '"+fj_msgtext+"';\" style='color: #D75A29'>Цитировать</a>";
	//alert(fj_quotelink);
	fj_commlink.after(' | ' + fj_quotelink);
});	

// ########################################################

if (fj_on('fj_highlightCode') || fj_on('fj_visualAnchors')) {

	if (location.href.match(/blogs\/view\.php.*/)) {

		var fj_parseStyle = "\
		<style type='text/css'>\
			.blog-one-cnt .fj_pre {\
				font-family:'tahoma' !important;\
				margin:0 !important;\
				padding:0 !important;\
				font-weight:normal !important;\
				}\
			.blog-one-cnt .fj_pre .value {\
				font-weight:normal !important;\
				}\
			.blog-one-cnt .fj_pre .construct {\
				color:#900 !important;\
				font-family:'arial' !important;\
				font-weight:bold !important;\
				font-style:normal !important;\
				}\
			.blog-one-cnt .fj_pre .variable {\
				color:#060 !important;\
				font-style:normal !important;\
				font-weight:normal !important;\
				}\
			.blog-one-cnt .fj_pre .value .variable {\
				color:#333 !important;\
				}\
			.blog-one-cnt .fj_pre .tag {\
				color:#900 !important;\
				font-weight:normal !important;\
				}\
			.blog-one-cnt .fj_pre .function {\
				color:#900 !important;\
				font-weight:normal !important;\
				}\
			</style>\
		";
		
		$j('body').append(fj_parseStyle);

		function fj_parseCode(a, struct){
			if (!a) {
				return '';
			} else {
				if (struct) {
					//a = a.split('<').join('&lt;');
					//a = a.split('>').join('&gt;');
					//a = a.replace(/\n\n/g, '\n');
					a = a.replace(/&gt;\s*&lt;/mg, '&gt;&lt;');
					//a = a.replace(/&gt;/g, '&gt;\n');
					//a = a.replace(/$lt;\//g, '\n$lt;/');
					a = a.replace(/\{/g, '{\n');
					a = a.replace(/\}/g, '\n}');
					a = a.replace(/<\/?(b|i|p|ul|li|cut|h\d?|s|)>/g, '');
				}				
				
				var m = a.split(/<br.*?>/);
				var n = Array();
				var k = 0; 
				var nxt = 0;
				var cur = 0;
				for (i=0; i<m.length; i++){
					//if (m[i].trim().length>0) {
						n[k] = m[i];
						k++;
					//}
				}
				
				for (i=0; i<n.length; i++){
					if (!n[i].match(/(<|>)/) && !n[i].match(/&lt;((img|br|hr|input|meta|limk|param).*|[^\/]+\/)&gt;/)){
						if (n[i].match(/&lt;[\w\d]+.*[^\/]&gt;/) || n[i].match(/\{/)) {
							nxt++;
						} 
						if (n[i].match(/&lt;\/[\w\d]+.*&gt;/) || n[i].match(/\}/)) {
							cur--;
							nxt--;
						} 
						if ((n[i].match(/&lt;[\w\d]+.*[^\/]&gt;/) && n[i].match(/&lt;\/[\w\d]+.*&gt;/))&& !n[i].match(/\{/) && !n[i].match(/\}/)) {
							cur++;
						} 

					} 
					if (!n[i].match(/(<|>)/)){	
					
						n[i] = n[i].replace(/&lt;([\w]+)/g, '<tag>&lt;$1</tag>');
						n[i] = n[i].replace(/&lt;\/([\w]+)/g, '<tag>&lt;/$1</tag>');
						n[i] = n[i].replace(/&lt;\!/g, '<tag>&lt;!</tag>');
						n[i] = n[i].replace(/&gt;/g, '<tag>&gt;</tag>');
						n[i] = n[i].replace(/\/<tag>&gt;<\/tag>/g, '<tag>/&gt;</tag>');
						n[i] = n[i].replace(/<tag>&lt;!<\/tag>--/g, '<tag>&lt;!--</tag>');
						n[i] = n[i].replace(/--<tag>&gt;<\/tag>/g, '<tag>--&gt;</tag>');
						n[i] = n[i].replace(/"([^"]*)"/g, '<value>"$1"</value>');
						n[i] = n[i].replace(/'([^']+)'/g, '<value>\'$1\'</value>');
						n[i] = n[i].replace(/([\+\-\*\/=\!\.]+)?(\s*)([\w:\-_]+)(\s*)([\+\*\/=\.]+)/g, '$1$2<variable>$3</variable>$4$5');
						n[i] = n[i].replace(/([\w\d_\$]+)(\s*)\(/g, '<func>$1</func>$2(');
						n[i] = n[i].replace(/([\w\d_\$]+)(\s*)\{/g, '<func>$1</func>$2{');
						n[i] = n[i].replace(/\b(function|var|begin|end|break|next|for|foreach|if|theh|else|return)\b/g, '<construct>$1</construct>');
						n[i] = n[i].replace(/\b(self|this)\b/g, '<construct>$1</construct>');
					
						n[i] = n[i].replace(/<tag>/g, '<span class="tag">');
						n[i] = n[i].replace(/<value>/g, '<span class="value">');
						n[i] = n[i].replace(/<variable>/g, '<span class="variable">');
						n[i] = n[i].replace(/<func>/g, '<span class="function">');
						n[i] = n[i].replace(/<construct>/g, '<span class="construct">');
						n[i] = n[i].replace(/<\/(tag|value|variable|func|construct)>/g, '</span>');

					}
					if (struct) {
						tb='';
						for (j=0; j<cur*8; j++) tb += '&nbsp;';
						n[i] = tb + n[i].trim();
						cur=nxt;
					}
				}

				a = n.join('<br />');
				return a;
			}
		}
		
		$j('head').append("\
		<style type='text/css'>\
			.fj_commlight {background: "+fj_config['anchorsbg']+";}\
		</style>");	
		
		$j('.bl_text').each(function(){
			var fj_txt = $j(this).find('.blog-one-cnt');
				

			$j(this).prepend("\
			<div class='fj_codeButtons' style='float:right;cursor:pointer;margin-top:-5px;'>\
				"+(fj_on('fj_visualAnchors') ? "<img class='fj_lightcomment' src='http://freejs.elisdn.ru/images/mark.gif' alt='Подсветка' title='Подсветка комментария' style='opacity:0.1'  />" : '')+"\
				"+(fj_on('fj_highlightCode') ? "<img class='fj_codehighlight' src='http://freejs.elisdn.ru/images/code.gif' alt='Подсветка' title='Подсветка кода' style='opacity:0.1'  />" : '')+"\
			</div>");
			var fj_source = fj_txt.html();
			$j(this).append("<div style='display:none' class='fj_commentStorage' title='code'>"+fj_source+"</div>");
			fj_txt.html('<div class="fj_pre">'+fj_parseCode(fj_source, false)+'</pre>');
		});

		$j('.fj_codeButtons img').fadeTo(1, 0.1);
		
		$j('.fj_codeButtons img').hover(function(){
			$j(this).fadeTo(200, 1);
			}, function(){
			$j(this).fadeTo(200, 0.1);
			} 
		);
		
		if (fj_on('fj_visualAnchors')) {
			
			$j('.blog-one-cnt').each(function(){
				var fj_comm = $j(this).parent().parent();
				var fj_msgbox = fj_comm.find('.blog-one-cnt');
				var fj_cook = fj_mygetCookie('fj_commlight');
				var fj_id = fj_comm.find('.blog-one-cnt').attr('id');
				fj_cook = fj_cook ? fj_cook : '';
				if (fj_cook.indexOf(fj_id) != -1) {
					fj_comm.addClass('fj_commlight');
				} else {
					fj_comm.removeClass('fj_commlight');
				}
			});	
		
			$j('.fj_lightcomment').click(function(){
				var fj_comm = $j(this).parent().parent().parent();
				var fj_cook = fj_mygetCookie('fj_commlight');
				var fj_id = fj_comm.find('.blog-one-cnt').attr('id');
				var fj_intid = fj_comm.find('.blog-one-cnt').attr('id');
				fj_cook = fj_cook ? fj_cook : '';
				if (fj_cook.indexOf(fj_id) == -1) {
					fj_comm.addClass('fj_commlight');
					fj_mysetCookie('fj_commlight', fj_cook + '|' + fj_id);
				} else {
					fj_comm.removeClass('fj_commlight');
					var fj_arr = fj_cook.split('|');
					var fj_arr2 = Array();
					var fj_k = 0;
					for (fj_i = 0; fj_i<fj_arr.length; fj_i++){
						if (fj_arr[fj_i] && fj_arr[fj_i] != fj_id && fj_arr[fj_i] != 'undefined') {
							fj_arr2[fj_k] = fj_arr[fj_i];
							fj_k++;
						}
					}
					fj_wrcook = fj_arr2.join('|');
					fj_mysetCookie('fj_commlight', fj_wrcook);
				}
			});		
		}
		
		if (fj_on('fj_highlightCode')) {
			$j('.fj_codehighlight').click(function(){
				var fj_st = $j(this).parent().parent().find('.fj_commentStorage');
				var fj_txt = $j(this).parent().parent().find('.blog-one-cnt');
				if (fj_st.attr('title') == '') {
					fj_txt.html('<div class="fj_pre">'+fj_parseCode(fj_st.html(), false)+'</div>');
					fj_st.attr('title', 'code');
				} else if (fj_st.attr('title') == 'code') {
					fj_txt.html('<div class="fj_pre">'+fj_parseCode(fj_st.html(), true)+'</div>');
					fj_st.attr('title', 'parse');
				} else {
					fj_txt.html(fj_st.html());
					fj_st.attr('title', '');
				}
			});
		}
		
	}
}
	
// ########################################################

if (fj_on('fj_noPRO')) {

	/* NoPRO */

	var fj_isloguserbar = $j('.n-userbar-grey-in .l-pro:has(a[href="/payed/"])');
	if (fj_isloguserbar.text()) {
		var fj_isloguser = fj_isloguserbar ? fj_isloguserbar.html().indexOf('Купить')>-1 : false;
		if (fj_isloguser) {
			$j('ul.n-rubrics #b0').html('<span><span><a href="/" class="lnk-dot-grey">Все проекты</a></span></span>');
			$j('ul.n-rubrics #b1').html('<span><span><a href="/?kind=5" class="lnk-dot-grey">Не для <img src="/images/icons/f-pro.png" class="ac-pro" alt="PRO" /></a></span></span>');

		} 

		if (location.href.match(/\kind\=5/)) {

			$j('#cat_comment').text('В данной категории выводятся все проекты не для PRO скриптом FreeJS');
			$j('.tabs:has(.pc-desc) ul.clear .tab2').addClass('active');
			$j('.prj-one:has(img[alt="PRO"])').hide();
			$j('.prj-one:has(span.green)').hide();
			$j('.prj-one:has(span.red)').hide();
			
			$j('ul.n-rubrics #b0').removeClass('a');
			$j('ul.n-rubrics #b1').addClass('a');

		}
	}
	
}

// ########################################################

if (fj_on('fj_oldStyle')) {

	$j('head').append("\
		<style type='text/css'>\
		#accordion li {\
			background:#74BB54;\
			}\
		#accordion li a {\
			color:#fff !important;\
			font-size:12px;\
			}\
		#accordion li ul li {\
			background:#fff;\
			}\
		#accordion li ul li a {\
			color:#333 !important;\
			}\
		.n-hr {\
			margin-bottom:10px;\
			height:28px;\
			position:relative;\
			overflow:hidden;\
			border-bottom:#ddd 1px solid;\
			}\
		.n-hr .n-hr-in a {\
			font-size:13px;\
			}\
		.main-stat {\
			font-size:13px;\
			}\
		.mp-toggler {\
			margin-top:-10px;\
			}\
		.btn-300-rubbles, .n-fast, .t-dc, div.mtb, .n-h-promo {\
			display:none !important;\
			}\
		.n-hr-in .eff {\
			display:none !important;\
			}\
		.n-hr-r {\
			margin-right:0 !important;\
			}\
		.left-payed .lp-inf-txt {\
			line-height:1.1;\
			font-size:11px;\
			}\
		.left-payed .lp-inf-txt strong {\
			font-weight:normal;\
			color:#999;\
			}\
		.left-payed .lp-user {\
			margin:0 !important;\
			padding:10px 0 !important;\
			}\
		.top-payed2 h2 {\
			display:none;\
			}\
		.b-banner {\
			display:none !important; \
			}\
		</style>\
	");

}

// ########################################################

/* Hide share buttons in Blogs */
if (location.href.match(/blogs\/[^\/]+\/\d+\/.*/)) {

	$j('.b-share').hide();
	$j('.footer .commline').prepend('<a class="showshare" href="#" title="FreeJS Share Toggler">Поделиться</a>&nbsp;|');
	$j('.showshare').click(function(){
		$j('.b-share').toggle();
		return false;
	});
	
}

// ########################################################

if (fj_on('fj_highlightGuests')) {

	if (location.href.match(/promotion\/\?bm\=1/)) {

		$j('table[style="table-layout:fixed"] a').each(function(){
		
			var fj_userpic = $j(this);
			var fj_title = fj_userpic.attr('title');
			
			fj_userpic.css({
				'position':'relative',
				'display':'block',
				'width':'25px',
				'height':'25px'
			});
			fj_userpic.find('img').css('display', 'block');
			
			if (fj_title.match(/Из\sблогов/)){
				fj_userpic.append('<span class="fj_other"></span>');
			}
			if (fj_title.match(/Из\sкаталога/) || fj_title.match(/С\sплатных\sмест/)){
				fj_userpic.append('<span class="fj_catalog"></span>');
			}
			
		});
		
		$j('span.fj_other, span.fj_catalog').css({
			'display':'block',
			'width':'8px',
			'height':'8px',
			'position':'absolute',
			'right':'0',
			'bottom':'0',
			'border-left':'#fff 1px solid',
			'border-top':'#fff 1px solid',
			'border-radius':'8px 0 0 0'
		});
		
		$j('span.fj_other').css({
			'background': '#ff6d1b'
		});	
		$j('span.fj_catalog').css({
			'background': '#63a545'
		});
		
	}

}

// ########################################################

}
fj_Go();
}

/* <END> */