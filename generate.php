<?php
$sitename = $_POST['sitename'];
$giftsname = "gifts.$sitename.html";
$allGifts = $_POST['allGifts'];
$ended = $_POST['ended'];
$giftsArray = $_POST['giftsArray'];
$resultArray = print_r($giftsArray, true);
$file1 = fopen($giftsname, "w+");
fputs($file1, $resultArray);
$file2 = fopen("$sitename.php", "w+");
fputs($file1, "<link rel='stylesheet' href='css/normalize.css' />
<link rel='stylesheet' href='css/style-grid.css' />
<link rel='stylesheet' href='css/style.css' />");
fputs($file2, "<?php readfile('szablon.html')?>");
fputs($file2, "<?php readfile('$giftsname')?>");
?>
