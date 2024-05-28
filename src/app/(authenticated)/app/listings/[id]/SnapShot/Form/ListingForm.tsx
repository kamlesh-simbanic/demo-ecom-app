import DisplayOnlyIf from "@/app/_components/DisplayOnlyIf";
import {
  Header,
  Row,
  StyledAlert,
  StyledDatePicker,
  StyledTextField,
  Title,
} from "./styles";
import Link from "next/link";
import { InfoOutlined } from "@mui/icons-material";
import { Button, Card, Col, Form, FormControl } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import CurrencyInput from "@/app/_components/CurrencyInput";
import { useEffect } from "react";
import ControllerInput from "@/app/_components/Controller";
import CustomDatePicker from "@/app/_components/ControllerDatePicker";
import Input from "@/app/_components/input";
import CustomTextField from "@/app/_components/CustomTextField";

const ListingForm = ({ listingId, snapshotDetails }: any) => {
  let status = "";
  const evaluation = true;
  const preListSelling = true;
  const terminated = false;
  const showingOnHoldReasonValue = false;

  const {
    register,
    trigger,
    getValues,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { ...snapshotDetails },
  });

  useEffect(() => {
    trigger();
  }, []);
  return (
    <form>
      <Card className="p-3">
        <Header>
          <Title>
            <h4 className="fw-bolder">Listing details snapshot</h4>
          </Title>
          <Link href={`/app/listings/${listingId}/listing-details`}>
            <Button variant="outlined" color="secondary">
              View all fields
            </Button>
          </Link>
        </Header>
        <DisplayOnlyIf condition={Object.keys(errors).length > 0}>
          <StyledAlert
            severity="error"
            variant="outlined"
            icon={<InfoOutlined />}
          >
            <span>
              You have <strong>{`${Object.keys(errors).length}`} fields</strong>{" "}
              that need to be filled out.
            </span>
            <Link
              href={`/listings/${listingId}/listing-details`}
              className="test-info"
            >
              View fields
            </Link>
          </StyledAlert>
        </DisplayOnlyIf>

        {evaluation && (
          <>
            <Row>
              {/* <Col lg={4} md={4} sm={12}> */}
              <ControllerInput
                control={control}
                name="evaluationAttributes.price"
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                label="Entera evaluation price"
                as={CurrencyInput}
                error={""}
                readOnly={true}
                disable={true}
              />
              {/* </Col> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <ControllerInput
                control={control}
                name="initialListPrice"
                rules={{
                  required: status === "LA Requested",
                }}
                label="Initial list price"
                as={CurrencyInput}
                error={""}
              />
              {/* </Col> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="evaluationAttributes.requestDate"
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                label="Evaluation requested date"
                error={""}
                isInvalid={status === "Evaluation Preparation"}
                disable={true}
                readOnly={true}
              />
              {/* </Col> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="evaluationAttributes.dueDate"
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                label="Evaluation due date"
                as={CurrencyInput}
                error={""}
                isInvalid={status === "Evaluation Preparation"}
                disable={true}
                readOnly={true}
              />
              {/* </Col> */}
              {/* </Row>
            <Row> */}{" "}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="evaluationAttributes.completionDate"
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                label="Evaluation completed date"
                as={CurrencyInput}
                error={""}
                isInvalid={status === "Evaluation Preparation"}
              />
              {/* </Col> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomTextField
                label="Maintenance access code"
                name="accessAttributes.clientLockboxCode"
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                error={""}
              />
              {/* </Col> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="evaluationAttributes.blockDate"
                label="Evaluation blocked date"
                as={CurrencyInput}
                error={""}
                readOnly={true}
                disable={true}
              />
              {/* </Col>
              <Col lg={4} md={4} sm={12}> */}
              <CustomTextField
                label="valuation blocked reason"
                name="accessAttributes.blockReason"
                error={""}
                readOnly={true}
              />
              {/* </Col> */}
              {/* </Row>
            <Row> */}
              {/* <Col lg={4} md={4} sm={12}> */}
              <CustomTextField
                label="Evaluation blocked reason note"
                name="accessAttributes.blockReasonNote"
                error={""}
                readOnly={true}
              />
              {/* </Col>
              <Col lg={4} md={4} sm={12}> */}
              <CustomTextField
                label="Video link"
                name="propertyConditionVideoLink"
                error={""}
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                readOnly={true}
              />
              {/* </Col>
              <Col lg={4} md={4} sm={12}> */}
              <CustomTextField
                label="Photo link"
                name="propertyConditionPhotoLink"
                error={""}
                rules={{
                  required: status === "Evaluation Preparation",
                }}
                readOnly={true}
              />
              {/* </Col>
              <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="fieldVisitRequestedDate"
                label="Field visit requested date"
                error={""}
                readOnly={true}
                disable={true}
                isInvalid={status === "Evaluation Preparation"}
              />
              {/* </Col>
              <Col lg={4} md={4} sm={12}> */}
              <CustomDatePicker
                control={control}
                name="fieldVisitCompletedDate"
                label="Field visit completed date"
                error={""}
                readOnly={true}
                disable={true}
                isInvalid={status === "Evaluation Preparation"}
              />
              {/* </Col> */}
              {terminated && (
                <>
                  {/* <Col lg={4} md={4} sm={12}> */}
                  <CustomTextField
                    label="Listing Termination / Cancelation reason"
                    name="listingTerminationReason"
                    error={""}
                    rules={{
                      required: status === "Terminated",
                    }}
                    readOnly={true}
                  />
                  {/* </Col> */}
                  {/* <Col lg={4} md={4} sm={12}> */}
                  <CustomTextField
                    label="Listing Termination / Cancelation date"
                    name="listingTerminationDate"
                    error={""}
                    rules={{
                      required: status === "Terminated",
                    }}
                    readOnly={true}
                  />
                  {/* </Col>
                  <Col lg={4} md={4} sm={12}> */}
                  <CustomTextField
                    label="Listing Termination / Cancelation Note"
                    name="listingTerminationReasonNote"
                    error={""}
                    rules={{
                      required: status === "Terminated",
                    }}
                    readOnly={true}
                  />
                  {/* </Col> */}
                </>
              )}
            </Row>
          </>
        )}

        {preListSelling && (
          <Row>
            <CustomDatePicker
              control={control}
              name="expectedListDate"
              rules={{
                required: status === "LA Requested",
              }}
              label="Expected listing date"
              isInvalid={status === "LA Requested"}
            />
            <CustomDatePicker
              control={control}
              name="listingAgreementDate"
              label="Listing Agreement Date"
            />
            <CustomDatePicker
              control={control}
              name="mustSellByDate"
              label="Must sell by date"
            />
            <CustomTextField
              label="Work in progress"
              name="constructionAttributes.inProgress"
              error={""}
              rules={{
                required: status === "LA Requested",
              }}
              readOnly={true}
            />
            <CustomDatePicker
              control={control}
              name="listingExpirationDate"
              label="Listing expiration date"
              error={""}
              readOnly={true}
              disable={true}
              rules={{
                required: status === "LA Requested",
              }}
            />
            <ControllerInput
              control={control}
              label="Initial list price"
              name="initialListPrice"
              as={CurrencyInput}
              error={""}
              rules={{
                required: status === "LA Requested",
              }}
              readOnly={true}
            />
            <ControllerInput
              control={control}
              name="listPrice"
              label="Current list price"
              as={CurrencyInput}
              error={""}
              readOnly={true}
              disable={true}
            />
            <CustomTextField
              label="Lockbox type"
              name="accessAttributes.lockboxType"
              error={""}
              rules={{
                required: status === "LA Requested",
              }}
              readOnly={true}
            />
            <CustomTextField
              label="Showing Lockbox type"
              name="accessAttributes.showingCode"
              error={""}
              rules={{
                required: status === "LA Requested",
              }}
              readOnly={true}
            />
            <CustomTextField
              label="Conforming"
              name="conforming"
              error={""}
              rules={{
                required: status === "LA Requested",
              }}
              readOnly={true}
            />
            <CustomDatePicker
              control={control}
              name="accessAttributes.showingHoldDate"
              label="Showing hold date"
              error={""}
              readOnly={true}
              disable={true}
            />
            <CustomTextField
              control={control}
              name="accessAttributes.showingHoldReason"
              label="Showing hold reason"
              error={""}
              readOnly={true}
              disable={true}
            />
            <CustomDatePicker
              control={control}
              name="onMarketDate"
              label="On market date"
              readOnly={true}
              disable={true}
              rules={{
                required: status === "Receiving Offers",
              }}
              error={status === "Receiving Offers"}
            />
            <CustomTextField
              control={control}
              name="showings"
              label="# of Showings"
              error={""}
              readOnly={true}
              disable={true}
            />
            <CustomTextField
              control={control}
              name="accessAttributes.accessNotes"
              label="Access notes"
              error={""}
              readOnly={true}
              disable={true}
            />
          </Row>
        )}
      </Card>
    </form>
  );
};

export default ListingForm;
