import { Request, Response } from "express";

const getAllStudents = async (req: Request, res: Response) => {};
const getSingleStudent = async (req: Request, res: Response) => {};
const deleteStudent = async (req: Request, res: Response) => {};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
