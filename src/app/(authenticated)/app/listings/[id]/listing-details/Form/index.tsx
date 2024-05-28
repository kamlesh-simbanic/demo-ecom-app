"use client";

import {
  FormEvent,
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { InfoOutlined } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { Controller, FormProvider, useForm } from "react-hook-form";

import {
  CheckboxGroup,
  Label,
  Row,
  StyledAlert,
  StyledMenuItem,
  SubLabel,
  ViewButton,
  Wrapper,
} from "./styles";
import DisplayOnlyIf from "@/app/_components/DisplayOnlyIf";
import { instanceSelectField } from "@/app/_services/muiHelpers";
import { getIsoDate } from "@/app/utils/date-utils";
import { getErrorMessage } from "../../property-details/Form";
import CurrencyInput from "@/app/_components/CurrencyInput";

type Props = {
  listingDetails: any;
  listingId: string;
  options: any;
};

type FieldRefs = {
  [key: string]: React.RefObject<HTMLInputElement>;
};

const Form = ({
  listingDetails: listingDetailsProp,
  listingId,
  options,
}: Props) => {
  const fieldRefs = useRef<FieldRefs>({});
  const [listingDetails, setListingDetails] = useState<any>(listingDetailsProp);
  const [loading, setLoading] = useState<boolean>(false);
  const [evaluationInputs, setEvaluationInputs] = useState<string[]>(
    listingDetailsProp.evaluationInputs
  );

  const inactiveRegex = /inactive/gi;
  //   const entityNames = listingDetails.entityNames.filter(
  //     ({ status: entityNameStatus }) => !inactiveRegex.test(entityNameStatus)
  //   );
  const methods = useForm({
    mode: "all",
    defaultValues: { ...listingDetailsProp },
  });

  const {
    register,
    getValues,
    reset,
    control,
    trigger,
    formState: { errors, isDirty },
  } = methods;

  const registerFieldRef = (fieldName: string): RefObject<HTMLInputElement> => {
    if (!fieldRefs.current[fieldName]) {
      fieldRefs.current[fieldName] = createRef<HTMLInputElement>();
    }
    return fieldRefs.current[fieldName];
  };

  useEffect(() => {
    trigger();

    return () => {
      //   setHasStatusChange(false);
    };
  }, []);

  //   useEffect(() => {
  //     async function fetch() {
  //       setLoading(true);
  //       const newListingDetails = await fetchListing();

  //       if (newListingDetails) {
  //         setListingDetails(newListingDetails);
  //         reset(newListingDetails);
  //         trigger();
  //       }

  //       setLoading(false);
  //     }

  //     if (hasStatusChange) fetch();
  //   }, [status]);

  //   const handleRemove = (mlsRecord: MlsT) => {
  //     const updatedMlsRecord = {
  //       ...mlsRecord,
  //       _destroy: true,
  //     };
  //     // setRemovedMlsRecords((prevState) => [...prevState, updatedMlsRecord]);
  //   };

  const showFirstError = () => {
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const ref = fieldRefs.current[firstErrorField];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  const handleEvaluationInputsChange = (selectedInput: string) => {
    if (evaluationInputs.includes(selectedInput)) {
      setEvaluationInputs(
        evaluationInputs.filter((input) => input !== selectedInput)
      );
    } else {
      setEvaluationInputs((prevState) => [...prevState, selectedInput]);
    }
  };

  return (
    <Wrapper disabled={loading} role="article">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...methods}>
          <DisplayOnlyIf condition={Object.keys(errors).length > 0}>
            <StyledAlert
              severity="error"
              variant="outlined"
              icon={<InfoOutlined />}
            >
              <span>
                You have{" "}
                <strong>{`${Object.keys(errors).length}`} fields</strong> that
                need to be filled out.
              </span>
              <ViewButton color="error" onClick={showFirstError}>
                View fields
              </ViewButton>
            </StyledAlert>
          </DisplayOnlyIf>
          <form>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Transaction type</InputLabel>
                <Controller
                  name="transactionType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Transaction type"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                    >
                      {options.transactionTypes.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel shrink>Service level</InputLabel>
                <Controller
                  name="serviceLevel"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Service level"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                    >
                      {options.serviceLevels.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <Controller
                control={control}
                name="evaluationAttributes.price"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...instanceSelectField(field)}
                    // error={!!errors.evaluationAttributes?.price}
                    // helperText={getErrorMessage(
                    //   errors.evaluationAttributes?.price
                    // )}
                    type="text"
                    label="Entera evaluation price"
                    size="medium"
                    inputRef={registerFieldRef("evaluationAttributes.price")}
                    InputProps={{
                      inputComponent: CurrencyInput,
                      inputRef: registerFieldRef("evaluationAttributes.price"),
                    }}
                    inputProps={{
                      hideDecimal: true,
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="initialListPrice"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...instanceSelectField(field)}
                    // error={!!errors.initialListPrice}
                    helperText={getErrorMessage(errors.initialListPrice)}
                    type="text"
                    label="Initial list price"
                    size="medium"
                    inputRef={registerFieldRef("initialListPrice")}
                    InputProps={{
                      inputComponent: CurrencyInput,
                      inputRef: registerFieldRef("initialListPrice"),
                    }}
                    inputProps={{
                      hideDecimal: true,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="listPrice"
                render={({ field }) => (
                  <TextField
                    {...instanceSelectField(field)}
                    type="text"
                    label="Current list price"
                    size="medium"
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                    inputProps={{
                      hideDecimal: true,
                    }}
                  />
                )}
              />
              <FormControl fullWidth>
                <InputLabel shrink>Conforming</InputLabel>
                <Controller
                  name="conforming"
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors.conforming}
                      label="Conforming"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                      inputRef={registerFieldRef("conforming")}
                    >
                      {options.conformings.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors.conforming && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
            </Row>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Securitized asset</InputLabel>
                <Controller
                  name="securitizedAsset"
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors.securitizedAsset}
                      label="Securitized asset"
                      size="medium"
                      notched
                      {...instanceSelectField(field, false)}
                      inputRef={registerFieldRef("securitized")}
                    >
                      {options.securitizedAssets.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors.securitizedAsset && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel shrink>Entity status association</InputLabel>
                <Controller
                  name="entityStatusAssociation"
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors.entityStatusAssociation}
                      label="Entity status association"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                    >
                      {options.entityStatusAssociations.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors.entityStatusAssociation && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <TextField
                {...register("listingTerminationReasonNote", {
                  required: status === "Terminated",
                })}
                // error={!!errors?.listingTerminationReasonNote}
                helperText={getErrorMessage(
                  errors?.listingTerminationReasonNote
                )}
                type="text"
                label="Listing termination reason note"
                size="medium"
                inputRef={registerFieldRef("listingTerminationReasonNote")}
              />
            </Row>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Listing termination reason</InputLabel>
                <Controller
                  name="listingTerminationReason"
                  rules={{ required: status === "Terminated" }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors.listingTerminationReason}
                      label="Listing termination reason"
                      size="medium"
                      notched
                      inputRef={registerFieldRef("listingTerminationReason")}
                      {...instanceSelectField(field)}
                    >
                      {status !== "Terminated" && <StyledMenuItem value="" />}
                      {options.listingTerminationReasons.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors.listingTerminationReason && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                {/* // error={!!errors.cancellationReason} */}
                <InputLabel shrink>Listing cancelation reason</InputLabel>
                <Controller
                  name="cancellationReason"
                  rules={{
                    required:
                      status === "Pre Selling Cancelled" ||
                      status === "Evaluation Canceled",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors.cancellationReason}
                      label="Listing cancelation reason"
                      size="medium"
                      notched
                      inputRef={registerFieldRef("cancellationReason")}
                      {...instanceSelectField(field)}
                    >
                      {true && <StyledMenuItem value="" />}
                      {options.cancellationReasons.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors.cancellationReason && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <TextField
                {...register("cancellationNote", {
                  required: true,
                })}
                // error={!!errors?.cancellationNote}
                helperText={getErrorMessage(errors?.cancellationNote)}
                type="text"
                label="Listing cancelation reason note"
                size="medium"
                inputRef={registerFieldRef("cancellationNote")}
              />
              <TextField
                {...register("sellerDispoIdentifier")}
                type="text"
                label="Dispo ID"
                size="medium"
              />
            </Row>
            {/* {listingDetails.entityNames.length > 0 && (
              <EntityName entityNames={entityNames} listingStatus={status} />
            )} */}
            <Label>Evaluation</Label>
            <SubLabel>
              What inputs were available to inform the Evaluation?
            </SubLabel>
            <CheckboxGroup>
              {options.evaluationInputs.map((item: any) => (
                <FormControlLabel
                  {...register("evaluationInputs")}
                  control={
                    <Checkbox checked={evaluationInputs.includes(item.value)} />
                  }
                  label={item.label}
                  key={item.value}
                  onChange={() => handleEvaluationInputsChange(item.value)}
                />
              ))}
            </CheckboxGroup>
            <Row>
              <Controller
                control={control}
                name="evaluationAttributes.dueDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DateTimePicker
                    label="Evaluation due date"
                    onChange={onChange}
                    value={value ? dayjs(value) : undefined}
                    // defaultValue={getCurrentTimeToNearest5Minutes()}
                    inputRef={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.evaluationAttributes?.dueDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef(
                          "evaluationAttributes.dueDate"
                        ),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="evaluationAttributes.requestDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DateTimePicker
                    label="Evaluation requested date"
                    onChange={onChange}
                    value={value ? dayjs(value) : undefined}
                    // // defaultValue={getCurrentTimeToNearest5Minutes()}
                    inputRef={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.evaluationAttributes?.requestDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef(
                          "evaluationAttributes.requestDate"
                        ),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="evaluationAttributes.completionDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DateTimePicker
                    label="Evaluation completed date"
                    onChange={onChange}
                    value={value ? dayjs(value) : undefined}
                    // defaultValue={getCurrentTimeToNearest5Minutes()}
                    inputRef={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.evaluationAttributes?.completionDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef(
                          "evaluationAttributes.completionDate"
                        ),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="evaluationAttributes.blockDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Evaluation blocked date"
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
              <FormControl fullWidth>
                <InputLabel shrink>Evaluation blocked reason</InputLabel>
                <Controller
                  name="evaluationAttributes.blockReason"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Evaluation blocked reason"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                    >
                      {status !== "Evaluation Blocked" && (
                        <StyledMenuItem value="" />
                      )}
                      {options.blockReasons.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <TextField
                {...register("evaluationAttributes.blockReasonNote")}
                type="text"
                label="Evaluation blocked reason note"
                size="medium"
              />
            </Row>
            <Row>
              <TextField
                {...register("evaluationAttributes.enteraEvaluationLink")}
                type="text"
                label="Entera evaluation link"
                size="medium"
                inputRef={registerFieldRef(
                  "evaluationAttributes.enteraEvaluationLink"
                )}
              />
            </Row>
            <Label>Showing</Label>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Showing hold reason</InputLabel>
                <Controller
                  name="accessAttributes.showingHoldReason"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Showing hold reason"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                    >
                      {status !== "Showings Temporarily On Hold" && (
                        <StyledMenuItem value="" />
                      )}
                      {options.showingHoldReasons.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <TextField
                {...register("accessAttributes.showingHoldReasonNotes")}
                type="text"
                label="Showing hold reason note"
                size="medium"
              />

              <Controller
                control={control}
                name="accessAttributes.showingHoldDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Showing hold date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    inputRef={ref}
                    slotProps={{
                      textField: {
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Label>Key dates</Label>
            <Row>
              <Controller
                control={control}
                name="intakeDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Intake date"
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
              <Controller
                control={control}
                name="projectedEnteraAccessDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Entera access date (projected)"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.projectedEnteraAccessDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="actualEnteraAccessDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Entera access date (actual)"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.actualEnteraAccessDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="expectedListDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Expected list date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    inputRef={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.expectedListDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("expectedListDate"),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="onMarketDate"
                rules={{
                  required: status === "Receiving Offers",
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="On market date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.onMarketDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("onMarketDate"),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="listingAgreementDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Listing agreement date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.listingAgreementDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("listingAgreementDate"),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="mustSellByDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Must sell by date"
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
              <Controller
                control={control}
                name="originalListingDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Original listing date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.originalListingDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("originalListingDate"),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="listingExpirationDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Listing expiration date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.listingExpirationDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("listingExpirationDate"),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="offerPeriodEndDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Offer period end date"
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
              <Controller
                control={control}
                name="listingTerminationDate"
                rules={{ required: status === "Terminated" }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Listing termination date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.listingTerminationDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("listingTerminationDate"),
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="cancellationDate"
                rules={{ required: status === "Terminated" }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Listing cancelation date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // error: !!errors?.cancellationDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("cancellationDate"),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="accessAttributes.lockboxRemovedDate"
                rules={{ required: status === "Terminated" }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Lockbox removed date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    slotProps={{
                      textField: {
                        // // error: !!errors?.accessAttributes?.lockboxRemovedDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef(
                          "accessAttributes.lockboxRemovedDate"
                        ),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Label>Construction</Label>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Work in progress</InputLabel>
                <Controller
                  name="constructionAttributes.inProgress"
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      //   // error={!!errors?.constructionAttributes?.inProgress}
                      label="Work in progress"
                      size="medium"
                      notched
                      inputRef={registerFieldRef(
                        "constructionAttributes.inProgress"
                      )}
                      {...instanceSelectField(field, false)}
                    >
                      {options.constructionInProgress.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {/* {!!errors?.constructionAttributes?.inProgress && (
                  <FormHelperText error>Select one option</FormHelperText>
                )} */}
              </FormControl>
              <Controller
                control={control}
                name="constructionAttributes.estScopeAmount"
                render={({ field }) => (
                  <TextField
                    {...instanceSelectField(field)}
                    type="text"
                    label="Est. scope amount"
                    size="medium"
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="constructionAttributes.approvedScopeAmount"
                render={({ field }) => (
                  <TextField
                    {...instanceSelectField(field)}
                    type="text"
                    label="Approved scope amount"
                    size="medium"
                    InputProps={{
                      inputComponent: CurrencyInput,
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <Controller
                control={control}
                name="constructionAttributes.completionEst"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Construction completion (est)"
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
              <Controller
                control={control}
                name="constructionAttributes.actualCompletionDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Construction completion (actual)"
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
              <TextField
                {...register("constructionAttributes.note")}
                type="text"
                label="Construction notes"
                size="medium"
              />
            </Row>
            <Label>Property condition</Label>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Distressed asset</InputLabel>
                <Controller
                  name="distressedAsset"
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors?.distressedAsset}
                      label="Distressed asset"
                      size="medium"
                      notched
                      {...instanceSelectField(field, false)}
                      inputRef={registerFieldRef("distressedAsset")}
                    >
                      <MenuItem value="true">Yes</MenuItem>
                      <MenuItem value="false">No</MenuItem>
                    </Select>
                  )}
                />
                {!!errors?.distressedAsset && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel shrink>Photos status</InputLabel>
                <Controller
                  name="photoStatus"
                  control={control}
                  render={({ field }) => (
                    <Select
                      // error={!!errors?.photoStatus}
                      label="Photo status"
                      size="medium"
                      notched
                      {...instanceSelectField(field, false)}
                      inputRef={registerFieldRef("photoStatus")}
                    >
                      {options.photoStatuses.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {!!errors?.photoStatus && (
                  <FormHelperText error>Select one option</FormHelperText>
                )}
              </FormControl>
              <Controller
                control={control}
                name="proPhotosUpdatedDate"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Pro photos updated date"
                    onChange={(newValue: Dayjs | null) =>
                      onChange(dayjs(getIsoDate(newValue || "")))
                    }
                    value={value ? dayjs(value) : undefined}
                    ref={ref}
                    inputRef={registerFieldRef("proPhotosUpdatedDate")}
                    slotProps={{
                      textField: {
                        // error: !!errors?.proPhotosUpdatedDate,
                        size: "medium",
                        value: value ? dayjs(value) : undefined,
                        inputRef: registerFieldRef("proPhotosUpdatedDate"),
                      },
                    }}
                  />
                )}
              />
            </Row>
            <Row>
              <TextField
                {...register("propertyConditionPhotoLink", {
                  required: true,
                })}
                // error={!!errors?.propertyConditionPhotoLink}
                helperText={getErrorMessage(errors?.propertyConditionPhotoLink)}
                type="text"
                label="Photo link"
                size="medium"
                inputRef={registerFieldRef("propertyConditionPhotoLink")}
              />
              <TextField
                {...register("propertyConditionVideoLink", {
                  required: true,
                })}
                // error={!!errors?.propertyConditionVideoLink}
                helperText={getErrorMessage(errors?.propertyConditionVideoLink)}
                type="text"
                label="Video link"
                size="medium"
                inputRef={registerFieldRef("propertyConditionVideoLink")}
              />
              <TextField
                {...register("propertyConditionNotes")}
                type="text"
                label="Condition notes"
                size="medium"
              />
            </Row>
            <Label>Yard sign</Label>
            <Row>
              <FormControl fullWidth>
                <InputLabel shrink>Yard sign status</InputLabel>
                <Controller
                  name="yardSignStatus"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Yard sign status"
                      size="medium"
                      notched
                      {...instanceSelectField(field)}
                      inputRef={registerFieldRef("yardSignStatus")}
                    >
                      {options.yardSignStatuses.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <Controller
                control={control}
                name="yardSignInstallationDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Yard sign installed date"
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
              <Controller
                control={control}
                name="yardSignRemovedDate"
                render={({ field: { onChange, value, ref } }) => (
                  <DatePicker
                    label="Yard sign removed date"
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
            </Row>
          </form>
        </FormProvider>
      </LocalizationProvider>
    </Wrapper>
  );
};

export default Form;
