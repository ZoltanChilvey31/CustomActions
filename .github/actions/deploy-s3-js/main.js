const core = require('actions/core');
const github = require('actions/github');
const exec = require('actions/exec');
function run(){
    //1) get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const dist = core.getInput('dist-folder', {required: true});
    
    //2) upload files
    const s3Uri= `s3://${bucket}`;
    exec.exec('aws s3 sync ${dist} ${s3Uri}');
    core.notice('Hello from custom JS Action');
}
run();