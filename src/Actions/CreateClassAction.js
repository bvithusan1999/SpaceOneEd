import * as api from "../Api/ClassRequest";

export const createClass = (classData) => async (dispatch) => {
  try {
    dispatch({ type: "CLASS_UPLOAD_START" });
    const { data } = await api.createClass(classData);
    dispatch({ type: "CLASS_UPLOAD_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CLASS_UPLOAD_FAIL", error });
  }
};

export const getClasses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "CLASS_FETCH_START" });
    const { data } = await api.getClasses(id);
    dispatch({ type: "CLASS_FETCH_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CLASS_FETCH_FAIL", error });
  }
};
