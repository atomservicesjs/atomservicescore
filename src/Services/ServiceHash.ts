import * as crypto from "crypto";
import { hashify } from "../common/hashify";

const algo = "sha256";
const inputEncoding: crypto.Utf8AsciiLatin1Encoding = "utf8";
const outputEncoding: crypto.HexBase64Latin1Encoding = "base64";

export const ServiceHash = {
  hash: (service: string, container: string = "GLOBAL") => {
    const value = `${container}::${service}`.toLowerCase();

    return hashify(value, { algo, inputEncoding, outputEncoding });
  },
};
