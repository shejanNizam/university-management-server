import { NextFunction, Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Students are retrive successfully",
      data: result,
      total: result.length,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;

    if (!studentId) {
      throw new Error("Student ID is required");
    }

    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // console.log(result);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Student is retrived successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    if (!studentId) {
      throw new Error("Student ID is required");
    }

    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Student is deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
