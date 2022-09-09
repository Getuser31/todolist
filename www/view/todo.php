<!doctype html>
<html lang="en">
<head>
    <title>todolist</title>
    <link rel="stylesheet" href="../html/css/todo.css">

</head>
<body>

<div class="container">
    <h2>TODO LIST</h2>
    <h3>Add Item</h3>
    <p>
        <input id="new-task" type="text">
        <button>Add</button>
    </p>


    <h3>Todo</h3>
    <ul id="incomplete-tasks">
        <?php foreach ($list as $todo):?>
      <?php if (!$todo['completed']) :?>
        <li><input type="checkbox"><label><?php echo $todo['todo']?></label>
          <input type="hidden" id="id" value="<?php echo $todo['id']?>">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
      <?php endif;?>
        <?php endforeach;?>
    </ul>

    <h3>Completed</h3>
    <ul id="completed-tasks">
        <?php foreach ($list as $todo):?>
        <?php if ($todo['completed']) :?>
        <li><input type="checkbox" checked><label><?php echo $todo['todo']?></label>
          <input type="hidden" id="id" value="<?php echo $todo['id']?>">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
      <?php endif ?>
        <?php endforeach;?>
    </ul>

</div>



</body>
<script src="../html/js/todolist.js"></script>
</html>
