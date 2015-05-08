var  express= require('express');
var app = express();
var port = 3000;

app.listen(port, function(req, res){
	console.log('listen at port: ', port);
})

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname));