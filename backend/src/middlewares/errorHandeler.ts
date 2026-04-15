import { ErrorRequestHandler } from "express";
import { HTTP_STATUS } from "../config/http.config";
import { Http2ServerRequest } from "http2";


export const errorHandeler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(`Error occureed:${req.path}`, error);

    if (error instanceof SyntaxError) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid JSON format. please check your request boy."
        })
    }

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internall server error",
        error: error?.message || "something  went worng"
    })

}