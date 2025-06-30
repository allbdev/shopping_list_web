"use client";
import React from "react";
import { ProductsList, Workspace } from "../domain";
import { Empty, Link, List } from "@/app/components";
import { FormattedMessage } from "react-intl";

export default function ClientSideWorkspace({
  workspace,
  productsList,
}: {
  workspace: Workspace;
  productsList: Array<ProductsList>;
}) {
  return (
    <>
      <h1>{workspace.name}</h1>
      {productsList && productsList.length > 0 ? (
        <List>
          {productsList.map((productList) => (
            <List.Item key={productList.id}>
              <Link
                link={`/workspaces/${workspace.id}/products/${productList.id}`}
                label={productList.title}
              />
            </List.Item>
          ))}
        </List>
      ) : (
        <Empty
          message={
            <FormattedMessage
              id="no_products_list"
              defaultMessage="No products list"
            />
          }
        />
      )}
    </>
  );
}
