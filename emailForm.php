<?php

$message = $_POST["message"];
$name = $_POST["name"];
$subject = $_POST["subject"];
$email = $_POST["email"];

$message = wordwrap($message, 70, "\r\n");

mail('zacharygreene01@gmail.com', $name, $email, $subject, $message)

?>