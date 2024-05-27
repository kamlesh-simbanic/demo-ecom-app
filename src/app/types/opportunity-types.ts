export interface OpportunityEntity {
  id: string;
  name: string;
  date_entered: string;
  date_modified: string | null;
  modified_user_id: string | null;
  created_by: string | null;
  description: string | null;
  deleted: false;
  assigned_user_id: string | null;
  opportunity_type: string | null;
  campaign_id: string | null;
  lead_source: string | null;
  amount: string | null;
  amount_usdollar: string | null;
  currency_id: string | null;
  date_closed: string | null;
  next_step: string | null;
  sales_stage: string | null;
  probability: number;
  cancel_reason: string | null;
  reject_reason: string | null;
  documentation_delivered: string | null;
  emd_requested_confirmed: string | null;
  approved_dd_release: string | null;
  counter_offer: string;
  sale_avm_actual: number;
  rent_avm_actual: number;
  sold_price: string | null;
  sale_date: string | null;
  short_sale_seller_accept_date: string | null;
  roof_type: string | null;
  edit_offer_version: number;
  qb_invoice_no: string | null;
  heating_system: string | null;
  cooling_system: string | null;
  property_access_contact_phone: string | null;
  property_access_contact_name: string | null;
  property_access_contact_email: string | null;
  property_access_comments: string | null;
  offer_submit_by_date: string | null;
  offer_submit_type: string | null;
  bid_id: string | null;
  bid_url: string | null;
  rep_name: string | null;
  rep_email: string | null;
  rep_phone: string | null;
  rep_company: string | null;
  commision_pending: number;
  commision_reduction: string | null;
  final_commission: number;
  commission_pay_type: string | null;
  contract_terminated_date: string | null;
  visit_evaluator_type: string | null;
  evaluator_date: string | null;
  visit_date: string | null;
  visit_earliest_time: string | null;
  visit_latest_time: string | null;
  evaluator_comments: string | null;
  visit_comments: string | null;
  inspect_date: string | null;
  inspect_comments: string | null;
  full_address: string | null;
  simba_unique_id: string | null;
  mo_photos_required: number;
  mo_photos_date: string | null;
  mo_photos_source: string | null;
  product_type: string | null;
  net_offer: string | null;
  is_sqs_opendoor: number;
  reject_date: string | null;
  offer_lost_date: string | null;
  initial_commission_percentage: number;
  final_commission_percentage: number;
  initial_commission_amount: number;
  cda_amount_2: string | null;
  cda_amount_3: string | null;
  cda_pay_to_2: string | null;
  cda_pay_to_3: string | null;
  visit_agree: 1;
  offer_initialized_at: string | null;
  offer_finalized_at: string | null;
  entera_opportunity_id: string | null;
  escrow_percent: string | null;
  entera_customer_id: number;
  closing_attorney: string | null;
  closing_attorney_contract: string | null;
  closing_attorney_email: string | null;
  closing_attorney_phone: string | null;
  closing_attorney_address: string | null;
  // msa_id_1: string | null;
  primary_tr_id: string | null;
  manager_id: string | null;
  // account_id_1: string | null;
  is_sqs_price_status: number;
  letter_of_intent: false;
  save_for_singnature_by: string | null;
  offer_submitted_by: string | null;
  congrats_letter_sent_by: string | null;
  congrats_letter_sent_date: string | null;
  access_requested_by: string | null;
  access_requested_date: string | null;
  school_district: string | null;
  reduction_type: string | null;
  commision_reduction2: string | null;
  commision_reduction3: string | null;
  hud_commission: string | null;
  commissions_flags: string | null;
  commission_reduction_type2: string | null;
  commission_reduction_type3: string | null;
  total_commission_reductions: number;
  file_location: string;
  addendum_no: string | null;
  addendum_notes: string | null;
  restrictions_notes: string | null;
  has_leasing_restrictions: string | null;
  offer_documents_status: string | null;
  commission_received: string | null;
  offer_documents_created_at: string | null;
  escalation_clause_amount: string | null;
  customer_reservation_status: string | null;
  contract_termination_reasons: string | null;
  customer_accepted_status_verified: string | null;
  parties_listing_agent_id: string | null;
  seller_offer_response: string | null;
  next_seller_contact_date: string | null;
  offer_price_at_acceptance: string | null;
  parties_co_listing_agent_id: string | null;
  inclusion: string;
  exclusion: string;
  internal_termination_feedback: string | null;
  hoa_name: string | null;
  roof_age: string | null;
  hoa_url: string | null;
  hvac_age: string | null;
  submitting_user_code: string | null;
  behalf_of_user_code: string | null;
  market_preference_id: string | null;
  rental_amount: string;
  lease_type: string;
  deposit_amount: number;
  lease_end_date: string;
  nego_at_offer_accept: string | null;
  nego_at_closing: string | null;
  nego_at_offer_sent: string | null;
  special_instructions: string | null;
  license_supervisor_license_number: string | null;
  licensed_supervisor_of_listing_associate: string | null;
  additional_cancellation_reason: string | null;
  original_close_of_escrow_date: string | null;
  seller_ownership_representation: string | null;
  rpd_received: number;
  mog_received: false;
  water_and_sewer: string | null;
  offer_cancelled_date: string | null;
  sellers_disclosure_received: number;
  settlement_date: string | null;
  foundation_type: string | null;
  no_diligence_period: false;
  key_location: string | null;
  tenant_phone: string | null;
  tenant_email: string | null;
  tenant_name: string | null;
  parties_tenant_id: string | null;
  parties_transaction_coordinator_id: string | null;
  is_inspection_contingencies_waived: string | null;
  disable_inspection_emails_for_waived_inspections: string;
  entera_sourced_off_market: false;
  commission_contribution_at_offer_accept: string | null;
  contract_review_complete: number;
  active_primary_negotiator_user_id: string | null;
  street_name: string | null;
  has_post_occupancy: string | null;
  pre_close_notification_to_recipient: string | null;
  pre_close_notification_cc_recipient: string | null;
  broker_rep_firm: string | null;
  broker_rep_firm_license_number: string | null;
  broker_rep_mlsid: string | null;
  broker_rep_agent_license_number: string | null;
  broker_rep_agent_email: string | null;
  executed_contract_email_to: string | null;
  executed_contract_email_cc: string | null;
  executed_contract_email_bcc: string | null;
  buyer_assignability: string | null;
  mo_photos_link: string | null;
  access_notes: string | null;
  primary_tc_at_closing: string | null;
  primary_logistics_at_closing: string | null;
  primary_tc_at_diligence: string | null;
  primary_tc_at_sale_pending: string | null;
  primary_logistics_at_diligence: string | null;
  primary_logistics_at_sale_pending: string | null;
  backwards_status_move_reason: string | null;
  parties_seller_id: string | null;
  parties_seller_representative_id: string | null;
  parties_lead_source_id: string | null;
  parties_lead_owner_id: string | null;
  parties_buyer_representative_id: string | null;
  parties_intended_buyer_id: string | null;
  parties_uploaded_by_id: string | null;
  earnest_recovered_by_buyer: string | null;
  earnest_recovery_amount: string | null;
  earnest_paid_by_entera: string | null;
  earnest_paid_by_entera_amount: string | null;
  new_construction_no_tax_id: number;
  municipal_inspection_types: [];
  municipal_inspection_notes: string | null;
  mailbox_location: string | null;
  reject_note: string | null;
  competing_offer_count: string | null;
  competing_offer_highest_price: string | null;
  buyer_offer_key: string | null;
  cancel_note: string | null;
  cancel_request_received_date: string | null;
  leaseback_3_sent_at: string | null;
  leaseback_1_sent_at: string | null;
  leaseback_3_sent_by: string | null;
  leaseback_1_sent_by: string | null;
  opportunity_counteroffer_id: string;
  primary_tc: string | null;
  primary_logistics: string | null;
  earnest_amount_verified: string | null;
  option_fee_verified: string | null;
  contract_received_date: string | null;
  solar_panel_lease_date_expiration: string;
  other_counter_offer_terms: string;
  solar_panel_payoff_amount: string;
  solar_panel_leased_or_owned: string;
  hoa_addendum_received: string | null;
  due_diligence_days_confirm: string | null;
  due_diligence_fee: string | null;
  preferred_title: string | null;
  lockbox_code: string | null;
  access_type: string | null;
  seller_id: string | null;
  parties_escrow_company_id: string | null;
  reason_description: string | null;
  transaction_notes: string | null;
  wire_fee_amount: string | null;
  data_source: string | null;
  dd_fee_payment_tracking_number: string | null;
  offer_strategy: string | null;
  extension_request_reason: string | null;
  benefitting_negotiator_id: string | null;
  benefitting_negotiator_changed_at: string | null;
  benefitting_negotiator_changed_by_id: string | null;
  benefitting_negotiator_is_locked: false;
  forecasted_dd_end_date: string | null;
  forecasted_close_date: string | null;
  gate_code: string | null;
  retrade_reason: string | null;
  buyer_requested_retrade_amount: string | null;
  negotiator_sent_retrade_amount: string | null;
  actual_retrade_amount: string | null;
  request_retrade_amount: string | null;
  entera_contribution: string | null;
  entera_contribution_amount: string | null;
  pending_extension: string;
  pending_retrade: string;
  approved_to_close: string;
  deprecated_buyer_name_hud_id: string | null;
  buyer_contract_name_at_offer_sent_id: string | null;
  buyer_contract_name_at_diligence_start_id: string | null;
  buyer_contract_name_at_closing_id: string | null;
  cancellation_reason_subcategory: string | null;
  termination_reason_subcategory: string | null;
  lease_agreement_received: number;
  lowest_acceptable_price: string | null;
  offer_response_details: string | null;
  offer_grade: string | null;
  account_buyer_id: string | null;
  entera_market_id: number;
  buyer_name_prelim_hud_id: string | null;
  expected_rehab_tier: string | null;
  ip_address: string;
  request_id: string | null;
  portfolio_id: string | null;
  portfolio_name: string | null;
  id_c: string | null;
  jjwg_maps_lng_c: number;
  jjwg_maps_lat_c: number;
  jjwg_maps_geocode_status_c: string | null;
  jjwg_maps_address_c: string | null;
  glt_property_id_c: string | null;
  mls_c: string | null;
  tax_id_c: string | null;
  buyer_contract_name_c: string | null;
  customer_name_c: string | null;
  property_address_city_c: string | null;
  property_address_postalcode_c: string | null;
  property_address_c: string | null;
  msa_c: string;
  subdivision_c: string | null;
  legal_description_c: string | null;
  bed_c: string | null;
  bath_c: string | null;
  year_built_c: string | null;
  sq_ft_c: string | null;
  lot_size_c: string | null;
  pool_c: string | null;
  offer_date_c: string | null;
  offer_price_c: string;
  max_offer_price_c: string | null;
  financing_c: string;
  financing_amount_c: string | null;
  balance_to_close_c: number;
  option_amount_c: string;
  option_inspection_period_c: string | null;
  option_delivery_instructions_c: string | null;
  earnest_amount_c: string;
  earnest_delivery_instruction_c: string | null;
  additional_terms_comments_c: string;
  vacant_c: string | null;
  opportunity_status_c: string | null;
  showing_information_instruct_c: string | null;
  title_company_name_c: string | null;
  title_company_address_c: string | null;
  title_company_contact_c: string | null;
  title_company_phone_c: string | null;
  title_company_email_c: string | null;
  counter_offer_price_c: string;
  contract_price_c: string | null;
  negotiation_notes_c: string | null;
  remove_glt_notes_c: string | null;
  list_date_c: string | null;
  mls_status_c: string | null;
  list_price_c: string | null;
  offer_to_list_c: number;
  escrow_company_fax_c: string | null;
  occupancy_status_c: string | null;
  type_of_financing_c: string | null;
  initial_interest_rate_c: number;
  initial_financing_term_years_c: number;
  buyers_attorney_name_c: string | null;
  buyer_notice_address_c: string | null;
  buyer_phone_c: string | null;
  buyer_email_c: string | null;
  legal_subdivision_c: string | null;
  offer_expiration_date_c: string | null;
  option_fee_status_c: string | null;
  earnest_money_status_c: string | null;
  option_fee_delivery_date_c: string | null;
  subdivision_section_c: string | null;
  property_lot_number_c: string | null;
  property_block_number_c: string | null;
  property_excludes_c: string | null;
  type_c: string;
  buyer_commission_c: string;
  buyer_bonus_c: string | null;
  listing_commission_c: string | null;
  listing_bonus_c: string | null;
  close_date_c: string;
  equipment_c: string | null;
  public_remarks_c: string | null;
  realtor_remarks_c: string | null;
  opportunity_rehab_c: string | null;
  projected_rehab_c: string | null;
  actual_rehab_c: string | null;
  county_c: string | null;
  chat_text_c: string | null;
  photo_c: string | null;
  buyer_contract_name_2_c: string | null;
  title_payor_c: string;
  survey_requested_c: string;
  land_lots_c: string | null;
  district_number_c: string | null;
  phase_number_c: string | null;
  plat_book_number_c: string | null;
  plat_page_number_c: string | null;
  deed_book_number_c: string | null;
  deed_book_page_c: string | null;
  warranty_required_c: string | null;
  homeowner_association_c: string | null;
  contract_execution_date_c: string | null;
  lease_back_allowed_c: string | null;
  loan_percent_c: string | null;
  seller_closing_costs_c: string | null;
  seller_closing_support_c: string | null;
  appraisal_required_c: string | null;
  unit_number_c: string | null;
  market_signer_name_c: string | null;
  market_signer_initials_c: string | null;
  market_signer_name_2_c: string | null;
  market_signer_initials_2_c: string | null;
  property_address_state_c: string | null;
  due_diligence_end_c: string;
  earnest_money_due_c: string | null;
  em_delivery_date_c: string | null;
  remove_glt_mls_id_c: string | null;
  basement_c: string | null;
  option_days_type_c: string;
  option_period_days_c: string;
  listing_source_c: string;
  listing_type_c: string;
  garage_c: string | null;
  earnest_money_due_date_c: string | null;
  additional_access_information_c: string | null;
  frequency_closing_status_c: string | null;
  flood_zone_c: string | null;
  census_tract_c: string | null;
  hoa_fees_monthly_c: string | null;
  rent_avm_c: string | null;
  calculated_tax_c: string | null;
  sale_avm_c: string | null;
  property_type_c: string | null;
  customer_brokerage_c: string | null;
  customer_broker_name_c: string | null;
  wire_request_name_c: string | null;
  benificiary_name_c: string | null;
  beneficiary_address_c: string | null;
  beneficiary_city_c: string | null;
  beneficiary_account_c: string | null;
  routing_number_c: string | null;
  wire_information_c: string | null;
  wire_purpose_c: string | null;
  wire_status_c: string | null;
  initial_offer_price_c: string | null;
  additional_earnest_money_c: string | null;
  contract_amendment_date_c: string | null;
  purchase_price_c: number | null;
  entera_property_id_c: string | null;
  due_diligence_start_c: string | null;
  revised_list_price_c: string | null;
  list_price_updated_date_c: string | null;
  mls_updated_timestamp_c: string | null;
  offer_to_market_value_percentage_c: number;
  updated_at_c: string | null;
  initial_due_diligence_end: string | null;
  account: {
    id: string | null;
    name: string;
  };
  market: {
    id: string | null;
    name: string;
  };
  market_preference: {
    id: string | null;
    name: string | null;
    sqs_status_trigger: string;
  };
  opportunity_service_provider: {
    id: string | null;
    opportunity_id: string | null;
    service_provider_id: string | null;
    service_type: string | null;
    service_amount: string;
    service_date: string;
  };
  hoa_management_company: {
    id: string;
    opportunity_id: string;
    name: string;
    company_phone: string;
    contact_name: string;
    contact_phone: string;
    contact_address: string;
    is_self_managed: number;
    contact_email: string;
  };
  property_utility_provider: {
    id: string | null;
    opportunity_id: string;
    electric_provider: string;
    gas_provider: string;
    is_electric: number;
    water_well_provider: string;
    is_well: number;
    sewer_provider: string;
    is_septic: number;
    trash_provider: string;
  };
}

