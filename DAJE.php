
<?php
include(‘config.php');
if (isset($_POST['submitted'])) {
foreach($_POST AS $key => $value) {
$_POST[$key] = mysql_real_escape_string($value);
}
if (filter_var( $_POST['quantity'], FILTER_VALIDATE_INT) ){
$sql = "INSERT INTO shopping_list(item,quantity)
VALUES ('".$_POST['item']."','".$_POST['quantity']."') ";
mysql_query($sql) or die(mysql_error());
?>