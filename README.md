# React and PhpMailer

Projeto para envio de e-mails utilizando o phpMailer https://github.com/PHPMailer/PHPMailer

Configure o phpMailer para envio de e-mails não autenticados da seguinte forma:
```
<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/x-www-form-urlencoded');

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/PHPMailer.php';

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom($email, $nome);
//Set an alternative reply-to address
$mail->addReplyTo($email, $nome);
//Set who the message is to be sent to
$mail->addAddress('emaildedestino@seuserver.com.br', 'Nome do seu Site');
//Set the subject line
$mail->Subject = 'Assunto do -email';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML('<p>nome: '. $nome . '</p><p>Telefone: ' . $telefone . '</p><p>E-mail: ' . $email . '</p><p>Mensagem: <br>' . $mensagem);
//Replace the plain text body with one created manually
$mail->AltBody = 'Seu e-mail não lê html';

//send the message, check for errors
if (!$mail->send()) {
    echo 'Erro no envio da mensagem: '. $mail->ErrorInfo;
} else {
    echo 'Mensagem Enviada';
}
```