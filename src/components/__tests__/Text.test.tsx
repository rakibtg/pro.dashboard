import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Text from "../Text";

test("Page", () => {
  render(<Text>Hello World!</Text>);
  expect(screen.getByText("Hello World!")).not.toBeNull();
});

test("renders heading correctly", () => {
  render(<Text variant="h1">h1 tag</Text>);
  expect(screen.getByRole("heading").textContent).toBe("h1 tag");
});

test("renders dom component correctly", () => {
  render(<Text component="span">span component</Text>);
  expect(screen.getByText("span component").tagName).toBe("SPAN");
});
