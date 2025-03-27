"use client";
import React from "react";
import { Workspace } from "./domain";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function ClientSideWorkspaces({
  workspaces,
}: {
  workspaces: Workspace[];
}) {
  return (
    <section className="mx-auto flex w-[600px] max-w-full flex-col items-center p-4">
      <h1 className="mb-8">
        <FormattedMessage id="workspaces" defaultMessage="Workspaces" />
      </h1>
      <ul className="flex w-52 flex-col gap-4">
        {workspaces.map((workspace) => (
          <li key={workspace.id} className="w-full">
            <WorkspaceLink workspace={workspace} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const WorkspaceLink = ({ workspace }: { workspace: Workspace }) => {
  return (
    <Link href={`/workspaces/${workspace.id}`}>
      <div className="flex w-full items-center justify-between border-b p-2">
        <span className="truncate">{workspace.name}</span>
        <IoIosArrowForward />
      </div>
    </Link>
  );
};
