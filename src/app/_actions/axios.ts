import { cookies } from "next/headers";

const headers = new Headers();

headers.set("Content-Type", "application/json");

const BASE_URL = `${process.env.API_URL}/api`;
const httpClient = async (url: string, method = "GET", data?: any) => {
  const cookiesData = cookies().getAll();

  const cookieValue = cookiesData.map((x) => `${x.name}=${x.value}`).join(";");

  headers.append("Cookie", cookieValue);

  if (data !== null) {
    return await fetch(`${BASE_URL}${url}`, {
      method,
      cache: "no-cache",
      body: JSON.stringify(data),
      headers: headers,
    });
  }
  return await fetch(url, {
    method,
    cache: "no-cache",
    headers: headers,
  });
};

const axios = {
  get: (url: string) => {
    return httpClient(url);
  },
  post: (url: string, data: any) => {
    return httpClient(url, "POST", data);
  },
  put: (url: string, data: any) => {
    return httpClient(url, "PUT", data);
  },
  delete: (url: string) => {
    return httpClient(url, "DELETE");
  },
};

export default axios;
