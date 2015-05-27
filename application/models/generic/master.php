<?php

class Master extends CI_Model {

  // table name
  private $tbl = null;

  function __construct($table_name)
  {
    if (empty($table_name)) {
      throw new Exception('The table name is not defined');
    }
    $this->tbl = $table_name;
  }

  // gets persons
  function get_all()
  {
    return $this->db->get($this->tbl)->result();
  }

  // add new person
  function save($person)
  {
    $this->db->insert($this->tbl, $person);
    return $this->get_by_id($this->db->insert_id());
  }

  function get_by_id($id)
  {
    $this->db->where('id', $id);
    $item = $this->db->get($this->tbl)->row_array();
    // $item = $this->db->get_where('users',array('id'=>$id))->row_array();
    if (count($item)) {
      return $item;
    }
    return null;
  }

  function delete($id)
  {
    $item = $this->get_by_id($id);
    if (!is_null($item)) {
      $this->db->where('id', $id);
      $this->db->delete($this->tbl);
      return $item;
    }
    return null;
  }
}
