import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Table from "../table/Table";

const getTodos = async () => {
  const res = await axios.get("/todos", { params: { offset: 0, limit: 20 } });
  return res;
};

function Comp() {
  const query = useQuery("todos", getTodos, {
    // onSettled: true,
  });

  const data = query.data?.data || [];

  return (
    <div>
      <Table />
    </div>
  );
}

export default Comp;
