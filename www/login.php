
<?php
    require('db_connect.php');
    //    $sql="SELECT name FROM $tbl_name WHERE id='1'";
    //    $result = mysql_query($sql);
    //    while($row = mysql_fetch_array($result))
    //    {
    //        echo $row[0];
    //    }
    
    session_start();
    
    $userQuery = $_GET['userQuery'];
    $passwordQuery = $_GET['passwordQuery'];
    $_SESSION['username'] = $userQuery;
    $_SESSION['password'] = $passwordQuery;
    
    $sql="SELECT user, password FROM $tbl_name WHERE user='$userQuery'";
    $result = mysql_query($sql);
    while($row = mysql_fetch_array($result))
    {
        if($userQuery==$row[0] && $passwordQuery==$row[1])
        { echo "Login successful";
          header("Location: http://02d791c.netsolhost.com/test_data/www/success.php");
        }
        else{
            echo "Login failed";
        }
    }
    
    ?>