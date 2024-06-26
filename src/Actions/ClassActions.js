import * as api from "../Api/ClassRequest";

export const createClass = (classData) => async (dispatch) => {
  try {
    dispatch({ type: "UPLOAD_START" });
    const { data } = await api.createClass(classData);
    dispatch({ type: "UPLOAD_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL", error });
  }
};

export const getClasses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_CLASS_START" });
    const { data } = await api.getClasses(id);
    console.log(data);
    dispatch({ type: "FETCH_CLASS_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_CLASS_FAIL", error });
  }
};

export const requestAccepted = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "ACCEPT_REQUEST" });
    const { data } = await api.requestAccepted(payload);
    dispatch({ type: "ACCEPT_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ACCEPT_FAIL", error });
  }
};

////////////////////////////////////////////////////

// src/actions/classActions.js
import axios from "axios";

export const FETCH_CLASSES_REQUEST = "FETCH_CLASSES_REQUEST";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_FAILURE = "FETCH_CLASSES_FAILURE";
export const FETCH_CLASS_BY_ID_REQUEST = "FETCH_CLASS_BY_ID_REQUEST";
export const FETCH_CLASS_BY_ID_SUCCESS = "FETCH_CLASS_BY_ID_SUCCESS";
export const FETCH_CLASS_BY_ID_FAILURE = "FETCH_CLASS_BY_ID_FAILURE";

export const fetchClassesRequest = () => ({
  type: FETCH_CLASSES_REQUEST,
});

export const fetchClassesSuccess = (classes) => ({
  type: FETCH_CLASSES_SUCCESS,
  payload: classes,
});

export const fetchClassesFailure = (error) => ({
  type: FETCH_CLASSES_FAILURE,
  payload: error,
});

export const fetchClasses = () => {
  return async (dispatch) => {
    dispatch(fetchClassesRequest());
    try {
      const response = await axios.get(
        "http://192.168.8.197:8080/api/v1/class/classes"
      );
      dispatch(fetchClassesSuccess(response.data));
    } catch (error) {
      dispatch(fetchClassesFailure(error.message));
    }
  };
};

export const fetchClassByIdRequest = () => ({
  type: FETCH_CLASS_BY_ID_REQUEST,
});

export const fetchClassByIdSuccess = (classDetails) => ({
  type: FETCH_CLASS_BY_ID_SUCCESS,
  payload: classDetails,
});

export const fetchClassByIdFailure = (error) => ({
  type: FETCH_CLASS_BY_ID_FAILURE,
  payload: error,
});

export const fetchClassById = (classId) => {
  return async (dispatch) => {
    dispatch(fetchClassByIdRequest());
    try {
      const response = await axios.get(
        `http://192.168.8.197:8080/api/v1/class/class/${classId}`
      );
      dispatch(fetchClassByIdSuccess(response.data));
    } catch (error) {
      dispatch(fetchClassByIdFailure(error.message));
    }
  };
};
