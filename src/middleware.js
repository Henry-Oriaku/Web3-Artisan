import { successResponse } from "./lib/api";
import { NextRequest } from "next/server";

export function middleware(request) {
}

export const config = {
    matcher: '/api/:path*'
}