<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH.'/controllers/api/generic/master.php';

class Events extends Master_Controller
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('event');
    $this->load->model('participant');
    $this->load->model('talk');
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
    $this->save_model('event');
  }

  function event_delete()
  {
    $this->remove_model('event');
  }

  // TALKS
  function talk_get()
  {
    if($this->get('talkId')) {
      $this->load_model('talk', 'talkId');
    }
    $params = array('eventId');
    $this->get_all_model('talk', $params);
  }

  function talk_post()
  {
    $params = array('eventId');
    $this->save_model('talk', $params);
  }

  function talk_delete()
  {
    $this->remove('talk', 'talkId');
  }

  // PARTICIPANTS
  function participant_get()
  {
    if($this->get('participantId')) {
      $this->load_model('participant', 'participantId');
    }
    $params = array('eventId');
    $this->get_all_model('participant', $params);
  }

  function participant_post()
  {
    $params = array('eventId');
    $this->save_model('participant', $params);
  }

  function participant_delete()
  {
    $this->remove('participant', 'participantId');
  }
}
