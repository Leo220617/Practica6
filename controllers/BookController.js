class BookController
{
    static index() {
        fetch('/server/book',
         { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/book/list.html',
             {'title':'book List',
              'books':data},'content')();}
         )
      }
    
      static show(params) {
        
        fetch('/server/book/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return view('/views/book/details.html',
              {'title':'book Details',
               'book':data,'show':true},'content')();}
         )
      }
    
      static create() {
        var item = {'title':'','edition':'',
        'copyright':'','language':''
        ,'pages':'','author':''
        ,'author_id':'','publisher':''
        ,'publisher_id':''};

        return view('/views/book/details.html',
              {'title':'book Create',
              'book':item,'create':true},'content')();
      }
    
      static store() {
        var title = Input.get('title');
      var edition = Input.get('edition');
      var copyright = Input.get('copyright');
      var language = Input.get('language');
      var pages = Input.get('pages');
      var author = Input.get('author');
      var author_id = Input.get('author_id');
      var publisher = Input.get('publisher');
      var publisher_id = Input.get('publisher_id');

       var item = {'title': title,'edition': edition,
      'copyright': copyright,'language': language
      ,'pages': pages,'author': author
      ,'author_id': author_id,'publisher': publisher
      ,'publisher_id': publisher_id};

        fetch('/server/book',
          { headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/book');
          }
        )
      }
    
      static edit(params) {
        fetch('/server/book/'+params.id,
          { headers: {'Accept': 'application/json'}})
          .then((response) => response.json())
          .then((data) => {
            return view('/views/book/details.html',
              {'title':'book Edit',
               'book':data,'edit':true},'content')();}
         )
      }
    
      static update(params) {
        var title = Input.get('title');
      var edition = Input.get('edition');
      var copyright = Input.get('copyright');
      var language = Input.get('language');
      var pages = Input.get('pages');
      var author = Input.get('author');
      var author_id = Input.get('author_id');
      var publisher = Input.get('publisher');
      var publisher_id = Input.get('publisher_id');

       var item = {'title': title,'edition': edition,
      'copyright': copyright,'language': language
      ,'pages': pages,'author': author
      ,'author_id': author_id,'publisher': publisher
      ,'publisher_id': publisher_id};
      
        fetch('/server/book/'+params.id,
          { headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(item)})
          .then((data) => {
             router.navigate('/book');
           }
         )
      }
    
      static destroy(params) {
        fetch('/server/book/'+params.id,
          { method: 'DELETE'})
          .then((data) => {
             router.navigate('/book');
           }
         )
      }
}