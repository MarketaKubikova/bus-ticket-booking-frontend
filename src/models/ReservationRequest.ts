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
 * Request object for creating a reservation
 * @export
 * @interface ReservationRequest
 */
export interface ReservationRequest {
  /**
   * Unique identifier for the scheduled trip
   * @type {number}
   * @memberof ReservationRequest
   */
  scheduledTripId: number;
  /**
   * Seat number for the reservation
   * @type {number}
   * @memberof ReservationRequest
   */
  seatNumber: number;
  /**
   * Email address of the passenger
   * @type {string}
   * @memberof ReservationRequest
   */
  passengerEmail?: string;
  /**
   * Tariff details for the reservation
   * @type {string}
   * @memberof ReservationRequest
   */
  tariff: ReservationRequestTariffEnum;
}

/**
 * @export
 */
export const ReservationRequestTariffEnum = {
  Adult: 'ADULT',
  Child: 'CHILD',
  Student: 'STUDENT',
  Senior: 'SENIOR',
} as const;
export type ReservationRequestTariffEnum =
  (typeof ReservationRequestTariffEnum)[keyof typeof ReservationRequestTariffEnum];

/**
 * Check if a given object implements the ReservationRequest interface.
 */
export function instanceOfReservationRequest(
  value: object,
): value is ReservationRequest {
  if (!('scheduledTripId' in value) || value['scheduledTripId'] === undefined)
    return false;
  if (!('seatNumber' in value) || value['seatNumber'] === undefined)
    return false;
  if (!('tariff' in value) || value['tariff'] === undefined) return false;
  return true;
}

export function ReservationRequestFromJSON(json: any): ReservationRequest {
  return ReservationRequestFromJSONTyped(json, false);
}

export function ReservationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ReservationRequest {
  if (json == null) {
    return json;
  }
  return {
    scheduledTripId: json['scheduledTripId'],
    seatNumber: json['seatNumber'],
    passengerEmail:
      json['passengerEmail'] == null ? undefined : json['passengerEmail'],
    tariff: json['tariff'],
  };
}

export function ReservationRequestToJSON(json: any): ReservationRequest {
  return ReservationRequestToJSONTyped(json, false);
}

export function ReservationRequestToJSONTyped(
  value?: ReservationRequest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    scheduledTripId: value['scheduledTripId'],
    seatNumber: value['seatNumber'],
    passengerEmail: value['passengerEmail'],
    tariff: value['tariff'],
  };
}
