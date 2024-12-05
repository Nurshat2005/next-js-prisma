import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { username, url } = await req.json();

    // Простой пример валидации данных
    if (!username || !url) {
      return NextResponse.json({ error: 'Username and URL are required' }, { status: 400 });
    }

    // Создаем запись в базе данных
    const createdData = await prisma.todoPrisma.create({
      data: {
        username: username,
        url: url,
      },
    });

    return NextResponse.json(createdData);
  } catch (error) {
    console.error('Error creating data:', error); // Логирование ошибки
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Закрытие соединения с базой данных
  }
};
