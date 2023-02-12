const { Router } = require('express');
const upload = require("../middleware/upload");
const router = Router();

const {
    getImg,
    createImg,
    deleteImg,
    getImgById,
    updateImg
} = require("../controllers/img");

//API mongodb
//Reporte IMG
router.get('/image', getImg)
router.get("/image/:id", getImgById)
router.post("/image", upload.single("userImage"), createImg)
router.put("/image/:id", upload.single("userImage"), updateImg)
router.delete("/image/:id", deleteImg)

module.exports = router;