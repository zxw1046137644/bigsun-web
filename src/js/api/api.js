import request from "../public/request";

export function hello() {
  return request.get("/api/rest/buss");
}


//获取项目列表
export function pageList(params) {
  // setTimeout(()=>{
  //   console.log('延迟')
  // },9000)
  return request.post("/api/common/projectList",params);
}
//获取case列表
export function caseList(params) {
  return request.post("/api/common/caseList",params);
}

//获取case任务列表
export function caseTaskList(params) {
  return request.post("/api/common/caseTaskList",params);
}

export function updateCaseTask(params) {
  return request.post("/api/common/updateCaseTask",params);
}
export function startCase(params) {
  return request.post("/api/common/startCase",params);
}
