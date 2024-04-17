import { NextRequest } from "next/server";

export const getQueryParams = (req: NextRequest) => {
  let result: any = {};

  const params = new URLSearchParams(new URL(req.url).search);

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
};
