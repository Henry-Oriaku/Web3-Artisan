
'use server'
import { successResponse, withValidation } from '@/lib/api';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod';

export async function POST(
  request
) {

  const validations = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    walletAddress: z.string().min(3),
  })
  return withValidation(request, 'POST', validations, async ({ name, email, walletAddress }) => {
    try {
      const newUser = await prisma.user.create({
        data: {
          walletAddress: walletAddress || '',
          name: name || '',
          email: email || '',
          isAdmin: false
        }
      });
      return successResponse({ message: "User Account Updated" });
    } catch (error) {
      return successResponse({ message: "Failed to UPdate" });
    }
  })
}
