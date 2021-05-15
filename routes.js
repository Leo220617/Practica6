
router.on('/author', 
   () => AutoresController.index());
router.on('/author/show/:id',
   ({ data }) => AutoresController.show(data));
router.on('/author/edit/:id', 
   ({ data }) => AutoresController.edit(data));
router.on('/author/store',
   () => AutoresController.store());
router.on('/author/update/:id', 
   ({ data }) => AutoresController.update(data));
router.on('/author/create',
   () => AutoresController.create());
router.on('/author/delete/:id',
   ({ data }) => AutoresController.destroy(data));
router.on('/', 
   () => AutoresController.index());

///////////////Books///////////////
router.on('/book', 
   () => BookController.index());
router.on('/book/show/:id',
   ({ data }) => BookController.show(data));
router.on('/book/edit/:id', 
   ({ data }) => BookController.edit(data));
router.on('/book/store',
   () => BookController.store());
router.on('/book/update/:id', 
   ({ data }) => BookController.update(data));
router.on('/book/create',
   () => BookController.create());
router.on('/book/delete/:id',
   ({ data }) => BookController.destroy(data));
 


//////////////////Editorial///////////////////

router.on('/editorial', 
   () => EditorialesController.index());
router.on('/editorial/show/:id',
   ({ data }) => EditorialesController.show(data));
router.on('/editorial/edit/:id', 
   ({ data }) => EditorialesController.edit(data));
router.on('/editorial/store',
   () => EditorialesController.store());
router.on('/editorial/update/:id', 
   ({ data }) => EditorialesController.update(data));
router.on('/editorial/create',
   () => EditorialesController.create());
router.on('/editorial/delete/:id',
   ({ data }) => EditorialesController.destroy(data));
 

router.resolve();