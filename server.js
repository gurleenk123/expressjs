var expr=require('express');
var app=expr();
app.get('/',(req,res)=>

{
    res.send({
        name:'Peter',
        likes:[
            'Biking',
            'Travelling'
        ]
    });

});
app.get('/about',(req,res)=>
{
    res.send('About Page');
});
app.get('/bad',(req,res)=>
{
    res.send({
        errorMessage:'Unable to handle request'
    });
});
app.listen(3000);