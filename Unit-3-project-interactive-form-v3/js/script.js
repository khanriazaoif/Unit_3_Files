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
            let jspunsOption = option[i].getAttribute('data-theme');
            if (jspunsOption === 'heart js') {
                option[i].remove();
            }
        }
    }

    if (design.value === 'heart js') {
        for (let i = 0; i < option.length; i++) {
            let heartjsOption = option[i].getAttribute('data-theme');
            if (heartjsOption === 'js puns') {
                option[i].remove();
            }
        }
    }

});