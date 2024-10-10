import { PrismaClient } from "@prisma/client";

// Define a global variable for Prisma
const globalForPrisma = globalThis;

// Initialize Prisma client, reusing the global instance if it exists
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// If not in production, store the Prisma instance globally
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
