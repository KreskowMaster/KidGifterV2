<?php
$sitename = $_POST['sitename'];
$allGifts = $_POST['allGifts'];
$ended = $_POST['ended'];
$giftsArray = $_POST['giftsArray'];
$file1 = fopen("gifts$sitename.txt", "w+");
fputs($file1, $giftsArray);
$file2 = fopen("$sitename.php", "w+");
fputs($file2, "<?php readfile('szablon.html') ?>");
?>
