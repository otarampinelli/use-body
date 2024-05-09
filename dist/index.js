// src/index.ts
import querystring from "querystring";
function useBody(req, res, next, type = "json") {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    try {
      console.log(type)
      switch (type) {
        case "json":
          req.body = JSON.parse(data);
          break;
        case "urlencoded":
          req.body = querystring.parse(data);
          break;
        case "text":
          req.body = data;
          break;
        default:
          req.body = {};
      }
    } catch (err) {
      req.body = {};
      throw new Error(err);
    }
    next();
  });
}
var src_default = useBody;
export {
  src_default as default
};
//# sourceMappingURL=index.js.map