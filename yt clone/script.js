function searchVideos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const videos = document.querySelectorAll('.video-card');

  videos.forEach(video => {
    const title = video.dataset.title.toLowerCase();
    video.style.display = title.includes(input) ? 'block' : 'none';
  });
}
