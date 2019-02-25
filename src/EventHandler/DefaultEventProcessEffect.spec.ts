import { expect } from "chai";
import * as sinon from "sinon";
import { DefaultEventProcessEffect } from "./DefaultEventProcessEffect";

describe("DefaultEventProcessEffect.ts tests", () => {
  describe("#DefaultEventProcessEffect()", () => {
    it("expect to call resulting with event and state", async () => {
      // arranges
      const event: any = {};
      const initState: any = {};
      const state: any = {};
      const resulting = sinon.spy();

      // acts
      await DefaultEventProcessEffect({ event, initState, state }, resulting);

      // asserts
      expect(resulting.calledWith(event, state)).to.equal(true);
    });
  });
});
