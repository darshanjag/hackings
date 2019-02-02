    const readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("enter the radius",function(radius){
    	r=radius;
    	console.log(r);
    	rl.close();
    });
   
    
    