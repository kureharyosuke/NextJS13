import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, res: Response) => {
  console.log("dynamic folder");
};

export const PUT = async (req: Request) => {
  console.log("PUT");
};

export const DELETE = async (req: Request) => {
  console.log("DELETE");
};
