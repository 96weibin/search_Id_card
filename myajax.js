(function() {
    var myajax = window.myajax = {};
    myajax.author = 'weibin';
    myajax.version = '1.0.2';

    myajax.get = function(URL, queryJSON, calback){

        if(window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        }else{
            var xhr = new Artic.XObject('Microsoft_XMLHTTP');
        }
        xhr.onreadystatechange = function() {
            if(xhr.readyState == xhr.DONE){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    calback &&　calback(null, xhr.responseText);
                }else{
                    calback && calback(new Error('没有找到'), null);
                }
            }
        }
        var queryString = myajax.queryStringFn(queryJSON);
        console.log(queryString);
        xhr.open('GET' , URL + '?' + queryString, true);
        xhr.send(null);        
    }
    myajax.post = function(URL, queryJSON, calback){
        if(window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        }else{
            var xhr = new XMLHttpRequest();
        }
        xhr.onreadystatechange = function() {
            if(xhr.readyState == xhr.DONE) {
                if(xhr.status >= 200 &&　xhr.status < 300 || xhr.status == 304) {
                    calback && calback(null, xhr.responseText);
                }else{
                    calback && calback(new Error('没找到'), null);
                }
            }
            var queryString = queryStringFn(queryJSON);
            xhr.open('POST', URL,true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(queryString);
        }
    }
    myajax.queryStringFn = function(queryJSON) {
        var arr = [];
        for(var pro in queryJSON) {
            arr.push(pro + '=' + encodeURIComponent(queryJSON[pro]) );
        }
        // console.log(arr);
        return arr.join('&');
    }
}())