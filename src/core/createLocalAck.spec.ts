import { expect } from "chai";
import * as sinon from "sinon";
import { createLocalAck } from "./createLocalAck";

describe("createLocalAck.ts tests", () => {
  describe("#createLocalAck()", () => {
    it("expect to create a local ack() function", () => {
      // arranges
      const event: any = {};
      const listener = sinon.spy();

      // acts
      const ack = createLocalAck(event);
      ack();

      // asserts
      expect(listener.notCalled).to.equal(true);
    });

    it("expect to create a local ack() function with listener", () => {
      // arranges
      const event: any = {};
      const listener = sinon.spy();

      // acts
      const ack = createLocalAck(event, listener);
      ack();

      // asserts
      expect(listener.calledOnce).to.equal(true);
    });
  });
});
