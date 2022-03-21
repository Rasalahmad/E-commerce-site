import { useEffect, useState } from "react";

type StatusType = "idle" | "pending" | "success" | "error";
// Home product T --> IProduct[]
const useApi = <T>(asyncService: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType>("idle");

  useEffect(() => {
    setStatus("pending");
    setError(null);
    asyncService()
      .then((data) => {
        setData(data);
        setStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.message);
      });
  }, []);

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error,
  };
};

export default useApi;
