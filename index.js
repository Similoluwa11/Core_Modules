const path = require('node:path');
const os = require('node:os');
//Print out the current working directory
const cwd = path.resolve();
console.log(cwd);
//Print out the seperator of a given file path
const seperator = path.sep;
console.log(seperator);
//Print out the extension name of a file path
const extName = path.extname('.\index.js');
console.log(extName);
//Print out the process id of the current working processes
const processId = process.pid;
console.log(processId);
//Print out the user information of the os
const userInfo = os.userInfo([]);
console.log(userInfo);
//Print out the platform of an operating system
const platform = os.platform();
console.log(platform);
