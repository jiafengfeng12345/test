$(".memo").keyup(function(){
	$(".lastLength").html((100 - $(".memo").val().length));
	if($(".memo").val().length == 0){
		$(".submit").removeClass("color-6BBB55");
		$(".submit").addClass("color-F7DFDF");
	}else{
		$(".submit").removeClass("color-F7DFDF");
		$(".submit").addClass("color-6BBB55");
	}
});

$(".getScan").click(function() {
	mui.openWindow({
		url: '../scan.html',
		id: 'scan.html',
		extras: {
			backQR: true,
		},
	});
});

function showQR(QR) {
	$(".scantext").val(QR);
	if(QR == null || QR == ""){
		$(".submit").removeClass("color-6BBB55");
		$(".submit").addClass("color-F7DFDF");
	}else{
		$(".submit").removeClass("color-F7DFDF");
		$(".submit").addClass("color-6BBB55");
	}
};

$(".add-image").click(function() {
	var cmr = plus.camera.getCamera();
	cmr.captureImage(function(p) {
		plus.io.resolveLocalFileSystemURL(p, function(entry) {
			$(".shoot-image").html("<img src = '" + entry.toLocalURL() + "' />");
			var task = plus.uploader.createUpload("http://192.168.1.226:8080/bikex/errorReport/save2", 
				{ method:"POST",blocksize:204800,priority:100 },
				function ( t, status ) {
					// 上传完成
					if ( status == 200 ) { 
						$("#img").val(IMGIP+JSON.parse(t.responseText).src);
					} else {
						
					}
				}
			);
			task.addFile( p, {key:"file"} );
			task.start();
		});
	});
});