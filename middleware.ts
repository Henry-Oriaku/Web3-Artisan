import { successResponse } from "lib/api";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
}

export const config = {
    matcher: '/api/:path*'
}