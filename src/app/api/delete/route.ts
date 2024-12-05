import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// DELETE метод для удаления записи
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const deletedData = await prisma.todoPrisma.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(deletedData);
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
