let courseArray = [];

courseArray.unshift("Java");
courseArray.push("C#");
courseArray.push("Node.js");
courseArray.push("HTML");
courseArray.unshift("CSS3");
courseArray.push(courseArray.shift());

courseArray.sort();
courseArray.forEach(function (course){
console.log(course);
});

courseArray.forEach(function (course){
    if(course[0] === "C") {
        console.log(course);
    }
    });

let sizeFourArray = courseArray.filter(function (course){
                                            return course.length === 4;
                                        });

sizeFourArray.forEach(function (course){
    console.log(course);
    });

let nodeJSIndex = courseArray.findIndex(function (course){
                        return course === "Node.js";
                    });

console.log(nodeJSIndex);

let mongoDBIndex = courseArray.findIndex(function (course){
    return course === "MongoDB";
});

console.log(mongoDBIndex);