<?php
include("upload.php");

$upload = new Upload();

header ("Content-Type: text/plaintext;");
echo $upload->list_files('.');
