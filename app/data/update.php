<?php
$json = file_get_contents('php://input');
if (strlen($json) < 1) {
    echo '{ "success": false,"returnable":true, "message":"Данные не получены"}';
    return;
}

$parsedData = json_decode($json);

$data = file_get_contents('items.json');
$data = json_decode($data);
$data1 = $data->items;
$message = 'Предмет обновлен.';

if (is_int($parsedData->id)) {
    foreach ($data1 as $datum) {
        if ($datum->id == $parsedData->id){
            $datum->price =  isset($parsedData->price) ? $parsedData->price : $datum->price;
            $datum->count = isset($parsedData->count) ? $parsedData->count : $datum->count;
        }
    }
} else {
    $newdata = new stdClass();
    $newdata->id = count($data1)+1;
    $newdata->name = $parsedData->name;
    $newdata->about = $parsedData->about;
    $newdata->price = $parsedData->price;
    $newdata->count = $parsedData->count;
    $message = 'Предмет создан.';

    $data1[] = $newdata;
}
$data->items = $data1;
$data = json_encode($data);
file_put_contents('items.json', $data);
echo '{ "success": true,"returnable":true, "message":"'.$message.'"}';
