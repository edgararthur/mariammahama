// webapp for airbnb {selects the element of id app1 and adds the html content}
document.getElementById("app1").innerHTML = `
    <div class="card-content">
        <p>Elevate your travel experience with our Airbnb Booking app, your passport to unique accommodations and unforgettable getaways. Whether you're seeking a cozy cottage, a luxurious penthouse, or an exotic villa, this app connects you with a world of diverse lodging options tailored to your preferences.</p>
        <img src="../pexels-cottonbro-studio-5077061.jpeg" alt="">
        <a href="#" class="playVideo">
            <span><i class="fa-solid fa-circle-play"></i></span>Play Video 
        </a>
        <video id="myVideo" controls>
            <source src="../production-id-5077072-1440p_jnbVW5Er.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
`;

// webapp for maze game {selects the element of id app2 and adds the html content}
document.getElementById("app2").innerHTML = `
    <div class="card-content">
        <p>Embark on a thrilling journey through the labyrinthine realms of our Maze Game app! Immerse yourself in a world of challenging puzzles and mind-bending twists as you navigate through intricate mazes filled with mysterious obstacles. </p>
        <img src="pexels-monstera-production-7352866.jpeg" alt="">
        <a href="#" class="play-video">
            <span><i class="fa-solid fa-circle-play"></i></span>Play Video 
        </a>
        <video class="my-video" controls>
            <source src="../istockphoto-542222136-640_adpp_is.mp4" type="video/mp4">
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

document.querySelector(".play-video").addEventListener(
	"click",
	function () {
		var video = document.querySelector(".my-video");
		video.style.display = "block";
		video.play();
	},
	false
);
