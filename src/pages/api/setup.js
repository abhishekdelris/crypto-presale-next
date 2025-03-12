import { setupDatabase } from "../../lib/db";

export default async function handler(req, res) {
  try {
    await setupDatabase();
    res.status(200).json({ message: "Database setup completed!" });
  } catch (error) {
    res.status(500).json({ error: "Database setup failed!" });
  }
}
