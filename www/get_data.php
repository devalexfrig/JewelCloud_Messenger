<?php
    require('db_connect.php');
//    $sql="SELECT name FROM $tbl_name WHERE id='1'";
//    $result = mysql_query($sql);
//    while($row = mysql_fetch_array($result))
//    {
//        echo $row[0];
//    }
    
    $idQuery = $_GET['idQuery'];
    $nameQuery = $_GET['nameQuery'];
    $imageQuery = $_GET['imageQuery'];
    
    $sql="SELECT image FROM $tbl_name WHERE name='$imageQuery'";
    $result = mysql_query($sql);
    while($row = mysql_fetch_array($result))
    {
        echo '<img width="100%" src="' . $row[0] . '" />';
    }
    
    
    
?> 