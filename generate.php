<?php
$name = $_POST['sitename'];
$gifts = $_POST['allGifts'];
$file1 = fopen("gifts$name.php", "w+");
fputs($file1, $gifts);
$file2 = fopen("$name.php", "w+");
fputs($file2, "<?php readfile('szablon.html') ?>");
?>
