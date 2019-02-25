export interface IQueryableResult<QueryResult = any, ERROR = Error> {
  success: boolean;
  status: "success" | "invalid" | "unhandled" | "error";
  result?: QueryResult;
  invalidAttributes?: any;
  error?: ERROR;
}
