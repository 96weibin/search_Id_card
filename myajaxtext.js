(function() {
    var myajax = window.myajax = {};
    // myajax.author = 'weibin';
    // myajax.version = '1.0.0';

    myajax.queryStringFn = function(json) {
        var arr = []; 
        for(var pro in json) {
            arr.push(pro + '=' + encodeURIComponent(json[pro]));
        }
        return arr.join('&');
    }
    myajax.xhrFn = function() {
        if(window.XMLHttpRequest) {
            return xhr = new XMLHttpRequest();
        }else{
            return xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
    }
    myajax.statechange = function(){
        if(xhr.readuState == xhr.DONE) {
            if(xhr.status >= 200 && xhr.status < 300 ||xhr.status == 304){
                calback && calback(null, xhr.responseText);
            }else{
                calback && calback(new Error('没有找到请求文件'), undefined)
            }
        }
    }
    myajax.get = function(URL, queryJSON, calback) {
        var xhr = myajax.xhrFn();
        var queryString = myajax.queryStringFn(queryJSON);
        xhr.open('GET' + URL + '?' + queryString, false);
        xhr.send(null);
    }
    myajax.post = function() {
        var xhr = myajax.xhrFn();
        var queryString = myajax.queryStringFn(queryString);
        xhr.open('POST', URL, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        send(queryString);
    }

}());