const nameField = document.getElementById('name');
const jobRole = document.getElementById('other-job-role');
const title = document.getElementById('title');
const color = document.getElementById('color');
const design = document.getElementById('design');
const option = document.querySelectorAll('option');
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
    color.disabled = false;

    if (design.value === 'js puns') {
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = 'block';
            let selectedHidden = option[i].getAttribute('selected hidden');
            // console.log(selectedHidden[i]);
            let jspunsOption = option[i].getAttribute('data-theme');
            console.log(jspunsOption);
            console.log(selectedHidden);
            if (jspunsOption === 'heart js') {
                console.log(option[i]);
                // selectedHidden.style.display = 'none';
                option[i].style.display = 'block';
                option[i].style.display = 'none';
            }

        }
    }


    if (design.value === 'heart js') {
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = 'block';
            let heartjsOption = option[i].getAttribute('data-theme');
            if (heartjsOption === 'js puns') {
                option[i].style.display = 'block';
                option[i].style.display = 'none';

            }
        }
    }

});