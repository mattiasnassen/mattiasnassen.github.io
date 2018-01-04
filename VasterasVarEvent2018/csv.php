<?php

if (isset($_POST['rows'])) {
	
	$h = tmpfile();
	foreach ($_POST['rows'] as $row) {
	    fputcsv($h, array_values($row));
	}
	rewind($h);
	$csv = '';
	while (($row = fgets($h)) !== false) {
            $csv .= $row;
        }
	fclose($h);
	
	header("Content-type: application/csv");
	header("Content-Disposition: attachment; filename=file.csv");
	header("Pragma: no-cache");
	header("Expires: 0");
	
	echo $csv;
	exit;
	
}

?>

<html>
	<head></head>
<body>
	<form method="post">
		<input type="text" name="rows[0][]" />
		<input type="text" name="rows[0][]" />
		<input type="text" name="rows[0][]" />
		<hr />
		<input type="text" name="rows[1][]" />
		<input type="text" name="rows[1][]" />
		<input type="text" name="rows[1][]" />
		<hr />
		<input type="submit" />
	</form>
</body>
</html>