
'use server'
import { successResponse } from 'lib/api';
import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server'

export async function POST(
  req: Request
) {
  try {
    const { name, email, address, services } = await req.json();

    const newUser = prisma.user.create({
      data: {
        walletAddress: address,
        name: name,
        email: email,
        isAdmin: false
      }
    });

    return successResponse({ message: "User Account Updated" });
  } catch (error) {
    return successResponse({ message: "Failed to fetch Products" });
  }
}
