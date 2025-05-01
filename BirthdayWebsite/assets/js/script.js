// 声音控制功能
const unmuteBtn = document.getElementById('unmuteBtn');
let isMuted = true;

unmuteBtn.addEventListener('click', () => {
    const currentVideo = document.querySelector('.video-player[style*="display: block"]');
    
    if(isMuted) {
        currentVideo.muted = false;
        unmuteBtn.innerHTML = "🔊 声音已开启";
        isMuted = false;
    } else {
        currentVideo.muted = true;
        unmuteBtn.innerHTML = "🔇 点击开启声音";
        isMuted = true;
    }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // 切换按钮状态
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 切换视频
        const videoId = button.getAttribute('data-video');
        document.querySelectorAll('video').forEach(video => {
            if(video.id === videoId) {
                video.style.display = 'block';
                video.play();
            } else {
                video.style.display = 'none';
                video.pause();
            }
        });
    });
});