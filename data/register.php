<?php
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
$email=$_REQUEST["email"];
$phone=$_REQUEST["phone"];
$user_name=$_REQUEST["user_name"];
$gender=$_REQUEST["gender"];
if($uname!==""&&$upwd!==""){
$conn=mysqli_connect('127.0.0.1','root','','xz',3306);
mysqli_query($conn,'SET NAMES UTF8');
$sql="insert into xz_user(uname,upwd,email,phone,user_name,gender)values('$uname','$upwd','$email','$phone','$user_name','$gender')";
$result=mysqli_query($conn,$sql);
if($result==false){
	echo "注册失败";
}else{
	echo "注册成功";
}

}else{
	echo "注册失败";
}



?>