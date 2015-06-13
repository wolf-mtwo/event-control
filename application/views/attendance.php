<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Attendance</title>
  </head>
  <body>
    <?php //print_r($event); ?>
    <?php //print_r($participant); ?>
    <?php //print_r($talks); ?>
    <h1>
    	<?php echo $event['title'] ?>
    </h1>
    <h3>
    	<?php echo $participant['first_name'] ?>
    	<?php echo $participant['last_name'] ?>
    </h3>
    <ul>
    	<?php foreach ($talks as $talk): ?>
    	<li><?php echo $talk['title'] ?></li>
    	<?php endforeach ?>
    </ul>
  </body>
</html>
