<?php

require APPPATH . '/models/generic/master.php';

class Event extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('event');
  }
}
