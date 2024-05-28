"use client";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useForm } from "react-hook-form";

import {
  Amount,
  BoldNumber,
  BottomFieldsWrapper,
  DateWrapper,
  FeesWrapper,
  Header,
  NotesRow,
  PercentageRow,
  Row,
  SideCommissionWrapper,
  StyledRadioGroup,
  Title,
  Wrapper,
} from "./styles";
import CurrencyInput from "@/app/_components/CurrencyInput";
import { getIsoDate } from "@/app/utils/date-utils";

type Props = {
  commissionsAndExpenses: any;
  options: any;
  listingId: string;
};

const Form = ({ commissionsAndExpenses, options, listingId }: Props) => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: { ...commissionsAndExpenses },
  });
  const {
    register,
    getValues,
    trigger,
    reset,
    watch,
    setValue,
    control,
    formState: { isDirty },
  } = methods;

  const listingSideCommissionType = watch("listingSideCommissionType");
  const buyingSideCommissionType = watch("buyingSideCommissionType");
  const totalCommissionAmount = watch("totalCommissionAmount");
  const totalCommissionPercentage = watch("totalCommissionPercentage");
  const totalReimbursableExpensesOnHud = watch(
    "totalReimbursableExpensesOnHud"
  );

  return (
    <Wrapper disabled={false} role="article">
      <Header>
        <Title>
          <h3>Commissions & Expenses</h3>
        </Title>
        <Button disabled={false} variant="contained">
          Generate CDA
        </Button>
      </Header>
      <form>
        <Row>
          <PercentageRow>
            <Amount>
              Total commission amount:{" "}
              <BoldNumber>{Number(totalCommissionAmount)}</BoldNumber>
            </Amount>
            <Amount>
              Total commission percentage:{" "}
              <BoldNumber>
                {Number(totalCommissionPercentage).toFixed(2)}%
              </BoldNumber>
            </Amount>
            <Amount>
              Total reimbursable expenses:{" "}
              <BoldNumber>
                {Number(totalReimbursableExpensesOnHud).toFixed(2)}%
              </BoldNumber>
            </Amount>
          </PercentageRow>
        </Row>
        <Row>
          <SideCommissionWrapper>
            <Amount>Listing side commission</Amount>
            <FormControl component="fieldset">
              <Controller
                control={control}
                name="listingSideCommissionType"
                render={({ field }) => (
                  <StyledRadioGroup {...field} row>
                    {options.commission.listingSideCommissionType.map(
                      (type: any) => (
                        <FormControlLabel
                          key={type.value}
                          label={type.label}
                          value={type.value}
                          control={<Radio />}
                        />
                      )
                    )}
                  </StyledRadioGroup>
                )}
              />
            </FormControl>
            <BottomFieldsWrapper>
              <FeesWrapper>
                <Controller
                  control={control}
                  name="listingSideCommissionPercentage"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      size="medium"
                      disabled={listingSideCommissionType === "flat_fee"}
                      InputProps={{
                        endAdornment: "%",
                        inputProps: {
                          step: 0.01,
                        },
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="listingSideFlatFee"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      size="medium"
                      disabled={listingSideCommissionType === "percentage"}
                      InputProps={{
                        inputComponent: CurrencyInput,
                      }}
                    />
                  )}
                />
              </FeesWrapper>
              <Controller
                control={control}
                name="listingSideGrossCommission"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Listing side gross commission"
                    size="medium"
                    disabled
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="listingSideNetCommission"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Listing side net commission"
                    size="medium"
                    disabled
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="listingSideTotalCommissionReduction"
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Listing side total commission reduction"
                    size="medium"
                    disabled
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
            </BottomFieldsWrapper>
          </SideCommissionWrapper>
          <SideCommissionWrapper>
            <Amount>Buying side commission</Amount>
            <FormControl component="fieldset">
              <Controller
                control={control}
                name="buyingSideCommissionType"
                render={({ field }) => (
                  <StyledRadioGroup {...field} row>
                    {options.commission.buyingSideCommissionType.map(
                      (type: any) => (
                        <FormControlLabel
                          key={type.value}
                          label={type.label}
                          value={type.value}
                          control={<Radio />}
                        />
                      )
                    )}
                  </StyledRadioGroup>
                )}
              />
            </FormControl>
            <BottomFieldsWrapper>
              <FeesWrapper>
                <Controller
                  control={control}
                  name="buyingSideCommissionPercentage"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      size="medium"
                      disabled={buyingSideCommissionType === "flat_fee"}
                      InputProps={{
                        endAdornment: "%",
                        inputProps: {
                          step: 0.01,
                        },
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="buyingSideFlatFee"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      size="medium"
                      disabled={buyingSideCommissionType === "percentage"}
                      InputProps={{
                        inputComponent: CurrencyInput,
                      }}
                    />
                  )}
                />
              </FeesWrapper>
              <Controller
                control={control}
                name="buyingSideGrossCommission"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    label="Buying side gross commission"
                    size="medium"
                    disabled
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
            </BottomFieldsWrapper>
          </SideCommissionWrapper>
          <DateWrapper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                control={control}
                name="commissionsFinalizedDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Commissions finalized date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </DateWrapper>
        </Row>
        <NotesRow>
          <TextField
            {...register("notes")}
            type="text"
            size="medium"
            label="Notes"
          />
        </NotesRow>
      </form>
    </Wrapper>
  );
};

export default Form;
