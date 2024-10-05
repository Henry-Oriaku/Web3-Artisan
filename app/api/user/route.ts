
'use server'
import { successResponse } from 'lib/api';
import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server'

export async function POST(
  req: Request
) {
  try {
    const { first_name, last_name, email, address } = await req.json();

    const newUser = prisma.user.create({
      data: {
        walletAddress: address,
        name: `${first_name} ${last_name}`,
        email: email,
        isAdmin: false
      }
    });

    return successResponse("User Account Updated", newUser, 200);
  } catch (error) {
    return successResponse("Failed to fetch Products", error);
  }
}
