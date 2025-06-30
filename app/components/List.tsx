import React from "react";

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="flex flex-col gap-4">{children}</li>;
}

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="w-full">{children}</ul>;
}

List.Item = ListItem;
