//app is the entry point of our application and this is 
//coming from server.js file

module.exports = function(app){
  app.get('/', (req,res)=>{
    res.render('layouts/layout')  // the location -> layouts->foldername & layout.ejs->filename
  })
};

