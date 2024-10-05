
// 'use server'
import { failureResponse, successResponse, validateRequest, withValidation } from 'lib/api';
import { prisma } from '../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest } from 'next';
import z from "zod"
import apiResponseCode from 'constants/apiResponseCode';

export async function POST(
    request: NextRequest
) {

    const validations = z.object({
        address: z.string().min(5)
    })
    return await withValidation(request, 'POST', validations, async ({ address }) => {

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
                code: apiResponseCode.WALLET_NOT_FOUND,
            });
        } catch (error) {
            return failureResponse({ error: "Failed to Validate Wallet", detail: String(error).toString() });
        }
    });
}

