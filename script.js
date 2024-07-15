document.addEventListener('DOMContentLoaded', function() {
    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach(project => {
        const button = project.querySelector('button');
        const image = project.querySelector('img');
        const projectUrl = project.getAttribute('data-url');
        
        button.addEventListener('click', function() {
            window.open(projectUrl, '_blank');
        });

        image.addEventListener('click', function() {
            window.open(projectUrl, '_blank');
        });
    });
});