<?php
$sitename = $_POST['sitename'];
$giftsname = "gifts.$sitename.html";
$allGifts = $_POST['allGifts'];
$ended = $_POST['ended'];
$giftsArray = $_POST['giftsArray'];
$file1 = fopen($giftsname, "w+");
$file2 = fopen("$sitename.php", "w+");
foreach ($giftsArray as $gift) {
   if (get_magic_quotes_gpc()) {
	fputs($file1, stripslashes($gift));
} else {
	fputs($file1, $gift);
}
}
fputs($file2, "<!DOCTYPE html><html lang='pl_PL'><head><title>KidGifter</title><meta charset='utf-8' /><link rel='stylesheet' href='css/normalize.css' /><link rel='stylesheet' href='css/normalize.css' /><link rel='stylesheet' href='css/style-grid.css' />
<link rel='stylesheet' href='css/style2.css' /><script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script></head><body><div class='container, clearfix' id='cont'><div id='top_menu'><div class='grid_2'><img id='logo' src='img/logo-400x.png' alt='Logo KidGifter'></div><div id='social_bar_top' class='grid_2, omega'><a href='https://www.facebook.com/kidgifter'><img id='kgfb' src='img/Facebook_Icon_85x65_px.jpg' alt='KidGifter Facebook' ></a><a href='https://plus.google.com/u/0/b/107301480776796211739/107301480776796211739/posts'><img id='kggp' src='img/GooglePlus_Icon_85x65_px.jpg' alt='KidGifter Google Plus' ></a><a href='https://twitter.com/KidGifter'><img id='kgt' src='img/Twitter_Icon_85x65_px.jpg' alt='KidGifter Twitter' ></a></div></div></div><?php readfile('$giftsname')?></body></html>");

?>
