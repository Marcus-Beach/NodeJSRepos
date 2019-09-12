"use strict";

var express = require('express');
let jobs = require('./loadRecords');                               //  load the jobs module

var router = module.exports = express.Router();

let jobList = jobs.addRecords('jobs.csv', createJob);                              //  read the jobs.csv file


//  Just a test to bring up the page. If you enter /final in the browser it should list all jobs.
router.get('/', function (req, res) {
    res.render('final', {jobs: jobList, average: 0, title: "All Jobs"});
});


//  TODO 0 - just for fun. A check to see if the code works
//  Use this URL
//      http://localhost:3000/final/check/10
//  The 10th job will be listed. change the number to show other jobs.
router.get('/check/:check', function(req, res) {
    res.send(jobList[req.params.check]);
});


//  Here is your endpoint needed to service the request from the POST request from the little mini form
router.post('/search', function (req, res) {
    //  TODO 1 - (6 pts) you need FIVE variables to do the following
    //  create your variables here
    //  TODO 1A you need an array for the jobs that were found by your code
    let outList = [];
    //  TODO 1B you need the average salary for the list of jobs being returned. This one is here for you already
    let average = 0;
    let topSalary = 0;
    //  TODO 1C you need a title for the page - "Jobs", "Jobs for Managers in Dallas", "Jobs in Fort Worth"
    let pageTitle = "Jobs";
    //  TODO 1D you need a variable to hold the city entered by the user
    let city = req.body.city;
    //  TODO 1E you need another variable to hold the category entered by the user
    let cat = req.body.category;
    //  TODO 2 - (40 pts) List of things to do - look at TODOs 4 and 5. You will create functions that you can use here. Use them
    //      TODO A - IF the category and city fields are empty THEN list ALL jobs
    if(!city && !cat){
        outList = jobList;
        pageTitle = "All Jobs";
    } else
    //      TODO B - IF the category and city fields BOTH have data then THEN list all jobs for that city for that category
    if(city && cat){
        outList = getJobsByCategory(getJobsByCity(jobList, city), cat);
        pageTitle = "Jobs for " + cat + " in " + city;
    } else
    //      TODO C - IF the category field has data THEN list all jobs in that category
    if(cat){
        outList = getJobsByCategory(jobList, cat);
        pageTitle = "Jobs for " + cat;
    } else
    //      TODO D - IF the city field has data THEN list all jobs in that city
    if(city){
        outList = getJobsByCity(jobList, city);
        pageTitle = "Jobs in " + city;
    }
    //  TODO EXTRA CREDIT (20 pts) - find the job with the highest salary
    topSalary = getTopSalary(outList);
    topSalary = topSalary.formatMoney(0, "$ ");
    //  this will format the money amount nicely
    average = getAverageSalary(outList);
    average = average.formatMoney(0, "$ ");
    res.render('final', {jobs: outList, average: average, title: pageTitle, topsalary: topSalary});
});


//  TODO 3 - (25pts) - Add a route.get to respond to a request from the browser (15 pts for the code)
//                  The router path will be "/job/:jobId"
//                  Your code will use the req.params.jobId field
//                  and find a job from the jobList array with that jobId. (what is the id field called in the Job object???)
//                  your code will use res.render to display the job.pug page showing details about the selected job
//                  job.pug will need to be created by you to show the details for the one job selected (10 pts for the pug file)
router.get('/job/:jobId', function (req, res) {
    let jobIndex = 0;
    console.log("Looking for " + req.params.jobId);
    jobList.forEach(function(j, i){
        if(j.id == req.params.jobId){
            jobIndex = i;
        }
    });
    let job = jobList[jobIndex];
    console.log(job);
    res.render('job', {job: job});
});
//      your code here -
//          You need to write all of the lines of code
//              router.get..... opening and closing braces and all of the code in between
// this will show the job.pug page you created with the job you found. Or code similar to this
//  res.render('job', justTheOneJob);


/*
 *      getJobsByCategory - create an array with all jobs that are in the desired category
 *          parameter(s):   the list of jobs
 *                          the category we are looking for
 *      Given a list of jobs and a city, build an array with jobs matching that city
 *          your code will call this function similar to these examples
 *              categoryList = get JobsByCategory(jobListArray, 'Managers')
 *              vpList = getJobsByCategory(dallasList, 'Vice Pres')
 *              directorList = get JobsByCategory(jobs, 'Director')
 */
//  TODO 4 - (15pts) -  Create the getJobsByCategory function
function getJobsByCategory(jobs, cat) {
    //  TODO filter the list of jobs and find the jobs that match the job title
    return jobs.filter(job => job.category.toLowerCase() == cat.toLowerCase());
    //  you will return that array back to your calling function
}


/*
 *      getJobsByCity - create an array with all jobs that are in the desired city
 *          parameter(s):   the list of jobs
 *                          the city we are looking for
 *      Given a list of jobs and a city, build an array with jobs matching that city
 *          your code will call this function like these examples
 *              cityList = get getJobsByCity(jobListArray, 'Dallas')
 *              fwMgrsList = getJobsByCity(directorList, 'Fort Worth')
 *              cityList = get getJobsByCity(jobs, req.params.city)
 */
//  TODO 5 - (15pts) -  Create the getJobsByCity function
function getJobsByCity(jobs, city) {
    //  filter the list of jobs and find the jobs that match the city
    return jobs.filter(job => job.city.toLowerCase() == city.toLowerCase());
    //  when you are done return that array back to your calling function
}


/*
 *      getAverageSalary - Calculate the average salary for a given list of jobs
 *          parameter(s):   a list of jobs
 *          return:         the average salary of all jobs in that list
 *
 */
function getAverageSalary(jobs) {
    // TODO 6 - (10 pts) Calculate the average salary for a given list of jobs
    let avg = 0;
    jobs.forEach(job => avg += parseInt(job.salary));
    avg /= jobs.length;
    return avg;
}

function getTopSalary(jobs) {
    let top = 0;
    jobs.forEach(function(job){
        if(top < parseInt(job.salary)){
            top = parseInt(job.salary);
        }
    });
    return top;
}


function createJob(fields) {
    return new Job(fields);
}


function Job(fields) {
    //  Job Search,Company,Salary,Application Date,City,Title,Category
    this.id         = fields[0];
    this.company    = fields[1];
    this.salary     = fields[2]*1;
    this.appliedOn  = fields[3];
    this.city       = fields[4];
    this.title      = fields[5];
    this.category   = fields[6];
}