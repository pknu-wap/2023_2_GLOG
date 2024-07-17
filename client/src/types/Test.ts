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

import { CreateData, DeleteData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Test<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-controller
   * @name Create
   * @request POST:/test
   * @secure
   * @response `200` `CreateData` OK
   */
  create = (params: RequestParams = {}) =>
    this.request<CreateData, any>({
      path: `/test`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags test-controller
   * @name Delete
   * @request DELETE:/test
   * @secure
   * @response `200` `DeleteData` OK
   */
  delete = (params: RequestParams = {}) =>
    this.request<DeleteData, any>({
      path: `/test`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
