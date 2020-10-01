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

const onPlayerReady = () => { 
    const durationSec = player.getDuration();
    $('.player__duration-estimate').text(durationSec);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '392',
        width: '662',
        videoId: 'QMeew_hKLBU',
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