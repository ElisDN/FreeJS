// ==UserScript==
// @name        FreeFs
// @description free-lance.ru interface patch client
// @namespace   http://freejs.elisdn.ru/
// @include     http://www.free-lance.ru/
// @include     http://www.free-lance.ru/*
// ==/UserScript

/*
 * FreeJS (free-lance.ru interface patch)
 * Author: Eliseev Dmitry
 * Site: http://freejs.elisdn.ru/
 * Accaunt: http://free-lance.ru/users/ElisDN
 * Email: mail@elisdn.ru
 */


$j = jQuery.noConflict();

/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 */
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);

function FLog()
{
    this.trace = function(message){
        console.log(message);
    }
}

function FStorage()
{
    function Construct()
    {
        this.set = function(key, value){
            if (key){
                if (this.has(key)){
                    window.localStorage.removeItem(key);
                }
                window.localStorage.setItem(key, value);
            }
        };
        this.get = function(key){
            if (key){
                var value = window.localStorage.getItem(key);
                if (value == 'true') value = true;
                if (value == 'false') value = false;
                if (value === null) value = '';
                return value;
            }
        };
        this.has = function(key){
            if (key){
                var value = window.localStorage.getItem(key);
                if (value === null) return false;
            } else {
                return false;
            }
            return true;
        }
    }
    return new Construct();
}

function FConfig()
{
    function Construct()
    {
        this.params = [];
        this.storage = null;
        this.onError = function(message){};

        this.init = function(){
            if (!this.get('hash')){
                for (var p in this.params){
                    this.set(p, true);
                }
                this.set('hash', Math.floor(Math.random()*1000000));
            }
        };

        this.getLabel = function(key){
            return typeof(this.params[key]) != 'undefined' ? this.params[key] : '';
        };

        this.get = function(key){
            if (key){
                return this.storage.get('config_'+key);
            } else {
                this.onError('Storage key for GET is empty');
                return false;
            }
        };

        this.set = function(key, val){
            if (key){
                this.storage.set('config_'+key, val);
            } else {
                this.onError('Storage key for SET is empty');
            }
        };

        this.getAll = function(){
            return this.params;
        };
    }
    return new Construct();
}

function FUser()
{
    var params = [];
    var protecteds = [];

    function Construct()
    {
        this.onError = function(message){};

        this.init = function(){
            params = fj_config;
        };

        this.get = function(key){
            if (key){
                return params[key];
            } else {
                this.onError('User params key is empty');
                return false;
            }
        };

        this.set = function(key, val){
            if (key){
                params[key] = val;
            } else {
                this.onError('User params key is empty');
            }
        };

        this.isLogged = function(){

            if (typeof protecteds['islogged'] == 'undefined'){
                var userbar = $j('.b-userbar');
                if (userbar) {
                    protecteds['islogged'] = userbar.html() ? true : false;
                } else {
                    protecteds['islogged'] = false;
                }
            }
            return protecteds['islogged'];

        };

        this.isPRO = function(){

            if (typeof protecteds['ispro'] == 'undefined'){
                var userbar = $j('.b-userbar .b-userbar__pro:has(a[href="/payed/"])');
                if (userbar.text()) {
                    protecteds['ispro'] = userbar.html().indexOf('Купить')>-1;
                } else {
                    protecteds['ispro'] = false;
                }
            }
            return protecteds['ispro'];
        };

    }
    return new Construct();
}

function FModuleManager()
{
    var modules = [];

    function Construct()
    {

        this.add = function(module){
            modules.push(module);
        };
        this.getCount = function(){
            return modules.length;
        };
        this.execAll = function(){
            for (var i=0; i<modules.length; i++){
                modules[i].exec();
            }
        };
    }

    return new Construct();

}

function FModule()
{
    this.condition = function(){return false};
    this.action = function(){};
    this.styles = [];
}

FModule.prototype.exec = function(){
    if (this.condition()){
        this.action();
        this.renderStyles();
    }
};

FModule.prototype.registerCss = function(data){
    this.styles.push(data);
};

FModule.prototype.renderStyles = function(){
    var elem = $j('<style>');
    elem.attr('type', 'text/css');
    elem.html(this.styles.join("\n"));
    $j('head').append(elem);
};

function Menu()
{
    var container = $j('<ul>');
    container.addClass('fj_menuPanel');
    $j('body').prepend(container);

    $j('head').append("\
        <style type='text/css'>\
            .fj_menuPanel {\
                position:fixed;\
                right:0;\
                top:0;\
                z-index:500;\
                cursor:pointer;\
                margin:0;\
                padding:0\
                list-style:none;\
                }\
            .fj_menuPanel li {\
                display:inline-block;\
                float:left;\
                margin:0 !important;\
                padding:6px 10px;\
                border-left:#fff 1px solid;\
                font-size:8pt;\
                color:#fff;\
                background:#6a6;\
                text-align:center;\
                cursor:pointer;\
                }\
            .fj_menuPanel p {\
                margin:0;\
                padding:0;\
                }\
            .fj_menuPanel a {\
                color:#fff !important;\
                text-decoration:none;\
                }\
        </style>\
    ");

    function Construct()
    {
        this.add = function(elem){
            var li = $j('<li>');
            li.attr('id', elem.id);
            if (elem.background){
                li.css('background', elem.background);
            }
            if (typeof(elem.display) != 'undefined'){
                li.css('display', elem.display ? 'block' : 'none');
            }
            li.html(elem.content);
            container.append(li);
        };
    }

    return new Construct();
}

