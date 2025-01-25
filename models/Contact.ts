// app/models/Contact.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Contact document
interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define the schema
const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the model
const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
export default Contact;