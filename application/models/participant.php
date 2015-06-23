<?php

require_once APPPATH . '/models/generic/master.php';

class Participant extends Master {

  function __construct()
  {
    // Construct our parent class
    parent::__construct('participant');
    $this->load->model('att');
  }

  function get_attendance_report($eventId)
  {
    $query = array(
      'eventId' => $eventId
    );
    $participants = $this->find($query);
    $updatedPaticiapants = array();
    $attQuery = array(
      'eventId' => $eventId
    );
    foreach ($participants as $participant) {
      $attQuery['participantId'] = $participant['id'];
      $participant['atts'] = $this->att->find($attQuery);
      array_push($updatedPaticiapants, $participant);
    }
    return $updatedPaticiapants;
  }
}
