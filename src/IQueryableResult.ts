export interface IQueryableResult<QueryResult = any> {
  success: boolean;
  status: "success" | "invalid" | "unhandled" | "error";
  result?: QueryResult;
  invalidAttributes?: any;
  error?: Error;
}
