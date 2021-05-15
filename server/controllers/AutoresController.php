<?php
  // file: controllers/ProfessorController.php

  require_once('models/autores.php');

  class AutoresController extends Controller {

    public function index() {  
      return autores::all();
    }  
    
    public function store($request) {
      return autores::create($request);
    }  
    
    public function show($id) {  
      return autores::find($id);
    }  
    
    public function update($request,$id) {  
      return autores::update($id,$request);
    }  
    
    public function destroy($id) {  
      return autores::destroy($id);
    }
    
  }
?>