import { useCallback } from "react";

type QueryParams = Record<string, any>;

function objectToQueryString(params: QueryParams): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    // Consider only non-null and non-undefined values
    if (value !== null && value !== undefined) {
      searchParams.append(key, value.toString());
    }
  });
  return searchParams.toString();
}

function queryStringToObject(queryString: string): QueryParams {
  const searchParams = new URLSearchParams(queryString);
  const params: QueryParams = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

export function useQueryParams() {
  const setQueryParams = useCallback((params: QueryParams) => {
    const queryString = objectToQueryString(params);
    const newUrl = `${window.location.pathname}?${queryString}`;
    window.history.pushState(null, "", newUrl);
  }, []);

  const getQueryParams = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return queryStringToObject(searchParams.toString());
  }, []);

  return { setQueryParams, getQueryParams };
}
