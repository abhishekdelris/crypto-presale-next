import { executeQuery } from "../../../lib/db"; // Adjust path as needed

export default async function handler(req, res) {
  try {
    // show blog news
    const cryptoNews = await executeQuery({
      query: "SELECT * FROM crypto_news"
    });

    return res.status(201).json({
      success: true,
      data: await cryptoNews,
      message: "crypto blog news successfully show"
    });
  } catch (error) {
    console.error("Blog Data News error:", error);
    return res.status(500).json({ error: "Failed to Blog News" });
  }
}
