import { Router } from "express";
import { StudentControllers } from "./student.controller";

const router = Router();

router.post(`/create-student`, StudentControllers.createStudent);
// router.get(`/all`);
// router.get(`/studentId`);
// router.delete(`/studentId`);

export const StudentRoutes = router;
