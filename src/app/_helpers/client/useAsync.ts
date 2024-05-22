import { useCallback, useEffect, useState } from "react";

// Define the type for useAsync return value
interface UseAsyncResult<T> {
  loading: boolean;
  error: any;
  value: T | undefined;
}

// Update useAsync to be generic
export function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: any[] = []
): UseAsyncResult<T> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
