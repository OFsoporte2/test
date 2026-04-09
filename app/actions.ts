'use server';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export async function createPost() {
  const post = await prisma.post.create({
    data: {
      title: 'New Post',
      content: 'This post was created from a server action.',
      author: 'Anonymous',
    },
  });
  return post;
}
