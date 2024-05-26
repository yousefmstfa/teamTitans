// JavaScript source code
// array of object courses database
const courses = [
    {
        id: "ENGL1001",
        name: "Upper-Intermediate English",
        creditHours: 3
    },
    {
        id: "GERL101B1",
        name: "German I - B1 Track",
        creditHours: 3
    },
    {
        id: "CS116",
        name: "Computing Fundamentals",
        creditHours: 3
    },
    {
        id: "CS1160",
        name: "Computing Fundamentals Lab",
        creditHours: 1
    },
    {
        id: "ARB100",
        name: "Arabic 100",
        creditHours: 3
    },
    {
        id: "MATH101",
        name: "Calculus I",
        creditHours: 3
    },
    {
        id: "GERL102B1",
        name: "German II - B1 Track",
        creditHours: 3
    },
    {
        id: "NE101",
        name: "National Education",
        creditHours: 3
    },
    {
        id: "MATH102",
        name: "Calculus II",
        creditHours: 3
    },
    {
        id: "CS117",
        name: "Object-Oriented Programming",
        creditHours: 3
    },
    {
        id: "CS1170",
        name: "Object-Oriented Programming Lab",
        creditHours: 1
    },
    {
        id: "CS201",
        name: "Discrete Structures",
        creditHours: 3
    },
    {
        id: "CE212",
        name: "Digital Systems",
        creditHours: 3
    },
    {
        id: "CE2120",
        name: "Digital Systems Lab",
        creditHours: 1
    },
    {
        id: "GERL201B1",
        name: "German III - B1 Track",
        creditHours: 3
    },
    {
        id: "CE201",
        name: "Computer Architecture and Organization",
        creditHours: 3
    },
    {
        id: "CS222",
        name: "Theory of Algorithms",
        creditHours: 3
    },
    {
        id: "CS223",
        name: "Data Structures",
        creditHours: 3
    },
    {
        id: "CS263",
        name: "Database Management Systems",
        creditHours: 3
    },
    {
        id: "EE317",
        name: "Linear Algebra",
        creditHours: 3
    },
    {
        id: "GERL202B1",
        name: "German IV - B1 Track",
        creditHours: 3
    },
    {
        id: "MILS100",
        name: "Military Science",
        creditHours: 3
    },
    {
        id: "IE0121",
        name: "Probability and Statistics",
        creditHours: 3
    },
    {
        id: "CS264",
        name: "Visual Programming",
        creditHours: 3
    },
    {
        id: "CS342",
        name: "Software Engineering",
        creditHours: 3
    },
    {
        id: "CS355",
        name: "Web Technologies",
        creditHours: 3
    },
    {
        id: "CS451",
        name: "Artificial Intelligence",
        creditHours: 3
    },
    {
        id: "GERL301B1",
        name: "German V - B1 Track",
        creditHours: 3
    },
    {
        id: "CS323",
        name: "Computational Theory",
        creditHours: 3
    },
    {
        id: "CS332",
        name: "Computer Graphics",
        creditHours: 3
    },
    {
        id: "CE352",
        name: "Computer Networks",
        creditHours: 3
    },
    {
        id: "CE357",
        name: "Operating Systems",
        creditHours: 3
    },
    {
        id: "CE3570",
        name: "Operating Systems Lab",
        creditHours: 1
    },
    {
        id: "CS419",
        name: "Compiler Construction",
        creditHours: 3
    },
    {
        id: "GERL302B1",
        name: "German VI - B1 Track",
        creditHours: 3
    },
    {
        id: "ENGL1002",
        name: "Advanced English",
        creditHours: 3
    },
    {
        id: "CS330",
        name: "Image Understanding",
        creditHours: 3
    },
    {
        id: "CS356",
        name: "Information Security",
        creditHours: 3
    },
    {
        id: "CS391",
        name: "Field Training (160 hours)",
        creditHours: 0
    },
    {
        id: "CS416",
        name: "Systems Programming",
        creditHours: 3
    },
    {
        id: "CS477",
        name: "Mobile Computing",
        creditHours: 3
    },
    {
        id: "CS492",
        name: "Senior Project",
        creditHours: 3
    }
];

//preReqIds: [],
//postReqIds: [],
//coReqIds: []

