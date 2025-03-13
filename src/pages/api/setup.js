// import { setupDatabase } from "../../lib/db";

// export default async function handler(req, res) {
//   try {
//     await setupDatabase();
//     res.status(200).json({ message: "Database setup completed!" });
//   } catch (error) {
//     res.status(500).json({ error: "Database setup failed!" });
//   }
// }


import dbConnect from "../../lib/db";

export default async function handler(req, res) {
  try {
    await dbConnect();
    // if(res){
    //   res.send({
    //     "status" : 200,
    //     "data" : res.data[0],
    //     "message" : "User data is present",
    //   })
    // }
    return res.status(200).json({ message: "✅ MongoDB Connection Successful!" });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    return res.status(500).json({ error: "MongoDB Connection Failed" });
  }
}
