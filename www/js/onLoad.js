$(document).ready(function(){
	
	//Auto Login for Dev
	$('input#username').val("chris");
	$('input#password').val("eastbrook");
	
	//Login
	
	$('#loginSubmit').click(function(user, password){
		user = $('input#username').val();
		password = $('input#password').val();
		AJAX.login(user, password);
	});
	
		//Load Store Locator
	
	// $('a#storeLocator').click(function(){
		// AJAX.storeLocator();
	// }); 
 

	//Load Dashboard
	
	//AJAX.dashboard(); 
	
	//Swiping Functions
	
	//Swipe Left
	
	 $('div.ui-page').live("swipeleft", function(){
    var nextpage = $(this).next('div[data-role="page"]');
    // swipe using id of next page if exists
    if (nextpage.length > 0) {
    $.mobile.changePage(nextpage, 'slide');
    }
    });
    
    //Swipe Right
    
    $('div.ui-page').live("swiperight", function(){
    var prevpage = $(this).prev('div[data-role="page"]');
    // swipe using id of next page if exists
    if (prevpage.length > 0) {
    $.mobile.changePage(prevpage, {transition:"slide", reverse:true});
    }
    });
    
    
    //Sidebar Navigation
    
    $('img.menuButton').click(function(){
    	navWidth = $('.sidebar').width();
    	if (navWidth!=0){
    		$('.sidebar').animate({width:'0px'});
    		$('.sidebarList').hide();
    	}
    	else{
    		$('.sidebar').animate({width:'300px'});
    		$('.sidebarList').show();
    	}
    });   
    
    $('.sidebar').live("swipeleft", function(){
    	$(this).animate({width:'0px'});
    	$('.sidebarList').hide();
    });
    
    //Home Sidebar
    
    homeSidebar = '<a id="dashboard" href="#"><li>Dashboard</li></a><a id="contacts" href="#"><li>Contacts</li></a><a id="message" href="#"><li>Msg</li></a><li></li><li></li><li></li><li></li><li></li><li></li><li></li>';
    
    //Dashboard Sidebar
    
    dashboardSidebar = '<a id="topDesigners" href="#"><li>Top Designers</li></a> <a id="newCustomers" href="#"><li>New Customers</li></a><a id="newArrivals" href="#"><li>New Arrivals</li></a><a id="appointments" href="#"><li>Appointments</li></a><a id="topFavorites" href="#"><li>Top Favorites</li></a><li></li><li></li><li></li><li></li><li></li>';  						
    
    //Go to contacts and slide nav bar
    
    $('a#contacts').bind('touchstart',function() {
    	$('.sidebar').animate({width:'0px'});
    	$('.sidebarList').hide();
		AJAX.viewContacts(); 
	});  
	
	//Bottom Navigation
	
	//Go to Dashboard View
		
		$('a#dashboard').on('click', function(e, contact){ 
		e.preventDefault();     
		AJAX.dashboard(); 
		});    
		
	 
	//Content adjustment per device
	
	//$('.content').css('margin-left', contentMargin);  

	//Content After Ajax Call
	
	$(document).ajaxComplete(function(event, XMLHttpRequest, ajaxOptions, contact, message) {
		
		//Go to send message screen
  		$('a.contact').on('click', function(e, contact){ 
		e.preventDefault();
		contact = $(this).html();     
		AJAX.loadContact(contact); 
		}); 
		
		//Or click on row for contact
		// $('tr.contactsResults').on('click', function(e, contact){ 
		// e.preventDefault();
		// contact = $(this).find('a.contact').html();     
		// AJAX.loadContact(contact);   
		// });    
		
		//Color code each row for dashboard view
    
   		$('table#dashboardView tr:even').css('background','#d0d2d2'); 
    	$('table#dashboardView tr:odd').css('background','#f0f0f1');  
    	$('table#dashboardView tr:eq(0)').css('background','#dcd8d4');  
		
		//Send message to database
		$('span.sendButton').on('click', function(message, contact, user){
			contact = $('a.contact').html();  
			message = $('input.messageInput').val();
			AJAX.sendMessage(message, contact, user);    
		}); 
		
		//When home button is added to header
		
		$('img.homeButton').click(function(e){
			e.preventDefault();
			user = $('input#username').val();
			password = $('input#password').val();
			AJAX.login(user, password);   
			//Reconfigure Sidebar
          	$('ul.sidebarList').empty();
          	$('ul.sidebarList').append(homeSidebar);
          	
		});  
		
		//Go to Dashboard View
		
		$('a#dashboard').on('click', function(e, contact){ 
		e.preventDefault();     
		AJAX.dashboard(); 
		});  
		 
		$('span#dashboardSelect').on('click', function(e, contact){ 
		e.preventDefault();     
		AJAX.dashboard(); 
		$('span#dashboardSelect').css('color', '#6a6b6d');
		$('span#requestSelect').css('color', '#fff'); 
		});      
		
		$('span#requestSelect').on('click', function(e, contact){ 
		e.preventDefault();     
		AJAX.dashboardRequest(); 
		$('span#dashboardSelect').css('color', '#fff');
		$('span#requestSelect').css('color', '#6a6b6d');
		});    
 
		//Go to Contacts View
	
		$('a#contacts').on('click', function() {
			AJAX.viewContacts(); 
			$('.sidebar').animate({width:'0px'});
    		$('.sidebarList').hide();
    		$('img.settingsButton').attr('src', 'img/home_icon.png'); 
    		$('img.settingsButton').addClass('homeButton');
			// AJAX.viewContacts();
		});
		
		$('p#contactsListAll').on('click', function() {
			AJAX.viewContacts();
		});
		
		//Contacts Search
		
		$('input#contactsSearch').change(function() {
			AJAX.search();
		}); 
		
		//Log Out
	
		$('a#logout').click(function(){
			AJAX.logout();
		});
		
		//Padding on send message screen for last message
		$('.userMessage:last').css('margin-bottom', '70px');
		
		//Clear input text on message send focus
	
		$('input.messageInput').one('focus', function(){
			$('input.messageInput').val('');
		});
		
		$('input.messageInput').focus(function(){
			$('.staticInputBar').css('position', 'absolute'); 
			$('body').addClass('fixfixed');
		});
		
		$('input.messageInput').blur(function(){
			$('.staticInputBar').css('position', 'fixed'); 
			$('body').removeClass('fixfixed');
		});  
		
		 $('html').css('overflow', 'scroll');
		 
		 //View Contacts Screen
		 
		 $('table.contactsNav tr td').on('touchstart', function(){
		 	contactLetter = $(this).html();
		 	//$('#responsecontact').append(character);
		 	$('tr.contactsResults a.contact').each(function(e){
		 		// $(string).css('color', 'black');
		 		fullContact = $(this).html();
		 		character = $(this).html().charAt(0);
		 		uppChar = character.toUpperCase();
           		var string = "tr#row" + uppChar;
           		$(string).css('color', 'black');
        		if (contactLetter == character){
           			//alert('contact letter is ' + contactLetter + ' character is ' + character); 
           			// uppChar = character.toUpperCase();
           			// var string = "tr#row" + uppChar;
           			//alert(string); 
           			var x=$(string).offset(); 
           			//var x = $(this:first-child):contains(character)').offset();
    				var top = x.top - 100;
    				$(window).scrollTop(top);   
           			$(string).css('color', 'yellow');   
        		}  
        		else{
        			//alert('not' + character);
        		}
    		}); 
		});
		
		$('input#refresh').click(function(){
			contact = $('input#contact').val();
			AJAX.refreshMessages(contact);
			$('html').css('overflow', 'scroll');
        	height = $('.contacts').height();
			$(window).scrollTop(height); 
		});
		 
	});   // Close on AJAX load
	
	//Settings dropdown
	
	$('img.settingsButton').click(function(){
    	settingsWidth = $('.settingsDropdown').height(); 
    	if (settingsWidth!=0){
    		$('.settingsDropdown').animate({height: '0px'}); 
			$('.settingsDropdown').css('paddingBottom', '0px');
			$('.settingsDropdown').hide();
    	}
    	else{ 
    		$('.settingsDropdown').animate({height: '100px'}); 
    		$('.settingsDropdown').css('paddingBottom', '10px');
    		$('.settingsDropdown').show(); 
    	}
    });  
	
	//Disable zoom on input select
	$('input').textinput({ preventFocusZoom: true });
		
	//Load AJAX spinning wheel on load
	$('#loadingDiv').hide().ajaxStart( function() {
		$(this).show();  // show Loading Div
		} ).ajaxStop ( function(){
		$(this).hide(); // hide loading div
	});  
	
    
});
 