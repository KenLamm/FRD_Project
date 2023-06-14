import { useQuery } from "@tanstack/react-query";
import { error } from "console";
interface Project {
  id: number;
  name: string;
}

export function useProject() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getallproject"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/project/get`);
      const result = await res.json();
      console.log("Data for project: ", result[0].name);
      return result as Project[];
    },
  });
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

export async function createProject(name: string) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/project/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const result = await res.json();
  return result.data;
}
