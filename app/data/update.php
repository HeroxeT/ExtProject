<?php
//функция по сохранению изменений в items.json
$id = $_POST['id'];
$price = $_POST['price'];
$count = $_POST['count'];


$data = file_get_contents('items.json');
$data = json_decode($data);
$data1 = $data->items;
foreach ($data1 as $datum) {
    if ($datum->id == $id){

        if ($datum->price !== $price || $datum->count !== $count && $price >= 0 && $count >= 0 && !is_float($count)){
            $datum->price = $price;
            $datum->count = $count;
        }else{
            echo '{ "success": true,"returnable":false, "message":"Изменений нет"}';
            return;
        }
    }
}
$data->items = $data1;
$data = json_encode($data);
file_put_contents('items.json', $data);
echo '{ "success": true,"returnable":true, "message":"Предмет обновлен"}';
