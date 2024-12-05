import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// PATCH метод для обновления записи
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { username, url } = await req.json();

    const updatedData = await prisma.todoPrisma.update({
      where: { id: parseInt(id) },
      data: { username, url },
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
