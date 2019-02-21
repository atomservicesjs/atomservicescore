import { ICommand } from "./ICommand";
import { IQuery } from "./IQuery";
import { DispatchResultType } from "./Services/DispatchResultType";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryStreamListener } from "./StateQueryStreamListener";

export interface IService {
  name: () => string;
  dispatch: (command: ICommand, listener?: StateQueryStreamListener) => DispatchResultType;
  query?: (query: IQuery, listener?: StateQueryStreamListener) => Promise<QueryResultType>;
}
