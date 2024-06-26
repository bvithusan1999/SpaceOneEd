import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.8.197:8080/" });

export const createClass = (classData) =>
  API.post("/api/v1/class/createClass", classData);

export const getClasses = (id) => API.get(`/api/v1/class/classes/${id}`);

export const requestAccepted = (payload) =>
  API.put(`api/v1/class/manage-join-request`, payload);
