// JavaScript source code
let subjectID;

function getIdSubject(event) {
    subjectID = event.target.id;
    console.log('Hovered element ID:', subjectID);
    colorChang(subjectID);
}

document.querySelectorAll('.subject').forEach(element => {
    element.addEventListener('mouseover', getIdSubject);
});

function colorChang(subjectID) {
    console.log("colorChang");
    // The arrays should be gotten from Database.
    const directPreRequisites = ['CS116'];
    const postrequisitesequence = ['CS263'];
    const preRequisiteSequence = ['CS101'];

    if (subjectID === 'CS117') {
        // Direct pre-requisites
        for (let i = 0; i < directPreRequisites.length; i++) {
            document.getElementById(directPreRequisites[i]).classList.remove('subject');
            document.getElementById(directPreRequisites[i]).classList.add('subjectDirectPreRequisites');
        }

        // Post-requisite sequence
        for (let i = 0; i < postrequisitesequence.length; i++) {
            document.getElementById(postrequisitesequence[i]).classList.remove('subject');
            document.getElementById(postrequisitesequence[i]).classList.add('subjectPostRequisiteSequence');
        }

        // Pre-requisite sequence
        console.log("Before preRequisiteSequence");
        for (let i = 0; i < preRequisiteSequence.length; i++) {
            document.getElementById(preRequisiteSequence[i]).classList.remove('subject');
            document.getElementById(preRequisiteSequence[i]).classList.add('subjectPreRequisiteSequence');
            console.log("Yes");
        }
        document.getElementById(subjectID).addEventListener('mouseout', () => {
            colorReset(directPreRequisites, postrequisitesequence, preRequisiteSequence);
        });
    }
}

function colorReset(directPreRequisites, postrequisitesequence, preRequisiteSequence) {
    if (subjectID === 'CS117') {
        // Direct pre-requisites
        for (let i = 0; i < directPreRequisites.length; i++) {
            document.getElementById(directPreRequisites[i]).classList.remove('subjectDirectPreRequisites');
            document.getElementById(directPreRequisites[i]).classList.add('subject');
        }

        // Pre-requisite sequence
        for (let i = 0; i < postrequisitesequence.length; i++) {
            document.getElementById(postrequisitesequence[i]).classList.remove('subjectPostRequisiteSequence');
            document.getElementById(postrequisitesequence[i]).classList.add('subject');
        }

        // Post-requisite sequence
        for (let i = 0; i < preRequisiteSequence.length; i++) {
            document.getElementById(preRequisiteSequence[i]).classList.remove('subjectPreRequisiteSequence');
            document.getElementById(preRequisiteSequence[i]).classList.add('subject');
        }
    }
}
