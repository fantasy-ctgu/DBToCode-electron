/*
 * @Author: Fantasy
 * @Date: 2020-01-19 10:12:20
 * @LastEditors: Fantasy
 * @LastEditTime: 2020-03-05 21:54:31
 * @Descripttion: 
 * @Email: 776474961@qq.com
 */
const shell = require('shelljs');
const electron = require('electron');
const fs = require('fs');
const path = require('path');
let {
    PythonShell
} = require('python-shell');

var sqlFile = "C:\\Users\\Fantasy\\Desktop\\tutor.sql",
    templateDir = "C:\\Users\\Fantasy\\Desktop\\template\\java\\springboot",
    outputDir = "C:\\Users\\Fantasy\\Desktop\\outputdir";

function chooseSqlFile() {
    var btnid = "sqlFile";
    // 创建input标签
    var inputObj = document.createElement('input');
    // 设置属性
    inputObj.setAttribute('id', btnid);
    inputObj.setAttribute('type', 'file');
    inputObj.setAttribute("style", 'visibility:hidden');
    if (false) { // 如果要选择路径，则添加以下两个属性
        inputObj.setAttribute('webkitdirectory', "");
        inputObj.setAttribute('directory', "");
    }
    // 添加到DOM中
    document.body.appendChild(inputObj);
    // 添加事件监听器
    inputObj.addEventListener("change", function () {
        var inputObj = document.getElementById(btnid);
        var files = inputObj.files;
        try {
            if (files.length > 1) {
                alert('当前仅支持选择一个文件/文件夹');
            } else {
                sqlFile = files[0].path;
                console.log(sqlFile);
            }
            // 从DOM中移除input
            document.body.removeChild(inputObj);
        } catch (error) {
            alert(error)
        }
    });
    // 模拟点击
    inputObj.click();
}

function chooseTemplateDir() {
    var btnid = "templateDir";
    // 创建input标签
    var inputObj = document.createElement('input');
    // 设置属性
    inputObj.setAttribute('id', btnid);
    inputObj.setAttribute('type', 'file');
    inputObj.setAttribute("style", 'visibility:hidden');
    if (true) { // 如果要选择路径，则添加以下两个属性
        inputObj.setAttribute('webkitdirectory', "");
        inputObj.setAttribute('directory', "");
    }
    // 添加到DOM中
    document.body.appendChild(inputObj);
    // 添加事件监听器
    inputObj.addEventListener("change", function () {
        var inputObj = document.getElementById(btnid);
        var files = inputObj.files;
        try {
            if (files.length > 1) {
                alert('当前仅支持选择一个文件/文件夹');
            } else {
                templateDir = files[0].path;
                console.log(templateDir);
            }
            // 从DOM中移除input
            document.body.removeChild(inputObj);
        } catch (error) {
            alert(error)
        }
    });
    // 模拟点击
    inputObj.click();
}

function chooseOutputDir() {
    var btnid = "outputDir";
    // 创建input标签
    var inputObj = document.createElement('input')
    // 设置属性
    inputObj.setAttribute('id', btnid);
    inputObj.setAttribute('type', 'file');
    inputObj.setAttribute("style", 'visibility:hidden');
    if (true) { // 如果要选择路径，则添加以下两个属性
        inputObj.setAttribute('webkitdirectory', "");
        inputObj.setAttribute('directory', "");
    }
    // 添加到DOM中
    document.body.appendChild(inputObj);
    // 添加事件监听器
    inputObj.addEventListener("change", function () {
        var inputObj = document.getElementById(btnid);
        var files = inputObj.files;
        try {
            if (files.length > 1) {
                alert('当前仅支持选择一个文件/文件夹')
            } else {
                outputDir = files[0].path;
                console.log(outputDir);
            }
            // 从DOM中移除input
            document.body.removeChild(inputObj);
        } catch (error) {
            alert(error)
        }
    });
    // 模拟点击
    inputObj.click();
}

function startTranslate() {
    let scriptPath = path.join(__dirname, '');
    if (!(sqlFile && templateDir && outputDir)) {
        alert("Please choose before translation");
        return false;
    }
    let shellCmd = path.join(scriptPath, "DBToCode.exe") + " -db " + sqlFile + " -intem " + templateDir + " -outem " + outputDir;
    shell.config.execPath = shell.which('node').toString()
    console.log(scriptPath);
    console.log(shellCmd);
    console.log(shell.exec(shellCmd));
}

// PythonShell.run(path.join(__dirname, '../service/DBToCode.py'), {
//     mode: 'text',
//     pythonOptions: ['-u'], // get print results in real-time
//     args: ['-db', 'D:\\Book Store.sql', '-intem', 'D:\\GitHub\\DBToCode\\template\\java\\springboot', '-outem', 'C:\\Users\\Fantasy\\Desktop\\test']
// }, function (err, results) {
//     if (err) throw err;
//     console.log('results:', results);
// });