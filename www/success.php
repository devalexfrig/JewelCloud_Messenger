<?php
    session_start();
    
    $userQuery = $_SESSION['username'];
    $passwordQuery = $_SESSION['password'];
    
    echo $userQuery;
    echo "<br />";
    echo $passwordQuery;
    
    ?>