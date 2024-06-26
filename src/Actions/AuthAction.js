import * as AuthApi from "../Api/AuthRequest";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.logIn(formData);
    const user = jwtDecode(data.access_token);

    if (user.role === "STUDENT") {
      const detailsResponse = await AuthApi.fetchStudentDetails(user.userId);
      const userDetails = detailsResponse.data;
      const combinedUserData = { ...user, details: userDetails };

      dispatch({ type: "AUTH_SUCCESS", data: combinedUserData });

      navigate(`/student-home`);
    } else if (user.role === "INSTRUCTOR") {
      const detailsResponse = await AuthApi.fetchInstructorDetails(user.userId);
      const userDetails = detailsResponse.data;
      const combinedUserData = { ...user, details: userDetails };

      dispatch({ type: "AUTH_SUCCESS", data: combinedUserData });
      navigate(`/instructor-home`);
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.signUp(formData);

    const user = jwtDecode(data.access_token);

    console.log(data);
    if (user.role === "STUDENT") {
      const detailsResponse = await AuthApi.fetchStudentDetails(user.userId);
      const userDetails = detailsResponse.data;
      const combinedUserData = { ...user, details: userDetails };

      dispatch({ type: "AUTH_SUCCESS", data: combinedUserData });
      navigate(`/student-home`);
    } else if (user.role === "INSTRUCTOR") {
      const detailsResponse = await AuthApi.fetchInstructorDetails(user.userId);
      const userDetails = detailsResponse.data;
      const combinedUserData = { ...user, details: userDetails };

      dispatch({ type: "AUTH_SUCCESS", data: combinedUserData });
      navigate(`/instructor-home`);
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};

// export const fetchUserDetails =(id)=> async(dispatch)=> {
//     dispatch({type: "FETCHING_START"})
//     console.log(id)
//     try {
//         const { data } = await AuthApi.fetchUserDetails(id)
//         dispatch({ type: "FETCHING_SUCCESS", data: data })

//     } catch (error) {
//         console.log(error)
//         dispatch({type: "FETCHING_FAIL"})
//     }
// }
