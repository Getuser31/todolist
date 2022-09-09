<?php



require "vendor/autoload.php";

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;


$capsule->addConnection([

    "driver" => "mysql",

    "host" =>"10.4.0.12",

    "database" => "todolist",

    "username" => "root",

    "password" => "password"

]);

$capsule->setAsGlobal();

$capsule->bootEloquent();