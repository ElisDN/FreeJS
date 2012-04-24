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

//####################### <Personal settings BEGIN> ######################

var fj_config = {
    templates:
        "Готов выполнить за шоколадку.||" +
        "Email: nukak@bk.ru\\nICQ: 386-40-2009||" +
        "Обращайтесь.\\nC уважением, Дмитрий!"
    ,
    mybarcontent: "<a target=_blank href=http://weather.rambler.ru>Погода</a> | <a target=_blank href=http://win.mail.ru/cgi-bin/start>Почта</a> | <a target=_blank href=http://bash.org.ru>Башорг</a>"
};

//######################## <Personal settings END> #######################

var FreeJS = function(config){

    var registerScriptFile = function (src){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('charset', 'UTF-8');
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    var registerScript = function (code){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('charset', 'UTF-8');
        script.innerHTML = code;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    var params = 'var fj_config = {';
    for (var key in config){
        params += key + ': "' + config[key] + '", ';
    }
    params += 'clientVersion: 2.0};';
    registerScript(params);

    registerScriptFile('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    registerScriptFile('http://freejs.elisdn.ru/js/dev/freejs.js');
};

if (
    location.href.match(/^https?:\/\/www.free\-lance\.ru/) &&
    !location.href.match(/iframe/) &&
    !location.href.match(/upload/) &&
    !location.href.match(/inframe/) &&
    !location.href.match(/share\.php/) &&
    !location.href.match(/share\.php/)
){
    FreeJS(fj_config);
}