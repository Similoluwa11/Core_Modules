const fs = require('node:fs');
const path = require('node:path');
//Create a directory/folder named "Students"
const folderPath = path.join(__dirname, 'Students');
const filePath = path.join(__dirname, 'Students', 'user.js');
const newFilePath = path.join(__dirname, 'Names', 'user.js');
const newFolderPath = path.join(__dirname, 'Names');
const renamedFilePath = path.join(__dirname, 'Names', 'similoluwa_akhigbe.js');
const fileContent = '{Age = 20; Nationality = Nigerrian; Sex = Female; School= School Of Engineering';
/*const newFolder = fs.mkdir(folderPath, (err)=>{
    if(err){
        console.log(`This is the ${err}`);
        return
    }
    console.log('Folder created successfully');
})*/
//In the Students directory, create a file named user.js
/*
const newFile = fs.writeFile(filePath, '',(err)=>{
    if(err){

        console.log(err);
        return
    }
    console.log('File created successfully');
})*/
//Update the Students directory to 'Names'
/*
const renamedFolder = fs.rename(folderPath, newFolderPath, (err)=>{
    if(err){
        console.log(`This is the error${err}`);
        return
    }
    console.log('Folder renamed suuccessfuully')
})*/
//Add your name as content to the file user.js
/*
const updatedFile = fs.writeFile(newFilePath, 'Similoluwa',(err)=>{
    if(err){

        console.log(err);
        return
    }
    console.log('File updated successfully');
})*/
//Update the file and add your age, sex, nationality, phone number and any other information about yourself
/*const newlyUpdatedFile = fs.appendFile(newFilePath, fileContent, (err)=>{
    if(err){
        console.log(`This is the error${err}`);
        return
    }
    console.log('Updating successful')
});*/
//Update the file user.js to (your_name).js

/*const renamedFile = fs.rename(newFilePath, renamedFilePath, (err)=>{
    if(err){
        console.log(`This is the error${err}`);
        return
    }
    console.log('File renamed suuccessfully')
})*/
//Read the contents from (your_name).js using fs.open or fs.readFile
/*const readingFile = fs.readFile(renamedFilePath, 'utf8', (err, data)=>{
    if(err){
        console.log(`an error occurred here ${err}`);
        return
    }
    console.log(data);
})*/
//Delete the file (your_name).js
/*const deleteFile = fs.rm(renamedFilePath, (err)=>{
    if(err){
        console.log(`This is the error${err}`);
        return
    }
    console.log('Deleted file successfully')
})*/
//Delete the directory 'Names'
/*const deleteFolder = fs.rmdir(newFolderPath, (err)=>{
    if(err){
        console.log(`This is the error${err}`);
        return
    }
    console.log('Folder deleted successfully')
})*/



