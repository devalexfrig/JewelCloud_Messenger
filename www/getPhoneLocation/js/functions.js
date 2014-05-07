
AJAX = {};
			
	AJAX.saveImage = function(newLat,newLng) {
    	var latSend = newLat;
		var lngSend = newLng;
    	var ajaxOptions = {
    		data: "lat=" + latSend + "&lng=" + lngSend,
    		dataType: 'html',
    		error: function(response) {
        		// alert('ajax failed');
    		},
    		success: function(response) {
       			// alert("ajax " + latSend + " " + lngSend + "the response is " + response);
       			// $('.div').append(response);
      			$('p.loading').fadeOut(1500);
       			setTimeout(function() {
      				$('p#find').fadeIn(3500);
				}, 2000);
	   			setTimeout(function() {
       				$('.div').append(response);
       				$('img#googleMap').show();
				}, 2000);
    		},
    		type: 'post',
    		url: 'saveImage.php'
    		};
    		$.ajax(ajaxOptions);
    	};
			  
		$(document).ready(function() {
			
			$('img').hide();
			
      		navigator.geolocation.getCurrentPosition(function (pos) {
      			var lat = pos.coords.latitude;
      			var lng = pos.coords.longitude;
      			
      			if (lat == null) { 
        			alert("GPS not activated");
      			} 
      			else{
        			//alert(lat + " "  + lng);
					newLat = lat.toString();  
					newLng = lng.toString(); 
					
					//DISPLAY GOOGLE MAP ON SCREEN
					
					//$('img#map').attr('src', 'http://maps.googleapis.com/maps/api/staticmap?center=' + newLat + ',' + newLng + '&markers=color:red%7Ccolor:red%7Clabel:C%7C' + newLat + ',' + newLng + '&zoom=11&size=200x200&sensor=false');
					//$('img').show();     
					AJAX.saveImage(newLat,newLng);
      				}        
   				}); 
 		});     
  