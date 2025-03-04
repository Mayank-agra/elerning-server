// import express from "express";
// import {loginUser, myProfile, register,verifyUser} from "../controllers/user.js";
// import { isAuth } from "../middlewares/isAuth.js";

// const router = express.Router();

// router.post('/user/register',register);
// router.post('/user/verify',verifyUser);
// router.post('/user/login',loginUser);
// router.get('/user/me',isAuth,myProfile);
// export default router;

import express from "express";
import {
  loginUser,
  myProfile,
  register,
  verifyUser,
} from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);

export default router;
