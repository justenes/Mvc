const http = require("http");
const student = require("./student");

const PORT = 3000;

function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    const FULLNAME = student.getStudentFullName();
    const STUDENT_ID = student.getStudentId();
    response.end(`<p>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}</p>`);
}

const server = http.createServer(requestListener);
  
server.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
