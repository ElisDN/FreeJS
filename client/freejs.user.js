// ==UserScript==
// @name        FreeFs
// @description free-lance.ru interface patch client
// @namespace   http://freejs.elisdn.ru/
// @include     http://www.free-lance.ru/
// @include     http://www.free-lance.ru/*
// ==/UserScript

/*
 * FreeJS (free-lance.ru interface patch)
 * Author: Eliseev Dmitry Nikolatvich
 * Site: http://freejs.elisdn.ru/
 * Accaunt: http://free-lance.ru/users/ElisDN
 * Email: nukak@bk.ru
 *
 */


//####################### <Personal settings BEGIN> ######################

var fj_cfgscr = "\
var fj_config = Array();\
fj_config['clientVersion'] = 1.6; \
fj_config['templates'] = Array(\
	\"Готов выполнить за шоколадку.\",\
	\"Email: nukak@bk.ru\\nICQ: 386-40-2009\",\
	\"Обращайтесь.\\nC уважением, Дмитрий!\"\
);\
fj_config['mybarcontent'] = \"<a target=_blank href=http://weather.rambler.ru>Погода</a> | <a target=_blank href=http://win.mail.ru/cgi-bin/start>Почта</a> | <a target=_blank href=http://bash.org.ru>Башорг</a>\";\
fj_config['noreadedbg'] = '#FFBBAA';\
fj_config['anchorsbg'] = '#FFDDAA';\
";

//######################## <Personal settings END> #######################

function fj_loadFreeJS(){

    var fj_cfg = document.createElement('script');
    fj_cfg.type = 'text/javascript';
    fj_cfg.appendChild(document.createTextNode(fj_cfgscr));
    document.getElementsByTagName('head')[0].appendChild(fj_cfg);
    var fj_script = document.createElement('script');
    fj_script.src = 'http://freejs.elisdn.ru/js/freejs.js';
    fj_script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(fj_script);
    
}

if (location.href.match(/^https?:\/\/www.free\-lance\.ru/)) fj_loadFreeJS();