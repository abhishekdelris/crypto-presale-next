import { executeQuery } from './db';
import bcrypt from 'bcryptjs';

export async function getUserByEmail(email) {
  const users = await executeQuery({
    query: 'SELECT * FROM users WHERE email = ?',
    values: [email]
  });
  
  return users.length > 0 ? users[0] : null;
}

export async function getUserById(id) {
  const users = await executeQuery({
    query: 'SELECT * FROM users WHERE id = ?',
    values: [id]
  });
  
  return users.length > 0 ? users[0] : null;
}

export async function getUserRoles(userId) {
  const roles = await executeQuery({
    query: `
      SELECT r.name 
      FROM roles r
      JOIN user_roles ur ON r.id = ur.role_id
      WHERE ur.user_id = ?
    `,
    values: [userId]
  });
  
  return roles.map(role => role.name);
}

export async function createUser(userData) {
  const { name, email, password } = userData;
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Insert user
  const result = await executeQuery({
    query: 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    values: [name, email, hashedPassword]
  });
  
  const userId = result.insertId;
  
  // Assign default 'user' role
  await executeQuery({
    query: `
      INSERT INTO user_roles (user_id, role_id)
      SELECT ?, id FROM roles WHERE name = 'user'
    `,
    values: [userId]
  });
  
  return userId;
}

export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function hasRole(userId, roleName) {
  const roles = await getUserRoles(userId);
  return roles.includes(roleName);
}

export async function addUserRole(userId, roleName) {
  return await executeQuery({
    query: `
      INSERT INTO user_roles (user_id, role_id)
      SELECT ?, id FROM roles WHERE name = ?
    `,
    values: [userId, roleName]
  });
}

export async function removeUserRole(userId, roleName) {
  return await executeQuery({
    query: `
      DELETE ur FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = ? AND r.name = ?
    `,
    values: [userId, roleName]
  });
}