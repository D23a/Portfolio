<?php
header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Only POST requests are accepted.';
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo 'Please provide a name, valid email, subject and message.';
    exit;
}

$name = preg_replace('/[\r\n]+/', ' ', $name);
$subject = preg_replace('/[\r\n]+/', ' ', $subject);
$to = 'blessed.dm23@outlook.com';
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = "Reply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo 'OK';
    exit;
}

http_response_code(500);
echo 'Failed to send message. Please try again.';
