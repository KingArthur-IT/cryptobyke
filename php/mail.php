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
    $mail->Password   = 'xardas22';

    $mail->isHTML(true);//HTML формат
    $mail->setFrom("ostapt5@gmail.com","Имя от кого отправлять");
    $mail->addAddress("ostapenko.web.7@gmail.com","");//Кому отправляем
    //$mail->addReplyTo("kudaotvetit@yandex.ru","Имя кому писать при ответе");
    $mail->Subject = "Тема сообщения";
    $mail->Body    = "Содержание сообщения";
    // $mail->AltBody = "Альтернативное содержание сообщения";

    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
