import { useQuery } from "@tanstack/react-query";

interface Photo {
  user_id: number;
  name: string;
  s3_name: string;
  description: string;
  record_id: number;
  created_at: string;
}

interface Record {
  name: string;
}

export function usePhoto(record: string) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["usePhoto"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/photos/get/${record}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await res.json();
      return result as Photo[];
    },
  });
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}
export function useRecordName(record: string) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [useRecordName],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/photos/getName/${record}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await res.json();
      return result as Record[];
    },
  });
  return {
    isLoading: isLoading,
    data: data,
    error: error,
    isFetching: isFetching,
  };
}
