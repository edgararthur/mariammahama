const closeBtn = document.getElementById('close');

document.getElementById('app1').innerHTML = `
    <div class="card-content">
        <p>Foster a sense of community by creating a platform where individuals with shared convictions can connect, share ideas, and collaborate..</p>
        <img src="./a86a258a-059e-49da-8ea9-6f46a9302ab2.webp" alt="">
        <a href="#" id="playVideo">
            <span><i class="fa-solid fa-circle-play"></i></span>Play Video 
        </a>
        <video id="myVideo" controls>
            <source src="How to Book on Airbnb.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <span class="close"><i class="fa-solid fa-close"></i></span>
    </div>
`;


document.getElementById('app2').innerHTML = `
    <div class="card-content">
        <p>Empower individuals or groups with strong convictions to raise funds for projects aligned with their values.</p>
        <!-- Add more content as needed -->
    </div>
`;

document.getElementById('playVideo').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.style.display = 'block'; // Show the video
    video.play();
}, false);

closeBtn.addEventListener('click', () => {
    var video = document.getElementById('myVideo');
    video.style.display = 'none'; // Hide the video
    video.pause();
})
