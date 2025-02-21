import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById("vimeo-player");

const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
player.on("timeupdate", throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}, 1000));




