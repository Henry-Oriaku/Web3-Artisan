
'use server'
import { successResponse, withValidation } from '@/lib/api';
import { prisma } from '@/lib/prisma';
import { IncomingForm } from 'formidable';
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

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle form data
  },
};

// Handle PATCH requests
export async function PATCH(request) {
  const validations = z.object({
    walletAddress: z.string().min(3), // Identify user by walletAddress
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    isArtisan: z.boolean().optional(), // Optional field for artisan status
  });

  return withValidation(request, 'PATCH', validations, async ({ walletAddress, name, email, isArtisan }) => {
    const form = new IncomingForm();

    // Parse the incoming form
    form.parse(request, async (err, fields, files) => {
      if (err) {
        return successResponse({ message: "Error parsing file upload" }, 400);
      }

      let featuredImageUrl = '';
      const featuredImage = files.featuredImage; // Access the uploaded file

      // Check if a file is uploaded
      if (featuredImage) {
        const formData = new FormData();
        formData.append('featuredImage', fs.createReadStream(featuredImage.filepath)); // Stream the file to the PHP server

        // Upload the image to the PHP server
        const phpUploadUrl = 'https://w3stuffs.alwaysdata.net'; // URL of your PHP server upload script
        const uploadResponse = await fetch(phpUploadUrl, {
          method: 'POST',
          body: formData,
        });

        const data = await uploadResponse.json();

        // Check if the upload was successful
        if (data.url) {
          featuredImageUrl = data.url; // Get the uploaded image URL
        } else {
          return successResponse({ message: "Failed to upload image: " + data.error, status: 500 });
        }
      }

      // Prepare update data
      const updateData = {
        ...(name && { name }),
        ...(email && { email }),
        ...(isArtisan !== undefined && { isArtisan }), // Check if isArtisan is provided
        ...(featuredImageUrl && { featuredImage: featuredImageUrl }), // Add featuredImageUrl if it exists
      };

      try {
        const updatedUser = await prisma.user.update({
          where: { walletAddress }, // Use walletAddress to find the user
          data: updateData,
        });
        return successResponse({ message: "User Account Updated", user: updatedUser });
      } catch (error) {
        console.error(error); // Log error details for debugging
        return successResponse({ message: "Failed to update user", status: 500 });
      }
    });
  });
}
