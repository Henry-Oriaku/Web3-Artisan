
'use server'
import { successResponse, withValidation } from 'lib/api';
import { prisma } from '../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod';

export async function POST(
  request: NextRequest
) {

  const validations = z.object({
    name: z.string(),
    email: z.string().email(),
    walletAddress: z.string(),
  })
  return withValidation(request, 'POST', validations, async ({ name, email, walletAddress }) => {
    try {
      const newUser = prisma.user.create({
        data: {
          walletAddress,
          name,
          email,
          isAdmin: false
        }
      });

      return successResponse({ message: "User Account Updated" });
    } catch (error) {
      return successResponse({ message: "Failed to UPdate" });
    }
  })
}
