"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Row, Title, Wrapper } from "./styles";
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { getIsoDate } from "@/app/utils/date-utils";

type Props = {
  listingEngagement: any;
  listingId: string;
};

const Form = ({ listingEngagement, listingId }: Props) => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: { ...listingEngagement },
  });
  const {
    register,
    reset,
    getValues,
    trigger,
    control,
    formState: { errors, isDirty },
  } = methods;
  return (
    <Wrapper disabled={false} role="article" className="p-2">
      <form>
        <Title>
          {" "}
          <h3>Listing Engagement</h3>
        </Title>
        <form>
          <Row>
            <TextField
              {...register("syndicationLink", { required: true })}
              error={!!errors?.syndicationLink}
              type="text"
              label="Syndication link"
              size="small"
            />
            <TextField
              {...register("showings", { required: true })}
              error={!!errors?.syndicationLink}
              type="text"
              label="Number of showings"
              name="showings"
              size="small"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                control={control}
                name="syndicationLastCollected"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Syndication last collected date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        error: !value,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              {...register("saves", { required: true })}
              error={!!errors?.syndicationLink}
              type="text"
              label="Syndication saves"
              name="showings"
              size="small"
            />
            <TextField
              {...register("views", { required: true })}
              error={!!errors?.syndicationLink}
              type="text"
              label="Syndication views"
              name="showings"
              size="small"
            />
          </Row>
        </form>
      </form>
    </Wrapper>
  );
};

export default Form;
