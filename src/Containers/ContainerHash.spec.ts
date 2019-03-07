import { expect } from "chai";
import { ContainerHash } from "./ContainerHash";

describe("ContainerHash.ts tests", () => {
  describe("#ContainerHash.hash()", () => {
    it("expect to hash container name", async () => {
      // arranges
      const container = "Container";
      const expected = "pC1RlxTWFulBHbzuxLUoCL1rHuU+b2SXooHWVTV9i3E=";

      // acts
      const result = ContainerHash.hash(container);

      // asserts
      expect(result).to.equal(expected);
    });
  });
});
