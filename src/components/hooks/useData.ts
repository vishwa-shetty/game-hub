import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchResponse } from "../../models/games";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfigs?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>();
  const [error, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfigs,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dep ? [...dep] : []
  );

  return { data, error, isLoading };
};

export default useData;
