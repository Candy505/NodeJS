const {readFile} =require('fs')

console.log("started as first task");

//becuase readFile is asynchronous and event loop calls callbacks later after cmpletion of immediate task

readFile('./content/first.txt','utf-8',(err,result)=> {
    if(err)
    {
        console.log(err)
    }

    console.log(result);
    console.log('completed the first task');

})

console.log('starting next task')