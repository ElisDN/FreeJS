// ==UserScript==
// @name           FreeFs
// @description    free-lance.ru interface patch
// @namespace      http://freejs.elisdn.ru
// @author         Eliseev Dmitry [ElisDN]
// @copyright      2010+, ElisDN (http://www.elisdn.ru)
// @licence        Summary: Free for personal non-commercial use;
// @website        http://freejs.elisdn.ru
// @include        http://www.free-lance.ru/*
// @exclude        http://www.free-lance.ru/iframe*
// @exclude        http://www.free-lance.ru/upload*
// @exclude        http://www.free-lance.ru/share.php*
// ==/UserScript==

(function(window) {

//####################### <Personal settings BEGIN> ######################

    var fj_config = {
        answerTemplates:
            "Готов выполнить за шоколадку.||" +
            "Email: mail@elisdn.ru||" +
            "Обращайтесь.|C уважением, Дмитрий!"
        ,
        barContent: "<a target='_blank' href='http://weather.rambler.ru'>Погода</a> | <a target='_blank' href='http://win.mail.ru/cgi-bin/start'>Почта</a> | <a target='_blank' href='http://bash.org.ru'>Башорг</a>"
    };

//######################## <Personal settings END> #######################

    var wind;

    if (typeof unsafeWindow != 'undefined'){
        wind = unsafeWindow;
    } else {
        wind = window;
    }

    if (wind.self != wind.top) return;

    if (!(
        location.href.match(/^https?:\/\/www.free\-lance\.ru/) &&
        !location.href.match(/inframe/)
    )) return;

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
        params += 'clientVersion: "2.0"};';
        registerScript(params);

        registerScriptFile('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
        registerScriptFile('http://freejs.elisdn.ru/js/v2/freejs.js');
    };

    FreeJS(fj_config);

})(window);