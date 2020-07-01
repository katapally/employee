<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['task'])){
$empname = $_GET['task'];
$dob = $_GET['dob'];
$status = "0";
$created = time();

$query="INSERT INTO tasks(task, dob, status,created_at)  VALUES ('$empname', '$dob', '$status', '$created')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);
}
?>