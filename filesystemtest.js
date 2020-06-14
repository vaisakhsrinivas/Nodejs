var fs = require('fs');

fs.writeFile('./hello.txt', 'Hello Nodejs', function(err){
    if (!err){
        fs.readFile('./hello.txt', function(err, data) {
            if (!err){
                console.log(data.toString());
            }
        });

    }
});