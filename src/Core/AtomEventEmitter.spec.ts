import { expect } from "chai";
import * as sinon from "sinon";
import { AtomEventEmitter } from "./AtomEventEmitter";

describe("AtomEventEmitter.ts tests", () => {
  describe("#listen to event", () => {
    it("expect to get called when the event is emitted", () => {
      // arranges
      const listener1 = sinon.spy();
      const listener2 = sinon.spy();

      // acts
      const emitter = new AtomEventEmitter();
      emitter.on("test", listener1);
      emitter.on("test", listener2);
      emitter.emit("test");

      // asserts
      expect(listener1.calledOnce).to.deep.equal(true);
      expect(listener2.calledOnce).to.deep.equal(true);
    });

    it("expect to not get called when the other event is emitted", () => {
      // arranges
      const listener1 = sinon.spy();
      const listener2 = sinon.spy();

      // acts
      const emitter = new AtomEventEmitter();
      emitter.on("test", listener1);
      emitter.on("test", listener2);
      emitter.emit("others");

      // asserts
      expect(listener1.notCalled).to.deep.equal(true);
      expect(listener2.notCalled).to.deep.equal(true);
    });

    it("expect to get called with arguments when the event is emitted", () => {
      // arranges
      const listener = sinon.spy();

      // acts
      const emitter = new AtomEventEmitter();
      emitter.on("test", listener);
      emitter.emit("test", 1, 2);

      // asserts
      expect(listener.calledWith(1, 2)).to.deep.equal(true);
    });
  });
});
