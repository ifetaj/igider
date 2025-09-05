
// Simple script pour ajouter les messages au clic (sans backend)
const form = document.getElementById('forumForm');
const postsSection = document.querySelector('.posts');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const message = form.message.value.trim();

    if(username && message) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `<p><strong>${username}:</strong> ${message}</p>`;
        postsSection.appendChild(newPost);

        form.reset();
    }
});
