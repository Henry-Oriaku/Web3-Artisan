
'use server'
import { successResponse } from 'lib/api';
import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server'

export async function GET(
  req: Request
) {
  try {
    const products = await prisma.product.findMany({
      where: {
        isActive: true
      }
    });
    return successResponse("", products, 200);
  } catch (error) {
    return successResponse("Failed to fetch Products", error);
  }
}

export async function POST(
  req: Request
) {

}