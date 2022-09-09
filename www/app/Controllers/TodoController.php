<?php

namespace App\Controllers;

use App\Models\todo;
use Symfony\Component\HttpFoundation\Request;

class TodoController
{
    public function showTodoList()
    {
        $todolist = new todo();
        $list = $todolist->getTodoList();

        require_once APP_ROOT .'/view/todo.php';
    }

    public function editTodo($id)
    {
        $todo = new Todo();
        /** @var Todo $todo */
        $todo = $todo->getTodo($id);
        $todo->setStatus();
    }

    public function deleteTodo($id)
    {
        $todo = new todo();
        $todo->deleteTodo($id);
    }

    public function createTodo($request)
    {
        $todo = new Todo();
        $todo->createTodo($request->get('todo'));
    }
}