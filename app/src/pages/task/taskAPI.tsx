import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../app/App";
import { useNavigate } from "react-router-dom";
import { query } from "express";

export interface TaskType {
  id: number;
  name: string;
  is_finished: boolean;
  user_id: number;
  category_id: number;
  project_id: number;
}

interface CategoryType {
  name: string;
}

export function useTask(params: string, projectId: string) {
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
        `${process.env.REACT_APP_API_URL}/task/get/${projectId}/${params}`,
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
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

export async function postTask(
  name: string,
  params: string,
  projectId: string
) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/task/post/${projectId}/${params}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, params, projectId }),
    }
  );
  const result = await res.json();
  console.log("check check task API", result);
  return result.data;
}

export function useCategoryName(params: string) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["useCategoryName"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/category/getName/${params}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await res.json();
      return result as CategoryType[];
    },
  });
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}
