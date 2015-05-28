<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Master_Controller extends REST_Controller
{
  function __construct()
  {
    parent::__construct();
  }

  // function validator($tbl_name, $object)
  // {
  //   $this->get_models_elements();
  // }
  //
  // function get_models_elements()
  // {
  //   $models = array(
  //     'event' => array(
  //       'userId',
  //       'title',
  //       'active',
  //       'start_date',
  //       'end_date'
  //     )
  //   );
  //   return $models;
  // }
  function load_model($model)
  {
    $id = $this->get('id');
    $this->validator($model, 'model');
    $this->validator($id, 'id');
    return $this->$model->get_by_id($id);
  }

  function save_model($model)
  {
    $this->validator($model, 'model');
    $newItem = (array)json_decode(file_get_contents("php://input"));
    return $this->$model->save($newItem);
  }

  private function validator($var, $value)
  {
    if (empty($var)) {
      throw new Exception("$value is undefined");
    }
  }
}
