#!/usr/bin/env node
const Runner = require('./runner');
const runner = new Runner;

(async () => {
   await runner.collectFiles(process.cwd());
   runner.runTest();
})();

