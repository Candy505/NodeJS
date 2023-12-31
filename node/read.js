const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err,data) => {
            if(err)
            {
                reject(err)
            }
        
            else{
                resolve(data)
            }
        })
        
    })
}

/*
getText("./content/first.txt")
.then(result => console.log(result))
.catch(err=> console.log(err))
*/


const start = async() => {
    try{
     const first = await getText('./content/first.txt');
     console.log("hey I am a hen")
    } catch(err){
    console.log(err)
    }
   
    
}

start()