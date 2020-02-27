import { expect } from "chai";
import * as Index from "./index";

describe("index.ts tests", () => {
  it("expect to export an object from index.ts file", () => {
    // arranges

    // acts

    // asserts
    expect(Index).not.equal(undefined);
    expect(Index).not.equal(null);
    expect(Index).to.be.an("object");
  });
});
