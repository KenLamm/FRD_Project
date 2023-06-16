import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../app/App";
import { useNavigate } from "react-router-dom";

export interface TaskType {
  id: number;
  name: string;
  is_finished: boolean;
  user_id: number;
  category_id: number;
}

export function useTask(categoryId: string) {
  const navigate = useNavigate();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["useTask"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return [];
      }
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/task/get/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await res.json();
      return result as TaskType[];
    },
  });
  console.log("user Task data", data);
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

export async function postTask(name: string, params: string) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/task/post/${params}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, params }),
    }
  );
  const result = await res.json();
  return result.data;
}

// export async function updateTask()
