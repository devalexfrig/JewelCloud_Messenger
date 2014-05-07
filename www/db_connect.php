<?php
    $host="205.178.146.108"; // Host name
    $username="crash2720"; // Mysql username
    $password="Eastbrook1"; // Mysql password
    $db_name="callaway"; // Database name
    $tbl_name="testData"; // Table name
    mysql_connect("$host", "$username", "$password")or die("cannot connect");
    mysql_select_db("$db_name")or die("cannot select DB");
?>