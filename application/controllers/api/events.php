<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/controllers/api/generic/master.php';

class Events extends Master_Controller
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('event');
  }

  function event_get()
  {
    if($this->get('id')) {
      $event = $this->load_model('event');
      if (empty($event)) {
        $this->response(array('error' => 'Couldn\'t find any event!'), 404);
      }
      $this->response($event, 200);
    }
    $this->response($this->event->get_all(), 200);
  }

  function event_post()
  {
    $event = $this->save_model('event');
    $this->response($event, 200);
  }
}
