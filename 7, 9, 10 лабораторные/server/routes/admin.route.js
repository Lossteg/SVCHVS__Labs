const router = require("express").Router();

const {
  signin,
  getCommunities,
  getCommunity,
  addModerator,
  removeModerator,
  getModerators,
} = require("../controllers/admin.controller");

const requireAdminAuth = require("../middlewares/auth/adminAuth");

router.post("/signin", signin);

router.use(requireAdminAuth);

router.get("/community/:communityId", getCommunity);
router.get("/communities", getCommunities);
router.get("/moderators", getModerators);

router.patch("/add-moderators", addModerator);
router.patch("/remove-moderators", removeModerator);

module.exports = router;