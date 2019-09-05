var express = require('express');
var router = express.Router();

let students = [
    {
        firstName: "Matthias",
        lastName: "Sam",
        age: 29,
        email: "msam@my.edgetechacademy.edu"
    },
    {
        firstName: "Tim",
        lastName: "Wenzel",
        age: 45,
        email: "twenzeltwenzel@outlook.com"
    },
    {
        firstName: "Joshua",
        lastName: "Carter",
        age: 32,
        email: "upsetitguy@gmail.com"
    },
    {
        firstName: "Brandon",
        lastName: "Anderson",
        age: 34,
        email: "banderson6@my.edgetechacademy.edu"
    },
    {
        firstName: "Ken",
        lastName: "Thepvongsa",
        age: 40,
        email: "thepvongsa@yahoo.com"
    },
    {
        firstName: "Marcus",
        lastName: "Beach",
        age: 36,
        email: "twistymb@gmail.com"
    },
    {
        firstName: "Tony",
        lastName: "Orozco",
        middleName: "Frank",
        age: 35,
        email: "aorozco1@my.edgetechacademy.edu"
    }
];
/*[
    {
        firstName: "Marcus",
        lastName: "Beach",
        age: 36
    },
    {
        firstName: "Marcus2",
        lastName: "Beach2",
        age: 37
    },
    {
        firstName: "Marcus3",
        lastName: "Beach3",
        age: 38
    }
]*/

/* GET Student */
router.get('/getStudent', function(req, res, next) {
    let name = req.query.name;
    let studentsFound = [];
    let retVal = "";
    students.forEach(function (student){
        if(student.firstName.startsWith(name) || student.lastName.startsWith(name) || name == null){
            studentsFound.push(student);
        }
    })
    studentsFound.forEach(function (student){
        retVal += "Name: " + student.firstName + " " + student.lastName + "<br>" +
                  "Age: " + student.age + "<br>" + 
                  "email: " + student.email + "<br><hr>";
    })
    res.send(retVal);
});

router.get('/sortStudent', function(req, res, next) {
    students = students.sort(function (a, b) {
        return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
    });
    let retVal = "";
    students.forEach(function (student){
        retVal += "Name: " + student.firstName + " " + student.lastName + "<br>" +
                  "Age: " + student.age + "<br>" + 
                  "email: " + student.email + "<br><hr>";
    });
    retVal.t
    res.send(retVal);
});

router.get('/getStudentByAge', function(req, res, next) {
    let age = req.query.age;
    let sage = req.query.sage;
    let eage = req.query.eage;
    let studentsFound = [];
    let retVal = "";
    students.forEach(function (student){
        if(student.age == age || (student.age >= sage && student.age <= eage)){
            studentsFound.push(student);
        }
    })
    studentsFound.forEach(function (student){
        retVal += "Name: " + student.firstName + " " + student.lastName + "<br>" +
                    "Age: " + student.age + "<br>" + 
                    "email: " + student.email + "<br><hr>";
    })
    //res.send("Name: " + studentsFound.firstname + " " + studentsFound.lastName);
    res.send(retVal);
});

router.get('/addStudent', function(req, res, next) {
    let fName = req.query.fname;
    let lName = req.query.lname;
    let sage = req.query.age;
    let semail = req.query.email;

    if(fName != null && lName != null && sage != null && semail != null) {
        let stu = { firstName: fName, lastName: lName, age: sage, email: semail };
        students.push(stu);
        retVal = "Student " + fName + " " + lName + " added.";
    }

    if(fName == null || lName == null || sage == null || semail == null) {
        retVal = "missing info";
    }
    res.send(retVal);
});

router.get('/deleteStudent', function(req, res, next) {
    let fName = req.query.fname;
    let found = 0;
    let delList = [];
    let retVal = "";
    let newList = students.filter(function (student){
        if(student.firstName != fName){
            return student;
        } 
        else {
            found++;
            delList.push(student);
        }
    });
    if(found > 0){
        students = newList;
        delList.forEach(function (student){
            retVal += "Name: " + student.firstName + " " + student.lastName + "<br>" +
                        "Age: " + student.age + "<br>" + 
                        "email: " + student.email + "<br><hr>";
        });
    }
    
    res.send("Deleted " + found + " students. <hr>" + retVal);
});

router.post("/returnStudent", function (req, res, next) {
    let matchingStudents = [];
    if (req.body.firstName) {
        matchingStudents = students.filter(student => 
            student.firstName.toLowerCase().startsWith(req.body.firstName.toLowerCase())
            );
    }
    if (req.body.lastName) {
        matchingStudents = students.filter(student => 
            student.lastName.toLowerCase().startsWith(req.body.lastName.toLowerCase())
            );
    }
    if (req.body.age) {
        matchingStudents = students.filter(student => 
            student.age == req.body.age);
    }
    if (req.body.email) {
        matchingStudents = students.filter(student => 
            student.email.toLowerCase().startsWith(req.body.email.toLowerCase())
            );
    }
    let response = "";
    matchingStudents.forEach(function (student){
        response += `Name: ${student.firstName} ${student.lastName}<br>
                     Age: ${student.age}<br>
                     Email: ${student.email}<hr>`
    })
    
    res.send(response);
});


/* GET show all students listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});

module.exports = router;
