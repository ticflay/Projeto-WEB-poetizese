import { getSession } from "../sessionProcesses";

export default function RailsMiddleWare(request) {
  const session = getSession();
  request.header = {
    ...request.header,
    ...session?.headers,
  };
}
