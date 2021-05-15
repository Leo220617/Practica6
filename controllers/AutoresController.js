class AutoresController
{
    static index() {
        fetch('/server/author',
         { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/author/list.html',
             {'title':'author List',
              'authors':data},'content')();}
         )
      }
    
      static show(params) {
        
        fetch('/server/author/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/author/details.html',
              {'title':'author Details',
               'author':data,'show':true},'content')();}
         )
      }
    
      static create() {
        var item = {'author':'','nationality':'',
    'birth_year':'','fields':''
    ,'books__book_id':'','books__title':''
      };
        return view('/views/author/details.html',
              {'title':'author Create',
              'author':item,'create':true},'content')();
      }
    
      static store() {
        var author = Input.get('author');
        var nationality = Input.get('nationality');
        var birth_year = Input.get('birth_year');
        var fields = Input.get('fields');
        var books__book_id = '1';
        var books__title = 'Prueba';
       // var books__title_id = Input.get('books__title_id');
        var item = {'author': author,'nationality': nationality,
        'birth_year': birth_year,'fields': fields
        ,'books__book_id': books__book_id,'books__title': books__title
        };

        fetch('/server/author',
          { headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/author');
          }
        )
      }
    
      static edit(params) {
        fetch('/server/author/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            return view('/views/author/details.html',
              {'title':'author Edit',
               'author':data,'edit':true},'content')();}
         )
      }
    
      static update(params) {
        var author = Input.get('author');
        var nationality = Input.get('nationality');
        var birth_year = Input.get('birth_year');
        var fields = Input.get('fields');
        var books__book_id = '1';
        var books__title = 'Prueba';

         var item = {'author': author,'nationality': nationality,
        'birth_year': birth_year,'fields': fields
        ,'books__book_id': books__book_id,'books__title': books__title
        };
        fetch('/server/author/'+params.id,
          { headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/author');
           }
         )
      }
    
      static destroy(params) {
        fetch('/server/author/'+params.id,
          { method: 'DELETE'})
          .then((data) => {
             router.navigate('/author');
           }
         )
      }
}