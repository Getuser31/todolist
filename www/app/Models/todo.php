<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Todo extends Eloquent
{
    protected $fillable = [
        'todo', 'completed', 'created_at', 'updated_at'
    ];

    public function getTodoList()
    {
        return $this->all();
    }

    public function getStatus()
    {
        return $this->completed;
    }

    public function setStatus()
    {
        $this->completed = !$this->getStatus();
        $this->save();
        return $this;
    }

    public function deleteTodo($id)
    {
        Todo::where('id', intval($id))->delete();
    }

    public function getTodo($id)
    {
        return Todo::find(intval($id));
    }

    public function createTodo(string $todo)
    {
        $this->todo = $todo;
        $this->completed = 0;
        $this->save();
    }

}