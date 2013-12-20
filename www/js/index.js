
document.addEventListener('deviceready', this.onDeviceReady, false);
function onDeviceReady() {
	$(".h_content").hide();

	
	//device info
	var element = document.getElementById('deviceinfo');
	element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
	'Device Cordova: '  + device.cordova  + '<br />' +
	'Device Platform: ' + device.platform + '<br />' +
	'Device UUID: '     + device.uuid     + '<br />' +
	'Device Model: '    + device.model    + '<br />' +
	'Device Version: '  + device.version  + '<br />';


	window.localStorage.setItem("app_on", "yes");
	// Make your jQuery Mobile framework configuration changes here!
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.loading("show");
	$.ajax({
		url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=all&date=2013-12-19&deviceready='+device.uuid,
		//url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=h&h='+zodie_id+'&date=2013-12-17&device='+device.uuid,
		type: 'GET',
		dataType: 'text',
		error : function (){ alert("Connection error") },
		success: function (data) {
			$.mobile.loading("hide");
			window.localStorage.setItem("horoscope", data);
		}
	});
	$.mobile.loading("hide");

	//
	//
	//	$(document).on( "tap", "li", function() {
	//		//hide other h content
	//		//$(".h_content").hide();
	//		//show loader
	//		$.mobile.loading("show");
	//
	//		var zodie_id = $(this).find("h3").attr("z");
	//		//$("#deviceinfo").html("click li"+ zodie_id);
	//
	//		//verifica continut zodie
	//		container_horoscope = $(this).find(".h_content");
	//		text_horoscope = $(this).find(".h_content").html();
	//		if (text_horoscope.length==0) {
	//			//get content
	//			$.ajax({
	//				url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=h&h='+zodie_id+'&date=2013-12-17&device='+device.uuid,
	//				type: 'GET',
	//				dataType: 'text',
	//				error : function (){ document.title='error'; },
	//				success: function (data) {
	//					console.log(data);
	//					container_horoscope.html(data);
	//				}
	//			});
	//		}
	//		//$(this).find("a").toggleClass("ui-icon-carat-r ui-icon-carat-d");
	//
	//
	//		//display content
	//		//$(this).find(".h_content").show();
	//		$.ajax({
	//			url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=h&h='+zodie_id+'&date=2013-12-17&device='+device.uuid,
	//			type: 'GET',
	//			dataType: 'text',
	//			error : function (){ document.title='error'; },
	//			success: function (data) {
	//				window.localStorage.setItem("horoscope", data);
	//				//console.log(data);
	//				//container_horoscope.html(data);
	//			}
	//		});
	//		$.mobile.loading("hide");
	//	})



	//$.get("")



	//
	//	$.ajax({
	//		url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=all&date=&device='+device.uuid,
	//		type: 'GET',
	//		dataType: 'text',
	//		error : function (){ document.title='error'; },
	//		success: function (data) {
	//			$("#deviceinfo2").html(data);
	//		}
	//	});
	//


}

$( document ).bind( "mobileinit", function() {
	window.localStorage.setItem("app_on", "yes");
	// Make your jQuery Mobile framework configuration changes here!
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.loading("show");
	$.ajax({
		url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=all&date=2013-12-19&mobileinit='+device.uuid,
		//url: 'http://213.233.121.12/horoscope-mobile-app/index.php?request=h&h='+zodie_id+'&date=2013-12-17&device='+device.uuid,
		type: 'GET',
		dataType: 'text',
		error : function (){ alert("Connection error") },
		success: function (data) {
			$.mobile.loading("hide");
			window.localStorage.setItem("horoscope", data);
		}
	});
	$.mobile.loading("hide");
});