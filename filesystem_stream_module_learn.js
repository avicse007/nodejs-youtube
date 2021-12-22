const fs = require('fs');

let readStream = fs.createReadStream('fileSystem_module_learn.js', 'utf8');
let writeStream = fs.createWriteStream('fileSystem_module_learn_Copy.js', 'utf8');
let chunkCount = 0;
readStream.on('data', chunks => {
    chunkCount++;
    console.log(chunkCount, chunks);
    writeStream.write(chunks);
    
});

// copy file stream using pip 
let writeStream2 = fs.createWriteStream('fileSystem_module_learn_CopyViaPIPE.js');
readStream.pipe(writeStream2);

//zipping a file using pipe
let writeStream3 = fs.createWriteStream('fileSystem_module_learn_CopyViaPIPE.js.gzip');
const zlip = require('zlib');
const gzip = zlip.createGzip();
readStream.pipe(gzip).pipe(writeStream3);