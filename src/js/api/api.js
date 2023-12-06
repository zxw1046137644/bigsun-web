import request from "../public/request";

export function hello() {
  console.log("hello");
  return request.get("/api/rest/buss2");
}
