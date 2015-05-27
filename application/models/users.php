<?php

require APPPATH . '/models/generic/master.php';

class Users extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('user');
  }
}
