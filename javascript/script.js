let addActivityBtn;
let orderedList;


function getHTMLElements() {
    addActivityBtn = document.querySelector("#addActivity");
    
    orderedList = document.querySelector("#activityListSUN");
    

    addActivityBtn.addEventListener('click', addAcivityUserInput);
    removeActivityBtn = document.querySelector("#removeActivity");
    removeActivityBtn.addEventListener('click');

    

}

function addAcivityUserInput(){
    console.log("new acitivity");

    //what did the user write
    let inputBox = document.querySelector("#activityInputBox");
    let newActivity = inputBox.value;

    //what day did the user choose
    let inputDay = document.querySelector("#activityInputDay");
    let dayChange = inputDay.value;

    let inputType = document.querySelector("#activityInputType");
    let typeChange = inputType.value;

    makeNewActivity(newActivity, dayChange, typeChange, "not done");

}

/**
 * A function that changes the class of the parentLi
 * @param {*} parentLi - parent li of checkbox
 * @param {*} checkBox - the checkbox was clicked
 */
function onCheckBoxChange(parentLi, checkBox, clickBtn) {
    console.log("checkbox clicked");
    console.log(parentLi);
    console.log(checkBox);

    if(checkBox.checked) {
        console.log("its checked");
        // parentLi.remove();
        parentLi.remove();

        parentLi.classList.add("cross-out");
    }
    else{
        console.log("its not checked");
        parentLi.classList.remove("cross-out");
    }

    
    
}



/**
 * A function the makes a new activity and adds it to the list
 * @param {String} activityText - the text
 * @param {String} activityDone - The statues
 * @param {string} activityDay - the day
 * @param {string} activityType - the type of activity, changes the color
 */
function makeNewActivity(activityText, activityDay, activityType, activityDone) {
    const newLi = document.createElement("li");
    newLi.textContent = activityText;

    console.log("activity day", activityDay);
    console.log("activity type", activityType);

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type', "checkbox");



    checkBox.addEventListener('change', onCheckBoxChange.bind(null, newLi, checkBox));

    if(activityDone === "done") {
        newLi.style.display = "none";
        // newLi.classList.add("cross-out");
        checkBox.checked = true;
    }

    if(activityType === "RED") {
        console.log("this is red");
        newLi.classList.add("RED");
    
    }
    if(activityType === "BLUE") {
        console.log("this is blue");
        newLi.classList.add("BLUE");
    }

    if(activityType === "YELLOW"){
        console.log("this is yellow");
        newLi.classList.add("YELLOW");

    }

    if(activityType === "GREEN"){
        console.log("this is green");
        newLi.classList.add("GREEN");

    }

    newLi.appendChild(checkBox);

    let listToAddTo = document.querySelector(`#activityList${activityDay}`);

    listToAddTo.appendChild(newLi);
}


function runProgram() {
    console.log("Program is running");
    getHTMLElements();
    makeNewActivity("make a new activity", "not done");

    createAcivity();
  
}
document.addEventListener('DOMContentLoaded', runProgram);
