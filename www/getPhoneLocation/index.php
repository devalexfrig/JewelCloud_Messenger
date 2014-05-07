<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Get Location</title> 
      <meta name="viewport" content="width=device-width, initial-scale=1">   
      <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0-alpha.1/jquery.mobile-1.2.0-alpha.1.min.css" />
      <link rel="stylesheet" href="css/style.css" media="all"> 
      <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
      <script src="http://code.jquery.com/mobile/1.2.0-alpha.1/jquery.mobile-1.2.0-alpha.1.min.js"></script>
      <script type="text/javascript" src="js/functions.js"></script>
 
</head>
<body>
<div data-role="page" id="page0">

      <!-- <div data-role="header">
            <p>Header<p>
      </div> -->

      <div data-role="content">     
 			<p class="loading" style="margin:auto;">Loading</p> 
 			<p id="find" style="margin:auto;padding-bottom:60px;">Found You...</p>
            <div class="div" style="margin:auto;"></div> 
    		<input type="hidden" id="findMe" value="" />
            <img id="map" src="" width="90%"/> 
            
      <!-- <div data-role="footer">
                  <h4>Footer</h4>
      </div> -->
</div>  
  
</body> 
</html>
