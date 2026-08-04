import { NextResponse } from "next/server";

// Cache for 30 minutes
export const revalidate = 1800;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    const res = await fetch(`https://app.trysoro.com/api/embed/075a27da-f806-4ab9-8f6b-3bfeda6d677e/article/${id}`, {
      next: { revalidate: 1800 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch article details: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(`Error in article detail API for ID ${error.message}:`, error);
    return NextResponse.json({ error: "Failed to load article content" }, { status: 500 });
  }
}
