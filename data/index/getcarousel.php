<?php
require("../init.php");
$sql="select * from product_carousel";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>