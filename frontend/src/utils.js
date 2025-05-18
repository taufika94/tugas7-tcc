const isProduction = process.env.NODE_ENV === "production";

export const BASE_URL = isProduction
  ? "https://notes-be196-589948883802.us-central1.run.app"
  : "http://localhost:3001";
