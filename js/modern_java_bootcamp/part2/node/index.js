#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
   if (err) throw new Error(err);    
   const statPromises = filenames.map(filename => lstat(path.join(targetDir, filename)));
   const allStats = await Promise.all(statPromises);
   for (const stats of allStats) {
      const index = allStats.indexOf(stats)
      stats.isFile() ? 
         console.log(filenames[index]) : 
         console.log(filenames[index], '---');
   };
});

// const lstat = util.promisify(fs.lstat);

// const lstat = (filename) => {
//    return new Promise((resolve, reject) => {
//       fs.lstat(filename, (err, stats) => {
//          if (err) reject(err);
//          resolve(stats);
//       })
//    });
// }