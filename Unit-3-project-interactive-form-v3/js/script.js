const nameField = document.getElementById('name');
const jobRole = document.getElementById('other-job-role');
const title = document.getElementById('title');
const color = document.getElementById('color');
const design = document.getElementById('design');
// const coloredShirts = color.getAttribute('color');

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
        console.log('js puns');
        let coloredShirts = color.getAttribute('data-theme');
        console.log(coloredShirts);
    }
});