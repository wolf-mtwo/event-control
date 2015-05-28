<?php

require APPPATH . '/models/generic/master.php';

class User extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('user');
  }
}
