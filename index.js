const courses = [
    {
        id: "ARB0099",
        preReqIds: [],
        postReqIds: ["NE101", "CE212", "CE2120", "CS201", "CE201", "CS222", "CS223", "CS264", "CS263", "ARB100"],
        coReqIds: []
    },    
    {
        id: "ENGL1001",
        preReqIds: [],
        postReqIds: ["ENGL1002"],
        coReqIds: []
    },
    {
        id: "GERL101B1",
        preReqIds: [],
        postReqIds: ["GERL102B1"],
        coReqIds: []
    },
    {
        id: "CS116",
        preReqIds: [],
        postReqIds: ["CS117", "CS1170"],
        coReqIds: []
    },
    {
        id: "CS1160",
        preReqIds: [],
        postReqIds: [],
        coReqIds: ["CS116"]
    },
    {
        id: "ARB100",
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "MATH101",
        preReqIds: [],
        postReqIds: ["MATH102", "IE0121", "EE317"],
        coReqIds: []
    },
    {
        id: "GERL102B1",
        preReqIds: ["GERL101B1"],
        postReqIds: ["GERL201B1"],
        coReqIds: []
    },
    {
        id: "NE101",
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "MATH102",
        preReqIds: ["MATH101"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS117",
        preReqIds: ["CS116"],
        postReqIds: ["CS264", "CS263", "CS342", "CS355", "CS477"],
        coReqIds: ["CS1160"]
    },
    {
        id: "CS1170",
        preReqIds: ["CS116"],
        postReqIds: [],
        coReqIds: ["CS1160", "CS117"]
    },
    {
        id: "CS201",
        preReqIds: [],
        postReqIds: ["CS222"],
        coReqIds: []
    },
    {
        id: "CE212",
        preReqIds: ["CS116", "ARB0099"],
        postReqIds: ["CE201"],
        coReqIds: ["CS222"]
    },
    {
        id: "CE2120",
        preReqIds: ["CS116"],
        postReqIds: [],
        coReqIds: ["CE212"]
    },
    {
        id: "GERL201B1",
        preReqIds: ["GERL102B1"],
        postReqIds: ["GERL202B1"],
        coReqIds: []
    },
    {
        id: "CE201",
        preReqIds: ["CE212"],
        postReqIds: ["CE352", "CE357", "CE3570"],
        coReqIds: []
    },
    {
        id: "CS222",
        preReqIds: ["CS116", "CS201"],
        postReqIds: ["CS323", "CS451", "CS419"],
        coReqIds: []
    },
    {
        id: "CS223",
        preReqIds: ["CS116", "ARB0099"],
        postReqIds: ["CS323", "CS416", "CS451", "CS330", "CS332", "CS419"],
        coReqIds: []
    },
    {
        id: "CS263",
        preReqIds: ["CS117"],
        postReqIds: ["CS264" ,"CS342", "CS355", "CS356", "CS477"],
        coReqIds: []
    },
    {
        id: "EE317",
        preReqIds: ["MATH101"],
        postReqIds: ["CS330", "CS332"],
        coReqIds: ["MATH102"]
    },
    {
        id: "GERL202B1",
        preReqIds: ["GERL201B1"],
        postReqIds: ["GERL301B1"],
        coReqIds: []
    },
    {
        id: "MILS100",
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "IE0121",
        preReqIds: ["MATH101"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS264",
        preReqIds: ["CS117", "CS263"], 
        postReqIds: [],
        coReqIds: []

    },
    {
        id: "CS342",
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS355",
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS451",
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "GERL301B1",
        preReqIds: ["GERL202B1"],
        postReqIds: ["GERL302B1"],
        coReqIds: []
    },
    {
        id: "CS323",
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS332",
        preReqIds: ["CS223", "EE317"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CE352",
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: []        
    },
    {
        id: "CE357",
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: []         
    },
    {
        id: "CE3570",
        preReqIds: ["CE201"],
        postReqIds: [],
        coReqIds: ["CE357"]
    },
    {
        id: "CS419",
        preReqIds: ["CS222", "CS223"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "GERL302B1",
        preReqIds: ["GERL301B1"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "ENGL1002",
        preReqIds: ["ENGL1001"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS330",
        preReqIds: ["CS223", "EE317"],
        postReqIds: [],
        coReqIds: []    
    },    
    {
        id: "CS356",
        preReqIds: ["CS263"],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS391",
        preReqIds: [],
        postReqIds: [],
        coReqIds: []    
    },
    {
        id: "CS416",
        preReqIds: ["CS223"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS477",
        preReqIds: ["CS117", "CS263"],
        postReqIds: [],
        coReqIds: []
    },
    {
        id: "CS492",
        preReqIds: [],
        postReqIds: [],
        coReqIds: []
    },
];

document.querySelectorAll(".course").forEach(course => {

    // handling mouse over events
    course.addEventListener('mouseover', event => {

        // find currently selected course object
        let selectedCourse = courses.find(course => course.id === event.target.id);

        // pre requisites mouse over
        if (selectedCourse.preReqIds.length > 0) { // check if selected course obj has direct pre requisites
            for (let i = 0; i < selectedCourse.preReqIds.length; i++) {
                // if selected course obj has direct pre requisites, cycle through each one and color orange
                document.getElementById(selectedCourse.preReqIds[i]).classList.replace('course', 'preReqCourse');
                
                /* 
                    we call a recursive function that does the following to the pre requisite sequence:
                    1) obtains the objects of the pre requisite ids array. 
                    2) color them accordingly. 
                    3) recall the same function until the next course object has no pre requisites
                */
                
                // pass the currently selected course's pre requsite id from the object array of pre req ids and begin its pre requisite sequence
                preReqSequence(selectedCourse.preReqIds[i]);
                function preReqSequence(currentId) {
                    //find the object that then contains its array of pre requisite ids
                    let preReqCourse = courses.find(course => course.id === currentId);
                    // check if there are pre requisites, if there are, then cycle through the object's array of pre req ids and color them
                    if (preReqCourse.preReqIds.length > 0) {
                        for (let i = 0; i < preReqCourse.preReqIds.length; i++) {
                            document.getElementById(preReqCourse.preReqIds[i]).classList.replace('course', 'preReqSequence');
                            // call the recursive function again, passing in the object id of the pre prequisite object to cycle through ITS pre requisites
                            preReqSequence(preReqCourse.preReqIds[i]);
                        }
                    }
                }
            }
        }
        // post requisites mouse over
        if (selectedCourse.postReqIds.length > 0) { // check if selected course obj has post requisites

            // if selected course obj has direct post requisites, cycle through each one and color dark blue
            for (let i = 0; i < selectedCourse.postReqIds.length; i++) {
                document.getElementById(selectedCourse.postReqIds[i]).classList.replace('course', 'postReqCourse');

                /* 
                    we call a recursive function that does the following to the post requisite sequence:
                    1) obtains the objects of a post requisite array. 
                    2) color them accordingly. 
                    3) recall the same function until the next course object has no post requisites
                */
                
                // pass the currently selected course's post requsite id from the object array of post req ids and begin its post requisite sequence
                postReqSequence(selectedCourse.postReqIds[i]);
                function postReqSequence(currentId) {
                    //find the object that then contains its array of post requisite ids
                    let postReqCourse = courses.find(course => course.id === currentId);
                    // check if there are post requisites, if there are, then cycle through the object's array of post req ids and color them, then call the recursive function again
                    if (postReqCourse.postReqIds.length > 0) {
                        for (let i = 0; i < postReqCourse.postReqIds.length; i++) {
                            document.getElementById(postReqCourse.postReqIds[i]).classList.replace('course', 'postReqSequence');
                            postReqSequence(postReqCourse.postReqIds[i]);
                        }
                    }
                }
            }
        }
        
        if (selectedCourse.coReqIds.length > 0) // co requisites mouse over
            for (let i = 0; i < selectedCourse.coReqIds.length; i++) 
                document.getElementById(selectedCourse.coReqIds[i]).classList.replace('course', 'coReqCourse');    
    });

    // handling mouse out events
    course.addEventListener('mouseout', event => {

        let selectedCourse = courses.find(course => course.id === event.target.id);

        // pre requisites mouse out
        if (selectedCourse.preReqIds.length > 0) { // check if selected course obj has direct pre requisites
            for (let i = 0; i < selectedCourse.preReqIds.length; i++) {
                // if selected course obj has direct pre requisites, cycle through each one and color orange
                document.getElementById(selectedCourse.preReqIds[i]).classList.replace('preReqCourse', 'course');
                
                /* 
                    we call a recursive function that does the following to the pre requisite sequence:
                    1) obtains the objects of a pre requisite array. 
                    2) color them accordingly. 
                    3) recall the same function until the next course object has no pre requisites
                */
                
                // pass the currently selected course's pre requsite id from the object array of pre req ids and begin its pre requisite sequence
                preReqSequence(selectedCourse.preReqIds[i]);
                function preReqSequence(currentId) {
                    //find the object that then contains its array of pre requisite ids
                    let preReqCourse = courses.find(course => course.id === currentId);
                    // check if there are pre requisites, if there are, then cycle through the object's array of pre req ids and color them, then call the recursive function again
                    if (preReqCourse.preReqIds.length > 0) {
                        for (let i = 0; i < preReqCourse.preReqIds.length; i++) {
                            document.getElementById(preReqCourse.preReqIds[i]).classList.replace('preReqSequence', 'course');
                            preReqSequence(preReqCourse.preReqIds[i]);
                        }
                    }
                }
            }
        }
        // post requisites mouse out
        if (selectedCourse.postReqIds.length > 0) { // check if selected course obj has post requisites

            // if selected course obj has direct post requisites, cycle through each one and color dark blue
            for (let i = 0; i < selectedCourse.postReqIds.length; i++) {
                document.getElementById(selectedCourse.postReqIds[i]).classList.replace('postReqCourse', 'course');

                /* 
                    we call a recursive function that does the following to the post requisite sequence:
                    1) obtains the objects of a post requisite array. 
                    2) color them accordingly. 
                    3) recall the same function until the next course object has no post requisites
                */
                
                // pass the currently selected course's post requsite id from the object array of post req ids and begin its post requisite sequence
                postReqSequence(selectedCourse.postReqIds[i]);
                function postReqSequence(currentId) {
                    //find the object that then contains its array of post requisite ids
                    let postReqCourse = courses.find(course => course.id === currentId);
                    // check if there are post requisites, if there are, then cycle through the object's array of post req ids and color them, then call the recursive function again
                    if (postReqCourse.postReqIds.length > 0) {
                        for (let i = 0; i < postReqCourse.postReqIds.length; i++) {
                            document.getElementById(postReqCourse.postReqIds[i]).classList.replace('postReqSequence', 'course');
                            postReqSequence(postReqCourse.postReqIds[i]);
                        }
                    }
                }
            }
        }
        
        if (selectedCourse.coReqIds.length > 0) // co requisites
            for (let i = 0; i < selectedCourse.coReqIds.length; i++)
                document.getElementById(selectedCourse.coReqIds[i]).classList.replace('coReqCourse', 'course');
    });
});