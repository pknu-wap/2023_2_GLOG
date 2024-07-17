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

import { Collect1Data } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Collect<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags post-controller
   * @name Collect1
   * @request GET:/collect
   * @secure
   * @response `200` `Collect1Data` OK
   */
  collect1 = (
    query: {
      /** @format int32 */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Collect1Data, any>({
      path: `/collect`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
