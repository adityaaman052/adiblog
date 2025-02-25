import { connectToDatabase } from "lib/mongodb";
import Contact from "models/Contact"

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, email, phone, project } = await req.json();

    const newContact = new Contact({ name, email, phone, project });
    await newContact.save();

    return Response.json({ message: "Contact saved successfully!" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error saving contact", error }, { status: 500 });
  }
}
