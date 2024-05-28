"use client";

import { FormEvent, useEffect, useState } from "react";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { Label, Row, SubRow, Wrapper } from "./styles";
import { instanceSelectField } from "@/app/_services/muiHelpers";

import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import { ListingStatus } from "../../types";
import CurrencyInput from "@/app/_components/CurrencyInput";

type Props = {
  propertyDetails: any;
  options: any;
  listingId: string;
};

export const getErrorMessage = (
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>,
  field?: string
) => {
  if (!error) return "";
  if (error.type === "custom") return error.message as string;
  if (error.type !== "required") return `Enter a valid ${field}`;
  return "Field is required";
};

const Form = ({ propertyDetails, listingId, options }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: { ...propertyDetails },
  });
  const {
    register,
    reset,
    getValues,
    control,
    trigger,
    formState: { errors, isDirty },
  } = methods as any;

  useEffect(() => {
    trigger();
  }, []);

  return (
    <Wrapper disabled={loading}>
      <form>
        <Label>Address</Label>
        <Row>
          <FormControl fullWidth>
            <InputLabel shrink> Market</InputLabel>
            <Controller
              name="marketId"
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.propertyType}
                  label="Market"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {[].map((item: any) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.propertyType && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <TextField
            {...register("streetAddress", {
              required: status === ListingStatus.New,
            })}
            error={!!errors.streetAddress}
            helperText={getErrorMessage(errors.streetAddress)}
            type="text"
            label="Address"
            size="medium"
          />
          <TextField
            {...register("city", { required: status === ListingStatus.New })}
            error={!!errors.city}
            helperText={getErrorMessage(errors.city)}
            type="text"
            label="City"
            size="medium"
          />
        </Row>
        <Row>
          <TextField
            {...register("state", { required: status === ListingStatus.New })}
            error={!!errors.state}
            helperText={getErrorMessage(errors.state)}
            type="text"
            label="State"
            size="medium"
          />

          <TextField
            {...register("zip", { required: status === ListingStatus.New })}
            error={!!errors.zip}
            helperText={getErrorMessage(errors.zip)}
            type="text"
            label="Zip Code"
            size="medium"
          />
          <TextField
            {...register("county", { required: status === ListingStatus.New })}
            error={!!errors.county}
            helperText={getErrorMessage(errors.county)}
            type="text"
            label="County"
            size="medium"
          />
        </Row>
        <Row>
          <TextField
            {...register("subdivision", {
              required: true,
            })}
            error={!!errors.subdivision}
            helperText={getErrorMessage(errors.subdivision)}
            type="text"
            label="Subdivision"
            size="medium"
          />

          <TextField
            {...register("apn", {
              required: true,
            })}
            error={!!errors.apn}
            helperText={getErrorMessage(errors.apn)}
            type="text"
            label="APN"
            size="medium"
          />

          <TextField
            {...register("legalDescription", {
              required: true,
            })}
            error={!!errors.legalDescription}
            helperText={getErrorMessage(errors.legalDescription)}
            type="text"
            label="Legal description"
            size="medium"
          />
        </Row>

        <Label>Physical characteristics</Label>
        <Row>
          <FormControl fullWidth>
            <InputLabel shrink>Property type</InputLabel>
            <Controller
              name="propertyType"
              rules={{ required: status === ListingStatus.New }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.propertyType}
                  label="Property type"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.opportunity.propertyType.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.propertyType && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <TextField
            {...register("propertyDetailAttributes.beds", {
              required: status === ListingStatus.New,
            })}
            error={!!errors?.propertyDetailAttributes?.beds}
            helperText={getErrorMessage(errors?.propertyDetailAttributes?.beds)}
            type="text"
            label="Beds"
            size="medium"
          />
          <SubRow>
            <TextField
              {...register("propertyDetailAttributes.fullBaths", {
                required: status === ListingStatus.New,
              })}
              error={!!errors?.propertyDetailAttributes?.fullBaths}
              helperText={getErrorMessage(
                errors?.propertyDetailAttributes?.fullBaths
              )}
              type="text"
              label="Full Baths"
              size="medium"
            />
            <TextField
              {...register("propertyDetailAttributes.halfBaths", {
                required: status === ListingStatus.New,
              })}
              error={!!errors?.propertyDetailAttributes?.halfBaths}
              helperText={getErrorMessage(
                errors?.propertyDetailAttributes?.halfBaths
              )}
              type="text"
              label="1/2 Baths"
              size="medium"
            />
          </SubRow>
        </Row>
        <Row>
          <TextField
            {...register("propertyDetailAttributes.lotSqft", {
              required: status === ListingStatus.New,
            })}
            error={!!errors?.propertyDetailAttributes?.lotSqft}
            helperText={getErrorMessage(
              errors?.propertyDetailAttributes?.lotSqft
            )}
            type="text"
            label="Lot SqFt"
            size="medium"
          />
          <TextField
            {...register("propertyDetailAttributes.yearBuilt", {
              required: status === ListingStatus.New,
            })}
            error={!!errors?.propertyDetailAttributes?.yearBuilt}
            helperText={getErrorMessage(
              errors?.propertyDetailAttributes?.yearBuilt
            )}
            type="text"
            label="Year built"
            size="medium"
          />
          <SubRow>
            <TextField
              {...register("propertyDetailAttributes.quarterBaths", {
                required: status === ListingStatus.New,
              })}
              error={!!errors?.propertyDetailAttributes?.quarterBaths}
              helperText={getErrorMessage(
                errors?.propertyDetailAttributes?.quarterBaths
              )}
              type="text"
              label="1/4 Baths"
              size="medium"
            />
            <TextField
              {...register("propertyDetailAttributes.threeQuarterBaths", {
                required: status === ListingStatus.New,
              })}
              error={!!errors?.propertyDetailAttributes?.threeQuarterBaths}
              helperText={getErrorMessage(
                errors?.propertyDetailAttributes?.threeQuarterBaths
              )}
              type="text"
              label="3/4 Baths"
              size="medium"
            />
          </SubRow>
        </Row>
        <Row>
          <TextField
            {...register("propertyDetailAttributes.buildingSqft", {
              required: status === ListingStatus.New,
            })}
            error={!!errors?.propertyDetailAttributes?.buildingSqft}
            helperText={getErrorMessage(
              errors?.propertyDetailAttributes?.buildingSqft
            )}
            type="text"
            label="Building SqFt"
            size="medium"
          />
          <FormControl fullWidth>
            <InputLabel shrink>Pool</InputLabel>
            <Controller
              name="propertyDetailAttributes.pool"
              rules={{ required: status === ListingStatus.New }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.propertyDetailAttributes?.pool}
                  label="Pool"
                  size="medium"
                  notched
                  {...instanceSelectField(field, false)}
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              )}
            />
            {!!errors?.propertyDetailAttributes?.pool && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <TextField
            {...register("propertyDetailAttributes.stories", {
              required: status === ListingStatus.New,
            })}
            error={!!errors?.propertyDetailAttributes?.stories}
            helperText={getErrorMessage(
              errors?.propertyDetailAttributes?.stories
            )}
            type="text"
            label="Stories"
            size="medium"
          />
        </Row>

        <Label>HOA & utilities</Label>
        <Row>
          <FormControl fullWidth>
            <InputLabel shrink>HOA/CIC</InputLabel>
            <Controller
              name="hoaAttributes.status"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.hoaAttributes?.status}
                  label="HOA/CIC"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.hoaAttributes.status.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.hoaAttributes?.status && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <Controller
            control={control}
            name="hoaAttributes.fee"
            render={({ field }) => (
              <TextField
                {...instanceSelectField(field)}
                type="text"
                label="HOA/CIC Fee"
                size="medium"
                InputProps={{
                  inputComponent: CurrencyInput,
                }}
              />
            )}
          />
          <FormControl fullWidth>
            <InputLabel shrink>HOA/CIC frequency</InputLabel>
            <Controller
              name="hoaAttributes.feeFrequency"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.hoaAttributes?.feeFrequency}
                  label="HOA/CIC frequency"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.hoaAttributes.feeFrequency.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.hoaAttributes?.feeFrequency && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
        </Row>
        <Row>
          <TextField
            {...register("hoaAttributes.name")}
            error={!!errors.hoaAttributes?.name}
            helperText={getErrorMessage(errors.hoaAttributes?.name)}
            type="text"
            label="HOA/CIC Name"
            size="medium"
          />
          <FormControl fullWidth>
            <InputLabel shrink>HOA/CIC Reviewed</InputLabel>
            <Controller
              name="hoaAttributes.reviewed"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.hoaAttributes?.reviewed}
                  label="HOA/CIC Reviewed"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.hoaAttributes.reviewed.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.hoaAttributes?.reviewed && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <TextField
            {...register("hoaAttributes.phoneNumber")}
            error={!!errors.hoaAttributes?.phoneNumber}
            helperText={getErrorMessage(errors.hoaAttributes?.phoneNumber)}
            type="text"
            label="HOA/CIC phone number"
            size="medium"
            // InputProps={{
            //   inputComponent: PhoneInput,
            // }}
          />
        </Row>
        <Row>
          <FormControl fullWidth>
            <InputLabel shrink>Gas utility</InputLabel>
            <Controller
              name="utilityAttributes.gasUtility"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.utilityAttributes?.gasUtility}
                  label="Gas utility"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.utilityAttributes.gasUtility.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors?.utilityAttributes?.gasUtility && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel shrink>Electric utility</InputLabel>
            <Controller
              name="utilityAttributes.electricUtility"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.utilityAttributes?.electricUtility}
                  label="Electric utility"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.utilityAttributes.electricUtility.map(
                    (item: any) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
            />
            {!!errors?.utilityAttributes?.electricUtility && (
              <FormHelperText error>Select one option</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel shrink>Water utility</InputLabel>
            <Controller
              name="utilityAttributes.waterUtility"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <Select
                  error={!!errors?.utilityAttributes?.waterUtility}
                  label="Water utility"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.utilityAttributes.waterUtility.map((item: any) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Row>
        <Row>
          <TextField
            {...register("utilityAttributes.specialUtilityDistrictName")}
            type="text"
            label="Special utility district name"
            size="medium"
          />
          <Controller
            control={control}
            name="utilityAttributes.specialUtilityDistrictFee"
            render={({ field }) => (
              <TextField
                {...instanceSelectField(field)}
                type="text"
                label="Special utility district fee"
                size="medium"
                InputProps={{
                  inputComponent: CurrencyInput,
                }}
              />
            )}
          />
          <FormControl fullWidth>
            <InputLabel shrink>
              Special utility district fee frequency
            </InputLabel>
            <Controller
              name="utilityAttributes.specialUtilityDistrictFeeFrequency"
              control={control}
              render={({ field }) => (
                <Select
                  label="Special utility district fee frequency"
                  size="medium"
                  notched
                  {...instanceSelectField(field)}
                >
                  {options.utilityAttributes.specialUtilityDistrictFeeFrequency.map(
                    (item: any) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
            />
          </FormControl>
        </Row>
        <Row>
          <FormControl fullWidth>
            <InputLabel shrink>Winterized</InputLabel>
            <Controller
              name="propertyDetailAttributes.winterized"
              control={control}
              render={({ field }) => (
                <Select
                  label="Winterized"
                  size="medium"
                  notched
                  {...instanceSelectField(field, false)}
                >
                  <MenuItem value="true">Yes</MenuItem>
                  <MenuItem value="false">No</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Row>
      </form>
    </Wrapper>
  );
};

export default Form;
