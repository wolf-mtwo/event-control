<?php

class DemoModel extends CI_Model {
  // table name
  // private $demo= 'demo';

  // table name
  private $tbl_person= 'demo';

  function Person(){
    parent::Model();
  }
  // get number of persons in database
  function count_all(){
    return $this->db->count_all($this->tbl_person);
  }
  // get persons with paging
  function get_paged_list($limit = 10, $offset = 0){
    $this->db->order_by('id','asc');
    return $this->db->get($this->tbl_person, $limit, $offset);
  }
}
