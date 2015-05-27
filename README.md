PHP Demo

## create initial demo person
* create a database named **demo**
* create a table named **person**
```
# copy from here the person table
# config/DB.md
```

## update database access config
```
# aplication/config/database.php
$db['default']['username'] = 'root';
$db['default']['password'] = 'usbw';
$db['default']['database'] = 'demo';
```