export type OpportunityListEntity = Pick<
  OpportunityEntity,
  // | "account_id_1"
  | "buyer_contract_name_c"
  | "cancel_reason"
  | "close_date_c"
  | "closing_attorney"
  | "congrats_letter_sent_by"
  | "congrats_letter_sent_date"
  | "contract_execution_date_c"
  | "contract_price_c"
  | "contract_review_complete"
  | "contract_terminated_date"
  | "contract_termination_reasons"
  | "counter_offer"
  | "customer_accepted_status_verified"
  | "date_entered"
  | "date_modified"
  | "due_diligence_end_c"
  | "due_diligence_start_c"
  | "earnest_amount_c"
  | "earnest_money_due_date_c"
  | "earnest_money_status_c"
  | "entera_opportunity_id"
  | "forecasted_close_date"
  | "id"
  | "initial_commission_amount"
  | "list_date_c"
  | "list_price_c"
  | "max_offer_price_c"
  | "mls_c"
  | "mls_status_c"
  // | "msa_id_1"
  | "name"
  | "next_seller_contact_date"
  | "offer_date_c"
  | "offer_finalized_at"
  | "offer_price_c"
  | "offer_to_list_c"
  | "opportunity_status_c"
  | "option_amount_c"
  | "option_fee_delivery_date_c"
  | "parties_buyer_representative_id"
  | "parties_co_listing_agent_id"
  | "parties_escrow_company_id"
  | "parties_intended_buyer_id"
  | "parties_lead_owner_id"
  | "parties_lead_source_id"
  | "parties_listing_agent_id"
  | "parties_seller_id"
  | "parties_seller_representative_id"
  | "parties_tenant_id"
  | "parties_transaction_coordinator_id"
  | "parties_uploaded_by_id"
  | "property_address_c"
  | "reject_reason"
  | "revised_list_price_c"
  | "seller_id"
  | "seller_offer_response"
  | "sellers_disclosure_received"
  | "special_instructions"
  | "account"
  | "market"
  | "market_preference"
>;
