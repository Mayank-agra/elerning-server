// import express from "express";
// import { isAuth, isAdmin } from "../middlewares/isAuth.js";
// import {
//   addlectures,
//   createCourse,
//   deleteCourse,
//   deletelecture,
//   getAllStats,
//   getAllUser,
//   updateRole,
// } from "../controllers/admin.js";
// import { uploadFiles } from "../middlewares/multer.js";

// const router = express.Router();

// router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse); // only admin can create course
// router.post("/course/:id", isAuth, isAdmin, uploadFiles, addlectures); // only admin can add lectures
// router.delete("/lecture/:id", isAuth, isAdmin, deletelecture); //// only admin can delete lecture
// router.delete("/course/:id", isAuth, isAdmin, deleteCourse); // only admin can delete lecture
// router.get("/stats", isAuth, isAdmin, getAllStats); // only admin can get all stats
// router.put("/user/:id", isAuth, isAdmin, updateRole); // only admin can get all stats
// router.get("/users", isAuth, isAdmin, getAllUser); // only admin can get all stats
// export default router;

import express from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllStats,
  getAllUser,
  updateRole,
} from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
router.get("/stats", isAuth, isAdmin, getAllStats);
router.put("/user/:id", isAuth, isAdmin, updateRole);
router.get("/users", isAuth, isAdmin, getAllUser);

export default router;
