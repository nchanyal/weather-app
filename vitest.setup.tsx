import { afterEach } from "vitest";
import { vi } from "vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));
