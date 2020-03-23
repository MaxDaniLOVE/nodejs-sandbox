const fs = require('fs'); // file system

const userName = 'Max Danilau';

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => { // creates file with setted name, data, also used callback
  if (err) {
    console.log(err);
    return;
  }
  console.log('success!')
})
