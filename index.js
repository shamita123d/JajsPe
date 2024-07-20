
function showSection(sectionId) {
    var sections = document.querySelectorAll('main > section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

window.onload = function() {
    var sections = document.querySelectorAll('main > section');
    sections.forEach(function(section) {
        if (section.id !== 'hero' && section.id !== 'features') {
            section.style.display = 'none';
        }
    });
}
