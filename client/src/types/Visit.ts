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

import { ReadVisitCountData, SaveVisitCountData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Visit<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags visit-controller
   * @name ReadVisitCount
   * @request GET:/visit
   * @secure
   * @response `200` `ReadVisitCountData` OK
   */
  readVisitCount = (params: RequestParams = {}) =>
    this.request<ReadVisitCountData, any>({
      path: `/visit`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags visit-controller
   * @name SaveVisitCount
   * @request POST:/visit
   * @secure
   * @response `200` `SaveVisitCountData` OK
   */
  saveVisitCount = (
    query: {
      /** @format int64 */
      blogId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SaveVisitCountData, any>({
      path: `/visit`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
}
