<?php
$uname=$_REQUEST["uname"];#1.接收前端提交过来的数据
$upwd=$_REQUEST["upwd"];
require("init.php");#2.连接数据库，
$sql="select * from xz_user where uname='$uname'AND upwd='$upwd'";#3.拼sql语句
$result=mysqli_query($conn,$sql);#4.执行sql语句判断结果
$row=mysqli_fetch_row($result);
if($row==null){
	echo "用户名或密码错误";
}else{
	echo "登录成功";
}
?>
