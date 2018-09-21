var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号");
  process.exit(1);
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;
  console.log("方方说：含查询字符串的路径\n" + pathWithQuery);

  if (path === "/") {
    let string = fs.readFileSync("./index.html", "utf-8");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(string);
    response.end();
  } else if (path === "/main.js") {
    let string = fs.readFileSync("./main.js", "utf-8");
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/javascript;charset=utf-8");
    response.write(string);
    response.end();
  } else if (path === "/xxx") {
    // let string = fs.readFileSync("./xxx", "utf-8");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.write(`
      {
        "note":{
          "to":"小谷",
          "from":"ease",
          "heading":"greet",
          "content":"hi"
        }
      }
    `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write("没有找到路径");
    response.end();
  }
});

server.listen(port);
console.log("监听 " + port + " 成功\n请打开 http://localhost:" + port);
