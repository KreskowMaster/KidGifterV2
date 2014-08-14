<?php
$name = $_POST['sitename'];
echo $name;
$file = fopen($name + ".html", "w+");
fputs($file, "<?php readfile('index.html') ?>");
?>
