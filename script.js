// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const tools = document.querySelectorAll('.tool');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        tools.forEach(tool => {
            const toolName = tool.querySelector('h3').textContent.toLowerCase();
            if (toolName.includes(searchTerm)) {
                tool.style.display = 'block';
            } else {
                tool.style.display = 'none';
            }
        });
    });
});
