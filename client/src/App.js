import "./App.css";
import axios from "axios";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Todos from "./Todos";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
