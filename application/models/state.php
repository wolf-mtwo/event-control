<?php

require_once APPPATH . '/models/generic/master.php';

class State extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('state');
  }
}
