AJAX = {};	
	
	AJAX.login = function(user, password) {
		$.ajax({
			data: "user=" + user + "&password=" + password,  
			dataType: 'html', 
			type: 'post',  
			url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/db_connect_login.php',
			error: function(response) {
				alert(response);
			},
			success: function(response) { 
				if (response==1){
					//AJAX.dashboard();
					AJAX.home();
					$('div[data-role="page"]').css('background-image', 'none');
					$(document).scrollTop();
					if ($('p.logout').length != 0){ 
						 
					}
					else{
						// $('div[data-role="footer"]').append('<p class="footerIconNext logout"><a href="#" id="logout">Log Out</a></p>');
					}
				}
				if (response==0){ 
					alert("Log in failed");
				}  
			} 	   
		}); 
	}
	
	AJAX.logout = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('Cannot connect to database');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
          	window.location.href = './index.html'; 
          	$('p.logout').remove(); 
          	$('div[data-role="footer"]').append('<p class="footerIconNext login"><a href="" id="login">Login</a></p>'); 
          	$(document).scrollTop();
          	if ($('table.contactsNav')){
          			$('table.contactsNav').remove();
          		}
          	// $('.content').empty();
          	// $('.content').append(data); 
          },  
          type: 'get',   
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/db_connect_logout.php'
        }); 
      }
      
	AJAX.dbConnect = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('Cannot connect to database');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
          	
          },  
          type: 'get',   
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/db_connect_messages.php'
        }); 
      }
      
	AJAX.checkDevice = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('ajax error');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
            if (data==1){
            	contentMargin = 110 + "px";
            }
            if (data==0){
            	contentMargin = 120 + "px"; 
            } 
          }, 
          type: 'get', 
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/checkDevice.php'
        }); 
      }
      
      AJAX.viewContacts = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('ajax error');
            console.log('error while getting: ' + data);
          },
          success: function(data) {  
          	if (data!=0){
          		// $('.sidebar').animate({width:'0px'});
    			// $('.sidebarList').hide();
    			// $('img.settingsButton').attr('src', 'img/home_icon.png'); 
    			// $('img.settingsButton').addClass('homeButton');
          		$('.content').empty();
          		$('.content').append(data);
          		$(document).scrollTop();
          	} 
          	if (data==0){
          		alert('Not logged in');
			}  
		  },   
          type: 'get',  
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/viewContacts.php'
       });  
      }
      
      AJAX.search = function() {
        keyword = $('input#contactsSearch').val();        
		$.ajax({
          data: "keyword=" + keyword,  
          dataType: 'html',
          type: 'post',
          error: function(data) { 
            alert('ajax error'); 
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
            $('tr.contactsResults').remove();
            $('tr.letterHeader').remove(); 
            $('table#dashboardView tbody').append(data); 
            $(document).scrollTop();
          },   
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/searchContacts.php'
       });  
      } 
      
      AJAX.dashboard = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('ajax error');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
          	if (data!=0){
          		$('.sidebar').animate({width:'0px'});
    			$('.sidebarList').hide();
    			$('img.settingsButton').attr('src', 'img/home_icon.png'); 
    			$('img.settingsButton').addClass('homeButton'); 
          		$('.content').empty();
          		$('.content').append(data); 
          		$(document).scrollTop();
          		//Reconfigure Sidebar
          		$('ul.sidebarList').empty();
          		$('ul.sidebarList').append(dashboardSidebar);
          		if ($('table.contactsNav')){
          			$('table.contactsNav').remove();
          		}
          	} 
          	if (data==0){
          		alert('Not logged in');
          	} 
          },  
          type: 'get',  
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/dashboard.php'
        }); 
      }
      
      AJAX.dashboardRequest = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('ajax error');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
          	if (data!=0){
          		$('.sidebar').animate({width:'0px'});
    			$('.sidebarList').hide();
    			$('img.settingsButton').attr('src', 'img/home_icon.png'); 
    			$('img.settingsButton').addClass('homeButton'); 
          		$('.content').empty();
          		$('.content').append(data); 
          		$(document).scrollTop();
          		if ($('table.contactsNav')){
          			$('table.contactsNav').remove();
          		}
          	} 
          	if (data==0){
          		alert('Not logged in');
          	} 
          },   
          type: 'get',  
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/dashboardRequest.php'
       });  
      }
      
      AJAX.home = function() {
    	$.ajax({ 
        	async   : false,
          	data: null,
          	dataType: 'html',
          	error: function(data) {
            alert('ajax error');
            console.log('error while getting: ' + data);
          },
          success: function(data) { 
          	if (data!=0){
          		$('.sidebar').animate({width:'0px'});
    			$('.sidebarList').hide();
          		$('.content').empty();
          		$('.content').append(data);
          		$(document).scrollTop();
          		if ($('table.contactsNav')){
          			$('table.contactsNav').remove();
          		}
          	} 
          	if (data==0){
          		alert('Not logged in');
          	} 
          },  
          type: 'get',  
          url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/home.php'
        }); 
      } 
      
      AJAX.loadContact = function(contact) {
				$.ajax({
					data: "contact=" + contact,
					dataType: 'html', 
					type: 'post', 
					url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/message_contact.php',
					error: function(response) {
						alert('Ajax Error')
					},
					success: function(response) {
						$('.sidebar').animate({width:'0px'});
    					$('.sidebarList').hide();
						$('.content').empty(); 
          				$('.content').append(response); 
          				if ($('table.contactsNav')){
          					$('table.contactsNav').remove();
          				}
          				
					}       
				}); 
			}
			
		AJAX.refreshMessages = function(contact) {
				$.ajax({
					data: "contact=" + contact,
					dataType: 'html', 
					type: 'post', 
					url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/refreshMessages.php',
					error: function(response) {
						alert('Ajax Error')
					},
					success: function(response) {
						$('.contactBar').empty();
						$('.contactBar').append(response);
					}       
				});  
			} 
			
		AJAX.sendMessage = function(message, contact, user) {
			    contact = $('input#contact').val(); 
				$.ajax({
					data: "contact=" + contact + "&message=" + message + "&user=" + user,  
					dataType: 'html', 
					type: 'post', 
					url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/send_message.php',
					error: function(response) {
						alert('Ajax Error') 
					}, 
					success: function(response) { 
						//alert(contact);    
						//alert('user is ' + user)
						// alert('message sent');
						AJAX.loadContact(contact); 
						$(document).scrollTop(); 
					}       
					   
				});  
			}
		
		
		// AJAX.storeLocator = function() {
    	// $.ajax({ 
        	// async   : false,
          	// data: null,
          	// dataType: 'html',
          	// error: function(data) {
            // alert('Cannot connect to database');
            // console.log('error while getting: ' + data);
          // },
          // success: function(data) { 
          	// $('.sidebar').animate({width:'0px'});
    		// $('.sidebarList').hide();
			// $('.content').empty(); 
          	// $('.content').append(data);   
			// $(document).scrollTop(); 
          // },  
          // type: 'get',   
          // url: 'http://02d791c.netsolhost.com/JewelCloud_Messenger/fb_locator/index.php'
        // }); 
      // }
      
      AJAX.dbConnect();
      AJAX.checkDevice();

			