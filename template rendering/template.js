const express=require('express');
const hbs=require('hbs');
var app=express();
app.get('/',(req,res)=>
{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        welcomeMessage:'Welcome to my Website',
        currentYear:new Date().getFullYear()
    });
});
app.get('/about',(req,res)=>

{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear:new Date().getFullYear()
    });
});

app.get('/bad',(req,res)=>

{
    res.send({
        errorMessage:'Unable to handle request'
    });
});
app.listen(3000,()=>{
    
    console.log('Server is up on port 3000');
}
);
