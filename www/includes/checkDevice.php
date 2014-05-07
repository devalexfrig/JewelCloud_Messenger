<?php
$iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
		if( $iPhone ){
    		?><script type="text/javascript">
    		contentMargin = "150px";
    		</script>
    		<?php
		}
		else{
			?><script type="text/javascript">
    		contentMargin = "200px";
    		</script>
    		<?php
		}  
?>