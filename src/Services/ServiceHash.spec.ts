import { expect } from "chai";
import { ServiceHash } from "./ServiceHash";

describe("ServiceHash.ts tests", () => {
  describe("#ServiceHash.hash()", () => {
    it("expect to hash service name with container name", async () => {
      // arranges
      const container = "Container";
      const service = "Service";
      const expected = "4oRxd/SXH8En0Yu6s5UzHoeI8j/q7I3ozQ3f64ZfUKo=";

      // acts
      const result = ServiceHash.hash(service, container);

      // asserts
      expect(result).to.equal(expected);
    });

    it("expect to hash only service name", async () => {
      // arranges
      const service = "Service";
      const expected = "+rB3DPkQ5sEPzXA2shCaXd9SKJV9rp26pw6hR8M0PNI=";

      // acts
      const result = ServiceHash.hash(service);

      // asserts
      expect(result).to.equal(expected);
    });
  });
});
