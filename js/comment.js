document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('form');
    const commentsDiv = document.querySelector('.user-comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        const rating = document.getElementById('rating').value;

        const newComment = {
            name: name,
            comment: comment,
            rating: rating,
            approved: false // Par défaut, le commentaire n'est pas approuvé
        };

        saveComment(newComment);
        displayComments();
        commentForm.reset();
    });

    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        return JSON.parse(localStorage.getItem('comments')) || [];
    }

    function displayComments() {
        commentsDiv.innerHTML = '';
        const comments = loadComments();
        comments.forEach(comment => {
            if (comment.approved) {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `
                    <p><strong>${comment.name}</strong> <span>${'★'.repeat(comment.rating)}</span></p>
                    <p>${comment.comment}</p>
                `;
                commentsDiv.appendChild(commentDiv);
            }
        });
    }

    displayComments();
});
