IP="http://zhqx.greenway-tech.com:8080";
IMGIP="http://121.43.32.226:8081";
//IP="http://192.168.1.226:8080/bikex";
//IMGIP="http://192.168.1.226:8081";

var coordinate = {};
var UrlTool = {};
UrlTool.getData = function(url){
	var dataStrs = url.split("?imData=")[1];
	dataStrs = unescape(dataStrs);
	var re = $.parseJSON(dataStrs); 
	return re;
}
UrlTool.setData = function(url, jsonData){
	var dataStr = JSON.stringify(jsonData);
	dataStr = escape(dataStr);
	url += ("?imData=" + dataStr);
	return url;
}
function showOurToast(mag,time){
	var toast = $("body #toast");
	
}

var Toast = {};
Toast.show = function(str, fIn, fOut) {
	var toast = $("#toast");
	if(toast.length == 0){
		$("body").append("<div class='toast' id='toast'></div>");
	}
	var openStatus = $("#toast").css("display") == "none" ? false : true;
	if (openStatus) {
		$("#toast").stop(true);
	}
	if (!fIn)
		fIn = 600;
	if (!fOut)
		fOut = 1200;
	$("#toast").html(str).fadeIn(fIn).fadeOut(fOut);
};

var DeviceTool = {};
DeviceTool.getDeviceID = function(){// 该方法用于获取推送的客户设备码, 需要在plusReady 之后调用
	var info = plus.push.getClientInfo();
	return info.clientid;
}