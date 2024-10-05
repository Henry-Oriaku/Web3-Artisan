import { NextResponse } from "next/server";
import responseCode from "./responseCode";

export function successResponse(message: string, data: any, status: number = 200, code = responseCode.OK) {
    return NextResponse.json({ code, message, data }, { status });
}

export function failureResponse(error: string, data: any, status: number = 500) {
    return NextResponse.json({ error, data }, { status });
}