<?php 

   $uname=$GIT['uname'];
   $pw=$GIT['password'];
   if($uname=='admin'&&$password=='123'){
	   	 //开启session
	   session_start();
	   
	   $_SESSION['usernam']=$uname;
   }
  
//如果浏览器禁用了cookie，可以通过URL重写（其实就是在所有的URL中添加sessionID作为参数）的方式使用session

 ?>