<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Attendance extends CI_Controller {

  function __construct() {
    parent::__construct();
    $this->load->database();
    $this->load->model('att');
    $this->load->model('talk');
    $this->load->model('event');
    $this->load->model('state');
    $this->load->model('participant');
  }

  public function index()
  {
    $this->load->view('welcome');
  }

  public function talk($eid, $eventId, $pid, $participantId)
  {
    $query = array(
      'eventId' => $eventId
    );
    $data = array();
    $data['currentEvent'] = $this->event->get_by_id($eventId);
    $data['participant'] = $this->participant->get_by_id($participantId);
    $data['talks'] = $this->talk->find($query);
    $data['states'] = $this->state->get_all();
    $this->load->view('attendance', $data);
  }
}
