import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET a single ICO project by ID
export async function GET(req, { params }) {
  try {
    const projectId = parseInt(params.id);
    
    if (isNaN(projectId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID"
      }, { status: 400 });
    }
    
    const project = await prisma.ico_projects.findUnique({
      where: {
        id: projectId,
        deleted_at: null
      }
    });
    
    if (!project) {
      return NextResponse.json({
        success: false,
        message: "ICO project not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: project
    }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to fetch ICO project:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch ICO project",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// UPDATE an ICO project
export async function PUT(req, { params }) {
  try {
    const projectId = parseInt(params.id);
    const data = await req.json();
    
    if (isNaN(projectId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID"
      }, { status: 400 });
    }
    
    // Check if project exists
    const existingProject = await prisma.ico_projects.findUnique({
      where: {
        id: projectId,
        deleted_at: null
      }
    });
    
    if (!existingProject) {
      return NextResponse.json({
        success: false,
        message: "ICO project not found"
      }, { status: 404 });
    }
    
    // Update the project
    const updatedProject = await prisma.ico_projects.update({
      where: {
        id: projectId
      },
      data: {
        title: data.title,
        symbol: data.symbol,
        slug: data.slug,
        description: data.description,
        is_active: data.is_active,
        updated_at: new Date(),
        // Add other fields as needed
      }
    });
    
    return NextResponse.json({
      success: true,
      data: updatedProject,
      message: "ICO project updated successfully"
    }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to update ICO project:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to update ICO project",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE an ICO project (soft delete)
export async function DELETE(req, { params }) {
  try {
    const projectId = parseInt(params.id);
    
    if (isNaN(projectId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID"
      }, { status: 400 });
    }
    
    // Check if project exists
    const existingProject = await prisma.ico_projects.findUnique({
      where: {
        id: projectId,
        deleted_at: null
      }
    });
    
    if (!existingProject) {
      return NextResponse.json({
        success: false,
        message: "ICO project not found"
      }, { status: 404 });
    }
    
    // Soft delete the project
    const deletedProject = await prisma.ico_projects.update({
      where: {
        id: projectId
      },
      data: {
        deleted_at: new Date()
      }
    });
    
    return NextResponse.json({
      success: true,
      message: "ICO project deleted successfully"
    }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to delete ICO project:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to delete ICO project",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// PATCH to update project status
export async function PATCH(req, { params }) {
  try {
    const projectId = parseInt(params.id);
    const data = await req.json();
    
    if (isNaN(projectId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid project ID"
      }, { status: 400 });
    }
    
    // Check if this is a status update request
    if (params.action === 'status' && data.hasOwnProperty('status')) {
      const updatedProject = await prisma.ico_projects.update({
        where: {
          id: projectId,
          deleted_at: null
        },
        data: {
          is_active: data.status,
          updated_at: new Date()
        }
      });
      
      return NextResponse.json({
        success: true,
        data: updatedProject,
        message: `ICO project ${data.status ? 'activated' : 'deactivated'} successfully`
      }, { status: 200 });
    }
    
    // For other partial updates
    const updateData = {};
    if (data.title) updateData.title = data.title;
    if (data.symbol) updateData.symbol = data.symbol;
    if (data.slug) updateData.slug = data.slug;
    if (data.description) updateData.description = data.description;
    if (data.hasOwnProperty('is_active')) updateData.is_active = data.is_active;
    updateData.updated_at = new Date();
    
    const updatedProject = await prisma.ico_projects.update({
      where: {
        id: projectId,
        deleted_at: null
      },
      data: updateData
    });
    
    return NextResponse.json({
      success: true,
      data: updatedProject,
      message: "ICO project updated successfully"
    }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to update ICO project:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to update ICO project",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}