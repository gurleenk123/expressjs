const express=require('express');
const _=require('lodash');
const port=process.env.PORT || 3000;
const hbs=require('hbs');
var app=express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('small',(text)=>

{
    return text.toLowerCase();
});



hbs.registerHelper('getCurrentYear',()=>
{
return new Date().getFullYear()
});

//getCurrentYear is helper name
hbs.registerHelper('Capt',(text)=>{
    return text.toUpperCase();
});
//Helper is form of function,declare a hlper name and define a helper call
//not need to make seperate hbs file
//capt is helper name use it in hbs file 


app.get('/',(req,res)=>
{
    res.render('main.hbs',
    {
        coursecode:'CAP 919',
        coursename:'Server Side Scripting With Node.js',
        date:new Date(),
        time:'2 to 3pm',
        room:'38-801'

    });
});





app.get('/reg',(req,res)=>

{
    res.render('reg.hbs',{
        coursecode:'CAP 919',
        coursename:'Server Side Scripting With Node.js',
        termid:'12345',
        grade:'A'
        
    });
});

app.get('/course',(req,res)=>
{
    res.render('course.hbs',{
        regno:'11818745',
        name:'ritu',
        batch:'2019',
        termid:'12345',
        coursecode:'CAP 919',
        grade:'A'

    });
});

app.listen(port,()=>{
    
    console.log(`Server is up on port ${port}`);
}
);