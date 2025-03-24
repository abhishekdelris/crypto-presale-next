// app/api/admin/list/route.js
import { executeQuery } from '@/lib/db';
import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';

export async function GET(request) {
  try {
    // Verify authentication
    const authResult = await verifyAuth(request);
    
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let admins;
    
    // Determine what data to return based on role
    if (authResult.user.role === 'super_admin') {
      // Super admin can see all admins
      admins = await executeQuery({
        query: 'SELECT id, username, email, role, created_at FROM admins'
      });
    } else {
      // Regular admin can only see their own info
      admins = await executeQuery({
        query: 'SELECT id, username, email, role, created_at FROM admins WHERE id = ?',
        values: [authResult.user.id]
      });
    }
    
    return NextResponse.json({ admins });
  } catch (error) {
    console.error('List admins error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
