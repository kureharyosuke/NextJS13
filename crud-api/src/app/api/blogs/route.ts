import { addPosts, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  console.log("GET REQUEST");
  try {
    const posts = getPosts();

    return NextResponse.json({ message: "OK", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }.error, {
      status: 500,
    });
  }
};

export const POST = async (req: Request, res: Response) => {
  console.log("POST REQUEST");
  try {
    const { title, description } = await req.json();

    const post = {
      id: Date.now().toString(),
      title,
      description,
      date: new Date(),
    };

    addPosts(post);

    return NextResponse.json({ message: "OK", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }.error, {
      status: 500,
    });
  }
};

/**
 * postman
 * {
 *  "title": "My new POST12",
 *  "description": "description sample"
 * }
 */
