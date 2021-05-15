<?php
 	
		  Route::resource('server/author', 'AutoresController');
		Route::resource('server/book', 'BookController');
		//Route::get('/','BookController@index');
    	Route::resource('server/editorial','EditorialesController');
		
		// Authentication Routes  
		Route::get('login', 
		'LoginController@showLoginForm');
Route::get('loginFails', 
		'LoginController@LoginFails');           
Route::post('login', 
				 'LoginController@login');  
Route::get('logout', 'LoginController@logout');  

// Registration Routes  
Route::get('register', 
   'RegisterController@showRegistrationForm');  
Route::post('register', 
			   'RegisterController@register');
  Route::dispatch();
?>
