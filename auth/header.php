<?php
// Functions
function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}

session_start();

require_once 'vendor/autoload.php';

use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\DropboxApp;

//Configure Dropbox Application
$app = new DropboxApp("3naerq00ohhrfbb", "fs91lwfc09ed1of");

//Configure Dropbox service
$dropbox = new Dropbox($app);

//DropboxAuthHelper
$authHelper = $dropbox->getAuthHelper();

//Callback URL
$callbackUrl = "http://localhost:8080/auth/login-callback.php";
?>
