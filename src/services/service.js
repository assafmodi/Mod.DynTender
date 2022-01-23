import http from "../http-common";
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class DataService {
  getAll() {
    return http.get("/Tenders");
  }

  get(id) {
    return http.get(`/Tenders/${id}`);
  }

  create(data) {
    return http.post("/Tenders", data);
  }

  update(id, data) {
    return http.put(`/Tenders/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Tenders/${id}`);
  }

  deleteAll() {
    return http.delete(`/Tenders`);
  }

  findByTitle(title) {
    return http.get(`/Tenders?title=${title}`);
  }
}

export default new DataService();