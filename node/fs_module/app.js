const fs = require("fs");
fs.writeFile("example.txt","fast time write file ",(error)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        // console.log("file created");
        fs.readFile("example.txt","utf-8",(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(data);
            }
        })
    }
})

// fs.unlink("example.txt",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("deleteing a file");
//     }
// })