import { request } from "express";

export { asyncHandeler };

// this is when try catch is on the production level
// const asyncHandeler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({ message: err.message });
//   }
// };

//this is when promisses  is on the production level
const asyncHandeler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
