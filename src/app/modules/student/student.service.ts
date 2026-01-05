import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  const result = await Student.create(studentData);

  return result;
};
// const getAllStudentsFromDB = async () => {};
// const getSingleStudentFromDB = async () => {};
// const deleteStudentFromDB = async () => {};

export const StudentServices = {
  createStudentIntoDB,
  //   getAllStudentsFromDB,
  //   getSingleStudentFromDB,
  //   deleteStudentFromDB,
};
