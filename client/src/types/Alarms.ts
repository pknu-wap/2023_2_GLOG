/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GetAlarmsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Alarms<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags alarm-controller
   * @name GetAlarms
   * @request GET:/alarms
   * @secure
   * @response `200` `GetAlarmsData` OK
   */
  getAlarms = (params: RequestParams = {}) =>
    this.request<GetAlarmsData, any>({
      path: `/alarms`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
