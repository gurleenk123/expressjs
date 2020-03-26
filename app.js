var expr=require('express');
//to use express.js we have to use it by func expr()
var app=expr();
//req=request res=respond
app.get('/',(req,res)=>

{
    var obj={
        'name':'Ritu',
        'section':'D1720'
    }
    res.send(obj.name+":"+obj.section);

}
);
app.get('/page1',(req,res)=>
{
    res.send("You are at Page1");
}
);
app.get('/page2',(req,res)=>

{
    res.send("You are at Page2");
}
);
app.listen(8000);