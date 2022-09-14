import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Table from "../table/Table";

const getTodos = (params) => async () => {
  const res = await axios.get("/todos", { params });
  return res.data;
};

function Comp() {
  const [page, setPage] = React.useState({ offset: 0, limit: 10 });
  const { data, isLoading, isFetching, isError, error, refetch, remove } =
    useQuery(["todos", page], getTodos(page), {
      keepPreviousData: true, // 이전데이터 유지하는것
    });
  if (isLoading) return <h2>Loading...</h2>;

  console.log({ isLoading, isFetching, isError, error, data });

  return (
    <div>
      <button
        onClick={() => {
          // setPage({ offset: 0, limit: 5 });
          refetch();
        }}
      >
        refetch
      </button>
      <Table data={data ?? []} />
    </div>
  );
}

export default Comp;
