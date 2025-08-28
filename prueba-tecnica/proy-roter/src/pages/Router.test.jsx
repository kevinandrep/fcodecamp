import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Router } from "./Router.jsx";

describe("Router", () => {
  it("deberia funcionar", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });
});
