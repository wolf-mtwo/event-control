<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH.'/controllers/api/generic/master.php';

class Report extends Master_Controller
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('participant');
  }

  // State
  function attendance_get()
  {
    $eventId = $this->get('eventId');
    $reportData = $this->participant->get_attendance_report($eventId);
    $this->response($reportData, 200);
  }
}
