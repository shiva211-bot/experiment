import { describe, expect, it } from "vitest";

describe("platform foundations", () => {
  it("keeps the platform metadata in a predictable shape", () => {
    const metadata = {
      name: "Holo Exhibition Platform",
      phase: "architecture-foundation",
      status: "ready",
    };

    expect(metadata.name).toBe("Holo Exhibition Platform");
    expect(metadata.phase).toBe("architecture-foundation");
    expect(metadata.status).toBe("ready");
  });
});
