import {
  FETCH_CLASSES_REQUEST,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  FETCH_CLASS_BY_ID_REQUEST,
  FETCH_CLASS_BY_ID_SUCCESS,
  FETCH_CLASS_BY_ID_FAILURE,
} from "../Actions/ClassActions";

const initialState = {
  loading: false,
  uploading: false,
  classes: [],
  error: "",
  currentClass: null, // to store details of the current class by ID
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload,
        error: "",
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        loading: false,
        classes: [],
        error: action.payload,
      };
    case FETCH_CLASS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        currentClass: null,
      };
    case FETCH_CLASS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentClass: action.payload,
        error: "",
      };
    case FETCH_CLASS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        currentClass: null,
        error: action.payload,
      };
    case "CLASS_UPLOAD_START":
      return { ...state, uploading: true, loading: true };
    case "CLASS_UPLOAD_SUCCESS":
      return {
        ...state,
        uploading: false,
        loading: false,
        classes: [...state.classes, action.data],
      };
    case "CLASS_UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        loading: false,
        error: action.payload,
      };

    case "FETCH_CLASS_START":
      return { ...state, loading: true };
    case "FETCH_CLASS_SUCCESS":
      return { ...state, loading: false, classes: action.data };
    case "FETCH_CLASS_FAIL":
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default classReducer;
