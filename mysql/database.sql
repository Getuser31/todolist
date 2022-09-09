CREATE database todolist;

use todolist;
create table todos (
                      id int auto_increment NOT NULL ,
                      todo varchar(255) NOT NULL ,
                      completed boolean default false NOT NULL ,
                      created_at datetime default CURRENT_TIMESTAMP,
                      updated_at datetime,
                      primary key (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;