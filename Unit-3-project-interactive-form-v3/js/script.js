const nameField = document.getElementById('name');
const jobRole = document.getElementById('other-job-role');
const title = document.getElementById('title');


nameField.focus();
jobRole.style.display = 'none';

title.addEventListener('change', () => {
    if (title.value === 'other') {
        jobRole.style.display = 'block';
        console.log('other');
    }
});

// console.log(jobRole);