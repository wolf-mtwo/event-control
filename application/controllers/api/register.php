<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH.'/controllers/api/generic/master.php';

class Register extends Master_Controller
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('user');
  }

  // function users_get()
  // {
  //   $id = $this->get('id');
  //   if (!empty($id)) {
  //     $person = $this->users->get_by_id($id);
  //     if (empty($person)) {
  //       $this->response(array('error' => 'Couldn\'t find any user!'), 404);
  //     }
  //     $this->response($person, 200);
  //   }
  //   $users = $this->users->get_all();
  //   $this->response($users, 200);
  // }

  function users_post()
  {
    $input = (array)json_decode(file_get_contents("php://input"));
    $newPerson = $input;
    $person = $this->user->save($newPerson);
    $this->response($person, 200);
  }
}
