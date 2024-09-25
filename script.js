
// document.addEventListener("DOMContentLoaded", () => {
//     const heroContentDiv = document.querySelector('.hero_content_div');
//     const footerContent2 = document.querySelector('.footer_content_2');
//     const heroRightDiv = document.querySelector('.hero_right_div');
//     let isVideo = true;
//     let intervalId;

//     function showVideo() {
//         heroContentDiv.classList.add('video');
//         heroContentDiv.classList.remove('show-five');
//         footerContent2.classList.add('video');
//         footerContent2.classList.remove('show-five');
//         heroRightDiv.classList.add('video');
//         heroRightDiv.classList.remove('show-five');
//     }

//     function showFiveBooks() {
//         heroContentDiv.classList.add('show-five');
//         heroContentDiv.classList.remove('video');
//         footerContent2.classList.add('show-five');
//         footerContent2.classList.remove('video');
//         heroRightDiv.classList.add('show-five');
//         heroRightDiv.classList.remove('video');
//     }
//     setTimeout(() => {
//         toggleBooks();
//     }, 100);

//     function toggleBooks() {
//         if (isVideo) {
//             showFiveBooks();
//         } else {
//             showVideo();
//         }
//         isVideo = !isVideo;
//     }

//     function startTransition() {
//         intervalId = setInterval(toggleBooks, 8000);
//     }

//     function stopTransition() {
//         clearInterval(intervalId);
//     }


//     showVideo();

//     setTimeout(() => {
//         startTransition();
//     }, 100);


//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//     let player;
//     window.onYouTubeIframeAPIReady = function () {
//         player = new YT.Player('youtube-video', {
//             events: {
//                 'onStateChange': onPlayerStateChange
//             }
//         });
//     };

//     function onPlayerStateChange(event) {
//         if (event.data === YT.PlayerState.PLAYING) {
//             stopTransition();
//         } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
//             startTransition();
//         }
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const heroContentDiv = document.querySelector('.hero_content_div');
//     const footerContent2 = document.querySelector('.footer_content_2');
//     const heroRightDiv = document.querySelector('.hero_right_div');
//     const mobileHeroImageVideo = document.querySelector('.mobile_hero_image_video');
//     const localVideo = document.getElementById('local-video');
//     let isVideo = false; // Start with five books showing
//     let intervalId;

//     function showVideo() {
//         heroContentDiv.classList.add('video');
//         heroContentDiv.classList.remove('show-five');
//         footerContent2.classList.add('video');
//         footerContent2.classList.remove('show-five');
//         heroRightDiv.classList.add('video');
//         heroRightDiv.classList.remove('show-five');
//         mobileHeroImageVideo.classList.add('video');
//         mobileHeroImageVideo.classList.remove('show-five')
//         // Don't auto-play the video; keep it paused
//         // Start transitions when the video is shown
//         startTransition();
//     }

//     function showFiveBooks() {
//         heroContentDiv.classList.add('show-five');
//         heroContentDiv.classList.remove('video');
//         footerContent2.classList.add('show-five');
//         footerContent2.classList.remove('video');
//         heroRightDiv.classList.add('show-five');
//         heroRightDiv.classList.remove('video');
//         mobileHeroImageVideo.classList.remove('video');
//         mobileHeroImageVideo.classList.add('show-five')
//         localVideo.pause(); // Pause the video
//         startTransition(); // Start transitions when the video is paused
//     }

//     function toggleBooks() {
//         if (isVideo) {
//             showFiveBooks();
//         } else {
//             showVideo();
//         }
//         isVideo = !isVideo;
//     }

//     function startTransition() {
//         // Only start the interval if it is not already running
//         if (!intervalId) {
//             intervalId = setInterval(toggleBooks, 4000);
//         }
//     }

//     function stopTransition() {
//         clearInterval(intervalId);
//         intervalId = null; // Reset intervalId
//     }

//     // Initialize by showing the five books
//     showFiveBooks();

//     // Start transitions after a brief delay
//     setTimeout(() => {
//         startTransition();
//     }, 100);

//     // Listen for video events to manage transitions
//     localVideo.addEventListener('play', stopTransition);
//     localVideo.addEventListener('pause', startTransition);
//     localVideo.addEventListener('ended', startTransition);
// });



document.addEventListener("DOMContentLoaded", () => {
    const heroContentDiv = document.querySelector('.hero_content_div');
    const footerContent2 = document.querySelector('.footer_content_2');
    const heroRightDiv = document.querySelector('.hero_right_div');
    const mobileHeroImageVideo = document.querySelector('.mobile_hero_image_video');
    const localVideo = document.getElementById('local-video');
    const localVideoMobile = document.getElementById('local-video-mobile');
    const content3 = document.querySelector('.content_3_mobile');
    let isVideo = false; // Start with five books showing
    let intervalId;

    function showVideo() {
        console.log("Showing video");
        heroContentDiv.classList.add('video');
        heroContentDiv.classList.remove('show-five');
        footerContent2.classList.add('video');
        footerContent2.classList.remove('show-five');
        heroRightDiv.classList.add('video');
        heroRightDiv.classList.remove('show-five');
        mobileHeroImageVideo.classList.add('video');
        mobileHeroImageVideo.classList.remove('show-five');
        content3.classList.add('video');
        content3.classList.remove('show-five');
        startTransition();
    }

    function showFiveBooks() {
        console.log("Showing five books");
        heroContentDiv.classList.add('show-five');
        heroContentDiv.classList.remove('video');
        footerContent2.classList.add('show-five');
        footerContent2.classList.remove('video');
        heroRightDiv.classList.add('show-five');
        heroRightDiv.classList.remove('video');
        mobileHeroImageVideo.classList.remove('video');
        mobileHeroImageVideo.classList.add('show-five');
        content3.classList.add('show-five');
        content3.classList.remove('video');
        localVideo.pause(); // Pause the video
        localVideoMobile.pause();
        startTransition(); // Start transitions when the video is paused
    }

    function toggleBooks() {
        console.log("Toggling books");
        if (isVideo) {
            showFiveBooks();
        } else {
            showVideo();
        }
        isVideo = !isVideo;
    }

    function startTransition() {
        if (!intervalId) {
            console.log("Starting transition");
            intervalId = setInterval(toggleBooks, 20000);
        }
    }

    function stopTransition() {
        console.log("Stopping transition");
        clearInterval(intervalId);
        intervalId = null; // Reset intervalId
    }

    function handleVideoPlay() {
        console.log("Video is playing");
        stopTransition();
    }

    function handleVideoPauseOrEnd() {
        console.log("Video is paused or ended");
        startTransition();
    }

    // Initialize by showing the five books
    showFiveBooks();

    // Start transitions after a brief delay
    setTimeout(() => {
        startTransition();
    }, 100);

    // Listen for video events to manage transitions
    localVideo.addEventListener('play', handleVideoPlay);
    localVideo.addEventListener('pause', handleVideoPauseOrEnd);
    localVideoMobile.addEventListener('ended', handleVideoPauseOrEnd);
    localVideoMobile.addEventListener('play', handleVideoPlay);
    localVideoMobile.addEventListener('pause', handleVideoPauseOrEnd);
    localVideoMobile.addEventListener('ended', handleVideoPauseOrEnd);

    // Optional: Handle window resize if you want to manage transitions on screen size change
    window.addEventListener('resize', () => {
        if (!localVideo.paused) {
            stopTransition();
        } else {
            startTransition();
        }
    });
    window.addEventListener('resize', () => {
        if (!localVideoMobile.paused) {
            stopTransition();
        } else {
            startTransition();
        }
    });
});


