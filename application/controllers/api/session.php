<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Session extends REST_Controller
{
  function __construct()
  {
    // Construct our parent class
    parent::__construct();
    session_start();
    $this->load->database();
    $this->load->model('users');
  }

  function login_get()
  {
    $user = $_SESSION['user'];
    $this->response($user, 200);
  }

  function login_post()
  {
    $session = (array)json_decode(file_get_contents("php://input"));
    $user = $this->users->find($session);
    $_SESSION['user'] = $user;
    $this->response($user, 200);
  }
}
