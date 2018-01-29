<?php
// Production config
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=mysql;dbname=yii2-realtime',
    'username' => 'root',
    'password' => 'root',
    'charset' => 'utf8',
];

// Development config
//return [
//    'class' => 'yii\db\Connection',
//    'dsn' => 'mysql:host=localhost;dbname=yii2-realtime',
//    'username' => 'root',
//    'password' => 'root',
//    'charset' => 'utf8',
//];