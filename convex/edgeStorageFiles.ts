
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createFileMetadata = mutation({
  args: {
    fileName: v.string(),
    fileId: v.string(),
    fileUrl: v.string(),
    workspaceId: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("edgeStorageFiles", {
      fileName: args.fileName,
      fileId: args.fileId ,
      fileUrl: args.fileUrl,
      workspaceId: args.workspaceId,
    });
  },
});