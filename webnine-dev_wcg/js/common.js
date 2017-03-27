/**
 * Created by Administrator on 2017/3/27.
 */
var baseurl="http://101.201.140.178:8080/"
function _postparam(url,data,callback,failcall){
    $.ajax({
        url: baseurl+url,
        type: 'POST',
        data:data,
        async: true,
        success: function (data) {
            callback(data);
        },
        error: function (xhr) {
            failcall(xhr);
        }
    });
}
function _getparam(url,data,callback,failcall){
    $.ajax({
        url: baseurl+url,
        type: 'GET',
        data:data,
        async: true,
        success: function (data) {
            callback(data);
        },
        error: function (xhr) {
            failcall(xhr);
        }
    });
}
