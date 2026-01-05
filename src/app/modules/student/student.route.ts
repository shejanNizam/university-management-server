import { Router } from "express";

const router = Router();

router.post(`/create-student`);
router.get(`/all`);
router.get(`/studentId`);
router.delete(`/studentId`);

export const StudentsRoutes = router;
