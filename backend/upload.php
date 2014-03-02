<?php 

session_start();
include "conf.php";

class Upload {
	private $hide = ['.','..'];

	public function __construct()
	{
		return 0;
	}

	private function is_safe($filename)
	{
		$exts = ['gif','tga','eps','bmp','jpg','jpeg','pdf'];
	}

	private function is_binary($filename)
	{
		// return mime type ala mimetype extension
		$finfo = new finfo(FILEINFO_MIME);

		//check to see if the mime-type starts with 'text'
		if (substr($finfo->file($filename), 0, 4) == 'text') {
			return false;
		} else {
			return true;
		}
	}

	private function dirsize($dir) 
	{
		if ($dir[strlen($dir)-1] != DIRECTORY_SEPARATOR)
			$dir .= DIRECTORY_SEPARATOR;
		$size = 0;
		if ($fp = opendir($dir)) {
			while (false !== ($file = readdir($fp))) { 
				$path = $dir.$file;
				if (!in_array($file, $this->hide)) { 
					$size += filesize($path);
				}
			}
			closedir($fp);
			return $size; 
		} else {
			return false;
		}
	}

	public function list_users()
	{
		return;
	}

	public function list_files($target_dir) 
	{
		if ($target_dir[strlen($target_dir)-1] != '/')
			$target_dir .= '/';
		if ($handle = opendir($target_dir)) { 
			while (false !== ($file = readdir($handle))) { 
				if (!in_array($file, $this->hide)) { 
					$files[] = $file;
				} 
			} 
			closedir($handle); 
		} else {
			return false;
		}

		foreach ($files as $file) {
			$path = $target_dir.$file;
			$tmp[] = [
				'name'     => $file,
				'ext'      => strrchr($file, "."),
				'path'     => $path,
				'size'     => @filesize($path),
				'modified' => filemtime($path)
			];
		}
		return json_encode(['files' => $tmp], JSON_PRETTY_PRINT);
	} 	  

	public function __destruct()
	{
		return 0;
	}
}
