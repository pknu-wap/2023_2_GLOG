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

import { ReadTemporaryData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Temporaries<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags temporary-controller
   * @name ReadTemporary
   * @request GET:/temporaries
   * @secure
   * @response `200` `ReadTemporaryData` OK
   */
  readTemporary = (params: RequestParams = {}) =>
    this.request<ReadTemporaryData, any>({
      path: `/temporaries`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
