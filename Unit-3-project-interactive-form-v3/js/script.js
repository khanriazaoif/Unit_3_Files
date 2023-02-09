const nameField = document.getElementById('name');
const jobRole = document.getElementById('other-job-role');
const title = document.getElementById('title');
const color = document.getElementById('color');
const design = document.getElementById('design');
const option = document.querySelectorAll('option');
const activities = document.getElementById('activities');
// console.log(activities);
// console.log(option);
// console.log(color);


nameField.focus();
jobRole.style.display = 'none';

title.addEventListener('change', () => {
    if (title.value === 'other') {
        jobRole.style.display = 'block';
        console.log('other');
    }
});

color.disabled = true;
design.addEventListener('change', () => {
    let selectTheme = design.firstElementChild
    console.log(selectTheme);
    selectTheme.style.display = 'none';
    design.firstElementChild =
        color.disabled = false;
    let selectedHidden = color.firstElementChild;
    if (design.value === 'js puns') {
        for (let i = 0; i < option.length; i++) {
            selectTheme.style.display = 'none';
            option[i].style.display = 'block';
            let selectedHidden = color.firstElementChild;
            // console.log(selectedHidden[i]);
            let jspunsOption = option[i].getAttribute('data-theme');
            // console.log(jspunsOption);
            // console.log(selectedHidden);
            if (jspunsOption === 'heart js') {

                console.log(option[i]);
                selectedHidden.style.display = 'none';
                selectTheme.style.display = 'none';
                option[i].style.display = 'none';
            }

        }
    }



    if (design.value === 'heart js') {
        for (let i = 0; i < option.length; i++) {
            let selectTheme = design.firstElementChild
            console.log(selectTheme);
            option[i].style.display = 'block';
            let heartjsOption = option[i].getAttribute('data-theme');
            if (heartjsOption === 'js puns') {
                selectedHidden.style.display = 'none';
                selectTheme.style.display = 'none';
                option[i].style.display = 'none';

            }
        }
    }

});


const checkboxes = document.querySelectorAll('.activities input');
const paragraphActivitiesCost = document.querySelector('.activities-cost');
// console.log(checkboxes);
// console.log(paragraphActivitiesCost);
let totalCostOfActivities = 0;


document.querySelector('.activities').addEventListener('change', e => {
    const clicked = e.target;
    let clickedType = clicked.getAttribute('data-cost');
    clickedType = Number(clickedType);
    // console.log(typeof (clickedType));
    if (clicked.checked) {
        totalCostOfActivities += clickedType;
    }
    if (clicked.checked === false) {
        totalCostOfActivities -= clickedType;
    }
    console.log(totalCostOfActivities);
    // paragraphActivitiesCost.innerHTML('hell o' );
    paragraphActivitiesCost.innerHTML = `Total: $${totalCostOfActivities}`;
    console.log(paragraphActivitiesCost);
});


