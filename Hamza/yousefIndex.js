const courses = [
    {
        id: "ENGL1001",
        name: "Upper-Intermediate English",
        creditHours: 3,
        preReqIds: [],
        postReqIds: ["ENGL1002"],
        coReqIds: []
    },
    {
        id: "GERL101B1",
        name: "German I - B1 Track",
        creditHours: 3,
        preReqIds: [],
        postReqIds: ["GERL102B1"],
        coReqIds: []
    },
    {
        id: "CS116",
        name: "Computing Fundamentals",
        creditHours: 3,
        preReqIds: [],
        postReqIds: ["CS117", "CS1170", "CE212", "CE2120", "CS222", "CS223"],
        coReqIds: []
    },
    {
        id: "CS1160",
        name: "Computing Fundamentals Lab",
        creditHours: 1,
        preReqIds: [],
        postReqIds: [],
        coReqIds: ["CS116"]
    },
    {
        id: "ARB100",
        name: "Arabic 100",
        creditHours: 3,
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "MATH101",
        name: "Calculus I",
        creditHours: 3,
        preReqIds: [],
        postReqIds: ["MATH102", "IE0121", "EE317"],
        coReqIds: []
    },
    {
        id: "GERL102B1",
        name: "German II - B1 Track",
        creditHours: 3,
        preReqIds: ["GERL101B1"],
        postReqIds: ["GERL201B1"],
        coReqIds: []
    },
    {
        id: "NE101",
        name: "National Education",
        creditHours: 3,
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "MATH102",
        name: "Calculus II",
        creditHours: 3,
        preReqIds: ["MATH101"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS117",
        name: "Object-Oriented Programming",
        creditHours: 3,
        preReqIds: ["CS116"],
        postReqIds: ["CS264", "CS263", "CS342", "CS355", "CS477"],
        coReqIds: ["CS1160"]
    },
    {
        id: "CS1170",
        name: "Object-Oriented Programming Lab",
        creditHours: 1,
        preReqIds: ["CS116"],
        postReqIds: [],
        coReqIds: ["CS1160", "CS117"]
    },
    {
        id: "CS201",
        name: "Discrete Structures",
        creditHours: 3,
        preReqIds: [],
        postReqIds: ["CS222"],
        coReqIds: []
    },
    {
        id: "CE212",
        name: "Digital Systems",
        creditHours: 3,
        preReqIds: ["CS116"],
        postReqIds: ["CE201"],
        coReqIds: ["CS222"]
    },
    {
        id: "CE2120",
        name: "Digital Systems Lab",
        creditHours: 1,
        preReqIds: ["CS116"],
        postReqIds: [],
        coReqIds: ["CE212"]
    },
    {
        id: "GERL201B1",
        name: "German III - B1 Track",
        creditHours: 3,
        preReqIds: ["GERL102B1"],
        postReqIds: ["GERL202B1"],
        coReqIds: []
    },
    {
        id: "CE201",
        name: "Computer Architecture and Organization",
        creditHours: 3,
        preReqIds: ["CE212"],
        postReqIds: ["CE352", "CE357", "CE3570"],
        coReqIds: []
    },
    {
        id: "CS222",
        name: "Theory of Algorithms",
        creditHours: 3,
        preReqIds: ["CS116", "CS201"],
        postReqIds: ["CS323", "CS451", "CS419"],
        coReqIds: []
    },
    {
        id: "CS223",
        name: "Data Structures",
        creditHours: 3,
        preReqIds: ["CS116"],
        postReqIds: ["CS323", "CS416", "CS451", "CS330", "CS332", "CS419"],
        coReqIds: []
    },
    {
        id: "CS263",
        name: "Database Management Systems",
        creditHours: 3,
        preReqIds: ["CS117"],
        postReqIds: ["CS264" ,"CS342", "CS355", "CS356", "CS477"],
        coReqIds: []
    },
    {
        id: "EE317",
        name: "Linear Algebra",
        creditHours: 3,
        preReqIds: ["MATH101"],
        postReqIds: ["CS330", "CS332"],
        coReqIds: ["MATH102"]
    },
    {
        id: "GERL202B1",
        name: "German IV - B1 Track",
        creditHours: 3,
        preReqIds: ["GERL201B1"],
        postReqIds: ["GERL301B1"],
        coReqIds: []
    },
    {
        id: "MILS100",
        name: "Military Science",
        creditHours: 3,
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "IE0121",
        name: "Probability and Statistics",
        creditHours: 3,
        preReqIds: ["MATH101"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS264",
        name: "Visual Programming",
        creditHours: 3,
        preReqIds: ["CS117", "CS263"], 
        postReqIds: [],
        coReqIds: []

    },
    {
        id: "CS342",
        name: "Software Engineering",
        creditHours: 3,
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS355",
        name: "Web Technologies",
        creditHours: 3,
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS451",
        name: "Artificial Intelligence",
        creditHours: 3,
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "GERL301B1",
        name: "German V - B1 Track",
        creditHours: 3,
        preReqIds: ["GERL202B1"],
        postReqIds: ["GERL302B1"],
        coReqIds: []
    },
    {
        id: "CS323",
        name: "Computational Theory",
        creditHours: 3,
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS332",
        name: "Computer Graphics",
        creditHours: 3,
        preReqIds: ["CS223", "EE317"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CE352",
        name: "Computer Networks",
        creditHours: 3,
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: []        
    },
    {
        id: "CE357",
        name: "Operating Systems",
        creditHours: 3,
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: []         
    },
    {
        id: "CE3570",
        name: "Operating Systems Lab",
        creditHours: 1,
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: ["CE357"]
    },
    {
        id: "CS419",
        name: "Compiler Construction",
        creditHours: 3,
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "GERL302B1",
        name: "German VI - B1 Track",
        creditHours: 3,
        preReqIds: ["GERL301B1"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "ENGL1002",
        name: "Advanced English",
        creditHours: 3,
        preReqIds: ["ENGL1001"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS330",
        name: "Image Understanding",
        creditHours: 3,
        preReqIds: ["CS223", "EE317"],
        postReqIds: [],
        coReqIds: []    
    },    
    {
        id: "CS356",
        name: "Information Security",
        creditHours: 3,
        preReqIds: ["CS263"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS391",
        name: "Field Training (160 hours)",
        creditHours: 0,
        preReqIds: [],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS416",
        name: "Systems Programming",
        creditHours: 3,
        preReqIds: ["CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS477",
        name: "Mobile Computing",
        creditHours: 3,
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS492",
        name: "Senior Project",
        creditHours: 3,
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
];

const generalTrackElectives = [
    {
        id: "CS333",
        name: "Game Programming",
        creditHours: 3
    },
    {
        id: "CS357",
        name: "Cybersecurity",
        creditHours: 3
    },
    {
        id: "CS358",
        name: "Multimedia Systems Design",
        creditHours: 3
    },
    {
        id: "CS359",
        name: "Internet of Things",
        creditHours: 3
    },   
    {
        id: "CS364",
        name: "Information Retrieval",
        creditHours: 3
    },   
    {
        id: "CS365",
        name: "Systems Analysis and Design",
        creditHours: 3
    },   
    {
        id: "CS371",
        name: "Bioinformatics",
        creditHours: 3
    },   
    {
        id: "CS430",
        name: "Virtual and Augmented Reality",
        creditHours: 3
    },   
    {
        id: "CS432",
        name: "Scientific Visualization",
        creditHours: 3
    },   
    {
        id: "CS439",
        name: "Computer Animation",
        creditHours: 3
    },   
    {
        id: "CS450",
        name: "Operations Optimization",
        creditHours: 3
    },   
    {
        id: "CS457",
        name: "Decision Support Systems and Intelligent Systems",
        creditHours: 3
    },
    {
        id: "CS458",
        name: "Wireless Networks",
        creditHours: 3
    },
    {
        id: "CS460",
        name: "Data Mining",
        creditHours: 3
    },
    {
        id: "CS462",
        name: "Database Design",
        creditHours: 3
    },
    {
        id: "CS481",
        name: "Special Topics in Computer Graphics",
        creditHours: 3
    },
    {
        id: "CS482",
        name: "Special Topics in Software Engineering",
        creditHours: 3
    },
    {
        id: "CS484",
        name: "Special Topics in Database Technologies and Applications",
        creditHours: 3
    },
    {
        id: "CS489",
        name: "Special Topics in Algorithms",
        creditHours: 3
    },
    {
        id: "CS4512",
        name: "Natural Language Processing",
        creditHours: 3
    },
    {
        id: "CS4811",
        name: "Special Topics in Data Science Technologies and Applications",
        creditHours: 3
    },
    {
        id: "CS4831",
        name: "Special Topics in Applied Computer Science",
        creditHours: 1
    },
    {
        id: "CS4832",
        name: "Special Topics in Applied Computer Science",
        creditHours: 2
    },
    {
        id: "CS4833",
        name: "Special Topics in Applied Computer Science",
        creditHours: 3
    }
];

document.querySelectorAll(".course").forEach(courseDOM => {
    let courseObj = courses.find(courseObj => courseObj.id === courseDOM.id);
    document.getElementById(courseDOM.id).innerHTML += `
        <p class="courseInfo" id="${courseObj.id}">( i )</p>
        <p class="courseCode" id="${courseObj.id}">${courseObj.id}</p>
        <p class="courseName" id="${courseObj.id}">${courseObj.name}</p>
        <p class="requisiteArrow" id="requisiteArrow-${courseObj.id}"></p>
        <p class="creditHours" id="${courseObj.id}">${courseObj.creditHours} Cr Hr</p>
    `;

    // handling mouse over events
    courseDOM.addEventListener('mouseover', event => {
        let selectedCourseObj = courses.find(courseObj => courseObj.id === event.target.id);

        // pre requisites mouse over
        if (selectedCourseObj.preReqIds.length > 0) {
            for (let i = 0; i < selectedCourseObj.preReqIds.length; i++) {
                preReqSequence(selectedCourseObj.preReqIds[i]);

                function preReqSequence(currentId) {
                    let preReqCourseObj = courses.find(courseObj => courseObj.id === currentId);
                    if (preReqCourseObj.preReqIds.length > 0) {
                        for (let i = 0; i < preReqCourseObj.preReqIds.length; i++) {
                            document.getElementById(preReqCourseObj.preReqIds[i]).classList.add('preReqSequence'); //adding pre requisite sequence classes
                            document.getElementById("requisiteArrow-" + preReqCourseObj.preReqIds[i]).innerHTML = `<<`;
                            preReqSequence(preReqCourseObj.preReqIds[i]);
                        }
                    }
                }
            }

            for (let i = 0; i < selectedCourseObj.preReqIds.length; i++) {
                document.getElementById(selectedCourseObj.preReqIds[i]).classList.remove('preReqSequence');
                document.getElementById(selectedCourseObj.preReqIds[i]).classList.add('preReqCourse'); //adding direct pre requisite classes
                document.getElementById("requisiteArrow-" + selectedCourseObj.preReqIds[i]).innerHTML = `<`;                      
            }
        }

        // post requisites mouse over
        if (selectedCourseObj.postReqIds.length > 0) {
            for (let i = 0; i < selectedCourseObj.postReqIds.length; i++) {
                document.getElementById(selectedCourseObj.postReqIds[i]).classList.add('postReqSequence'); //adding post requisite class
                document.getElementById("requisiteArrow-" + selectedCourseObj.postReqIds[i]).innerHTML = `>>`;
                postReqSequence(selectedCourseObj.postReqIds[i]);

                function postReqSequence(currentId) {
                    let postReqCourseObj = courses.find(course => course.id === currentId);

                    if (postReqCourseObj.postReqIds.length > 0) {
                        for (let i = 0; i < postReqCourseObj.postReqIds.length; i++) {
                            document.getElementById(postReqCourseObj.postReqIds[i]).classList.add('postReqSequence'); //adding post requisite class
                            document.getElementById("requisiteArrow-" + postReqCourseObj.postReqIds[i]).innerHTML = `>>`;
                            postReqSequence(postReqCourseObj.postReqIds[i]);
                        }
                    }
                }
            }
        }
        // co requisites mouse over
        if (selectedCourseObj.coReqIds.length > 0)
            for (let i = 0; i < selectedCourseObj.coReqIds.length; i++) {
                document.getElementById(selectedCourseObj.coReqIds[i]).classList.add('coReqCourse'); //adding co requisite
                document.getElementById("requisiteArrow-" + selectedCourseObj.coReqIds[i]).innerHTML = "^";
            }
});


    // handling mouse out events
    courseDOM.addEventListener('mouseout', event => {

        let selectedCourseObj = courses.find(courseObj => courseObj.id === event.target.id);
        
        // pre requisites mouse out
        if (selectedCourseObj.preReqIds.length > 0) {
            for (let i = 0; i < selectedCourseObj.preReqIds.length; i++) {
                preReqSequence(selectedCourseObj.preReqIds[i]);
                
                function preReqSequence(currentId) {
                    let preReqCourseObj = courses.find(courseObj => courseObj.id === currentId);

                    if (preReqCourseObj.preReqIds.length > 0) {
                        for (let i = 0; i < preReqCourseObj.preReqIds.length; i++) {
                            document.getElementById(preReqCourseObj.preReqIds[i]).classList.remove('preReqSequence'); //remove pre requisite sequence class
                            document.getElementById("requisiteArrow-" + preReqCourseObj.preReqIds[i]).innerHTML = ``;
                            preReqSequence(preReqCourseObj.preReqIds[i]);
                        }
                    }
                }
            }

            for (let i = 0; i < selectedCourseObj.preReqIds.length; i++) {
                document.getElementById(selectedCourseObj.preReqIds[i]).classList.remove('preReqSequence');
                document.getElementById(selectedCourseObj.preReqIds[i]).classList.remove('preReqCourse'); //remove direct pre requisite sequence class
                document.getElementById("requisiteArrow-" + selectedCourseObj.preReqIds[i]).innerHTML = ``;                      
            }
        }
        // post requisites mouse out
        if (selectedCourseObj.postReqIds.length > 0) {
            for (let i = 0; i < selectedCourseObj.postReqIds.length; i++) {
                document.getElementById(selectedCourseObj.postReqIds[i]).classList.remove('postReqSequence'); // remove post requisite class
                document.getElementById("requisiteArrow-" + selectedCourseObj.postReqIds[i]).innerHTML = ``;
                postReqSequence(selectedCourseObj.postReqIds[i]);

                function postReqSequence(currentId) {
                    let postReqCourseObj = courses.find(courseObj => courseObj.id === currentId);
                    
                    if (postReqCourseObj.postReqIds.length > 0) {
                        for (let i = 0; i < postReqCourseObj.postReqIds.length; i++) {
                            document.getElementById(postReqCourseObj.postReqIds[i]).classList.remove('postReqSequence'); //remove post requisite class
                            document.getElementById("requisiteArrow-" + postReqCourseObj.postReqIds[i]).innerHTML = ``;

                            postReqSequence(postReqCourseObj.postReqIds[i]);
                        }
                    }
                }
            }
        }
        
        if (selectedCourseObj.coReqIds.length > 0) // co requisites
            for (let i = 0; i < selectedCourseObj.coReqIds.length; i++) {
                document.getElementById(selectedCourseObj.coReqIds[i]).classList.remove('coReqCourse'); //remove co requisite class
                document.getElementById("requisiteArrow-" + selectedCourseObj.coReqIds[i]).innerHTML = "";
            }
    });
});

document.querySelectorAll(".dropdownContent").forEach(option => {
    generalTrackElectives.forEach(courseObj => {
        option.innerHTML += `
            <div class="electiveOption" id="${courseObj.id}">
                <p class="electiveOptionCode" id="${courseObj.id}">${courseObj.id}</p>                                            
                <p class="electiveOptionName" id="${courseObj.id}">${courseObj.name}</p>
                <p class="electiveOptionCreditHours" id="${courseObj.id}">${courseObj.creditHours} Cr Hr</p>
            </div>
        `;
    })
});

document.querySelectorAll(".electiveOption").forEach(option => {
    option.addEventListener("click", event => {
        console.log(event.target.id);
        if (event.target.id === "clearElective") {
            let electiveContentDOM = event.target.closest(".electiveCourse").querySelector(".electiveContent");
            console.log(electiveContentDOM = event.target.closest(".electiveCourse").querySelector(".electiveContent"))
            electiveContentDOM.innerHTML = `<p>Select Program Elective</p>`;
        } else {
            let electiveCourseObj = generalTrackElectives.find(courseObj => courseObj.id === event.target.id);
            let electiveContentDOM = event.target.closest(".electiveCourse").querySelector(".electiveContent");
            electiveContentDOM.innerHTML = ``;
            electiveContentDOM.innerHTML += `
                <p class="courseCode" id="${electiveCourseObj.id}">${electiveCourseObj.id}</p>                                            
                <p class="courseName" id="${electiveCourseObj.id}">${electiveCourseObj.name}</p>
                <p class="creditHours" id="${electiveCourseObj.id}">${electiveCourseObj.creditHours} Cr Hr</p>
            `;
        }
    });
});