// mearged code.
courses.forEach(course => {
    let courseElement = document.getElementById(course.id);

    courseElement.insertAdjacentHTML('afterbegin', `
        <p class="courseInfo no-hover" id="${course.id}"><i class="fa-solid fa-info"></i></p>
        <p class="courseCode no-hover" id="${course.id}">${course.id}</p>
        <p class="courseName no-hover" id="${course.id}">${course.name}</p>
        <p class="requisiteArrow no-hover" id="requisiteArrow-${course.id}"></p>
        <p class="creditHours no-hover" id="${course.id}">${course.creditHours} Cr Hr</p>
    `);
});





let subjectID;
let Post = [];
let Pre = [];
let PRS = [];

function getIdSubject(event) {
    subjectID = event.target.id;

    changePost(subjectID);
    changePre(subjectID);
    changePRS(PRS);


    document.getElementById(subjectID).addEventListener('mouseout', () => {
        for (let i = 0; i < Post.length; i++) {
            //document.getElementById(Post[i]).classList.replace('postReqSequence', 'course');
            document.getElementById(Post[i]).classList.remove('postReqSequence');
            document.getElementById("requisiteArrow-" + Post[i]).innerHTML = '';
        }
        for (let i = 0; i < Pre.length; i++) {
            //document.getElementById(Pre[i]).classList.replace('preReqCourse', 'course');
            document.getElementById(Pre[i]).classList.remove('preReqCourse');
            document.getElementById("requisiteArrow-" + Pre[i]).innerHTML = '';

        }
        for (let i = 0; i < PRS.length; i++) {
            //document.getElementById(PRS[i]).classList.replace('preReqSequence', 'course');
            document.getElementById(PRS[i]).classList.remove('preReqSequence');
            document.getElementById("requisiteArrow-" + PRS[i]).innerHTML = '';
        }
        Post.length = 0;
        Pre.length = 0;
        PRS.length = 0;
    });
}

//document.querySelectorAll('.course').forEach(element => {
//    element.addEventListener('mouseover', getIdSubject);
//});

let timeoutId;

document.querySelectorAll('.course').forEach(element => {
    element.addEventListener('mouseover', (event) => {
        timeoutId = setTimeout(() => {
            getIdSubject(event);
        }, 250);
    });

    element.addEventListener('mouseout', () => {
        clearTimeout(timeoutId);
    });
});

function getLocation(subjectID) {
    let l = 0;
    for (let i = 0; i < allCourses.length; i++) {
        if (allCourses[i].match(subjectID)) {
            console.log("l = " + l);
            return i;
        }
        l++;
    }
    console.log("l = -1");
    return -1;
}
function getPost(subjectID) { // Post-requisite
    let row = getLocation(subjectID);
    if (row == -1) {
        console.log('Course isn\'t exist in graph getPost');
        return;
    }

    for (let column = 0; column < allCourses.length; column++) {
        if (graph[row][column] !== "") {
            Post.push(graph[row][column]);
            getPost(graph[row][column]);
        }
    }


}
function changePost(subjectID) {
    getPost(subjectID);
    for (let i = 0; i < Post.length; i++) {
        document.getElementById(Post[i]).classList.add('postReqSequence');
        document.getElementById("requisiteArrow-" + Post[i]).innerHTML = `<i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-angle-right"></i>`;
    }
}

function getPre(subjectID) {
    let column = getLocation(subjectID);
    if (column == -1) {
        console.log('Course isn\'t exist in graph getPre');
        return;
    }
    for (let row = 0; row < allCourses.length; row++) {
        if (graph[row][column] !== "") {
            Pre.push(allCourses[row]);
        }
    }
}
function changePre(subjectID) {
    getPre(subjectID);
    for (let i = 0; i < Pre.length; i++) {
        document.getElementById(Pre[i]).classList.add('preReqCourse');
        document.getElementById("requisiteArrow-" + Pre[i]).innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
    }
}

function getPRS(subjectID) {
    let column = getLocation(subjectID);
    if (column == -1) {
        console.log('Course isn\'t exist in graph getDPR');
        return;
    }
    for (let row = 0; row < allCourses.length; row++) {
        if (graph[row][column] !== "") {
            PRS.push(allCourses[row]);
            getPRS(allCourses[row]);
        }
    }
}
function changePRS() {
    for (let i = 0; i < Pre.length; i++) {
        getPRS(Pre[i]);
    }

    for (let i = 0; i < PRS.length; i++) {
        if (contains(Pre, PRS[i]) == false) {
                    document.getElementById(PRS[i]).classList.add('preReqSequence');
            //document.getElementById(PRS[i]).classList.replace('course', 'preReqSequence');
            document.getElementById("requisiteArrow-" + PRS[i]).innerHTML = `<i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-arrow-left"></i>`;
        }
        else {
            continue;
        }

    }
}

