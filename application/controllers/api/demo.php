<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Demo extends REST_Controller
{
  function __construct()
  {
    // Construct our parent class
    parent::__construct();

    // load model
    $this->load->database();
    $this->load->model('persons');
  }

  function persons_get()
  {
    $id = $this->get('id');
    if (!empty($id)) {
      $person = $this->persons->get_by_id($id);
      if (empty($person)) {
        $this->response(array('error' => 'Couldn\'t find any person!'), 404);
      }
      $this->response($person, 200);
    }
    $persons = $this->persons->get_all();
    $this->response($persons, 200);
  }

  function persons_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    $newPerson = $input;
    $person = $this->persons->save($newPerson);
    $this->response($person, 200);
  }

  function persons_delete()
  {
    $id = $this->get('id');
    $person = $this->persons->delete($id);
    if (!is_null($person)) {
      $this->response($person, 200);
    } else {
      $this->response(array('error' => 'Couldn\'t find any person!'), 404);
    }
  }
}
