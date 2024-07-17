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

import { RequestModalData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Introduce<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags friend-controller
   * @name RequestModal
   * @request GET:/introduce
   * @secure
   * @response `200` `RequestModalData` OK
   */
  requestModal = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<RequestModalData, any>({
      path: `/introduce`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
