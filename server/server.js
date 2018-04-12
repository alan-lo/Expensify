const Express = require('express');
const App = Express();
const Morgan = require('morgan');
const Path = require('path');
const publicPath = Path.join(__dirname,'..' , 'public');
const port = process.env.PORT || 3000;

App.use(Morgan('tiny'));

App.use(Express.static(publicPath));

App.get('*', (req, res)=>{
   res.sendFile(Path.join(publicPath, 'index.html'));
})

App.listen(port, ()=>{
  console.log('server is running.');  
})