/*
 * FreeJS (free-lance.ru interface patch)
 * Author: Eliseev Dmitry
 * Site: http://freejs.elisdn.ru/
 * Account: http://free-lance.ru/users/ElisDN
 * Email: mail@elisdn.ru
 */

if (typeof jQuery != 'undefined') {

//######################## <USERSCRIPT CONTENT> #######################

    jQuery.noConflict();

    /*
     * jQuery Templates Plugin 1.0.0pre
     * http://github.com/jquery/jquery-tmpl
     */
    (function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);

    (function($){

        /**
         * Manage debug messages
         * @class Log
         */
        var Log = function()
        {
            /**
             * Logging messages
             * @method trace
             * @param {String} message
             */
            this.trace = function(message){
                console.log(message);
            }
        };

        /**
         * Store configuration parameters in permanent/session storage
         * @class Storage
         */
        var Storage = function()
        {
            this._parse = function(val){
                var value = val;
                if (val == 'true') value = true;
                if (val == 'false') value = false;
                if (val === null) value = '';
                return value;
            };

            /**
             * Write parameter in permanent storage
             * @method set
             * @param {String} key of parameter
             * @param {String} value
             */
            this.set = function(key, value){
                if (key){
                    if (this.has(key)){
                        window.localStorage.removeItem(key);
                    }
                    window.localStorage.setItem(key, value);
                }
            };

            /**
             * Read parameter from permanent storage
             * @method get
             * @param {String} key of parameter
             * @return {Object} value
             */
            this.get = function(key){
                if (key){
                    var value = window.localStorage.getItem(key);
                    return this._parse(value);
                } else {
                    return false;
                }
            };

            /**
             * Check exists of parameter in permanent storage
             * @method has
             * @param {String} key of parameter
             * @return {Boolean} true if exists
             */
            this.has = function(key){
                if (key){
                    var value = window.localStorage.getItem(key);
                    if (value === null) return false;
                } else {
                    return false;
                }
                return true;
            };

            /**
             * Write parameter in session storage
             * @method setOnce
             * @param {String} key of parameter
             * @param {Object} value
             */
            this.setOnce = function(key, value){
                if (key){
                    if (this.hasOnce(key)){
                        window.sessionStorage.removeItem(key);
                    }
                    window.sessionStorage.setItem(key, value);
                }
            };

            /**
             * Read parameter from session storage
             * @method getOnce
             * @param {String} key of parameter
             * @return {Object} value
             */
            this.getOnce = function(key){
                if (key){
                    var value = window.sessionStorage.getItem(key);
                    return this._parse(value);
                } else {
                    return false;
                }
            };

            /**
             * Check exists of parameter in session storage
             * @method has
             * @param {String} key of parameter
             * @return {Boolean} true if exists
             */
            this.hasOnce = function(key){
                if (key){
                    var value = window.sessionStorage.getItem(key);
                    if (value === null) return false;
                } else {
                    return false;
                }
                return true;
            };

        };

        /**
         * Manage configuration parameters
         * @class Config
         * @param {Storage} storage_driver
         * @param options_list
         */
        var Config = function(storage_driver, options_list)
        {
            this._storage = storage_driver;
            this._options = options_list;

            /**
             * Error callback
             * @method onError
             * @param {String} message of error
             */
            this.onError = function(message){};

            /**
             * Return label of parameter
             * @method getOptionLabel
             * @param {String} key of parameter
             * @return {String} label
             */
            this.getOptionLabel = function(key){
                return typeof(this._options[key]) != 'undefined' ? this._options[key] : '';
            };

            /**
             * Read parameter from permanent storage
             * @method get
             * @param {String} key of parameter
             * @param {String} def value of parameter
             * @return {Object} value
             */
            this.get = function(key, def){
                if (key){
                    if (!this._storage.has('config_'+key) && typeof def != 'undefined'){
                        this._storage.set('config_'+key, def);
                    }
                    return this._storage.get('config_'+key);
                } else {
                    this.onError('Storage key for Config::get() is empty');
                    return false;
                }
            };

            /**
             * Write parameter to permanent storage
             * @method set
             * @param {String} key of parameter
             * @param {String} val of parameter
             */
            this.set = function(key, val){
                if (key){
                    this._storage.set('config_'+key, val);
                } else {
                    this.onError('Storage key for Config::set() is empty');
                }
            };

            /**
             * Read parameter from session storage
             * @method getOnce
             * @param {String} key of parameter
             * @param {String} def value of parameter
             * @return {Object} value
             */
            this.getOnce = function(key, def){
                if (key){
                    if (!this._storage.hasOnce('config_'+key) && typeof def != 'undefined'){
                        this._storage.setOnce('config_'+key, def);
                    }
                    return this._storage.getOnce('config_'+key);
                } else {
                    this.onError('Storage key for Config::get() is empty');
                    return false;
                }
            };

            /**
             * Write parameter to session storage
             * @method setOnce
             * @param {String} key of parameter
             * @param {String} val of parameter
             */
            this.setOnce = function(key, val){
                if (key){
                    this._storage.setOnce('config_'+key, val);
                } else {
                    this.onError('Storage key for Config::setOnce() is empty');
                }
            };

            /**
             * Return parameter list
             * @method getOptions
             * @return {Object} options
             */
            this.getOptions = function(){
                return this._options;
            };
        };

        /**
         * Read client parameters and user status
         * @class User
         * @param config (mixed)
         */
        var User = function(config)
        {
            this._protecteds = [];
            this._params = config;

            /**
             * Error callback
             * @method onError
             * @param {String} message of error
             */
            this.onError = function(message){};

            /**
             * Read parameter from user data
             * @method get
             * @param {String} key of parameter
             * @return {Object} value
             */
            this.get = function(key){
                if (key){
                    return this._params[key];
                } else {
                    this.onError('User params key is empty');
                    return false;
                }
            };

            /**
             * Read parameter to user data
             * @method set
             * @param {String} key of parameter
             * @param {String} val of parameter
             */
            this.set = function(key, val){
                if (key){
                    this._params[key] = val;
                } else {
                    this.onError('User params key is empty');
                }
            };

            /**
             * Check user login fact
             * @method isLogged
             * @return {Boolean} true if logged
             */
            this.isLogged = function(){
                if (typeof this._protecteds['islogged'] == 'undefined'){
                    var userbar = $('.b-bar__name');
                    if (userbar.html()) {
                        this._protecteds['islogged'] = !!userbar.html();
                    } else {
                        this._protecteds['islogged'] = false;
                    }
                }
                return this._protecteds['islogged'];
            };

            /**
             * Check user has PRO account
             * @method isPro
             * @return {Boolean} true if user has PRO account
             */
            this.isPRO = function(){
                if (typeof this._protecteds['ispro'] == 'undefined'){
                    var userbar = $('#b-bar__pro-btn');
                    if (userbar.text()){
                        this._protecteds['ispro'] = !!userbar.text().match(' до.+');
                    }
                }
                return this._protecteds['ispro'];
            };

        };

        /**
         * Manage modules
         * @class ModuleManager
         */
        var ModuleManager = function()
        {
            this._modules = [];

            /**
             * Add module in queue
             * @param {Module} module
             */
            this.add = function(module){
                this._modules.push(module);
            };

            /**
             * Execute all modules in queue
             */
            this.execAll = function(){
                for (var i=0; i < this._modules.length; i++){
                    this._modules[i].exec();
                }
            };
        };

        /**
         * Module base class
         * @class Module
         */
        var Module = function ()
        {
            this.condition = function(){return false};
            this.action = function(){};
            this._styles = [];
        };

        Module.prototype.exec = function(){
            if (this.condition()){
                this.action();
                this.renderStyles();
            }
        };

        Module.prototype.registerCss = function(data){
            this._styles.push(data);
        };

        Module.prototype.renderStyles = function(){
            var elem = $('<style>');
            elem.attr('type', 'text/css');
            elem.html(this._styles.join("\n"));
            $('head').append(elem);
        };

        /**
         * Menu manager
         * @class Menu
         */
        var Menu = function ()
        {
            this._container = $('<ul>');

            this._container.addClass('fj_menuPanel');
            $('body').prepend(this._container);

            $('head').append("\
                <style type='text/css'>\
                    .fj_menuPanel {\
                        position:fixed;\
                        right:0;\
                        top:30px;\
                        z-index:500;\
                        cursor:pointer;\
                        margin:0;\
                        padding:0\
                        list-style:none;\
                        }\
                    .fj_menuPanel li {\
                        display:inline-block;\
                        float:right;\
                        margin:0 !important;\
                        padding:6px 8px 7px 8px;\
                        border-left:#ccc 1px solid;\
                        font-familt:tahoma;\
                        font-size:8pt;\
                        color:#fff;\
                        background:#6a6;\
                        text-align:center;\
                        cursor:pointer;\
                        height:13px;\
                        position:relative;\
                        overflow:hidden;\
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

            /**
             * Add element
             * @param elem (MenuElement)
             */
            this.add = function(elem){
                var li = $('<li>');
                li.attr('id', elem.id);
                li.css('background', elem.background);
                li.css('display', elem.display);
                li.html(elem.content);
                this._container.append(li);
            };
        };

        /**
         * Menu element base class
         * @class MenuElement
         * @param elem
         * @property {String} id tag "id" attribute
         * @property {String} background CSS property
         * @property {Boolean} display or hide
         * @property {String} content HTML
         */
        var MenuElement = function(elem)
        {
            this.id = elem.id;
            this.background = typeof elem.background != 'undefined' ? elem.background : '#6a6';
            this.display = typeof elem.display != 'undefined' ? (elem.display ? 'block' : 'none') : 'block';
            this.content = elem.content;
        };

        /**
         * Smiles collection
         * @class Smiles
         */
        var Smiles = function()
        {
            this._smile_list = {
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

            this.getAssoc = function(){
                return this._smile_list;
            }
        };

        /**
         * Main FreeJS application
         * @class Application
         * @param client_params (mixed)
         */
        var Application = function(client_params)
        {
            function str_replace(text, search, replace) {
                return text.split(search).join(replace);
            }

            function str_repeat(str, count) {
                var result = '';
                while(count--) result += str;
                return result;
            }

            var scriptVersion = '2.1.5';
            var clientLastVersion = '2.0';

            /* Init */

            var log = new Log();
            var storage = new Storage();
            var config = new Config(storage, {
                hideBlogs: 'Скрытие блогов',
                answerTemplates: 'Заготовки ответов на проекты',
                nonReadedHighlight: 'Подсветка сообщений и проектов',
                BBCodeBar: 'ВВ-панель для многострочных полей',
                profileGallery: 'Галерея в портфолио',
                Smiles: 'Смайлики в блогах',
                checkMessages: 'Оповещение о новых сообщениях',
                highlightCode: 'Подсветка синтаксиса программного кода в блогах',
                visualAnchors: 'Маркировка комментариев в блогах',
                highlightGuests: 'Подсветка посетителей в статистике',
                noPRO: 'Вкладка "Не для PRO" для неPRO пользователей',
                customStyle: 'Изменение стиля',
                portfolioAnchors: 'Ссылки на разделы портфолио'
            });
            config.onError = function(message){
                log.trace(message);
            };
            var user = new User(client_params);
            var menu = new Menu();
            var manager = new ModuleManager();

            /* Run */

            this.run = function(){

                var controlPanel = new Module();

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
                        z-index:101;\
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
                        position:fixed;\
                        z-index:102;\
                        left:20px;\
                        top:-1px;\
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
                                <p style='float:right; margin-right:1px'><a target='_blank' href='http://free-lance.ru/users/ElisDN'><img src='http://freejs.elisdn.ru/images/avatar.jpg' width='50px' height='50px' alt='ElisDN' /></a></p>\
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
                                    <a target='_blank' href='http://freejs.elisdn.ru/support'>Поддержка</a><br />\
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

                    this.registerCss(this.css);

                    if (user.get('clientVersion') < clientLastVersion) {
                        this.registerCss(".freejslink { background:url('http://freejs.elisdn.ru/images/linknew.png') left top no-repeat; }");
                    } else {
                        this.registerCss(".freejslink { background:url('http://freejs.elisdn.ru/images/link.png') left top no-repeat; }");
                    }

                    var optionlist = [];

                    var params = config.getOptions();
                    for (var key in params) {
                        if (typeof(key) == 'string') {
                            optionlist.push({
                                'id': key,
                                'label': config.getOptionLabel(key),
                                'classname': config.get(key, true) ? 'on' : ''
                            });
                        }
                    }

                    var panel = $.tmpl(this.panel_tpl, {
                        optionlist: optionlist,
                        clientVersion: user.get('clientVersion'),
                        scriptVersion: scriptVersion,
                        clientLastVersion: clientLastVersion
                    });

                    $('body').prepend(panel);

                    $('.freejslink').click(function(){
                        ($('.freejsblock').css('display') == 'none') ? $('.freejsblock').fadeIn(400) : $('.freejsblock').fadeOut(400);
                    });

                    $('.freejsblock').mouseenter(function(){$(this).show();});
                    $('.freejsblock').mouseleave(function(){$(this).fadeOut(1000);});

                    $('.fj_sel li').click(function(){

                        var id = $(this).attr('id');
                        if (!config.get(id)){
                            $(this).addClass('on');
                            config.set(id, true);
                        } else {
                            $(this).removeClass('on');
                            config.set(id, false);
                        }

                    });

                    var hideoptions = config.get('hideoptions');

                    if (hideoptions) {
                        $('.fj_sel').hide();
                        $('.fj_link').text('Показать опции');
                    } else {
                        $('.fj_sel').show();
                        $('.fj_link').text('Скрыть опции');
                    }

                    $('.fj_link').click(function(){

                        var hideoptions = config.get('hideoptions');

                        hideoptions = !hideoptions;

                        config.set('hideoptions', hideoptions);

                        if (hideoptions) {
                            $('.fj_sel').fadeOut(400, function() {
                                $('.fj_link').text('Показать опции');
                            });
                        } else {
                            $('.fj_sel').fadeIn(400, function(){
                                $('.fj_link').text('Скрыть опции');
                            });
                        }
                    });

                };
                manager.add(controlPanel);

                /* #########################################################
                 * Кнопка «Вверх»
                 */

                var goUp = new Module();

                goUp.condition = function()
                {
                    return true;
                };

                goUp.action = function()
                {
                    menu.add(new MenuElement({
                        id: 'fjGoUp',
                        content: '<p style="color:#000;">Вверх &uarr;<p>',
                        background: '#eee'
                    }));

                    $('#fjGoUp').live('click', function()
                    {
                        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: 0}, 0);
                    });
                };

                manager.add(goUp);

                /* #########################################################
                 * Добавочный CSS для сайта
                 */

                var stylize = new Module();

                stylize.condition = function()
                {
                    return config.get('customStyle', true);
                };

                stylize.css = "\
                    .b-banner {\
                        display:none !important; \
                    }\
                ";

                stylize.action = function()
                {
                    this.registerCss(this.css);

                    if (location.href.match(/users/)) {

                        $('.profile-advert').hide();
                        $('.page-profile').css('width','100% !important');

                    }
                };

                manager.add(stylize);

                /* #########################################################
                 * Скрытие блогов
                 */

                var hideBlogs = new Module();

                hideBlogs.condition = function()
                {
                    return config.get('hideBlogs', true) && location.href.match(/blogs/);
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

                    var hiddenblogs = config.getOnce('hidden_blogs');
                    if (hiddenblogs) hiddenblogs = hiddenblogs.split(',');

                    function isHidden(id)
                    {
                        var len = hiddenblogs.length;
                        for (var i= 0; i < len; i++){
                            if (hiddenblogs[i] == id) return true;
                        }
                        return false;
                    }

                    function addHidden(id)
                    {
                        if (!isHidden(id)){
                            var newhiddens = [];
                            var len = hiddenblogs.length;
                            for (var i=0; i < len; i++){
                                if (typeof hiddenblogs[i] == 'string') newhiddens.push(hiddenblogs[i]);
                            }
                            newhiddens.push(id);
                            hiddenblogs = newhiddens;
                            config.setOnce('hidden_blogs', hiddenblogs.join(','));
                        }
                    }

                    function removeHidden(id)
                    {
                        if (isHidden(id)){
                            var newhiddens = [];
                            var len = hiddenblogs.length;
                            for (var i=0; i < len; i++){
                                if (typeof hiddenblogs[i] == 'string' && hiddenblogs[i] != id) newhiddens.push(hiddenblogs[i]);
                            }
                            hiddenblogs = newhiddens;
                            config.setOnce('hidden_blogs', hiddenblogs.join(','));
                        }
                    }
                    function clearHidden()
                    {
                        config.setOnce('hidden_blogs', '');
                    }

                    var links = [];

                    $('.blog').each(function()
                    {
                        var blog = $(this);
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

                        blog.find('.commline').prepend('<a href="#">Вверх</a>&nbsp;|&nbsp;<a href="#bottom">Вниз</a>&nbsp;|&nbsp;<a class="collapse" href="#'+$(this).attr('id')+'">Скрыть</a>&nbsp;|');

                    });

                    this.registerCss(this.slider_css);

                    var slider = $.tmpl(this.slider_tpl, {
                        links: links
                    });
                    $('#rightcl').prepend(slider);

                    updateSlider();

                    $('#rightcl').append('<a name="bottom></a>');

                    var collapse = config.get('collapse_slider');
                    if (!collapse) {
                        $('#flt-hide-content').show();
                        $('.flt-tgl-lnk2').text('Свернуть');
                    } else {
                        $('#flt-hide-content').hide();
                        $('.flt-tgl-lnk2').text('Развернуть');
                    }

                    $('.flt-tgl-lnk2').unbind('click');
                    $('.flt-tgl-lnk2').click(function()
                    {
                        var collapse = config.get('collapse_slider');
                        collapse = !collapse;
                        config.set('collapse_slider', collapse);

                        if (collapse) {
                            $('#flt-hide-content').slideUp(400, function(){
                                $('.flt-tgl-lnk2').text('Развернуть');
                            });
                        } else {
                            $('#flt-hide-content').slideDown(400, function(){
                                $('.flt-tgl-lnk2').text('Свернуть');
                            });
                        }
                        return false;
                    });

                    $('#hidelinklist .showblog').click(function()
                    {
                        var id = $(this).attr('rel');
                        showBlog(id);
                        removeHidden(id);
                        return false;
                    });

                    $('.showallblogs').click(function()
                    {
                        $('.blog').each(function(){
                            $(this).show();
                        });
                        clearHidden();

                        $('.myblogslinks').hide();
                        $('.showblog').parent().hide();
                        return false;
                    });

                    $('.collapse').click(function()
                    {
                        var blog = $(this).parent().parent().parent();
                        addHidden(blog.attr('id'));
                        hideBlog(blog.attr('id'));
                        updateSlider();
                        return false;
                    });

                    function hideBlog(id)
                    {
                        var blog = $('#'+id);

                        if (blog){
                            blog.slideUp(400, function(){
                                var link = $('#hidelinklist .showblog[rel="'+id+'"]');
                                link.parent().slideDown(400, function(){
                                    updateSlider();
                                });
                            });

                        }

                    }

                    function showBlog(id)
                    {
                        var link = $('#hidelinklist .showblog[rel="'+id+'"]');
                        if (link){
                            link.parent().fadeOut(200, function(){
                                $('#'+id).show(1,function(){
                                    var elementClicked = $(link).attr("href");
                                    var destination = $(elementClicked).offset().top;
                                    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-20}, (destination-20)/2 );
                                    window.location.href = '#'+link.attr('rel');
                                });
                                updateSlider();
                            });
                        }

                    }

                    function updateSlider(){
                        var hiddencount = $('.blog:hidden').length;
                        if (hiddencount > 0){
                            $('.myblogslinks').show();
                        }  else {
                            $('.myblogslinks').hide();
                        }
                        $('#flt-hide-cnt').text('('+hiddencount+')');
                    }
                };

                manager.add(hideBlogs);

                /* #########################################################
                 * Заготовки ответов на проекты
                 */

                var answerTemplates = new Module();

                answerTemplates.condition = function()
                {
                    return config.get('answerTemplates', true) && location.href.match(/projects\/\d+\/.*/);
                };

                answerTemplates.action = function()
                {
                    var textarea = $('#ps_text');

                    var templates = '';
                    var mycard = user.get('answerTemplates').split('||');

                    for (var i=0; i<mycard.length; i++){
                        templates += (i+1)+') <a class="addcard" href="#">'+(mycard[i].split('|').join("\n"))+'<a/><br />';
                    }
                    textarea.parent().append('<p>Вставить заготовку:<br /><br />'+templates+'</p>');
                    $('.addcard').click(function(){
                        textarea.val(textarea.val()+$(this).text());
                        return false;
                    });
                };

                manager.add(answerTemplates);

                /* #########################################################
                 * Подстветка непрочитанных диалогов
                 */

                var highlightContacts = new Module();

                highlightContacts.condition = function()
                {
                    return config.get('nonReadedHighlight', true) && location.href.match(/contacts/);
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

                    $('.qpr').each(function(){
                        if ($(this).find('.folders').text().match(/Ваше сообщение не прочитано/)){
                            $(this).addClass('nonreaded_message');
                        } else if ($(this).find('.folders').text().match(/Новые сообщения/)){
                            $(this).addClass('new_message');
                        }
                    });
                };

                manager.add(highlightContacts);

                /* #########################################################
                 * Подсветка элементов на странице Проекты
                 */

                var highlightProjects = new Module();

                highlightProjects.condition = function()
                {
                    return config.get('nonReadedHighlight', true) && location.href.match(/projects/);
                };

                highlightProjects.pr_css = "\
                    .project_nonreaded {\
                        border:#2E97BE 2px solid;\
                        background:#E4F2F8;\
                        background:-moz-linear-gradient(#E4F2F8, #D1EBF5);\
                        background:-webkit-linear-gradient(#E4F2F8, #D1EBF5);\
                        background:-o-linear-gradient(#E4F2F8, #D1EBF5);\
                        background:-ms-linear-gradient(#E4F2F8, #D1EBF5);\
                        margin:10px 0\
                    }\
                    .project_success {\
                        border:#6BBB40 2px solid;\
                        background:#E0F8D3;\
                        background:-moz-linear-gradient(#E0F8D3, #C7FDAA);\
                        background:-webkit-linear-gradient(#E0F8D3, #C7FDAA);\
                        background:-o-linear-gradient(#E0F8D3, #C7FDAA);\
                        background:-ms-linear-gradient(#E0F8D3, #C7FDAA);\
                        margin:10px 0\
                    }\
                    .project_nosuccess {\
                        border:#f00 2px solid;\
                        background:#fff0f1;\
                        background:-moz-linear-gradient(#fff0f1, #ffe7e1);\
                        background:-webkit-linear-gradient(#fff0f1, #ffe7e1);\
                        background:-o-linear-gradient(#fff0f1, #ffe7e1);\
                        background:-ms-linear-gradient(#fff0f1, #ffe7e1);\
                        margin:10px 0\
                    }\
                ";

                highlightProjects.action = function()
                {
                    this.registerCss(this.pr_css);

                    $('.project-preview').each(function(){
                        if ($(this).find('.frl-prj-mess').text().match(/Сообщение не прочитано/) && !$(this).find('.ico-closed').attr('alt')){
                            $(this).addClass('project_nonreaded');
                        }
                        if ($(this).find('.fps2').html()){
                            $(this).addClass('project_success');
                        }
                        if ($(this).find('.fps4').html()){
                            $(this).addClass('project_nosuccess');
                        }
                    });
                };

                manager.add(highlightProjects);

                /* #########################################################
                 * Панель BBCode
                 */

                var bbCodeBar = new Module();

                bbCodeBar.condition = function()
                {
                    return config.get('BBCodeBar', true) && (
                        location.href.match(/\/contacts\/\?from\=/) ||
                            location.href.match(/\/blogs\//) ||
                            location.href.match(/\/defile\//) ||
                            location.href.match(/\/projects\//) ||
                            location.href.match(/\/setup\/portfolio/)
                        );
                };

                bbCodeBar.panel_tpl = "\
                    <div class='fj_bbcode'>\
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
                        background:-moz-linear-gradient(#fff, #ddd);\
                        background:-webkit-linear-gradient(#fff, #ddd);\
                        background:-o-linear-gradient(#fff, #ddd);\
                        background:-ms-linear-gradient(#fff, #ddd);\
                    }\
                    .b-textarea {\
                        overflow:auto !important;\
                        }\
                    .fj_bbcode {\
                        float:left;\
                        position:relative;\
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
                        $('textarea:enabled').each(function(){
                            if ($(this).css('display') != 'none'){
                                if (!$(this).data('bb')){
                                    $(this).data('bb', true);

                                    var bbpanel = getPanel();
                                    $(this).after(bbpanel);
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
                        var items = [];

                        var smiles = new Smiles();
                        var smilelist = smiles.getAssoc();

                        for (var k in smilelist){
                            items.push({
                                text:k,
                                file:smilelist[k]
                            });
                        }

                        return $.tmpl(module.panel_tpl, {
                            smiles:items
                        });
                    }

                    function initBBPanel()
                    {
                        $('textarea').unbind('change');
                        $('textarea').change(function(){
                            getSelect(this);
                        });

                        $('textarea').unbind('click');
                        $('textarea').click(function(){
                            getSelect(this);
                        });

                        $('textarea').unbind('keyup');
                        $('textarea').keyup(function(){
                            getSelect(this);
                        });

                        $('textarea').unbind('select');
                        $('textarea').select(function(){
                            getSelect(this);
                        });

                        $('.fj_bbcode input').unbind('click');
                        $('.fj_bbcode input').click(function(){

                            var text = clearnl($(textfield).val());
                            var s1 = text.substring(0,selStart);
                            var s2 = text.substring(selStart, selEnd);
                            var s3 = text.substring(selEnd);

                            var opentag = '';
                            var closetag = '';

                            switch ($(this).val()){

                                case String.fromCharCode(9786):

                                    $('.fj_smilePanel').toggle();
                                    $('.fj_smileButton').unbind('click');

                                    $('.fj_smileButton').click(function(){

                                        $('.fj_smilePanel').hide();

                                        var text = clearnl($(textfield).val());

                                        var s1 = text.substring(0,selStart);
                                        var s2 = text.substring(selStart, selEnd);
                                        var s3 = text.substring(selEnd);

                                        $(textfield).val(s1 + ' ' + $(this).attr('alt') +' ' + s3);

                                        textfield.selectionStart = selEnd + ($(this).val() +'  ').length;
                                        textfield.focus();
                                        textfield.selectionEnd = textfield.selectionStart;

                                        getSelect(textfield);

                                    });
                                    break;

                                case 'b': case 'i': case 'p': case 'ul': case 'li': case 'cut': case 'h1': case 's':

                                opentag = '<'+$(this).val()+'>';
                                closetag = '</'+$(this).val()+'>';
                                $(textfield).val(s1 + opentag + s2 + closetag + s3);
                                textfield.selectionStart = selEnd + opentag.length;
                                break;

                                case '«»':

                                    opentag = '«';
                                    closetag = '»';
                                    $(textfield).val(s1 + opentag + s2 + closetag + s3);
                                    textfield.selectionStart = selEnd + 1;
                                    break;

                                case 'w':

                                    $(textfield).val(s1 + 'http://' + s2 + s3);
                                    textfield.selectionStart = selEnd + 7;
                                    break;

                                default:

                                    $(textfield).val(s1 + $(this).val() + ' ' + s3);
                                    textfield.selectionStart = selEnd + ($(this).val() + ' ').length;
                            }

                            textfield.focus();
                            textfield.selectionEnd = textfield.selectionStart;
                            getSelect(textfield);

                        });

                    }

                    function initCancelButton(){

                        $("#editForm input:submit[name='btn']").after("&nbsp;<input tabindex=301 type='button' class='btn cancelcomment' value='Отмена'>");

                        $('.cancelcomment').click(function(){
                            $('#frm').hide();
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

                /* #########################################################
                 * Смайлики в блогах
                 */

                var blogSmiles = new Module();

                blogSmiles.condition = function()
                {
                    return config.get('Smiles', true) && location.href.match(/blogs/);
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

                    var smiles = new Smiles();
                    var smilelist = smiles.getAssoc();

                    $('.blog-one-cnt').each(function()
                    {
                        var elem = $(this);
                        var text = elem.html();
                        for (var key in smilelist) {
                            text = str_replace(text, key, '<img class="fj_smile" src="http://freejs.elisdn.ru/images/smiles/'+smilelist[key]+'" alt="*'+key+'" title="'+key+'" />');
                            text = text.replace(/<a([^<>]*)<img[^>]*>([^>]*)>/g, '<a$1$2>');
                            text = text.replace(/<img([^<>]*)<img[^>]*>([^>]*)>/g, '<img$1$2>');
                        }
                        elem.html(text);
                    });
                };

                manager.add(blogSmiles);

                /* #########################################################
                 * Галерея в портфолио фрилансера
                 */

                var profileGallery = new Module();

                profileGallery.condition = function()
                {
                    return config.get('profileGallery', true) &&
                        location.href.match(/users/) &&
                        !location.href.match(/users\/[a-zA-Z0-9_\-]*\/.*?\//) &&
                        !location.href.match(/viewproj\.php/) &&
                        ($('.b-menu__item:first-child span span').text() == 'Портфолио' || $('.b-menu__item:first-child span span').text() == 'Услуги');
                };

                profileGallery.gallery_tpl = "\
                    <!DOCTYPE html>\
                    <html>\
                    <head>\
                    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\
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
                        <a target='myFrame' id='lnk_${index}' onclick='showWork(${index})' href='${link}&inframe' title='${title}'><img src='${preview}' /></a>\
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

                    $('div.b-work a[href], td.even a[href]').each(function()
                    {
                        var link = $(this);
                        var href = $(this).attr('href');

                        if (href != prevhref && href.match(/viewproj\.php\?prjid\=/)){

                            linkindex++;

                            var image = $(this).find('img');
                            var title = $(this).attr('title') ? $(this).attr('title').split("'").join('"') : '';
                            var preview = '';

                            if (image.attr('src')){
                                preview = image.attr('src');
                            } else {
                                preview = 'http://freejs.elisdn.ru/images/noimg.png';
                            }
                            if (linkindex == 1) firstlink = link.attr('href');

                            prevhref = link.attr('href');

                            gallery.push({
                                index: linkindex,
                                link: href,
                                preview: preview,
                                title: title
                            })

                        }
                        prevhref = href;
                    });

                    menu.add(new MenuElement({
                        id: 'showGallery',
                        content: '<p>Галерея<p>'
                    }));

                    $('#showGallery').live('click', function()
                    {
                        if (!isFrame()) {
                            var gall = $.tmpl(module.gallery_tpl, {
                                gallery:gallery,
                                firsturl:firstlink
                            });
                            var h = $('html');
                            h.html('');
                            h.append(gall);
                        }
                    });

                    function isFrame(){
                        return typeof parent.fj_Parent != 'undefined';
                    }

                };

                manager.add(profileGallery);

                /* #########################################################
                 * Оповещение о новых сообщениях
                 */

                var checkMessages = new Module();

                checkMessages.condition = function()
                {
                    return config.get('checkMessages', true);
                };

                checkMessages.action = function()
                {
                    var index=0;
                    var showed = false;

                    menu.add(new MenuElement({
                        id: 'showMessageButton',
                        content: '<p><a href="/contacts"></a><p>',
                        background: '#f63',
                        display: false
                    }));

                    function checkMessages(){
                        var labelTag = $('#b-bar__mess .b-tooltip__txt');
                        var labelText = labelTag ? labelTag.text() : '';
                        if (labelText){
                            var messTitle = [labelText, '****************'];
                            index = index ? 0 : 1;
                            $('title').html(messTitle[index]);
                            if (!showed) {
                                $('#showMessageButton a').text(labelText);
                                $('#showMessageButton').show();
                                showed = true;
                            }
                        } else {
                            if (showed) {
                                $('title').html('Удаленная работа (фриланс) на Free-lance.ru');
                                $('#showMessageButton').hide();
                                showed = false;
                            }
                        }

                        setTimeout(checkMessages, 400);
                    }

                    checkMessages();
                };


                manager.add(checkMessages);

                /* #########################################################
                 * Цитирование комментариев в блогах
                 */

                var citeBlogs = new Module();

                citeBlogs.condition = function()
                {
                    return location.href.match(/blogs/);
                };

                citeBlogs.action = function()
                {
                    $('.blog-one-cnt').each(function()
                    {
                        var msgbox = $(this).parent().parent().find('.blog-one-cnt');
                        var commlink = $(this).parent().find('a[href="javascript: void(0);"]');
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

                /* #########################################################
                 * Подсветка синтаксиса программного кода и маркировка комментариев в блогах
                 */

                var codeHighlight = new Module();

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
                        border-top:#c4e7ff 1px solid !important;\
                        background:#c4e7ff;\
                        background:-moz-linear-gradient(#e0f4ff, #c4e7ff);\
                        background:-webkit-linear-gradient(#e0f4ff, #c4e7ff);\
                        background:-o-linear-gradient(#e0f4ff, #c4e7ff);\
                        background:-ms-linear-gradient(#e0f4ff, #c4e7ff);\
                        width:954px !important;\
                        margin-top:-15px !important;\
                    }\
                    .fj_commlight>tbody>tr:first-child>td {\
                        padding-top:19px !important;\
                    }\
                ";

                codeHighlight.buttons_tpl = "\
                    <div class='fj_codeButtons' style='float:right;cursor:pointer;margin-top:-5px;'>\
                        {{if visualAnchorsButton}}<img class='fj_lightcomment' src='http://freejs.elisdn.ru/images/mark.gif' alt='Подсветка' title='Подсветка комментария' style='opacity:0.1'  />{{/if}}\
                        {{if highlightCodeButton}}<img class='fj_codehighlight' src='http://freejs.elisdn.ru/images/code.gif' alt='Подсветка' title='Подсветка кода' style='opacity:0.1'  />{{/if}}\
                    </div>\
                ";
                codeHighlight.action = function()
                {
                    var module = this;

                    this.registerCss(this.parser_css);

                    function parseCode(source, struct){
                        if (!source) {
                            return '';
                        } else {
                            if (struct) {
                                source = source.replace(/&gt;\s*&lt;/mg, '&gt;&lt;');
                                source = source.replace(/\{/g, '{\n');
                                source = source.replace(/\}/g, '\n}');
                                source = source.replace(/<\/?(b|i|p|ul|li|cut|h\d?|s|)>/g, '');
                            }

                            var lines = source.split(/<br\s?\/?>/);

                            var indent_nextline = 0;
                            var indent_curline = 0;

                            for (var i=0; i< lines.length; i++){
                                if (
                                    !lines[i].match(/(<|>)/) &&
                                        !lines[i].match(/&lt;((img|br|hr|input|meta|limk|param).*|[^\/]+\/)&gt;/)
                                    ){
                                    if (
                                        lines[i].match(/&lt;[\w\d]+.*[^\/]&gt;/) ||
                                            lines[i].match(/\{/)
                                        ){
                                        indent_nextline++;
                                    }
                                    if (
                                        lines[i].match(/&lt;\/[\w\d]+.*&gt;/) ||
                                            lines[i].match(/\}/)
                                        ){
                                        indent_curline--;
                                        indent_nextline--;
                                    }
                                    if (
                                        lines[i].match(/&lt;[\w\d]+.*[^\/]&gt;/) &&
                                            lines[i].match(/&lt;\/[\w\d]+.*&gt;/) &&
                                            !lines[i].match(/\{/) &&
                                            !lines[i].match(/\}/)
                                        ){
                                        indent_curline++;
                                    }
                                }
                                if (!lines[i].match(/(<|>)/)){

                                    lines[i] = lines[i].replace(/&lt;([\w]+)/g, '<tag>&lt;$1</tag>');
                                    lines[i] = lines[i].replace(/&lt;\/([\w]+)/g, '<tag>&lt;/$1</tag>');
                                    lines[i] = lines[i].replace(/&lt;\!/g, '<tag>&lt;!</tag>');
                                    lines[i] = lines[i].replace(/&gt;/g, '<tag>&gt;</tag>');
                                    lines[i] = lines[i].replace(/\/<tag>&gt;<\/tag>/g, '<tag>/&gt;</tag>');
                                    lines[i] = lines[i].replace(/<tag>&lt;!<\/tag>--/g, '<tag>&lt;!--</tag>');
                                    lines[i] = lines[i].replace(/--<tag>&gt;<\/tag>/g, '<tag>--&gt;</tag>');
                                    lines[i] = lines[i].replace(/"([^"]*)"/g, '<value>"$1"</value>');
                                    lines[i] = lines[i].replace(/'([^']+)'/g, '<value>\'$1\'</value>');
                                    lines[i] = lines[i].replace(/([\+\-\*\/=\!\.]+)?(\s*)([\w:\-_]+)(\s*)([\+\*\/=\.]+)/g, '$1$2<variable>$3</variable>$4$5');
                                    lines[i] = lines[i].replace(/([\w\d_\$]+)(\s*)\(/g, '<func>$1</func>$2(');
                                    lines[i] = lines[i].replace(/([\w\d_\$]+)(\s*)\{/g, '<func>$1</func>$2{');
                                    lines[i] = lines[i].replace(/\b(function|var|begin|end|break|next|for|foreach|if|theh|else|return)\b/g, '<construct>$1</construct>');
                                    lines[i] = lines[i].replace(/\b(self|this)\b/g, '<construct>$1</construct>');

                                    lines[i] = lines[i].replace(/<tag>/g, '<span class="tag">');
                                    lines[i] = lines[i].replace(/<value>/g, '<span class="value">');
                                    lines[i] = lines[i].replace(/<variable>/g, '<span class="variable">');
                                    lines[i] = lines[i].replace(/<func>/g, '<span class="function">');
                                    lines[i] = lines[i].replace(/<construct>/g, '<span class="construct">');
                                    lines[i] = lines[i].replace(/<\/(tag|value|variable|func|construct)>/g, '</span>');

                                }
                                if (struct) {
                                    lines[i] = str_repeat('&nbsp;', indent_curline * 8) + lines[i].trim();
                                    indent_curline = indent_nextline;
                                }
                            }

                            source = lines.join('<br />');
                            return source;
                        }
                    }

                    $('.bl_text').each(function()
                    {
                        var txt = $(this).find('.blog-one-cnt');
                        $(this).prepend($.tmpl(module.buttons_tpl, {
                            visualAnchorsButton:config.get('visualAnchors', true),
                            highlightCodeButton:config.get('highlightCode', true)
                        }));
                        var source = txt.html();
                        $(this).append("<div style='display:none' class='fj_commentStorage' title='code'>"+source+"</div>");
                        txt.html('<div class="fj_pre">'+parseCode(source, false)+'</pre>');
                    });

                    $('.fj_codeButtons img').fadeTo(1, 0.1);

                    $('.fj_codeButtons img').hover(
                        function(){
                            $(this).fadeTo(200, 1);
                        }, function(){
                            $(this).fadeTo(200, 0.1);
                        }
                    );

                    if (config.get('visualAnchors', true)) {

                        var lightlist = config.get('ligthing_comments');
                        if (lightlist) lightlist = lightlist.split(',');

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

                        $('.blog-one-cnt').each(function()
                        {
                            var comment = $(this).parent().parent().parent().parent();
                            var id = comment.find('.blog-one-cnt').attr('id');
                            if (isLighten(id)) {
                                comment.addClass('fj_commlight');
                            }
                        });

                        $('.fj_lightcomment').click(function()
                        {
                            var comment = $(this).parent().parent().parent().parent().parent();
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

                    if (config.get('highlightCode', true)) {
                        $('.fj_codehighlight').click(function()
                        {
                            var st = $(this).parent().parent().find('.fj_commentStorage');
                            var txt = $(this).parent().parent().find('.blog-one-cnt');
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

                /* #########################################################
                 * Скрытие кнопок соцсетей под открытым постом блога
                 */

                var hideShareInBlogs = new Module();

                hideShareInBlogs.condition = function()
                {
                    return location.href.match(/blogs\/[^\/]+\/\d+\/.*/);
                };

                hideShareInBlogs.action = function()
                {
                    $('.b-share').hide();
                    $('.footer .commline').prepend('<a class="showshare" href="#" title="FreeJS Share Toggler">Поделиться</a>&nbsp;|');
                    $('.showshare').click(function(){
                        $('.b-share').toggle();
                        return false;
                    });
                };

                manager.add(hideShareInBlogs);

                /* #########################################################
                 * Подсветка юзерпиков на странице посетителей статистики
                 */

                var highlightGuests = new Module();

                highlightGuests.condition = function()
                {
                    return config.get('highlightGuests', true) && location.href.match(/promotion\/\?bm\=1/);
                };

                highlightGuests.userpic_css = "\
                    span.fj_from_catalog,\
                    span.fj_from_search,\
                    span.fj_from_payeds,\
                    span.fj_from_blogs\
                    {\
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
                    span.fj_from_catalog {\
                        background: #63a545;\
                    }\
                    span.fj_from_search {\
                        background: #0099cc;\
                    }\
                    span.fj_from_payeds {\
                        background: #63a545;\
                    }\
                    span.fj_from_blogs {\
                        background: #ff6d1b;\
                    }\
                ";

                highlightGuests.action = function()
                {
                    var module = this;

                    $('table[style="table-layout:fixed"] a').each(function(){

                        module.registerCss(module.userpic_css);

                        var userpic = $(this);
                        var title = userpic.attr('title');

                        userpic.css({
                            'position':'relative',
                            'display':'block',
                            'width':'25px',
                            'height':'25px'
                        });
                        userpic.find('img').css('display', 'block');

                        if (title.match(/Из\sкаталога/)){
                            userpic.append('<span class="fj_from_catalog"></span>');
                        } else if (title.match(/Из\sпоиска/)){
                            userpic.append('<span class="fj_from_search"></span>');
                        } else if (title.match(/С\sплатных\sмест/)){
                            userpic.append('<span class="fj_from_payeds"></span>');
                        } else if (title.match(/Из\sблогов/)){
                            userpic.append('<span class="fj_from_blogs"></span>');
                        }
                    });
                };

                manager.add(highlightGuests);

                /* #########################################################
                 * Преобразование ленты проектов «Только для PRO» в «Не для PRO»
                 */

                var noPRO = new Module();

                noPRO.condition = function()
                {
                    return config.get('noPRO', true) && (
                        location.href.match(/\.ru\/?$/) ||
                            location.href.match(/\.ru\/\?kind\=\d+/) ||
                            location.href.match(/\.ru\/\?page\=\d+/)
                        );
                };

                noPRO.action = function()
                {
                    if (user.isLogged() && !user.isPRO()) {

                        $('.b-page__filter ul.b-menu__list li').eq(0).html('<a class="b-menu__link" href="/"><span class="b-menu__b1">Все проекты</span></a>');
                        $('.b-page__filter ul.b-menu__list li').eq(1).html('<a class="b-menu__link" href="/?kind=5"><span class="b-menu__b1">Не для <img class="b-menu__pro b-menu__pro_margbot_-1" src="/images/icons/f-pro.png" alt="" width="26" height="11"/></span></a>');

                        if (location.href.match(/\.ru\/\?kind\=5/)) {

                            $('#cat_comment').text('В данной категории выводятся все проекты не для PRO скриптом FreeJS');

                            $('.tabs:has(.pc-desc) ul.clear .tab2').addClass('active');

                            $('.b-post:has(.b-post__fpro)').hide();

                            $('.b-page__filter ul.b-menu__list li').eq(0).removeClass('b-menu__item_active');
                            $('.b-page__filter ul.b-menu__list li').eq(1).addClass('b-menu__item_active');

                        }
                    }
                };

                manager.add(noPRO);

                /* #########################################################
                 * Быстрые ссылки на разделы портфолио
                 */

                var portfolioAnchors = new Module();

                portfolioAnchors.condition = function()
                {
                    return config.get('portfolioAnchors', true) &&
                        location.href.match(/users/) &&
                        !location.href.match(/users\/[a-zA-Z0-9_\-]*\/.*?\//) &&
                        !location.href.match(/viewproj\.php/) &&
                        ($('.b-menu__item:first-child span span').text() == 'Портфолио' || $('.b-menu__item:first-child span span').text() == 'Услуги');
                };

                portfolioAnchors.anchor_css = "\
                    .fj_partLinks {\
                        padding:0 !important;\
                        margin:0 !important;\
                        clear:both;\
                    }\
                    .fj_partLinks a {\
                        text-decoration:none;\
                        color:#333 !important;\
                        border-bottom:#333 1px dotted;\
                        display:block;\
                        float:left;\
                        margin:0 20px 0 0 !important;\
                    }\
                ";

                portfolioAnchors.action = function()
                {
                    this.registerCss(this.anchor_css);

                    var links = $('<p class="fj_partLinks"></p>');

                    $('.stripe .stripe-l h4, td[style="width:45%;padding:8px 16px 8px 0px;vertical-align:top;"]').each(function()
                    {
                        var anchor = $(this).find('a:eq(0)').attr('name');

                        if (parseInt(anchor) > 0){
                            var fullTitle = $(this).find('a:eq(2) strong').text();

                            var title = fullTitle.split('/ ').pop();

                            var link = $('<a></a>');
                            link.attr('href', '#' + anchor);
                            link.attr('title', fullTitle.split('"').join(''));
                            link.data('elem', anchor);
                            link.text(title);

                            links.append(link);
                        }

                    });

                    $('.blog-tabs .prtfl').append(links);

                };

                manager.add(portfolioAnchors);

                manager.execAll();
            }
        };

        var FreeJS = new Application(typeof fj_config != 'undefined' ? fj_config : {});
        FreeJS.run();

    })(jQuery);

//######################## <USERSCRIPT CONTENT> #######################

}