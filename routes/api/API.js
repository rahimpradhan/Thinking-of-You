const router = require("express").Router();
const toyController = require("./toyController");


router.route("/")
    .get(toyController.findAll)
    .post(toyController.create);


router
    .route("/:id")
    .get(toyController.findById)
    .put(toyController.update)
    .delete(toyController.remove);

module.exports = router;