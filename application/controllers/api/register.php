<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/controllers/api/generic/master.php';

class Register extends Master
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('users');
  }

  function users_get()
  {
    $id = $this->get('id');
    if (!empty($id)) {
      $person = $this->users->get_by_id($id);
      if (empty($person)) {
        $this->response(array('error' => 'Couldn\'t find any user!'), 404);
      }
      $this->response($person, 200);
    }
    $users = $this->users->get_all();
    $this->response($users, 200);
  }

  function users_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    $newPerson = $input;
    $person = $this->users->save($newPerson);
    $this->response($person, 200);
  }
}
