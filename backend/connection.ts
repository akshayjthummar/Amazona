import mongoose from "mongoose";

export default function DbConnect(): void {
  const MONGODB_URI: string | undefined =
    process.env.MONGODB_URI || "mongodb://localhost/amazona";
  if (!MONGODB_URI) {
    console.error(
      "MongoDB connection URL not found in the environment variables."
    );
    return;
  }

  // Optional: Specify additional connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as Parameters<typeof mongoose.connect>[1];

  mongoose.connect(MONGODB_URI, options);

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.error("Connection error:", error);
  });
  db.once("open", () => {
    console.log("DB Connected...");
  });
}
