document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.open-button');
    const coverPage = document.querySelector('.cover-page');
    const memoriesSection = document.querySelector('.memories-section');

    openButton.addEventListener('click', () => {
        coverPage.style.display = 'none';
        memoriesSection.classList.remove('hidden');

        // Optional: Trigger a scroll to the top of the new section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Optional: Add a subtle hover effect for the photos to make them feel "lifted"
    const tapedPhotos = document.querySelectorAll('.taped-photo');
    tapedPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', () => {
            photo.style.transform = `rotate(0deg) scale(1.05)`;
            photo.style.zIndex = 10;
        });
        photo.addEventListener('mouseleave', () => {
            // Restore original rotation (needs to be unique per photo)
            photo.style.transform = ''; 
            photo.style.zIndex = 1;
        });
    });
});
