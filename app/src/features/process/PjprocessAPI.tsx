import { useQuery } from "@tanstack/react-query";

interface Process {
  id: number;
  name: string;
}

export function useProcess() {
  console.log("ok");
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getallprocess"],
    queryFn: async () => {
      console.log("ok123");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/category/get/1`
      );
      const result = await res.json();
      console.log("Data for process: ", result);
      return result;
    },
  });

  return {
    isLoading: isLoading,
    data: data as Process[],
    error: error,
    isFetching: isFetching,
  };
}
