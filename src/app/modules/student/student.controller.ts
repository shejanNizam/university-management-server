import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student is created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      error: err,
    });
  }
};
// const getAllStudents = async (req: Request, res: Response) => {};
// const getSingleStudent = async (req: Request, res: Response) => {};
// const deleteStudent = async (req: Request, res: Response) => {};

export const StudentControllers = {
  createStudent,
  //   getAllStudents,
  //   getSingleStudent,
  //   deleteStudent,
};
