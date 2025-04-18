// Create a new ICO project
export async function POST(req) {
  try {
    const data = await req.json();
    
    // Create the new project
    const newProject = await prisma.ico_projects.create({
      data: {
        title: data.title,
        symbol: data.symbol,
        slug: data.slug || data.title.toLowerCase().replace(/\s+/g, '-'),
        description: data.description,
        is_active: data.is_active !== undefined ? data.is_active : true,
        created_at: new Date(),
        // Add other fields as needed
      }
    });
    
    return NextResponse.json({
      success: true,
      data: newProject,
      message: "ICO project created successfully"
    }, { status: 201 });
    
  } catch (error) {
    console.error("Failed to create ICO project:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to create ICO project",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}