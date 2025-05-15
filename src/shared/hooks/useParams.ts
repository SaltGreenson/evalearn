import { useEffect, useState } from "react";

export function useParams<T extends object = { id: string }>(
  params: Promise<T>
) {
  const [param, setParam] = useState<T>({} as T);

  useEffect(() => {
    params.then((data) => {
      setParam(data);
    });
  }, []);

  return { paramData: param };
}
