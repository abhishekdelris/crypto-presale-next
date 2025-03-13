// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// }); 

// export async function executeQuery({ query, values = [] }) {
//   try {
//     const [result] = await pool.query(query, values);
//     console.log("database connected...!");
    
//     return result;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Database query failed');
//   }
// }

// // SQL setup scripts to create tables
// export async function setupDatabase() {
//   // Create Users table
//   await executeQuery({
//     query: `
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         email VARCHAR(255) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         name VARCHAR(255),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//       )
//     `
//   });

//   // Create Roles table
//   await executeQuery({
//     query: `
//       CREATE TABLE IF NOT EXISTS roles (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(50) NOT NULL UNIQUE
//       )
//     `
//   });

//   // Create User_Roles junction table
//   await executeQuery({
//     query: `
//       CREATE TABLE IF NOT EXISTS user_roles ( 
//         user_id INT NOT NULL,
//         role_id INT NOT NULL,
//         PRIMARY KEY (user_id, role_id),
//         FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
//         FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
//       )
//     `
//   });

//   // Insert default roles if they don't exist
//   await executeQuery({
//     query: `
//       INSERT IGNORE INTO roles (name) VALUES ('user'), ('admin')
//     `
//   });
// }


// import mysql from 'mysql2/promise';

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST || "127.0.0.1",  // Ensure correct host
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   connectTimeout: 30000,  // Increase timeout to 20 seconds
// });

// // Function to execute queries
// export async function executeQuery({ query, values = [] }) {
//   try {
//     console.log("Attempting database connection...");
//     const [result] = await pool.query(query, values);
//     console.log("Database connected successfully!");
//     return result;
//   } catch (error) {
//     console.error("Database Error:", error.message);
//     console.error("Error Code:", error.code);
//     throw new Error("Database query failed");
//   }
// }

// // Function to setup database tables
// export async function setupDatabase() {
//   try {
//     console.log("Setting up database...");

//     // Create Users table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS users (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           email VARCHAR(255) NOT NULL UNIQUE,
//           password VARCHAR(255) NOT NULL,
//           name VARCHAR(255),
//           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//           updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//         )
//       `,
//     });

//     // Create Roles table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS roles (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           name VARCHAR(50) NOT NULL UNIQUE
//         )
//       `,
//     });

//     // Create User_Roles junction table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS user_roles ( 
//           user_id INT NOT NULL,
//           role_id INT NOT NULL,
//           PRIMARY KEY (user_id, role_id),
//           FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
//           FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
//         )
//       `,
//     });

//     // Insert default roles if they don't exist
//     await executeQuery({
//       query: `
//         INSERT IGNORE INTO roles (name) VALUES ('user'), ('admin')
//       `,
//     });

//     console.log("Database setup completed successfully!");
//   } catch (error) {
//     console.error("Database Setup Error:", error.message);
//     throw new Error("Database setup failed");
//   }
// }


// import mysql from 'mysql2/promise';

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST || "127.0.0.1",  // Ensure correct host
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   waitForConnections: true, 
//   connectionLimit: 10,
//   queueLimit: 0,
//   connectTimeout: 20000,  // Increase timeout to 20 seconds
// });

// // Function to execute queries
// export async function executeQuery({ query, values = [] }) {
//   try {
//     console.log("Attempting database connection...");
//     const [result] = await pool.query(query, values);
//     console.log("Database connected successfully!");
//     return result;
//   } catch (error) {
//     console.error("Database Error:", error.message);
//     console.error("Error Code:", error.code);
//     throw new Error("Database query failed");
//   }
// }

// // Function to setup database tables
// export async function setupDatabase() {
//   try {
//     console.log("Setting up database...");

//     // Create Users table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS users (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           email VARCHAR(255) NOT NULL UNIQUE,
//           password VARCHAR(255) NOT NULL,
//           name VARCHAR(255),
//           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//           updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//         )
//       `,
//     });

//     // Create Roles table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS roles (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           name VARCHAR(50) NOT NULL UNIQUE
//         )
//       `,
//     });

//     // Create User_Roles junction table
//     await executeQuery({
//       query: `
//         CREATE TABLE IF NOT EXISTS user_roles ( 
//           user_id INT NOT NULL,
//           role_id INT NOT NULL,
//           PRIMARY KEY (user_id, role_id),
//           FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
//           FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE 
//         )
//       `,
//     });

//     // Insert default roles if they don't exist
//     await executeQuery({
//       query: `
//         INSERT IGNORE INTO roles (name) VALUES ('user'), ('admin')
//       `,
//     });

//     console.log("Database setup completed successfully!");
//   } catch (error) {
//     console.error("Database Setup Error:", error.message);
//     throw new Error("Database setup failed");
//   }
// }


// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
mongoose.Aggregate({
  "data" : "data_present",

})
//       useUnifiedTopology: true,
//     }).then((mongoose) => {
//       return mongoose;
//     });
//   }
  
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🟡 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log("✅ MongoDB Connected!");
       return mongoose;
    }).catch((error) => {
      console.error("❌ MongoDB Connection Error:", error);
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
