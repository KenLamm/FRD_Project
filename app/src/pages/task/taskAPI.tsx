import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../app/App";

export interface TaskType {
  id: number;
  name: string;
  is_finished: boolean;
  user_id: number;
  category_id: number;
}

export function useTask() {
  console.log("checking for function working?");
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["useTask"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/task/get/1`);
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
