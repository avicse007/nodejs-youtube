const fs = require('fs');

//Creating a file 
fs.writeFile('example.txt', "This is an example file", err => {
    if (err) {
        console.log("There is an error in writing file", err);
    }
    else {
        console.log('File is written successfully!!')
        fs.readFile("example2.log", 'utf8', (err, file) => {
            if (err) {
                console.log("There is an error in reading the file", err);
            } else {
                console.log(file);
                console.log('File read successfully');
            }
        });
    }
});

fs.rename('example.txt', 'example2.log', err => {
    if (err) {
        console.log(`Error in renaming file ${err}`);
    }
    else {
        console.log("File rename successfully");
    }
});

fs.appendFile('example2.log', '\n This is an appending example. \n', err => {
    if (err) {
        console.log(`Error in appending file ${err}`);
    }
    else {
        console.log("File is appended successfully");
    }
});

fs.unlink('example2.log', err => {
    if (err) {
        console.log(`Error in deleting file ${err}`);
    }
    else {
        console.log("File is delete successfully");
    }
});

fs.mkdir('example2', err => {
    if (err) {
        console.log(`Error in creating folder ${err}`);
    }
    else {
        console.log("Folder is created successfully");
    }
});

fs.rmdir('example2', err => {
    if (err) {
        console.log(`Error in deleting folder ${err}`);
    }
    else {
        console.log("Folder is deleted successfully");
    }
});

fs.readdir('./', (err,files) => {
    if (err) {
        console.log(`Error in reading folder ${err}`);
    }
    else {
        console.log([...files],"Dir is read successfully");
    }
});