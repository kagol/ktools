const path = require('path');
const shelljs = require('shelljs');
const program = require('commander');

const targetFile = path.resolve(__dirname, '../dist/package.json');
const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion+1}`;

let newVersion = defaultVersion;

// 从命令行参数中取版本号
program
  .option('-v, --versions <type>', 'Add release version number', defaultVersion);

program.parse(process.argv);

if (program.versions) {
  newVersion = program.versions;
}

console.log('newVersion:', newVersion);

function publish() {
  shelljs.sed('-i', '"name": "ktools"', '"name": "@kagol/ktools"', targetFile);
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile);
  shelljs.cd('dist');
  shelljs.exec('npm publish');
}

publish();
