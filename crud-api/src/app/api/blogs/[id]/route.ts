import { deletePost, getById, updatePost } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "ERROR", post }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { title, description } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, description);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
