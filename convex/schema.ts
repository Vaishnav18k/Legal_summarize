
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  edgeStorageFiles: defineTable({
    fileName: v.string(),
    fileId: v.string(), // Edge Storage file ID
    fileUrl: v.string(), // Edge Storage URL
    workspaceId: v.id("workspaces"),
  })
    .index("by_workspace", ["workspaceId"]),
    // .index("by_fileId", ["fileId"]),

  workspaces: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    edgeStorageUrls: v.array(v.string()),
    edgeStorageFiles: v.array(v.id("edgeStorageFiles")),
  }),
});