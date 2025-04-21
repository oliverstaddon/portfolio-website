document.addEventListener('DOMContentLoaded', function () {
    const previewButton = document.querySelector('button[type="button"]');
    const modal = document.getElementById('preview-modal');
    const closeModalButton = document.getElementById('close-modal');
    const confirmPostButton = document.getElementById('confirm-post');

    // if button exists: check click, get content (& check not empty), show modal w/ content
    if (previewButton) {
        previewButton.addEventListener('click', function () {
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();

            if (!title || !content) {
                alert('Please fill in all fields before previewing.');
                return;
            }

            document.getElementById('preview-title').textContent = title;
            document.getElementById('preview-entry-content').innerHTML = content.replace(/\n/g, '<br>'); // preserve line breaks

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // disable scrolling
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // enable scrolling
        });
    }

    if (confirmPostButton) {
        confirmPostButton.addEventListener('click', function () {
            document.querySelector('form').submit();
        });
    }
});