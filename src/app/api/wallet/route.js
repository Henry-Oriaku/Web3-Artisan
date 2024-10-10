
// 'use server'
import apiResponseCode from '@/constants/apiResponseCode';
import { failureResponse, successResponse, withValidation } from '@/lib/api';
import { NextRequest } from 'next/server';
import z from "zod";
import { prisma } from '@/lib/prisma';

export async function POST(
    request
) {

    const validations = z.object({
        address: z.string().min(5)
    })
    return withValidation(request, 'POST', validations, async ({ address }) => {

        try {

            const newUser = await prisma.user.findFirst({
                where: {
                    walletAddress: address
                }
            });
            return successResponse({
                message: "",
                data: newUser,
                status: 200,
                code: apiResponseCode[newUser ? 'OK' : 'ACCOUNT_NOT_FOUND'],
            });
        } catch (error) {
            return failureResponse({ error: "Failed to Validate Wallet", detail: String(error).toString() });
        }
    });
}

