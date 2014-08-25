<?php
$name = $_POST['sitename'];
$gifts = $_POST['allGifts'];
$go = $_POST['ended'];
$file1 = fopen("gifts$name.txt", "w+");
fputs($file1, "abc123abc");
$file2 = fopen("$name.php", "w+");
fputs($file2, "<?php readfile('szablon.html') ?>");
?>
