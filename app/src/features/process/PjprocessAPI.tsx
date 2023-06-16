import { useQuery } from "@tanstack/react-query";

interface Process {
  inc: number;
  tt: number;
  percent: number;
  id: number;
  name: string;
  project_name: string;
  project_id: number;
  
}
// export function useProjectid(userId: number){
//   const { isLoading, error, data, isFetching } = useQuery({
//     queryKey: ["getallprocess"],
//     queryFn: async () => {
     
//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/category/get/${userId}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const result = await res.json();
//       console.log("Data for process: ", result);
//       return result;
//     },
//   });

//   return {
//     isLoading: isLoading,
//     data: data as Process[],
//     error: error,
//     isFetching: isFetching,
//   };
// }

export function useProcess(projectId:string) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getallprocess"],
    queryFn: async () => {
     
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/category/get/${projectId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
