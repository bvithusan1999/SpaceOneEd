import * as api from "../Api/StudentClassRequest";

export const getStudentClasses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_CLASS_FETCH_START" });
    const { data } = await api.getMyClasses(id);
    dispatch({ type: "STUDENT_CLASS_FETCH_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "STUDENT_CLASS_FETCH_FAIL", error });
  }
};

export const requestAddmission = (classId, studentId) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_CLASS_ADDMISSION_REQUEST" });
    const { data } = await api.requestAddmission(classId, studentId);
    console.log(studentId);
    dispatch({ type: "STUDENT_CLASS_ADDMISSION_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "STUDENT_CLASS_ADDMISSION_FAIL", error });
  }
};
