import * as crypto from "crypto";
import { hashify } from "../common/hashify";

const algo = "sha256";
const inputEncoding: crypto.Utf8AsciiLatin1Encoding = "utf8";
const outputEncoding: crypto.HexBase64Latin1Encoding = "base64";

export const ContainerHash = {
  hash: (container: string) => {
    const value = container.toLowerCase();

    return hashify(value, { algo, inputEncoding, outputEncoding });
  },
};
