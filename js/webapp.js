// webapp for airbnb {selects the element of id app1 and adds the html content}
document.getElementById("app1").innerHTML = `
    <div class="card-content">
        <p>Foster a sense of community by creating a platform where individuals with shared convictions can connect, share ideas, and collaborate..</p>
        <img src="./a86a258a-059e-49da-8ea9-6f46a9302ab2.webp" alt="">
        <a href="#" class="playVideo">
            <span><i class="fa-solid fa-circle-play"></i></span>Play Video 
        </a>
        <video id="myVideo" controls>
            <source src="How to Book on Airbnb.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
`;

// webapp for maze game {selects the element of id app2 and adds the html content}
document.getElementById("app2").innerHTML = `
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
    </div>
`;

document.querySelector(".playVideo").addEventListener(
	"click",
	function () {
		var video = document.getElementById("myVideo");
		video.style.display = "block";
		video.play();
	},
	false
);
