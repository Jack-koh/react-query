import React from "react";
import axios from "axios";
import { queryClient } from "./App";
import { useQuery, useMutation } from "react-query";

const getTodos = async () => {
  const res = await axios.get("/todos", { params: { offset: 0, limit: 20 } });
  return res;
};

const postTodo = async () => {
  const res = await axios.get("/todos/post", {
    onSuccess: (data) => console.log("onSuccess", data),
  });
  return res;
};

function Comp() {
  const query = useQuery("todos", getTodos, {
    onSuccess: (data) => console.log("onSuccess", data),
  });

  //   const mutation = useMutation(postTodo, {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries("todos");
  //     },
  //   });

  return (
    <div>
      <ul>
        {query.data.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          //   mutation.mutate({ id: Date.now(), title: "Do Laundry" });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Comp;
