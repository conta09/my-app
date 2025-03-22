import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the request body
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create and save the contact document
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Return success response
    return NextResponse.json(
      { message: 'Message sent successfully!', data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
