
import { mutation , query} from "./_generated/server";
import { v } from "convex/values";

export const createWorkspace = mutation({
  args: {
    name: v.string(),
    email: v.optional(v.string()),
    edgeStorageUrls: v.array(v.string()),
    edgeStorageFiles: v.array(v.id("edgeStorageFiles")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("workspaces", {
      name: args.name,
      email: args.email,
      edgeStorageUrls: args.edgeStorageUrls,
      edgeStorageFiles: args.edgeStorageFiles,
    });
  },
});

export const addFileToWorkspace = mutation({
  args: {
    workspaceId: v.id("workspaces"),
    fileId: v.id("edgeStorageFiles"),
  },
  handler: async (ctx, args) => {
    const workspace = await ctx.db.get(args.workspaceId);
    if (!workspace) throw new Error("Workspace not found");
    
    // Add file to workspace
    const updatedFiles = [...workspace.edgeStorageFiles, args.fileId];
    await ctx.db.patch(args.workspaceId, { 
      edgeStorageFiles: updatedFiles 
    });
  },
});


// convex/workspaces.ts
export const getWorkspace = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const workspace = await ctx.db.get(args.workspaceId);
    if (!workspace) return null;
    
    const files = await Promise.all(
      workspace.edgeStorageFiles.map(fileId => ctx.db.get(fileId))
    );
    
    return {
      ...workspace,
      edgeStorageFiles: files.filter(Boolean) as any[]
    };
  },
});