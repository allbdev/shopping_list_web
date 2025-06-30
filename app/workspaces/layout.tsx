import React from "react";

export default function WorkspacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex w-[600px] max-w-full flex-col items-center p-4">
      {children}
    </section>
  );
}
