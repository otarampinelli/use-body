# use-body [![NPM version](https://img.shields.io/npm/v/use-body.svg?style=flat)](https://www.npmjs.com/package/use-body) [![NPM monthly downloads](https://img.shields.io/npm/dm/use-body.svg?style=flat)](https://npmjs.org/package/use-body) [![NPM total downloads](https://img.shields.io/npm/dt/use-body.svg?style=flat)](https://npmjs.org/package/use-body)

> Extract the request body from JSON, text and urlencoded formats.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install use-body
```

## Usage

```js
import http from "node:http";
import useBody from "use-body";

// TYPES: json / text / urlencoded

// JSON example

http
  .createServer((req, res) => {
    useBody(
      req,
      res,
      () => {
        console.log("Request body", req.body);
        res.end("Working!!!");
      },
      "json"
    );
  }) // Default format always will be json, but you can choose between json, text and urlencoded as formats
  .listen(3000);

/*
    example result: 
    Request body { email: 'body@usebody.com' }
*/

// Text example

http
  .createServer((req, res) => {
    useBody(
      req,
      res,
      () => {
        console.log("Request body", req.body);
        res.end("Working!!!");
      },
      "text"
    );
  }) // Default format always will be json, but you can choose between json, text and urlencoded as formats
  .listen(3000);

/*
    example result: 
    Request body: some text 
*/

// URL encoded example

http
  .createServer((req, res) => {
    useBody(
      req,
      res,
      () => {
        console.log("Request body", req.body);
        res.end("Working!!!");
      },
      "urlencoded"
    );
  }) // Default format always will be json, but you can choose between json, text and urlencoded as formats
  .listen(3000);

/*
    example result: 
    Request body: { user: 'getbody' }
*/
```

### Author

**Otavio Rampinelli**

- [LinkedIn Profile](https://linkedin.com/in/otarampinelli)
- [GitHub Profile](https://github.com/otarampinelli)

### License

Copyright © 2024, [Otavio Rampinelli](https://github.com/otarampinelli).
Released under the [MIT License](LICENSE).

---
