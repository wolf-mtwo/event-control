<?php

require APPPATH . '/models/generic/master.php';

class Persons extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('person');
  }
}
