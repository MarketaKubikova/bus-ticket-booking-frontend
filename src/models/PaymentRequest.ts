/* tslint:disable */
/* eslint-disable */
/**
 * Bus Ticket Booking API
 * API for managing bus ticket booking application
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';

/**
 * Request object for processing a payment
 * @export
 * @interface PaymentRequest
 */
export interface PaymentRequest {
  /**
   * Unique identifier for the reservation
   * @type {number}
   * @memberof PaymentRequest
   */
  reservationId?: number;
  /**
   * Payment method type
   * @type {string}
   * @memberof PaymentRequest
   */
  method: PaymentRequestMethodEnum;
  /**
   * Type of transaction
   * @type {string}
   * @memberof PaymentRequest
   */
  transactionType: PaymentRequestTransactionTypeEnum;
  /**
   * Coupon code for the payment
   * @type {string}
   * @memberof PaymentRequest
   */
  couponCode?: string;
}

/**
 * @export
 */
export const PaymentRequestMethodEnum = {
  Coupon: 'COUPON',
  Wallet: 'WALLET',
} as const;
export type PaymentRequestMethodEnum =
  (typeof PaymentRequestMethodEnum)[keyof typeof PaymentRequestMethodEnum];

/**
 * @export
 */
export const PaymentRequestTransactionTypeEnum = {
  TicketPurchase: 'TICKET_PURCHASE',
  WalletRecharge: 'WALLET_RECHARGE',
} as const;
export type PaymentRequestTransactionTypeEnum =
  (typeof PaymentRequestTransactionTypeEnum)[keyof typeof PaymentRequestTransactionTypeEnum];

/**
 * Check if a given object implements the PaymentRequest interface.
 */
export function instanceOfPaymentRequest(
  value: object,
): value is PaymentRequest {
  if (!('method' in value) || value['method'] === undefined) return false;
  if (!('transactionType' in value) || value['transactionType'] === undefined)
    return false;
  return true;
}

export function PaymentRequestFromJSON(json: any): PaymentRequest {
  return PaymentRequestFromJSONTyped(json, false);
}

export function PaymentRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PaymentRequest {
  if (json == null) {
    return json;
  }
  return {
    reservationId:
      json['reservationId'] == null ? undefined : json['reservationId'],
    method: json['method'],
    transactionType: json['transactionType'],
    couponCode: json['couponCode'] == null ? undefined : json['couponCode'],
  };
}

export function PaymentRequestToJSON(json: any): PaymentRequest {
  return PaymentRequestToJSONTyped(json, false);
}

export function PaymentRequestToJSONTyped(
  value?: PaymentRequest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    reservationId: value['reservationId'],
    method: value['method'],
    transactionType: value['transactionType'],
    couponCode: value['couponCode'],
  };
}
