// app/api/form/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/Contact';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI!);
};

export async function POST(request: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create a new contact document
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!', data: contact }, { status: 201 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}