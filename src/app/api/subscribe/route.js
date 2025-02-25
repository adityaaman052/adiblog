import { connectToDatabase } from "lib/mongodb";
import Subscription from "models/Subsctiption"

export async function POST(req) {
  try {
    await connectToDatabase();
    const { email } = await req.json();

    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return Response.json({ message: "You are already in!" }, { status: 400 });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    return Response.json({ message: "See You Soon!" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error subscribing", error }, { status: 500 });
  }
}
