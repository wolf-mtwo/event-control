<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH.'/controllers/api/generic/master.php';

class Talk extends Master_Controller
{
  function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('state');
  }

  // State
  function state_get()
  {
    if($this->get('stateId')) {
      $this->load_model('state', 'stateId');
    }
    $this->get_all_model('state');
  }

  // ATT
  function att_get()
  {
    if($this->get('attId')) {
      $this->load_model('att', 'attId');
    }
    $this->get_all_model('att');
  }

  function att_post()
  {
    $params = array('attId');
    $this->save_model('att', $params);
  }

  function att_delete()
  {
    $this->remove('att', 'attId');
  }
}
