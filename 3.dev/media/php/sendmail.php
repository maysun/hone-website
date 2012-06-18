<?php
    $mail=$_POST['contactEmail'];
    $name=$_POST['contactName'];
    $subject='HoneMedia.com - Inquiry';
    $text=$_POST['contactMessage'];

    $to='phil@honemedia.com';
    $message='Client: '.$mail;
    $message.=$text;

    if(mail($to, $subject,$message)){
    echo 'mail successful send';
    }
    else{
    echo 'there’s some errors to send the mail, verify your server options';
    }
?>

