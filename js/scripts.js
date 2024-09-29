
document.querySelectorAll('.title-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        document.querySelector('.content').scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Function to normalize a string by removing accents and diacritics
function normalizeString(str) {
    return str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// Function to filter titles based on search input
function filterTitles() {
    const searchInput = normalizeString(document.getElementById('searchBar').value);
    const wholeWordOnly = document.getElementById('wholeWordCheckbox').checked;
    const titles = document.querySelectorAll('#titleMenu li');

    titles.forEach(title => {
        const text = normalizeString(title.innerText);

        if (wholeWordOnly) {
            // Match whole words only, treating title as individual word blocks
            const words = text.split(' ');
            if (words.includes(searchInput)) {
                title.style.display = '';
            } else {
                title.style.display = 'none';
            }
        } else {
            // Partial match search
            if (text.includes(searchInput)) {
                title.style.display = '';
            } else {
                title.style.display = 'none';
            }
        }
    });
}

        