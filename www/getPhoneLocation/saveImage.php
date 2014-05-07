<?php

//RECEIVE LATITUDE AND LONGITUDE FROM AJAX POST

$latitude = $_POST['lat'];
$longitude = $_POST['lng'];

//GET USER'S IP ADDRESS

$ip = $_SERVER['REMOTE_ADDR'];

//DISPLAYS LATITUDE AND LONGITUDE IF RESPONSE IS APPENDED TO AJAX SUCCESS

//print "the php file shows " . $latitude . "as latitude and " . $longitude . "as longitude";

//STORING GOOGLE MAP API URL IN VARIABLE WITH CURRENT LOCATION IN PLACE

$src = "http://maps.googleapis.com/maps/api/staticmap?center=".$latitude.",".$longitude."&markers=color:red%7Ccolor:red%7Clabel:C%7C".$latitude.",".$longitude."&zoom=11&size=200x200&sensor=false";

//DISPLAY CURRENT GOOGLE MAP ON PAGE IF RESPONSE IS APPENDED TO AJAX SUCCESS

//print "<img id='googleMap' src='" . $src . "' />";

//CURL GOOGLE MAPS IMAGE

$chTwo = curl_init();
curl_setopt($chTwo, CURLOPT_URL, $src);
curl_setopt($chTwo, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chTwo, CURLOPT_FOLLOWLOCATION, true);
$output = curl_exec($chTwo); 
curl_close($chTwo);

//COMBINE LATITUDE AND LONGITUDE INTO VARIABLE
 	
$LatLng = $latitude.",".$longitude;

//CURL WEATHER CONDITIONS API

$chThree = curl_init(); 
$urlThree = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=".$LatLng."&format=json&num_of_days=5&date=today&cc=yes&key=sxe7um5nn8m4tdjdeymphshv";
curl_setopt($chThree, CURLOPT_HEADER, 0);
curl_setopt($chThree, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($chThree, CURLOPT_URL, $urlThree);
$curlResponseThree = curl_exec($chThree);
curl_close($chThree);

//JSON DECODE WEATHER CONDITIONS API CURL REQUEST

$weather = json_decode($curlResponseThree);

//STORE CURRENT TEMP NUMBER AND CURRENT WEATHER IMAGE PATH INTO A VARIABLE

$currentTemp = $weather->data->current_condition[0]->temp_F;
$currentWeather = $weather->data->weather[0]->weatherIconUrl[0]->value; 

//CURL CURRENT WEATHER CONDITIONS IMAGE

$chFour = curl_init(); 
$urlFour = $currentWeather;
curl_setopt($chFour, CURLOPT_HEADER, 0);
curl_setopt($chFour, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($chFour, CURLOPT_URL, $urlFour);
$curlResponseFour = curl_exec($chFour);
curl_close($chFour);

//UPLOAD CURRENT WEATHER CONDITIONS IMAGE WITH CURRENT TEMP

$filename2="uploads/weather/weather";//Presuming '$url' doesn't have php extension already 
$fn2=$filename2.'.png';
$i2=1;  
while(file_exists($fn2)){
   $fn2=$filename2.'-'.$i2.'-currentTemp-'.$currentTemp.'.png'; 
   $i2++;
}
$fh2=fopen($fn2,'w');
fwrite($fh2, $curlResponseFour);
fclose($fh2);
 
//GET STREET VIEW

$streetViewUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=".$LatLng."&pitch=-0.76&sensor=false"; 

//CURL STREET VIEW IMAGE

$chFive = curl_init(); 
$urlFive = $streetViewUrl;
curl_setopt($chFive, CURLOPT_HEADER, 0);
curl_setopt($chFive, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($chFive, CURLOPT_URL, $urlFive);
$curlResponseFive = curl_exec($chFive);
curl_close($chFive);

//UPLOAD STREET IMAGE

$filename3="uploads/streetview/streetview";//Presuming '$url' doesn't have php extension already 
$fn3=$filename3.'.png';
$i3=1;  
while(file_exists($fn3)){
   $fn3=$filename3.'-'.$i3.'.png';
   $i3++;
}
$fh3=fopen($fn3,'w');
fwrite($fh3, $curlResponseFive);
fclose($fh3);

//STORING GOOGLE ADDRESS API URL IN VARIABLE WITH CURRENT LOCATION IN PLACE

$streetAddressUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng=".$LatLng."&sensor=true";

$chSix = curl_init(); 
$urlSix = $streetAddressUrl;
curl_setopt($chSix, CURLOPT_HEADER, 0);
curl_setopt($chSix, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($chSix, CURLOPT_URL, $urlSix);
$curlResponseSix = curl_exec($chSix);
curl_close($chSix);

//JSON DECODE GOOGLE ADDRESS API CURL REQUEST

$address = json_decode($curlResponseSix);
 
//STORE CURRENT ADDRESS INTO A VARIABLE

$currentAddress = $address->results[0]->formatted_address;

///UPLOAD GOOGLE MAP IMAGE WITH USER IP AND ADDRESS IN FILENAME

$filename="uploads/googlemap/googlemap";//Presuming '$url' doesn't have php extension already 
$fn=$filename.'.png';
$i=1;  
while(file_exists($fn)){
   $fn=$filename.'-'.$i.'-ip-'.$ip.'address-'.$currentAddress.'.png';
   $i++;
}
$fh=fopen($fn,'w'); 
fwrite($fh,$output);
fclose($fh); 

print "<img id='googleMap' width='95%' src='" . $streetViewUrl . "' />"; 
print "<p style='margin-top:60px;' id='address'>".$currentAddress."</p>";
?>          