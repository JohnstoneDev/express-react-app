var express = require('express');
var router = express.Router()

router.get("/",((req,res,next) => {
  res.send("Greek mythology is the body of myths originally told by the ancient Greeks, and a genre of Ancient Greek folklore. These stories concern the origin and nature of the world, the lives and activities of deities, heroes, and mythological creatures, and the origins and significance of the ancient Greeks' own cult and ritual practices. Modern scholars study the myths to shed light on the religious and political institutions of ancient Greece, and to better understand the nature of myth-making itself.")
}))

module.exports = router;
