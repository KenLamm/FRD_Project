import { useQuery } from "@tanstack/react-query";
interface Project {
  id: number;
  name: string;
}

export function useProject() {
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["useProject"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/project/get`)
            const result = await res.json()
            return result as Project[]
        }
    });
    return{
    isLoading:isLoading,
    data:data,
    error:error,
    isFetching:isFetching,
    };
}

export async function createProject(name: string) {
  console.log("hihihihihihihi");
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

export async function delProject(id: number) {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/project/del`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();
    if (res.status === 200) {
      return true;
    } else {
      console.log(result);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
