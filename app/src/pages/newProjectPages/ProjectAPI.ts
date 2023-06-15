import { useQuery } from "@tanstack/react-query";
interface Project {
  id: number;
  name: string;
}

export function useProject() {
<<<<<<< HEAD
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["useProject"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/project/get`)
            const result = await res.json()
            return result as Project
        }
    });
    return{
    isLoading:isLoading,
    data:data,
    error:error,
    isFetching:isFetching,
    };
=======
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
>>>>>>> 32cb5c963fc5860a9dfe74509c1912a3f20eb6bd
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
