<?php
$product = htmlspecialchars($_POST["product"]);
$material = htmlspecialchars($_POST["material"]);
$quantity = htmlspecialchars($_POST["quantity"]);

if ($product && $material && $quantity) {
    echo "<h1>Ваше замовлення прийнято</h1>";
    echo "Замовлено виріб — $product<br>";
    echo "Матеріал — $material<br>";
    echo "Кількість — $quantity";
} else {
    echo "Помилка! Неповні дані.";
}
?>
