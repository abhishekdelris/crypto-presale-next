import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function executeQuery({ query, values = [] }) {
  try {
    const [result] = await pool.query(query, values);
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Database query failed');
  }
}

// SQL setup scripts to create tables
export async function setupDatabase() {
  // Create Users table
  await executeQuery({
    query: `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `
  });

  // Create Roles table
  await executeQuery({
    query: `
      CREATE TABLE IF NOT EXISTS roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE
      )
    `
  });

  // Create User_Roles junction table
  await executeQuery({
    query: `
      CREATE TABLE IF NOT EXISTS user_roles (
        user_id INT NOT NULL,
        role_id INT NOT NULL,
        PRIMARY KEY (user_id, role_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
      )
    `
  });

  // Insert default roles if they don't exist
  await executeQuery({
    query: `
      INSERT IGNORE INTO roles (name) VALUES ('user'), ('admin')
    `
  });
}