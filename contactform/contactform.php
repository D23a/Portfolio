<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name    = htmlspecialchars(trim($_POST["name"]));
  $email   = htmlspecialchars(trim($_POST["email"]));
  $subject = htmlspecialchars(trim($_POST["subject"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  $to = "blessed.dm23@outlook.com";

  $body  = "Name: $name\n";
  $body .= "Email: $email\n\n";
  $body .= "Message:\n$message\n";

  $headers  = "From: $name <$email>\n";
  $headers .= "Reply-To: $email\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "OK";
  } else {
    echo "Failed to send message. Please try again.";
  }

} else {
  echo "error";
}
?>
