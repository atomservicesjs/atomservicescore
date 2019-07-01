export type DispatchListening = <Data = any>(
  result: {
    ref: string;
    data: Data;
  },
) => any;
