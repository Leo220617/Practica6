class EditorialesController
{
    static index() {
        fetch('/server/editorial',
         { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/editorial/list.html',
             {'title':'editorial List',
              'editorials':data},'content')();}
         )
      }
    
      static show(params) {
        
        fetch('/server/editorial/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/editorial/details.html',
              {'title':'editorial Details',
               'editorial':data,'show':true},'content')();}
         )
      }
    
      static create() {
        var item = {'publisher':'','country':'',
      'founded':'','genere':''
      ,'books__book_id': '','books__title':''
      };

        return view('/views/editorial/details.html',
              {'title':'editorial Create',
              'editorial':item,'create':true},'content')();
      }
    
      static store() {
        var publisher = Input.get('publisher');
      var country = Input.get('country');
      var founded = Input.get('founded');
      var genere = Input.get('genere');
      var books__book_id = Input.get('books__book_id');
      var books__title = Input.get('books__title');

      var item = {'publisher':publisher,'country':country,
      'founded':founded,'genere':genere
      ,'books__book_id':books__book_id,'books__title':books__title
      };

        fetch('/server/editorial',
          { headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/editorial');
          }
        )
      }
    
      static edit(params) {
        fetch('/server/editorial/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            return view('/views/editorial/details.html',
              {'title':'editorial Edit',
               'editorial':data,'edit':true},'content')();}
         )
      }
    
      static update(params) {
        var publisher = Input.get('publisher');
        var country = Input.get('country');
        var founded = Input.get('founded');
        var genere = Input.get('genere');
        var books__book_id = Input.get('books__book_id');
        var books__title = Input.get('books__title');
  
        var item = {'publisher':publisher,'country':country,
        'founded':founded,'genere':genere
        ,'books__book_id':books__book_id,'books__title':books__title
        };
        fetch('/server/editorial/'+params.id,
          { headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/editorial');
           }
         )
      }
    
      static destroy(params) {
        fetch('/server/editorial/'+params.id,
          { method: 'DELETE'})
          .then((data) => {
             router.navigate('/editorial');
           }
         )
      }
}