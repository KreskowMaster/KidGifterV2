<?php
$sitename = $_POST['sitename'];
$giftsname = "gifts.$sitename.html";
$allGifts = $_POST['allGifts'];
$ended = $_POST['ended'];
$giftsArray = $_POST['giftsArray'];
$file1 = fopen($giftsname, "w+");
$file2 = fopen("$sitename.php", "w+");
fputs($file2, "<?php readfile('szablon.html')?>");
fputs($file2, "<?php readfile('$giftsname')?>");
foreach ($giftsArray as $gift) {
   if (get_magic_quotes_gpc()) {
	fputs($file1, stripslashes($gift));
} else {
	fputs($file1, $gift);
}
}

?>
