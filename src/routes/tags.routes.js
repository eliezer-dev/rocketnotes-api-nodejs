const {Router} = require("express")
const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const tagsRoutes = Router();

const tagsController = new TagsController();
tagsRoutes.use(ensureAuthenticated)
tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes;