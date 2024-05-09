import { IncomingMessage, ServerResponse } from "node:http";
import querystring from "node:querystring";

interface RequestInterface extends IncomingMessage {
  body: any;
}

function useBody(
  req: RequestInterface,
  res: ServerResponse,
  next: () => {},
  type = "json"
) {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    try {
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
      throw new Error(err as string);
    }
    next();
  });
}

export default useBody;
