import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/data/database';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Database connection successful!' });
  } catch (error: unknown ) {
    console.error('Database connection error:', error);
    return NextResponse.json({ message: 'Database connection failed', error }, { status: 500 });
  }
}