<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Mailer = "smtp";
    $mail->SMTPDebug = 1;
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 465;
    $mail->Host = 'smtp.gmail.com';
    $mail->Username   = 'ostapt5@gmail.com';
    $mail->Password   = '***';
    $mail->isHTML(true);
    $mail->setFrom("ostapt5@gmail.com","sender name");
    $mail->addAddress("ostapenko.web.7@gmail.com","Artem");
    $mail->Subject = "Cryptobike message";
    $mail->Body    = 'Name: '.$_POST['name'].' Email: '.$_POST['email'].' Message: '.$_POST['message'];

    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
