<?php

$goods = [
    [
        'id' => 1,
        'title' => 'Piano',
        'price' => 2345
    ],
    [
        'id' => 2,
        'title' => 'Guitar',
        'price' => 1753
    ],
    [
        'id' => 3,
        'title' => 'Drum',
        'price' => 1224
    ],
];

$week = [
    ['Monday', 'Понедельник'],
    ['Tuesday', 'Вторник'],
    ['Wednesday', 'Среда'],
    ['Thursday', 'Четверг'],
    ['Friday', 'Пятница'],
    ['Saturday', 'Суббота'],
    ['Sunday', 'Воскресенье']
];

$products = [
    '1' => [
        'price' => 10,
        'count' => 2
    ],
    '2' => [
        'price' => 5,
        'count' => 5
    ],
    '3' => [
        'price' => 8,
        'count' => 5
    ],
    '4' => [
        'price' => 12,
        'count' => 4
    ],
    '5' => [
        'price' => 8,
        'count' => 4
    ],
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<section>
    hw1:
    <?php
    $num = 800;
    $num1 = 800;

    $cnt = 0;
    while ($num >= 50) {
        $num /= 2;
        $cnt++;
    }
    $cnt1;
    for ($cnt1 = 0; $num1 >= 50; $cnt1++) {
        $num1 /= 2;
    }

    echo "<p>hw1:</p><p>while: num " . $num . ", cnt " . $cnt . "</p><p>for: num " . $num1 . ", cnt " . $cnt1 . "</p>";
    ?>
</section>
<section>
    hw2:
    <?php
    $get = $_GET;
    $id = $get['id'];
    foreach ($goods as $good) {
        if ($id === $good['id']) {
            break;
        }
    }
    ?>

    <p><?php echo $good['title'] ?></p>
    <img src="img/<?php echo $good['img'] ?>">
    <p><?php echo $good['author'] ?></p>
    <p><?php echo $good['price'] ?>$</p>

    <?php
    $isAuth = false;
    // TODO: комментарии
    ?>
    
</section>
<section>
    hw3:
    <?php
    foreach ($week as $day) {
        if ($day[0] === date('l')) {
            echo "<strong>$day[1]</strong> ";
        } else {
            echo "$day[1] ";
        }
    }
    ?>
</section>
<section>
    hw4:
    <?php
    $price = array_column($products, 'price');
    $count = array_column($products, 'count');
    array_multisort($price, SORT_DESC, $count, SORT_ASC, $products);
    var_dump($price, $count);
    ?>
</section>
<section>
    hw5:
    <?php
    $file = 'C:\\OpenServer\\testsite\\www\\somefile.txt';
    function fileName($string)
    {
        $firstSlash = -1;
        $lastDot = -1;
        for ($i = 0; $i < strlen($string); $i++) {
            if ($string[$i] == '\\') {
                $firstSlash = $i;
            } else if ($string[$i] == '.') {
                $lastDot = $i;
            }
        }
        return substr($string, $firstSlash + 1, $lastDot - $firstSlash - 1);
    }

    echo fileName($file);
    ?>
</section>
<section>
    hw6:
    <?php
    function toCase($string, $flag)
    {
        switch ($flag) {
            case 1:
                return strtoupper($string);
            case 2:
                return strtolower($string);
            case 3:
                return ucwords(strtolower($string));
            default:
                return $string;
        }
    }

    echo toCase("DcfF fFsH dfFG", 1) . "|" . toCase("DcfF fFsH dfFG", 2) . "|" . toCase("DcfF fFsH dfFG", 3)
    ?>
</section>
<section>
    hw7:
    <?php
    function snakeToCamelCase($string)
    {
        return str_replace("_", "", ucwords($string, "_"));
    }

    echo snakeToCamelCase("snake_to_camel_case");
    ?>
</section>
<section>
    hw8:
    <?php

    function genRandomArray($length)
    {
        $array = [];
        for ($i = 0; $i < $length; $i++) {
            array_push($array, rand(-10, 10));
        }
        return $array;
    }

    function genRandomArrays($length)
    {
        $arrays = [];
        for ($i = 0; $i < $length; $i++) {
            array_push($arrays, genRandomArray(rand(3, 10)));
        }
        return $arrays;
    }

    function findSums($arrays)
    {
        $sums = [];
        foreach ($arrays as $array) {
            $sum = array_sum($array);
            array_push($sums, $sum);
        }
        return $sums;
    }

    function findMaxInd($arr)
    {
        $maxSum = -10000;
        $maxSumInd = -1;
        for ($i = 0; $i < count($arr); $i++) {
            if ($maxSum < $arr[$i]) {
                $maxSum = $arr[$i];
                $maxSumInd = $i;
            }
        }
        return $maxSumInd;
    }

    $arrays = genRandomArrays(5);
    $sums = findSums($arrays);
    for ($i = 0; $i < count($sums); $i++) {
        echo $i . " : " . implode(', ', $arrays[$i]) . " | " . $sums[$i];
    }
    $maxSumInd = findMaxInd($sums);
    echo "max " . implode(', ', $arrays[$maxSumInd]) . " | " . $sums[$maxSumInd];

    ?>
</section>

</body>
</html>
