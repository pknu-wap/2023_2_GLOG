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

import { ReadHistoryData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class History<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags history-controller
   * @name ReadHistory
   * @request GET:/history
   * @secure
   * @response `200` `ReadHistoryData` OK
   */
  readHistory = (params: RequestParams = {}) =>
    this.request<ReadHistoryData, any>({
      path: `/history`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
