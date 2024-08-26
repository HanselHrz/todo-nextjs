import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // Delete all todos delete * from todo
  await prisma.todo.createMany({
    data: [
      {
        description: "Learn React",
        completed: true,
      },
      {
        description: "Learn Next.js",
      },
      {
        description: "Learn TypeScript",
      },
    ],
  });
  return NextResponse.json({ message: "Seed" });
}