let allCourses = ['ENGL1001', 'GERL101B1', 'CS116', 'CS1160', 'ARB100', 'MATH101', 'GERL102B1', 'NE101', 'MATH102', 'CS117', 'CS1170', 'CS201', 'CE212', 'CE2120', 'GERL201B1', 'CE201', 'CS222', 'CS223', 'CS263', 'EE317', 'GERL202B1', 'MILS100', 'IE0121', 'CS264', 'CS342', 'CS355', 'CS451', 'GERL301B1', 'CS323', 'CS332', 'CE352', 'CE357', 'CE3570', 'CS419', 'GERL302B1', 'ENGL1002', 'CS330', 'CS356', 'CS391', 'CS416', 'CS477', 'CS492'];
//length = 41

let graph =     [/*'ENGL1001', 'GERL101B1', 'CS116', 'CS1160', 'ARB100', 'MATH101', 'GERL102B1', 'NE101', 'MATH102', 'CS117', 'CS1170', 'CS201', 'CE212','CE2120', 'GERL201B1', 'CE201', 'CS222', 'CS223', 'CS263', 'EE317', 'GERL202B1', 'MILS100', 'IE0121', 'CS264', 'CS342', 'CS355', 'CS451', 'GERL301B1', 'CS323', 'CS332', 'CE352', 'CE357', 'CE3570', 'CS419', 'GERL302B1', 'ENGL1002', 'CS330', 'CS356', 'CS391', 'CS416', 'CS477', 'CS492'  */
/*'ENGL1001'*/  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ENGL1002', '', '', '', '', '', ''], // 2
/*'GERL101B1'*/ ['', '', '', '', '', '', 'GERL102B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 3
/*'CS116'*/     ['', '', '', '', '', '', '', '', '', 'CS117', 'CS1170', '', 'CE212', 'CE2120', '', '', 'CS222', 'CS223', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 4
/*'CS1160'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 5
/*'ARB100'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 6
/*'MATH101'*/   ['', '', '', '', '', '', '', '', 'MATH102', '', '', '', '', '', '', '', '', '', '', 'EE317', '', '', 'IE0121', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 7
/*'GERL102B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL201B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 8
/*'NE101'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 9
/*'MATH102'*/   ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 10
/*'CS117'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS263', '', '', '', '', 'CS264', 'CS342', 'CS355', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS477', ''], // 11
/*'CS1170'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 12
/*CS201*/       ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS222', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 12
/*CE212 */      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CE201', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 13
/*'CE2120'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 14
/*'GERL201B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL202B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 15
/*'CE201'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CE352', 'CE357', 'CE3570', '', '', '', '', '', '', '', '', ''], // 16
/*'CS222'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS451', '', 'CS323', '', '', '', '', 'CS419', '', '', '', '', '', '', '', ''], // 17
/*'CS223'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS451', '', 'CS323', 'CS332', '', '', '', 'CS419', '', '', 'CS330', '', '', 'CS416', '', ''], // 18
/*'CS263'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS264', 'CS342', 'CS355', '', '', '', '', '', '', '', '', '', '', '', 'CS356', '', '', 'CS477', ''], // 19
/*'EE317'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS332', '', '', '', '', '', '', 'CS330', '', '', '', '', ''], // 20
/*'GERL202B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL301B1', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 21
/*'MILS100'*/   ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 22
/*'IE0121'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 23
/*'CS264'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 24
/*'CS342'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 25
/*'CS355'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 26
/*'CS451'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 27
/*'GERL301B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL302B1', '', '', '', '', '', '', ''], // 28
/*'CS323'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 29
/*'CS332'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 30
/*'CE352'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 31
/*'CE357'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 32
/*'CE3570'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 33
/*'CS419'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 34
/*'GERL302B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 35
/*'ENGL1002'*/  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 36
/*'CS330'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 37
/*'CS356'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 38
/*'CS391'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 39
/*'CS416'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 40
/*'CS477'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 41
/*'CS492'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 42
];
function consoleArray(A) {
    for (let i = 0; i < A.length; i++) {
        console.log(A[i] + " ");
    }
}

function contains(Pre, subjectID) {
    for (let i = 0; i < Pre.length; i++) {
        if (subjectID === Pre[i]) return true;
    }
    return false;
}