function FApplication()
{

    function str_replace(text, search, replace) {
        return text.split(search).join(replace);
    }

    function Construct()
    {
        var scriptVersion = '2.0.0';
        var clientLastVersion = '2.0';

        var smiles = {
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

        var log = new FLog();
        var storage = new FStorage();
        var config = new FConfig();
        config.storage = storage;
        config.onError = function(message){
            log.trace(message);
        };
        config.params = {
            modifyUserbar:'Изменение шапки',
            hideBlogs: 'Скрытие блогов',
            answerTemplates: 'Заготовки ответов на проекты',
            nonReadedHighlight: 'Подсветка сообщений и проектов',
            BBCodeBar: 'ВВ-панель для многострочных полей',
            profileGallery: 'Просмотр портфолио в режиме галереи',
            Smiles: 'Смайлики в блогах',
            checkMessages: 'Оповещение о новых сообщениях',
            highlightCode: 'Подсветка синтаксиса программного кода в блогах',
            visualAnchors: 'Маркировка комментариев в блогах',
            highlightGuests: 'Подсветка посетителей в статистике',
            noPRO: 'Вкладка "Не для PRO" для неPRO пользователей',
        };
        config.init();
        var user = new FUser();
        user.init();
        var menu = new Menu();
        var manager = new FModuleManager();

        this.run = function(){

            var controlPanel = new FModule();

            controlPanel.condition = function()
            {
                return true;
            };

            controlPanel.css = "\
                a {\
                    outline:none !important\
                    }\
                .freejsblock {\
                    position:absolute;\
                    overflow:hidden;\
                    z-index:100;\
                    left:0;\
                    top:0;\
                    width:385px;\
                    border-right:#aaa 1px solid;\
                    border-bottom:#aaa 1px solid;\
                    background:#fff;\
                    display:none;\
                    color: #666666;\
                    font-family: tahoma, arial, helvetica, sans-serif;\
                    font-size: 11px;\
                    font-weight: 400;\
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
                    height:30px;\
                    padding:0;\
                }\
                .freejslink img {\
                    margin:0 20px !important;\
                }\
                .freejsblock .paramItem .div {\
                    float:left;\
                    margin:0 20px 0 4px;\
                }\
                ";

            controlPanel.panel_tpl = "\
                <div class='freejsblock' style='display:none'>\
                    <div class='freejspanel border'>\
                        <div class='freejspadd'>\
                            <p style='float:right; margin-right:1px'><a target='_blank' href='http://free-lance.ru/users/ElisDN'><img src='http://freejs.elisdn.ru/images/avatar.jpg' width='50px' heigth='50px' alt='ElisDN' /></a></p>\
                            <h1><a target='_blank' href='http://freejs.elisdn.ru'><img style='margin:0 -3px -4px -3px;' src='http://freejs.elisdn.ru/images/logo.png' alt='FreeJS' />v${scriptVersion}</a></h1>\
                            <p><span class='fj_link' style='color:#09c;border-bottom:#09c 1px dotted;cursor:pointer'>Показать опции</span></p>\
                                <ul class='fj_sel'>\
                                    {{each optionlist}}\
                                    <li id='${id}' class='${classname}'><label>${label}</label></li>\
                                    {{/each}}\
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
                                <br />Версия скрипта: ${scriptVersion}\
                            </td><td>\
                                <br />Версия клиента: ${clientVersion}<br />\
                                 {{if clientVersion != clientLastVersion}}\
                                 Новый клиент: ${clientLastVersion}<br /><a style='color:#f00 !important' href='http://freejs.elisdn.ru/download'>Обновить клиент</a>\
                                 {{/if}}\
                            </td></tr>\
                            </table>\
                        </div>\
                    </div>\
                    <div style='clear:both'></div>\
                </div>\
                <div class='freejslink'>\
                    <img src='http://freejs.elisdn.ru/images/spacer.gif' alt='FreeJS' />\
                </div>\
                ";

            controlPanel.action = function()
            {
                var module = this;
                var data = storage.get(this.storageid);
                log.trace('Start module');

                this.registerCss(this.css);

                if (user.get('clientVersion') < clientLastVersion) {
                    this.registerCss(".freejslink { background:url('http://freejs.elisdn.ru/images/linknew.png') left top no-repeat; }");
                } else {
                    this.registerCss(".freejslink { background:url('http://freejs.elisdn.ru/images/link.png') left top no-repeat; }");
                }

                var optionlist = [];
                for (var key in config.params) {
                    if (typeof(key) == 'string') {
                        optionlist.push({
                            'id': key,
                            'label': config.getLabel(key),
                            'classname': config.get(key) ? 'on' : ''
                        });
                    }
                }

                var panel = $j.tmpl(this.panel_tpl, {
                    optionlist: optionlist,
                    clientVersion: user.get('clientVersion'),
                    scriptVersion: scriptVersion,
                    clientLastVersion: clientLastVersion
                });

                $j('body').prepend(panel);

                $j('.freejslink').click(function(){
                    ($j('.freejsblock').css('display') == 'none') ? $j('.freejsblock').fadeIn(400) : $j('.freejsblock').fadeOut(400);
                });

                $j('.freejsblock').mouseenter(function(){$j(this).show();});
                $j('.freejsblock').mouseleave(function(){$j(this).fadeOut(1000);});

                $j('.fj_sel li').click(function(){

                    var id = $j(this).attr('id');
                    if (!config.get(id)){
                        $j(this).addClass('on');
                        config.set(id, true);
                    } else {
                        $j(this).removeClass('on');
                        config.set(id, false);
                    }

                });

                var hideoptions = config.get('hideoptions');

                if (hideoptions) {
                    $j('.fj_sel').hide();
                    $j('.fj_link').text('Показать опции');
                } else {
                    $j('.fj_sel').show();
                    $j('.fj_link').text('Скрыть опции');
                }

                $j('.fj_link').click(function(){

                    var hideoptions = config.get('hideoptions');

                    hideoptions = !hideoptions;

                    config.get('hideoptions', hideoptions);

                    if (hideoptions) {
                        $j('.fj_sel').fadeOut(400, function() {
                            $j('.fj_link').text('Показать опции');
                        });
                    } else {
                        $j('.fj_sel').fadeIn(400, function(){
                            $j('.fj_link').text('Скрыть опции');
                        });
                    }
                });

            };
            manager.add(controlPanel);


            /* #########################################################
             * Modify positions of UserBar items
             */

            var modifyUserbar = new FModule();

            modifyUserbar.condition = function()
            {
                return config.get('modifyUserbar');
            };

            modifyUserbar.userbar_css = "\
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
                }\
                li.b-userbar__message {\
                    position:absolute;\
                    left:14px;\
                    top:36px;\
                    border:none\
                }\
                ";

            modifyUserbar.usercontent_tpl = "\
                <li class='personal_bar'>{{html content}}</li>\
                ";

            modifyUserbar.usercontent_css = "\
                .personal_bar {\
                    position:absolute;\
                    left:160px;\
                    top:10px;\
                    border:none;\
                }\
                .personal_bar a {\
                    color:#333;\
                    text-decoration:underline;\
                }\
                ";

            modifyUserbar.search_tpl = "\
                <div class='personal_search'>\
                    <form action='/search/' name='search_frm' method='get'>\
                        <input type='hidden' name='type' value='works' />\
                        <input type='hidden' name='action' value='search' />\
                        <input type='text' name='search_string' maxlength='100' value='' />\
                        <button type='submit'>Go!</button>\
                    </form>\
                </div>\
                ";

            modifyUserbar.search_css = "\
                .personal_search{\
                    position:absolute;\
                    left:600px;\
                    top:8px;\
                }\
                .personal_search input {\
                    width:140px;\
                }\
                .personal_search button {\
                    text-decoration:none;\
                    border:none;\
                    cursor:pointer;\
                    background:transparent;\
                }\
                ";

            modifyUserbar.font_tpl = "\
                <div class='personal_fontsize'>\
                    <select name='myfont' class='myfont'>\
                        <option value='8'>8pt</option>\
                        <option value='9'>9pt</option>\
                        <option value='10'>10pt</option>>\
                        <option value='11'>11pt</option>\
                        <option value='12'>12pt</option>\
                    </select>\
                </div>\
            ";

            modifyUserbar.font_css = "\
                .personal_fontsize {\
                    position:absolute;\
                    left:795px;\
                    top:8px;\
                }\
                .personal_fontsize select {\
                    width:50px;\
                }\
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
                ";

            modifyUserbar.lenta_tpl = "\
                <li class='b-menu__item b-menu__item_first'>\
                    <a class='b-menu__link' href='/lenta/'>Лента</a>\
                </li>\
                ";

            modifyUserbar.condition = function() {
                return config.get('modifyUserbar');
            };

            modifyUserbar.action = function()
            {
                var module = this;
                log.trace('Start module modifyUserbar');

                this.registerCss(this.userbar_css);

                $j('li.b-userbar__lenta').remove();
                $j('ul.b-menu__list_right li.b-menu__item_first').removeClass('b-menu__item_first');
                $j('ul.b-menu__list_right')
                    .prepend(this.lenta_tpl);

                $j('.b-userbar__top').append(this.search_tpl);
                this.registerCss(this.search_css);

                $j('.b-userbar__toplist').append(
                    $j.tmpl(this.usercontent_tpl, {
                        content: user.get('mybarcontent')
                    })
                );
                this.registerCss(this.usercontent_css);

                $j('.b-userbar__top').append(this.font_tpl);
                this.registerCss(this.font_css);

                var resizable = '.blog-one-cnt';
                var skip = '.bl_name, .bl';

                if (location.href.match(/commune\/\?id\=([0-9]*)&site/))
                    resizable += ', table table *';
                if (location.href.match(/articles/))
                    resizable += ', .box2 p, .box2 div';

                var fontsize = config.get('fontsize');
                if (!fontsize) fontsize = 8;

                $j('.personal_fontsize').val(fontsize);
                if (fontsize != 8){
                    $j(fontsize).addClass('font' + fontsize + 'pt');
                    $j(skip).css({
                        'font-size': '14pt !important'
                    });
                }

                $j('.personal_fontsize').change(function(){
                    for (i = 8; i<13; i++){
                        $j(resizable).removeClass('font' + i + 'pt');
                    }
                    $j(resizable).addClass('font' + $j(this).val() + 'pt');
                    $j(skip).css({
                        'font-size': '14pt !important'
                    });
                    config.set('fontsize', $j(this).val());
                });

            };

            manager.add(modifyUserbar);

            // #########################################

            var hideBlogs = new FModule();

            hideBlogs.condition = function()
            {
                return config.get('hideBlogs') && location.href.match(/blogs/);
            };

            hideBlogs.slider_tpl = "\
            <div class='myblogslinks' >\
                <div class='flt-out flt-show'>\
                    <b class='b1'></b>\
                    <b class='b2'></b>\
                    <div class='flt-bar'>\
                        <a href='javascript: void(0);' class='flt-tgl-lnk2'>Развернуть</a>\
                        <h3>Скрытые блоги <span id='flt-hide-cnt'></span></h3>\
                    </div>\
                    <div class='flt-cnt' id='flt-hide-content' style='display:none;'>\
                        <div class='flt-block flt-b-fc flt-b-lc'>\
                            <div class='flt-ppc-div'>\
                                <ul class='flt-ppc' id='hidelinklist'>\
                                    {{each links}}\
                                    <li{{if hidden}} style='display:none'{{/if}}>&bull; &nbsp; <a class='showblog' rel='${id}' href='#${id}'>${title}</a></li>\
                                    {{/each}}\
                                </ul>\
                            </div>\
                            <div class='flt-ppc-opt'><a href='javascript: void();' class='flt-lnk showallblogs'>Восстановить все</a></div>\
                        </div>\
                    </div>\
                    <b class='b2'></b>\
                    <b class='b1'></b>\
                </div>\
            </div>\
            ";

            hideBlogs.slider_css = "\
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
                .showblog {\
                    margin-right:6px;\
                }\
			";

            hideBlogs.action = function(){

                log.trace('Start module hideBlogs');

                var hiddenblogs = config.get('hidden_blogs').split(',');

                function isHidden(id)
                {
                    for (var k in hiddenblogs){
                        if (hiddenblogs[k] == id) return true;
                    }
                    return false;
                }

                function addHidden(id)
                {
                    if (!isHidden(id)){
                        var newhiddens = [];
                        for (var k in hiddenblogs){
                            if (typeof(hiddenblogs[k]) == 'string') newhiddens.push(hiddenblogs[k]);
                        }
                        newhiddens.push(id);
                        hiddenblogs = newhiddens;
                        config.set('hidden_blogs', hiddenblogs.join(','));
                    }
                }

                function removeHidden(id)
                {
                    if (isHidden(id)){
                        var newhiddens = [];
                        for (var k in hiddenblogs){
                            if (typeof(hiddenblogs[k]) == 'string' && hiddenblogs[k] != id) newhiddens.push(hiddenblogs[k]);
                        }
                        hiddenblogs = newhiddens;
                        config.set('hidden_blogs', hiddenblogs.join(','));
                    }
                }
                function clearHidden()
                {
                    config.set('hidden_blogs', '');
                }

                var links = [];

                $j('.blog').each(function()
                {
                    var blog = $j(this);
                    var hidden = isHidden(blog.attr('id'));

                    if (hidden) {
                        blog.hide();
                    }

                    var title = blog.find('.bl_name').text();
                    links.push({
                        id: blog.attr('id'),
                        title: title ? title : '<Без имени>',
                        hidden: !hidden
                    });

                    blog.find('.commline').prepend('<a href="#">Вверх</a>&nbsp;|&nbsp;<a href="#bottom">Вниз</a>&nbsp;|&nbsp;<a class="collapse" href="#'+$j(this).attr('id')+'">Скрыть</a>&nbsp;|');

                });

                this.registerCss(this.slider_css);

                var slider = $j.tmpl(this.slider_tpl, {
                    links: links
                });
                $j('#rightcl').prepend(slider);

                updateSlider();

                $j('#rightcl').append('<a name="bottom></a>');

                var collapse = config.get('collapse_slider');
                if (!collapse) {
                    $j('#flt-hide-content').show();
                    $j('.flt-tgl-lnk2').text('Свернуть');
                } else {
                    $j('#flt-hide-content').hide();
                    $j('.flt-tgl-lnk2').text('Развернуть');
                }

                $j('.flt-tgl-lnk2').unbind('click');
                $j('.flt-tgl-lnk2').click(function()
                {
                    var collapse = config.get('collapse_slider');
                    collapse = !collapse;
                    config.set('collapse_slider', collapse);

                    if (collapse) {
                        $j('#flt-hide-content').slideUp(400, function(){
                            $j('.flt-tgl-lnk2').text('Развернуть');
                        });
                    } else {
                        $j('#flt-hide-content').slideDown(400, function(){
                            $j('.flt-tgl-lnk2').text('Свернуть');
                        });
                    }
                    return false;
                });

                $j('#hidelinklist .showblog').click(function()
                {
                    var id = $j(this).attr('rel');
                    showBlog(id);
                    removeHidden(id);
                    return false;
                });

                $j('.showallblogs').click(function()
                {
                    $j('.blog').each(function(){
                        $j(this).show();
                    });
                    clearHidden();

                    $j('.myblogslinks').hide();
                    $j('.showblog').parent().hide();
                    return false;
                });

                $j('.collapse').click(function()
                {
                    var blog = $j(this).parent().parent().parent();
                    addHidden(blog.attr('id'));
                    hideBlog(blog.attr('id'));
                    updateSlider();
                    return false;
                });

                function hideBlog(id)
                {
                    var blog = $j('#'+id);

                    if (blog){
                        blog.slideUp(400, function(){
                            var link = $j('#hidelinklist .showblog[rel="'+id+'"]');
                            link.parent().slideDown(400, function(){
                                updateSlider();
                            });
                        });

                    }

                }

                function showBlog(id)
                {
                    var link = $j('#hidelinklist .showblog[rel="'+id+'"]');
                    if (link){
                        link.parent().fadeOut(200, function(){
                            $j('#'+id).show(1,function(){
                                var elementClicked = $j(link).attr("href");
                                var destination = $j(elementClicked).offset().top;
                                $j("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-20}, (destination-20)/2 );
                                window.location.href = '#'+link.attr('rel');
                            });
                            updateSlider();
                        });
                    }

                }

                function updateSlider(){
                    var hiddencount = $j('.blog:hidden').length;
                    if (hiddencount > 0){
                        $j('.myblogslinks').show();
                    }  else {
                        $j('.myblogslinks').hide();
                    }
                    $j('#flt-hide-cnt').text('('+hiddencount+')');
                }
            };

            manager.add(hideBlogs);

            /* #####################################
             * Add personal templates in the Projects
             */

            var answerTemplates = new FModule();

            answerTemplates.condition = function()
            {
                return config.get('answerTemplates') && location.href.match(/projects\/\d+\/.*/);
            };

            answerTemplates.action = function()
            {
                var textarea = $j('#ps_text');

                var templates = '';
                var mycard = user.get('templates').split('||');

                for (var i=0; i<mycard.length; i++){
                    templates += (i+1)+') <a class="addcard" href="#">'+mycard[i]+'<a/><br />';
                }
                textarea.parent().append('<p>Вставить заготовку:<br /><br />'+templates+'</p>');
                $j('.addcard').click(function(){
                    textarea.val(textarea.val()+$j(this).text());
                    return false;
                });
            };

            manager.add(answerTemplates);

            // #####################################

            var highlightContacts = new FModule();

            highlightContacts.condition = function()
            {
                return config.get('nonReadedHighlight') && location.href.match(/contacts/);
            };

            highlightContacts.css = "\
                .new_message {\
                    background:#fff;\
                }\
                .new_message > td:first-child {\
                    border-left:#6BBB40 2px solid;\
                    border-top:#6BBB40 1px solid;\
                    border-bottom:#2E97BE 1px solid;\
                    padding:8px 3px !important;\
                    background:#E0F8D3;\
                    border-radius:6px 0 0 6px;\
                }\
                .new_message > td:last-child {\
                    border-right:#6BBB40 2px solid;\
                    border-top:#6BBB40 1px solid;\
                    border-bottom:#6BBB40 1px solid;\
                    padding:8px 3px !important;\
                    border-radius:0 6px 6px 0;\
                }\
                .nonreaded_message {\
                    background:#fff;\
                }\
                .nonreaded_message > td:first-child {\
                    border-left:#2E97BE 2px solid;\
                    border-top:#2E97BE 1px solid;\
                    border-bottom:#2E97BE 1px solid;\
                    padding:8px 3px !important;\
                    background:#D0F2FF;\
                    border-radius:6px 0 0 6px;\
                }\
                .nonreaded_message > td:last-child {\
                    border-right:#2E97BE 2px solid;\
                    border-top:#2E97BE 1px solid;\
                    border-bottom:#2E97BE 1px solid;\
                    padding:8px 3px !important;\
                    border-radius:0 6px 6px 0;\
                }\
            ";

            highlightContacts.action = function()
            {
                this.registerCss(this.css);

                $j('.qpr').each(function(){
                    if ($j(this).find('.folders').text().match(/Ваше сообщение не прочитано/)){
                        $j(this).addClass('nonreaded_message');
                    } else if ($j(this).find('.folders').text().match(/Новые сообщения/)){
                        $j(this).addClass('new_message');
                    }
                });
            };

            manager.add(highlightContacts);

            // #####################################

            var highlightProjects = new FModule();

            highlightProjects.condition = function()
            {
                return config.get('nonReadedHighlight') && location.href.match(/projects/);
            };

            highlightProjects.pr_css = "\
                .project_nonreaded {\
                    border:#2E97BE 2px solid;\
                    background:#E4F2F8;\
                    background:-moz-linear-gradient(100% 100% 90deg, #D1EBF5, #E4F2F8);\
                    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#D1EBF5), to(#E4F2F8));\
                    background:-webkit-linear-gradient(#E4F2F8, #D1EBF5);\
                    background:-o-linear-gradient(#E4F2F8, #D1EBF5);\
                    margin:10px 0\
                }\
                .project_success {\
                    border:#6BBB40 2px solid;\
                    background:#E0F8D3;\
                    background:-moz-linear-gradient(100% 100% 90deg, #C7FDAA, #E0F8D3);\
                    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#C7FDAA), to(#E0F8D3));\
                    background:-webkit-linear-gradient(#E0F8D3, #C7FDAA);\
                    background:-o-linear-gradient(#E0F8D3, #C7FDAA);\
                    margin:10px 0\
                }\
                .project_nosuccess {\
                    border:#f00 2px solid;\
                    background:#fff0f1;\
                    background:-moz-linear-gradient(100% 100% 90deg, #ffe7e1, #fff0f1);\
                    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffe7e1), to(#fff0f1));\
                    background:-webkit-linear-gradient(#fff0f1, #ffe7e1);\
                    background:-o-linear-gradient(#fff0f1, #ffe7e1);\
                    margin:10px 0\
                }\
            ";

            highlightProjects.action = function()
            {
                this.registerCss(this.pr_css);

                $j('.project-preview').each(function(){
                    if ($j(this).find('.frl-prj-mess').text().match(/Сообщение не прочитано/) && !$j(this).find('.ico-closed').attr('alt')){
                        $j(this).addClass('project_nonreaded');
                    }
                    if ($j(this).find('.fps2').html()){
                        $j(this).addClass('project_success');
                    }
                    if ($j(this).find('.fps4').html()){
                        $j(this).addClass('project_nosuccess');
                    }
                });
            };

            manager.add(highlightProjects);


            // #####################################

            var bbCodeBar = new FModule();

            bbCodeBar.condition = function()
            {
                return config.get('BBCodeBar') && (
                    location.href.match(/\/contacts\/\?from\=/) ||
                        location.href.match(/\/blogs\//) ||
                        location.href.match(/\/commune\//) ||
                        location.href.match(/\/defile\//) ||
                        location.href.match(/\/projects\//) ||
                        location.href.match(/\/setup\/portfolio/) ||
                        location.href.match(/\/articles\//)
                    );
            };

            bbCodeBar.panel_tpl = "\
                <div class='fj_bbcode' style='float:left;position:relative'>\
                    <input type='button' value='b' />\
                    <input type='button' value='i' />\
                    <input type='button' value='p' />\
                    <input type='button' value='ul' />\
                    <input type='button' value='li' />\
                    <input type='button' value='cut' />\
                    <input type='button' value='h1' />\
                    <input type='button' value='s' />\
                    <input type='button' value='w' style='margin-left:10px' />\
                    <input type='button' value='&copy;' style='margin-left:10px' />\
                    <input type='button' value='&euro;' />\
                    <input type='button' value='&bull;' />\
                    <input type='button' value='&laquo;&raquo;' />\
                    <input type='button' value='&#9786;' />\
                    <div class='fj_smilePanel' style='display:none'>\
                        {{each smiles}}\
                        <img class='fj_smileButton' src='http://freejs.elisdn.ru/images/smiles/${file}' alt='${text}' title='${text}' />\
                        {{/each}}\
                    </div>\
                </div>\
                <div style='clear:both'></div><br />\
            ";

            bbCodeBar.panel_css = "\
                #ov-report {\
                    width:800px;\
                    margin:0 0 0 -430px\
                }\
                .ov-col2 {\
                    width:500px;\
                    float':'right;\
                }\
                #complain_fmsg {\
                    width:495px;\
                    height:90px;\
                }\
                .fj_bbcode input, .fj_addheight, .fj_delheight {\
                    width:24px;\
                    padding:2px 0;\
                    margin:0 !important;\
                    text-align:center;\
                    float:left;\
                    cursor:pointer;\
                    font-size:11px !important;\
                    border-top:#eee 1px solid;\
                    border-right:#bbb 1px solid;\
                    border-bottom:#bbb 1px solid;\
                    border-left:#ddd 1px solid;\
                    background:#eee;\
                    background:-moz-linear-gradient(100% 100% 90deg, #ddd, #fff);\
                    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ddd), to(#fff));\
                    background:-webkit-linear-gradient(#fff, #ddd);\
                    background:-o-linear-gradient(#fff, #ddd);\
                }\
                .fj_smilePanel {\
                    width:98%;\
                    background:#fff;\
                    border:#aaa 1px solid;\
                    padding:4px;\
                    position:absolute;\
                    z-index:100;\
                    right:0;\
                    top:20px;\
                    display:none;\
                }\
                fj_smileButton {\
                    cursor:pointer;\
                }\
            ";

            bbCodeBar.action = function()
            {
                var module = this;

                var textfield = '';
                var selStart = 0;
                var selEnd = 0;

                var sdv = 0;

                module.registerCss(module.panel_css);

                function clearnl(text)
                {
                    var t = text;
                    t = str_replace(t, "\r", '');
                    t = str_replace(t, "\n", "\r\n");
                    return t;
                }

                function getSelect(obj)
                {
                    textfield = obj;
                    selStart = obj.selectionStart;
                    selEnd = obj.selectionEnd;
                }

                function checkPanelNeeded()
                {
                    var bbflag = false;
                    $j('textarea:enabled').each(function(){
                        if ($j(this).css('display') != 'none'){
                            if (!$j(this).data('bb')){
                                $j(this).data('bb', true);

                                var bbpanel = getPanel();
                                $j(this).after(bbpanel);
                                getSelect(this);

                                bbflag = true;
                            }
                        }
                        if (bbflag) {
                            initBBPanel();
                            initCancelButton()
                        }
                    });
                    setTimeout(checkPanelNeeded, 200);
                }

                function getPanel()
                {
                    var smilelist = [];

                    for (var k in smiles){
                        smilelist.push({
                            text:k,
                            file:smiles[k]
                        });
                    }

                    return $j.tmpl(module.panel_tpl, {
                        smiles:smilelist
                    });
                }

                function initBBPanel()
                {
                    $j('textarea').unbind('change');
                    $j('textarea').change(function(){
                        getSelect(this);
                    });

                    $j('textarea').unbind('click');
                    $j('textarea').click(function(){
                        getSelect(this);
                    });

                    $j('textarea').unbind('keyup');
                    $j('textarea').keyup(function(){
                        getSelect(this);
                    });

                    $j('textarea').unbind('select');
                    $j('textarea').select(function(){
                        getSelect(this);
                    });

                    $j('.fj_bbcode input').unbind('click');
                    $j('.fj_bbcode input').click(function(){

                        var text = clearnl($j(textfield).val());
                        var s1 = text.substring(0,selStart);
                        var s2 = text.substring(selStart, selEnd);
                        var s3 = text.substring(selEnd);

                        var opentag = '';
                        var closetag = '';

                        switch ($j(this).val()){

                            case String.fromCharCode(9786):

                                $j('.fj_smilePanel').toggle();
                                $j('.fj_smileButton').unbind('click');

                                $j('.fj_smileButton').click(function(){

                                    $j('.fj_smilePanel').hide();

                                    var text = clearnl($j(textfield).val());

                                    var s1 = text.substring(0,selStart);
                                    var s2 = text.substring(selStart, selEnd);
                                    var s3 = text.substring(selEnd);

                                    $j(textfield).val(s1 + ' ' + $j(this).attr('alt') +' ' + s3);

                                    textfield.selectionStart = selEnd + ($j(this).val() +'  ').length;
                                    textfield.focus();
                                    textfield.selectionEnd = textfield.selectionStart;

                                    getSelect(textfield);

                                });
                                break;

                            case 'b': case 'i': case 'p': case 'ul': case 'li': case 'cut': case 'h1': case 's':

                            opentag = '<'+$j(this).val()+'>';
                            closetag = '</'+$j(this).val()+'>';
                            $j(textfield).val(s1 + opentag + s2 + closetag + s3);
                            textfield.selectionStart = selEnd + opentag.length;
                            break;

                            case '«»':

                                opentag = '«';
                                closetag = '»';
                                $j(textfield).val(s1 + opentag + s2 + closetag + s3);
                                textfield.selectionStart = selEnd + 1;
                                break;

                            case 'w':

                                $j(textfield).val(s1 + 'http://' + s2 + s3);
                                textfield.selectionStart = selEnd + 7;
                                break;

                            default:

                                $j(textfield).val(s1 + $j(this).val() + ' ' + s3);
                                textfield.selectionStart = selEnd + ($j(this).val() + ' ').length;
                        }

                        textfield.focus();
                        textfield.selectionEnd = textfield.selectionStart;
                        getSelect(textfield);

                    });

                    $j('.fj_clocklabel').unbind('click');
                    $j('.fj_clocklabel').click(function(){
                        var text = clearnl($j(textfield).val());
                        var s1 = text.substring(0,selStart);
                        var s3 = text.substring(selEnd);
                        $j(textfield).val(s1 + $j(this).text() + ' ' + s3);
                        textfield.selectionStart = selEnd + ($j(this).text() + ' ').length;
                    });

                }

                function initCancelButton(){

                    $j("#editForm input:submit[name='btn']").after("&nbsp;<input tabindex=301 type='button' class='btn cancelcomment' value='Отмена'>");

                    $j('.cancelcomment').click(function(){
                        $j('#frm').hide();
                        if (location.href.match(/&action\=edit/)){
                            var uri = window.location.href;
                            uri = uri.split('&action=edit').join('');

                            window.location.href = uri;
                        }
                    });
                }

                checkPanelNeeded();

            };

            manager.add(bbCodeBar);

            // ###############################################

            var blogSmiles = new FModule();

            blogSmiles.condition = function()
            {
                return config.get('Smiles') && location.href.match(/blogs/);
            };

            blogSmiles.css = "\
                .fj_smile {\
                    margin:0;\
                    display:inline-block;\
                    vertical-align:middle;\
                }\
            ";

            blogSmiles.action = function()
            {
                this.registerCss(this.css);
                $j('.blog-one-cnt').each(function()
                {
                    var elem = $j(this);
                    var text = elem.html();
                    for (var key in smiles) {
                        text = str_replace(text, key, '<img class="fj_smile" src="http://freejs.elisdn.ru/images/smiles/'+smiles[key]+'" alt="*'+key+'" title="'+key+'" />');
                        text = text.replace(/<a([^<>]*)<img[^>]*>([^>]*)>/g, '<a$1$2>');
                        text = text.replace(/<img([^<>]*)<img[^>]*>([^>]*)>/g, '<img$1$2>');
                    }
                    elem.html(text);
                });
            };

            manager.add(blogSmiles);

            // ################################

            var profileGallery = new FModule();

            profileGallery.condition = function()
            {
                return config.get('profileGallery') &&
                    location.href.match(/users/) &&
                    !location.href.match(/users\/[a-zA-Z0-9_\-]*\/.*?\//) &&
                    !location.href.match(/viewproj\.php/) &&
                    ($j('.tab1 span span').text() == 'Портфолио' || $j('.tab1 span span').text() == 'Услуги');
            };

            profileGallery.gallery_tpl = "\
                <!DOCTYPE html>\
                <html>\
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
                    .gPanel {\
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
                    .gPanelLenta {\
                        width:10000px;\
                        position:relative;\
                        left:35px;\
                    }\
                    .gPanelLenta img {\
                        height:100px;\
                        margin:12px 0 5px 5px;\
                        float:left;\
                    }\
                    .myarrow {\
                        position:fixed;\
                        top:31px;\
                        z-index:10;\
                        width:30px;\
                        height:101px;\
                        background:#666;\
                        opacity:0.6;\
                        cursor:pointer;\
                    }\
                    .myarrow label {\
                        display:block;\
                        margin-top:40px;\
                        color:#fff;\
                        text-align:center;\
                        cursor:pointer;\
                    }\
                    .arleft {\
                        left:0;\
                    }\
                    .arright {\
                        right:0;\
                    }\
                    .myFrame {\
                        position:absolute;\
                        z-index:1;\
                        left:0;\
                        top:0;\
                        width:100%;\
                        height:100%;\
                    }\
                    .closeGallery {\
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
                    .closeGallery label {\
                        display:block;\
                        margin:0 !important;\
                        padding:4px 0;\
                        color:#fff;\
                        text-align:center;\
                        cursor:pointer;\
                    }\
                    .clleft {\
                        left:0;\
                    }\
                    .clright {\
                        right:0;\
                    }\
                </style>\
                <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>\
                <script>\
                    function fj_Parent(){\
                        return true;\
                    }\
                </script>\
                </head>\
                <body>\
                <div class='gPanel' height='130px'>\
                    <div id='gPanelLenta' class='gPanelLenta' style='left:35px'>\
                    {{each gallery}}\
                    <a target='myFrame' id='lnk_${index}' onclick='showWork(${index})' href='${link}&inframe'><img src='${preview}' /></a>\
                    {{/each}}\
                    </div>\
                    <div class='myarrow arleft'><label>&larr;</label></div>\
                    <div class='myarrow arright'><label>&rarr;</label></div>\
                    <div class='closeGallery clleft'><label>x</label></div>\
                    <div class='closeGallery clright'><label>x</label></div>\
                </div>\
                <iframe style='width:100%;height:100%;position:absolute;left:0;top:0;z-index:1' id='myFrame' name='myFrame' src='${firsturl}&inframe'></iframe>'\
                <script type='text/javascript'>\
                    jQuery('#lnk_1').addClass('active');\
                    function showWork(id){\
                        jQuery('a').removeClass('active');\
                        jQuery('#lnk_'+id).addClass('active');\
                        myFrame.location.href = jQuery('#lnk_'+id).attr('href');\
                        return false;\
                    }\
                    jQuery('.closeGallery').click(function(){\
                        window.location.href = myFrame.location.href.split('&inframe').join('');\
                        return false;\
                    });\
                    jQuery('.arleft').click(function(){\
                        jQuery('.gPanelLenta').animate({'left':'+=500'},600);\
                    });\
                    jQuery('.arright').click(function(){\
                        jQuery('.gPanelLenta').animate({'left':'-=500'},600);\
                    });\
                </script>\
                </body>\
                </html>\
                ";

            profileGallery.action = function()
            {
                var module = this;
                var firstlink = '/';
                var prevhref = '';
                var gallery = [];

                var linkindex = 0;

                $j('div.b-work a[href], td.even a[href]').each(function()
                {
                    var link = $j(this);
                    var href = $j(this).attr('href');

                    if (href != prevhref && href.match(/viewproj\.php\?prjid\=/)){

                        linkindex++;

                        var image = $j(this).find('img');
                        var preview = '';

                        if (typeof image != 'undefined'){
                            preview = image.attr('src');
                        } else {
                            preview = 'http://freejs.elisdn.ru/images/noimg.png';
                        }
                        if (linkindex == 1) firstlink = link.attr('href');

                        prevhref = link.attr('href');

                        gallery.push({
                            index: linkindex,
                            link: href,
                            preview: preview
                        })

                    }
                    prevhref = href;
                });

                menu.add({
                    id: 'showGallery',
                    content: '<p>Галерея<p>'
                });

                $j('#showGallery').live('click', function()
                {
                    if (!isFrame()) {
                        var gall = $j.tmpl(module.gallery_tpl, {
                            gallery:gallery,
                            firsturl:firstlink
                        });
                        var h = $j('html');
                        h.html('');
                        h.append(gall);
                    }
                });

                function isFrame(){
                    return typeof parent.fj_Parent != 'undefined';
                }

            };

            manager.add(profileGallery);

            // ####################################

            var checkMessages = new FModule();

            checkMessages.condition = function()
            {
                return config.get('checkMessages');
            };

            checkMessages.action = function()
            {
                var messTitle = [$j('#userbar_message').text(), '****************'];
                var index=0;
                var showed = false;

                menu.add({
                    id: 'showMessageButton',
                    content: '<p><a href="/contacts"></a><p>',
                    background: '#f63',
                    display: false
                });

                function checkMessage(){

                    if ($j('#userbar_message').text() && $j('#userbar_message').text() !== 'Мои контакты') {

                        index = index ? 0 : 1;
                        $j('title').html(messTitle[index]);
                        if (!showed) {
                            $j('#showMessageButton a').text($j('#userbar_message').text());
                            $j('#showMessageButton').show();
                            showed = true;
                        }

                    } else {
                        if (showed) {
                            $j('title').html('Удаленная работа (фриланс) на Free-lance.ru');
                            $j('#showMessageButton').hide();
                            showed = false;
                        }
                    }

                    setTimeout(checkMessage, 400);
                }

                checkMessage();
            };


            manager.add(checkMessages);

            // ####################################

            var citeBlogs = new FModule();

            citeBlogs.condition = function()
            {
                return location.href.match(/blogs/);
            };

            citeBlogs.action = function()
            {
                $j('.blog-one-cnt').each(function()
                {
                    var msgbox = $j(this).parent().parent().find('.blog-one-cnt');
                    var commlink = $j(this).parent().find('a[href="javascript: void(0);"]');
                    var onclick = commlink.attr('onclick')+' ';
                    var msgtext = '&raquo; ' + msgbox.html();

                    msgtext = msgtext.replace(/<a[^>]*title=\"([^\"]*)\"[^>]*>[^<]*<\/a>/g, "$1");
                    msgtext = msgtext.replace(/<br\/?>/g, "\\n&raquo; ");
                    msgtext = msgtext.replace(/<[^>]*>/g, '');
                    msgtext = msgtext.replace(/\"/g,'\\&quot;');
                    msgtext = msgtext.replace(/\'/g,"\\'");

                    onclick = onclick.replace("function anonymous(event) {",'');
                    onclick = onclick.replace("function onclick(event) {",'');
                    onclick = onclick.replace(/\"/g,"'");
                    onclick = onclick.replace('}', '');
                    onclick = onclick.replace(/(\r|\n)/g, '');

                    var quotelink = "<a href='javascript:void(0);' onclick=\""+onclick+" document.getElementById('frm').msg.value = '"+msgtext+"';\" style='color: #D75A29'>Цитировать</a>";

                    commlink.after(' | ' + quotelink);

                });
            };

            manager.add(citeBlogs);

            // ##################################

            var codeHighlight = new FModule();

            codeHighlight.condition = function()
            {
                return location.href.match(/blogs/);
            };

            codeHighlight.parser_css = "\
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
                .fj_commlight {\
                    border:#2E97BE 1px solid !important;\
                    background:#E4F2F8;\
                    background:-moz-linear-gradient(100% 100% 90deg, #D1EBF5, #E4F2F8);\
                    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#D1EBF5), to(#E4F2F8));\
                    background:-webkit-linear-gradient(#E4F2F8, #D1EBF5);\
                    background:-o-linear-gradient(#E4F2F8, #D1EBF5);\
                    width:954px !important;\
                    margin:-16px -1px -1px -1px !important;\
                    padding:15px 0 0 0 !important;\
                }\
            ";

            codeHighlight.action = function()
            {
                this.registerCss(this.parser_css);

                function parseCode(a, struct){
                    if (!a) {
                        return '';
                    } else {
                        if (struct) {
                            a = a.replace(/&gt;\s*&lt;/mg, '&gt;&lt;');
                            a = a.replace(/\{/g, '{\n');
                            a = a.replace(/\}/g, '\n}');
                            a = a.replace(/<\/?(b|i|p|ul|li|cut|h\d?|s|)>/g, '');
                        }

                        var m = a.split(/<br.*?>/);
                        var n = [];
                        var k = 0;
                        var nxt = 0;
                        var cur = 0;
                        for (i=0; i<m.length; i++){
                            n[k] = m[i];
                            k++;
                        }

                        for (var i=0; i< n.length; i++){
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

                $j('.bl_text').each(function()
                {
                    var txt = $j(this).find('.blog-one-cnt');
                    $j(this).prepend("\
                        <div class='fj_codeButtons' style='float:right;cursor:pointer;margin-top:-5px;'>\
                            "+(config.get('visualAnchors') ? "<img class='fj_lightcomment' src='http://freejs.elisdn.ru/images/mark.gif' alt='Подсветка' title='Подсветка комментария' style='opacity:0.1'  />" : '')+"\
                            "+(config.get('highlightCode') ? "<img class='fj_codehighlight' src='http://freejs.elisdn.ru/images/code.gif' alt='Подсветка' title='Подсветка кода' style='opacity:0.1'  />" : '')+"\
                        </div>\
                    ");
                    var source = txt.html();
                    $j(this).append("<div style='display:none' class='fj_commentStorage' title='code'>"+source+"</div>");
                    txt.html('<div class="fj_pre">'+parseCode(source, false)+'</pre>');
                });

                $j('.fj_codeButtons img').fadeTo(1, 0.1);

                $j('.fj_codeButtons img').hover(
                    function(){
                        $j(this).fadeTo(200, 1);
                    }, function(){
                        $j(this).fadeTo(200, 0.1);
                    }
                );

                if (config.get('visualAnchors')) {

                    var lightlist = config.get('ligthing_comments').split(',');

                    function isLighten(id)
                    {
                        for (var k in lightlist){
                            if (lightlist[k] == id) return true;
                        }
                        return false;
                    }

                    function addLighten(id)
                    {
                        if (!isLighten(id)){
                            var newlist = [];
                            for (var k in lightlist){
                                if (typeof(lightlist[k]) == 'string') newlist.push(lightlist[k]);
                            }
                            newlist.push(id);
                            lightlist = newlist;
                            config.set('ligthing_comments', lightlist.join(','));
                        }
                    }

                    function removeLighten(id)
                    {
                        if (isLighten(id)){
                            var newlist = [];
                            for (var k in lightlist){
                                if (typeof(lightlist[k]) == 'string' && lightlist[k] != id) newlist.push(lightlist[k]);
                            }
                            lightlist = newlist;
                            config.set('ligthing_comments', lightlist.join(','));
                        }
                    }

                    function clearLighten()
                    {
                        config.set('ligthing_comments', '');
                    }

                    $j('.blog-one-cnt').each(function()
                    {
                        var comment = $j(this).parent().parent().parent().parent();
                        var id = comment.find('.blog-one-cnt').attr('id');
                        if (isLighten(id)) {
                            comment.addClass('fj_commlight');
                        }
                    });

                    $j('.fj_lightcomment').click(function()
                    {
                        var comment = $j(this).parent().parent().parent().parent().parent();
                        var id = comment.find('.blog-one-cnt').attr('id');
                        if (!isLighten(id)) {
                            comment.addClass('fj_commlight');
                            addLighten(id);
                        } else {
                            comment.removeClass('fj_commlight');
                            removeLighten(id)
                        }
                    });
                }

                if (config.get('highlightCode')) {
                    $j('.fj_codehighlight').click(function()
                    {
                        var st = $j(this).parent().parent().find('.fj_commentStorage');
                        var txt = $j(this).parent().parent().find('.blog-one-cnt');
                        if (st.attr('title') == '') {
                            txt.html('<div class="fj_pre">'+parseCode(st.html(), false)+'</div>');
                            st.attr('title', 'code');
                        } else if (st.attr('title') == 'code') {
                            txt.html('<div class="fj_pre">'+parseCode(st.html(), true)+'</div>');
                            st.attr('title', 'parse');
                        } else {
                            txt.html(st.html());
                            st.attr('title', '');
                        }
                    });
                }

            };

            manager.add(codeHighlight);

            // ##################################################

            var hideShareInBlogs = new FModule();

            hideShareInBlogs.condition = function()
            {
                return location.href.match(/blogs\/[^\/]+\/\d+\/.*/);
            };

            hideShareInBlogs.action = function()
            {
                $j('.b-share').hide();
                $j('.footer .commline').prepend('<a class="showshare" href="#" title="FreeJS Share Toggler">Поделиться</a>&nbsp;|');
                $j('.showshare').click(function(){
                    $j('.b-share').toggle();
                    return false;
                });
            };

            manager.add(hideShareInBlogs);

            // ##################################################

            var highlightGuests = new FModule();

            highlightGuests.condition = function()
            {
                return config.get('highlightGuests') && location.href.match(/promotion\/\?bm\=1/);
            };

            highlightGuests.userpic_css = "\
                 span.fj_other, span.fj_catalog {\
                    display: block;\
                    width: 8px;\
                    height: 8px;\
                    position: absolute;\
                    right: 0;\
                    bottom: 0;\
                    border-left: #fff 1px solid;\
                    border-top: #fff 1px solid;\
                    border-radius: 8px 0 0 0;\
                }\
                span.fj_other {\
                    background: #ff6d1b;\
                }\
                span.fj_catalog {\
                    background: #63a545\
                }\
            ";

            highlightGuests.action = function()
            {
                var module = this;

                $j('table[style="table-layout:fixed"] a').each(function(){

                    module.registerCss(module.userpic_css);

                    var userpic = $j(this);
                    var title = userpic.attr('title');

                    userpic.css({
                        'position':'relative',
                        'display':'block',
                        'width':'25px',
                        'height':'25px'
                    });
                    userpic.find('img').css('display', 'block');

                    if (title.match(/Из\sблогов/)){
                        userpic.append('<span class="fj_other"></span>');
                    }
                    if (title.match(/Из\sкаталога/) || fj_title.match(/С\sплатных\sмест/)){
                        userpic.append('<span class="fj_catalog"></span>');
                    }

                });

            };

            manager.add(highlightGuests);

            // ##################################################

            var noPRO = new FModule();

            noPRO.condition = function()
            {
                return config.get('noPRO') && (
                    location.href.match(/\.ru\/?$/) ||
                    location.href.match(/\.ru\/\?kind\=\d+/) ||
                    location.href.match(/\.ru\/\?page\=\d+/)
                );
            };

            noPRO.action = function()
            {
                if (user.isLogged() && !user.isPRO()) {

                    $j('ul.n-rubrics #b0').html('<span><span><a href="/" class="lnk-dot-grey">Все проекты</a></span></span>');
                    $j('ul.n-rubrics #b1').html('<span><span><a href="/?kind=5" class="lnk-dot-grey">Не для <img src="/images/icons/f-pro.png" class="ac-pro" alt="PRO" /></a></span></span>');

                    if (location.href.match(/\.ru\/\?kind\=5/)) {

                        $j('#cat_comment').text('В данной категории выводятся все проекты не для PRO скриптом FreeJS');
                        $j('.tabs:has(.pc-desc) ul.clear .tab2').addClass('active');
                        $j('.prj-one:has(img[alt="PRO"])').hide();
                        $j('.prj-one:has(span.green)').hide();
                        $j('.prj-one:has(span.red)').hide();

                        $j('ul.n-rubrics #b0').removeClass('a');
                        $j('ul.n-rubrics #b1').addClass('a');

                    }
                }
            };

            manager.add(noPRO);

            manager.execAll();

        }

    }
    return new Construct();
}

if (
    location.href.match(/^https?:\/\/www.free\-lance\.ru/) &&
    !location.href.match(/iframe/) &&
    !location.href.match(/upload/) &&
    !location.href.match(/inframe/) &&
    !location.href.match(/share\.php/) &&
    !location.href.match(/share\.php/)
){
    var FreeJS = new FApplication();
    FreeJS.run();
}