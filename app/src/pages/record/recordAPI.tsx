import { useQuery } from "@tanstack/react-query"

interface Record {
    id: number,
    name:string,
    user_id:number,
    task_id:number
}

export function useRecord() {
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["useRecord"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/record/get`)
            const result = await res.json()
            return result as Record[]
        }
    })
    return {
        isLoading: isLoading,
        data: data,
        error: error,
        isFetching: isFetching,
    }
}

export async function postRecord(name:string ,task_id:string){
            const res = await fetch(`${process.env.REACT_APP_API_URL}/record/post`, {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, task_id})
            })
            const result = await res.json();
            return result.data;
        }
 