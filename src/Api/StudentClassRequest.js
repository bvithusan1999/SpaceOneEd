import axios from "axios";

const API = axios.create({
  baseURL: "https://192.168.92.225:8080/",
});

export const requestAddmission = (id, userId) =>
  API.put(`api/v1/class/join`, { classId: id, studentId: userId });

export const getExploreClasses = () => API.get(`/classes/explore`);

export const getMyClasses = (id) => API.get(`/classes/my-classes/${id}`);
