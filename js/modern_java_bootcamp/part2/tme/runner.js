const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const render = require('./render');

const forbiddenDirs = ['node_modules'];

class Runner {
   constructor() {
      this.testFiles = [];
   }

   async runTest() {
      for (const file of this.testFiles) {
         console.log(chalk.grey(`---- ${file.shortName}`));
         const beforeEaches = [];
         global.render = render;
         global.beforeEach = (fn) => {
            beforeEaches.push(fn);
         };
         global.it = async (desc, fn) => {
            beforeEaches.forEach(func => func());
            try {
               await fn();
               console.log(chalk.green(`\tOK - ${desc}`));
            } catch (error) {
               const message = error.message.replace(/\n/g, '\n\t\t');
               console.log(chalk.red(`\tX - ${desc}`));
               console.log(chalk.red('\t',message));
            }
         };
         try {
            require(file.name);
         } catch (error) {
            console.log(chalk.red('X - Error Loading File', file.name));
            console.log(chalk.red(error));
         }
      }
   }

   async collectFiles(targetPath) {
      const files = await fs.promises.readdir(targetPath);
      for (const file of files) {
         const filepath = path.join(targetPath, file);
         const stats = await fs.promises.lstat(filepath);
         if (stats.isFile() && file.includes('.test.js')) {
            this.testFiles.push({ name: filepath, shortName: file });
         } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
            const childFiles = await fs.promises.readdir(filepath);
            files.push(...childFiles.map(f => path.join(file, f)));
         }
      }
   }
}

module.exports = Runner;