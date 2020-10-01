let player;
const playerContainer = $('.player');

let eventsInit = () => {
    $('.player__start').on('click', evt => {
        evt.preventDefault();

        if (playerContainer.hasClass('paused')) {
            player.pauseVideo();
            playerContainer.removeClass('paused');
        } else {
            playerContainer.addClass('paused');
            player.playVideo();
        }

    })
}

const formatTime = timeSec => { 
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime % 60);

    function addZero(num) { 
        return num < 10 ? `0${num}` : num;
    }
    return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => { 
    let interval;

    const durationSec = player.getDuration();
    $('.player__duration-estimate').text(formatTime(durationSec));

    if (typeof interval !== 'undefined') { 
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        $('.player__duration-completed').text(formatTime(completedSec));
    }, 1000);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '392',
        width: '662',
        videoId: 'uCNWuSbPnt4',
        events: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
            autoplay: 0,

            'onReady': onPlayerReady,
            //'onStateChange': onPlayerStateChange
        }
    });
}

eventsInit();