// import express from 'express';
// import { getALLCourses,getSingleCourse } from '../controllers/course.js';
// import { fetchLectures,fetchLecture,getMyCourses} from '../controllers/course.js';
// import { isAuth } from '../middlewares/isAuth.js';

// const router=express.Router();

// router.get("/course/all",getALLCourses);//get all courses
// router.get("/course/:id",getSingleCourse);//get single course
// router.get("/lectures/:id",isAuth,fetchLectures);//get all lectures
// router.get("/lecture/:id",isAuth,fetchLecture); //get single lecture
// router.get("/mycourse",isAuth,getMyCourses); //get all courses subscribed by user

// export default router;

import express from "express";
import {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
  fetchLecture,
  getMyCourses,
  checkout,
  paymentVerification,
} from "../controllers/course.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/all", getAllCourses);
router.get("/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/lecture/:id", isAuth, fetchLecture);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/checkout/:id", isAuth, checkout);
router.post("/verification/:id", isAuth, paymentVerification);

export default router;
