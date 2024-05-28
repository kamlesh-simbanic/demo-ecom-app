import dayjs, { Dayjs } from "dayjs";

export const getIsoDate = (date: Dayjs | string): string => {
  const formattedDate =
    typeof date === "string" ? getDateWithoutTimezone(date) : date;
  const dayJsDate = dayjs(formattedDate);
  return `${dayJsDate?.get("year")}-${
    Number(dayJsDate?.get("month")) + 1
  }-${dayJsDate?.get("date")}`;
};

const getDateWithoutTimezone = (date: string) => {
  if (date.includes("T")) {
    return date.split("T")[0];
  }

  return date;
};
