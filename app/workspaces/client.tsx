"use client";
import React from "react";
import { Workspace } from "./domain";
import { FormattedMessage } from "react-intl";
import { Link, List } from "@/app/components";

export default function ClientSideWorkspaces({
  workspaces,
}: {
  workspaces: Workspace[];
}) {
  return (
    <>
      <h1 className="mb-8">
        <FormattedMessage id="workspaces" defaultMessage="Workspaces" />
      </h1>
      <List>
        {workspaces.map((workspace) => (
          <List.Item key={workspace.id}>
            <WorkspaceLink workspace={workspace} />
          </List.Item>
        ))}
      </List>
    </>
  );
}

const WorkspaceLink = ({ workspace }: { workspace: Workspace }) => {
  return <Link link={`/workspaces/${workspace.id}`} label={workspace.name} />;
};
