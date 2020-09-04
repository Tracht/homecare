var createError = require("http-errors");
import * as express from "express";
const app = express();

import {pingController} from "./controllers/ping";
import {testController} from "./controllers/test";

// CONTROLLERS
app.use(pingController);
app.use(testController);


// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (_req, _res, next: any) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err: any, req: any, res: any, _next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


export default app;
