"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRouter } from 'next/router';


export default function WorkspaceClient({ params }: { params: { workspaceId: string } }) {
  const workspace = useQuery(api.workspaces.getWorkspace, {
    workspaceId: params.workspaceId as Id<"workspaces">,
  });

  if (workspace === undefined) return <div className="p-8">Loading workspace...</div>;
  if (workspace === null) return <div className="p-8">Workspace not found</div>;

   
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Workspace: {workspace.name}</h1>
      {workspace.edgeStorageFiles && workspace.edgeStorageFiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workspace.edgeStorageFiles.map((file) => (
            <div key={file?._id} className="border rounded-lg p-4">
              <h3 className="font-semibold truncate">{file?.fileName || "Untitled File"}</h3>
              <p className="text-sm text-gray-500">
                {file?._creationTime
                  ? `Uploaded: ${new Date(file._creationTime).toLocaleDateString()}`
                  : "Upload date not available"}
              </p>
              {file?.fileUrl && (
                <a
                  href={file.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View File
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No files in this workspace yet</p>
      )}
    </div>
  );
}
