"use client";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div>
      <FormattedMessage id="hello" defaultMessage="Hello" />
    </div>
  );
}
