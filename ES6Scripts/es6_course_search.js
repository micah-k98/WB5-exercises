"use strict"

function getCourses()
{
    return [
        {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
        },
        {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
        },
        {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
        },
        {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
        },
        {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
        }
    ];
}

function isItPROG200(currentCourse) 
{
    return currentCourse.CourseId == "PROG200";
}

function isTitleOfPROJ500(currentCourse)
{
    return currentCourse.CourseId == "PROJ500";
}

function costs50DollarsOrLess(currentCourse)
{
    return +(currentCourse.Fee) <= 50;
}

function classesInClassroom1(currentCourse)
{
    return currentCourse.Location == "Classroom 1";
}

const courses = getCourses();

let course = courses.find(isItPROG200);
console.log("When does the PROG200 course start?");
console.log(`  ${course.StartDate}`);

course = courses.find(isTitleOfPROJ500);
console.log("What is the title of the PROJ500 course?");
console.log(`  ${course.Title}`);

course = courses.filter(costs50DollarsOrLess);
console.log("What are the titles of the courses that cost $50 or less?");
console.table(course);

course = courses.filter(classesInClassroom1);
console.log("What classes meet in Classroom 1?");
console.table(course);

 
