import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.8.197:8080/",
});

export const createClassSpace = (classSpaceData) =>
  API.post("/api/v1/class/createClassSpace", classSpaceData);

export const getClassSpaces = (id) => API.get(`/api/v1/class/classSpace/${id}`);
export const getAllClasses = (id) =>
  API.get(`/api/v1/class/classes-by-instr/${id}`);
