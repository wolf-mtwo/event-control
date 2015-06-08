<?php

require_once APPPATH . '/models/generic/master.php';

class Participant extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('participant');
  }
}
