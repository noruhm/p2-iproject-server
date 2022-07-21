const Controller = require("../controllers/Controller");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/product", Controller.getProduct);
router.get("/category", Controller.getCategory);
router.get("/cost", Controller.getDeliveryCost);
router.use(authentication);
router.post("/order/:productId", Controller.addUserOrder);
router.get("/order", Controller.getUserOrder);
router.get("/payment", Controller.payment);
router.get("/paymentstatus", Controller.checkPaymentStatus);
router.patch("/paymentstatus", Controller.handleStatusPayment);

module.exports = router;
