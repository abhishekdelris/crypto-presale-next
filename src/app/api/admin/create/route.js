// app/api/admin/create/route.js
import { executeQuery } from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';

export async function POST(request) {
  try {
    // Verify the auth token and check if user is super_admin
    const authResult = await verifyAuth(request);
    
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (authResult.user.role !== 'super_admin') {
      return NextResponse.json(
        { error: 'Only super admin can create admin accounts' },
        { status: 403 }
      );
    }

    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingAdmin = await executeQuery({
      query: 'SELECT id FROM admins WHERE email = ?',
      values: [email]
    });
    
    if (existingAdmin.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create admin (always as regular admin)
    await executeQuery({
      query: 'INSERT INTO admins (username, email, password, role, created_by) VALUES (?, ?, ?, "admin", ?)',
      values: [username, email, hashedPassword, authResult.user.id]
    });

    return NextResponse.json(
      { message: 'Admin created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Admin creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}