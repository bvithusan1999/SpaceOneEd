const classSpaceReducer = (
  state = { uploading: false, classSpaces: [], allClasses: [] },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        uploading: false,
        classSpaces: [...state.classSpaces, action.data],
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false };

    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, classSpaces: action.data };
    case "FETCH_FAIL":
      return { ...state, loading: false };

    case "FETCH_ALL_CLASSES_START":
      return { ...state, loading: true };
    case "FETCH_ALL_CLASSES_SUCCESS":
      return { ...state, loading: false, allClasses: action.data };
    case "FETCH_ALL_CLASSES_FAIL":
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default classSpaceReducer;
