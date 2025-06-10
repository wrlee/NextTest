import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../server/database';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Database connection successful!' });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json({ message: 'Database connection failed', error: error.message }, { status: 500 });
  }
}