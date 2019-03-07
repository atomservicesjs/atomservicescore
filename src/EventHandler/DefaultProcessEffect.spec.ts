import { expect } from "chai";
import * as sinon from "sinon";
import { DefaultProcessEffect } from "./DefaultProcessEffect";

describe("DefaultProcessEffect.ts tests", () => {
  describe("#DefaultProcessEffect()", () => {
    it("expect to call resulting with event and state", async () => {
      // arranges
      const event: any = {};
      const initState: any = {};
      const state: any = {};
      const resulting = sinon.spy();

      // acts
      await DefaultProcessEffect({ event, initState, state }, resulting);

      // asserts
      expect(resulting.calledWith(event, state)).to.equal(true);
    });
  });
});
