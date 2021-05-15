<?php
  // file: controllers/ProfessorController.php

  require_once('models/editorial.php');

  class EditorialesController extends Controller {

    public function index() {  
      return editorial::all();
    }  
    
    public function store($request) {
      return editorial::create($request);
    }  
    
    public function show($id) {  
      return editorial::find($id);
    }  
    
    public function update($request,$id) {  
      return editorial::update($id,$request);
    }  
    
    public function destroy($id) {  
      return editorial::destroy($id);
    }
  
  }
?>