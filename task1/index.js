const express=require('express');
const app=express();

const students =
[
    "Sara",
    "Hagar",
    "Fatma",
    "Habiba"
]

const studentFun = (request,response) => 
{
let output='<ul>'
for(let i = 0; i< students.length; i++)
{
const student=students[i];
output+='<li>'+student+'</li>'
}
output+='</ul>'
response.send(output);
};

app.get('/students',studentFun);
app.listen(5000);
