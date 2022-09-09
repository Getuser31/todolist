<?php
// Autoloader
require_once 'vendor/autoload.php';

// Load Config
require_once 'config/config.php';

//Eloquent
require "bootstrap.php";

// Routes
require_once 'app/Routes/web.php';
require_once 'app/Router.php';