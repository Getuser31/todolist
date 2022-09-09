<?php

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

// Routing
$routes = new RouteCollection();
$routes->add('index', new Route(constant('URL_SUBFOLDER') . '/',
    array('controller', 'TodoController', 'method' => 'showTodoList')));
$routes->add('editTodo', new Route(constant('URL_SUBFOLDER') .'/edit/{id}',
    array('controller', 'TodoController', 'method' => 'editTodo'), array('id' => '[0-9]+')));
$routes->add('deleteTodo', new Route(constant('URL_SUBFOLDER') .'/delete/{id}',
    array('controller', 'TodoController', 'method' => 'deleteTodo'), array('id' => '[0-9]+')));
$routes->add('createTodo', new Route(constant('URL_SUBFOLDER') .'/createTodo/',
    array('controller', 'TodoController', 'method' => 'createTodo')));