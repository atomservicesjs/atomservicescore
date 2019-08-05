import { expect } from "chai";
import { DefaultEventProcessEffect } from "./DefaultEventProcessEffect";

describe("DefaultEventProcessEffect.ts tests", () => {
  it("expect a type of DefaultEventProcessEffect to equal a function", async () => {
    // arranges

    // acts

    // asserts
    expect(typeof DefaultEventProcessEffect).to.equal("function");
  });

  it("expect a result of DefaultEventProcessEffect() to equal undefined", async () => {
    // arranges
    const process: any = {};
    const resulting: any = {};
    const context: any = {};
    const metadata: any = {};

    // acts
    const result = await DefaultEventProcessEffect(process, resulting, context, metadata);

    // asserts
    expect(result).to.equal(undefined);
  });
});
