<?php
$name = $_POST['sitename'];
echo $name;
$file = fopen($name + ".php", "w+");
fputs($file, "<?php readfile('index.html') ?>");
?>
