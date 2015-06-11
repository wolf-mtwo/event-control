<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Master_Controller extends REST_Controller
{
  function __construct()
  {
    parent::__construct();
  }

  function load_model($model, $id = 'id')
  {
    try {
      $itemId = $this->get($id);
      $this->validator($model, 'model');
      $this->validator($itemId, $id);
      $item = $this->$model->get_by_id($itemId);
      $this->response($item, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }

  function save_model($model, $params = array())
  {
    try {
      $this->validator($model, 'model');
      $this->validator($params, 'params');
      $get_params = $this->get();
      $newItem = (array)json_decode(file_get_contents("php://input"));
      foreach ($params as $value) {
        if (isset($get_params[$value])) {
          $newItem[$value] = $get_params[$value];
        } else {
          throw new Exception("$value is undefined");
        }
      }
      $item = $this->$model->save($newItem);
      $this->response($item, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }

  private function validator($var, $value)
  {
    // if (empty($var)) {
    //   throw new Exception("$value is undefined");
    // }
  }

  function remove_model($model)
  {
    try {
      $id = $this->get('id');
      $this->validator($id, 'id');
      $this->validator($model, 'model');
      $item = $this->$model->delete($id);
      $this->response($item, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }

  function get_all_model($model, $params = array())
  {
    try {
      $get_params = $this->get();
      $where = $this->get_inputs($params);
      $response = $this->$model->find($where);
      $this->response($response, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }

  function get_inputs($params)
  {
    $newItem = array();
    $get_params = $this->get();
    foreach ($params as $value) {
      if (isset($get_params[$value])) {
        $newItem[$value] = $get_params[$value];
      } else {
        throw new Exception("$value is undefined");
      }
    }
    return $newItem;
  }

  function remove($model, $param = 'id')
  {
    try {
      $id = $this->get($param);
      $item = $this->$model->delete($id);
      $this->response($item, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }

  function update($model, $params = array())
  {
    try {
      $input_values = $this->put();
      $where = $this->get_inputs($params);
      $item = array_merge($input_values, $where);
      $item = $this->$model->update($item['id'], $item);
      $this->response($item, 200);
    } catch (Exception $e) {
      $this->response(array("error" => $e->getMessage()), 404);
    }
  }
}
