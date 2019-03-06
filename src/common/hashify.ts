import * as crypto from "crypto";

export const hashify = (
  val: string,
  options: {
    algo?: string;
    inputEncoding?: crypto.Utf8AsciiLatin1Encoding;
    outputEncoding?: crypto.HexBase64Latin1Encoding;
  } = {}) => {
  const { algo = "sha1", inputEncoding = "utf8", outputEncoding = "base64" } = options;
  const hash = crypto.createHash(algo);
  hash.update(val, inputEncoding);

  return hash.digest(outputEncoding);
};

Object.freeze(hashify);
