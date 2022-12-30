const express = require("express");
const ZingMp3Controller = require("../controllers/ZingMP3Controller");


const route = express.Router();


route.get("/song", ZingMp3Controller.getSong);

route.get("/detailplaylist", ZingMp3Controller.getDetailPlayList);

route.get("/home", ZingMp3Controller.getHome);

route.get("/top100", ZingMp3Controller.getTop100);

route.get("/charthome", ZingMp3Controller.getChartHome);

route.get("/newreleasechart", ZingMp3Controller.getNewReleaseChart);

route.get("/infosong", ZingMp3Controller.getInfoSong);

route.get("/artist", ZingMp3Controller.getArtist);

route.get("/artistsong", ZingMp3Controller.getListArtistSong);

route.get("/lyric", ZingMp3Controller.getLyric);

route.get("/search", ZingMp3Controller.search);

route.get("/listmv", ZingMp3Controller.getListMv);

route.get("/categorymv", ZingMp3Controller.getCategoryMV);

route.get("/video", ZingMp3Controller.getVideo);

module.exports = route;