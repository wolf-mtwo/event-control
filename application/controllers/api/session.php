<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Session extends REST_Controller
{
  function __construct()
  {
    // Construct our parent class
    parent::__construct();
  }

  // function login_post()
  // {
  //   $user = array(array('email'=>'qwe@qwe.com', 'password'=>'123'));
  //   print_r($user);
  //   $input = (array)json_decode(file_get_contents("php://input"));
  //   print_r($input);
  //   // print_r($this->session);
  //
  //   $newdata = array(
  //     'username'  => 'johndoe',
  //     'email'     => 'johndoe@some-site.com',
  //     'logged_in' => TRUE
  //   );
  //
  //   $this->session->set_userdata($newdata);
  //
  //   // $persons = $this->personModel->get_paged_list(100)->result();
  //   $persons = array('sss', 'sss');
  //   $this->response($persons, 200);
  // }
  // //
  // function person_post()
  // {
  //   $input = (array)json_decode(file_get_contents("php://input"));
  //   // save
  //   $person = $this->personModel->save($input);
  //   $this->response($person, 200); // 200 being the HTTP response code
  // }
}
