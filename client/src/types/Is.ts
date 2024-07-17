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

import { ReadHasBlogData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Is<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags blog-controller
   * @name ReadHasBlog
   * @request GET:/is/new/blog
   * @secure
   * @response `200` `ReadHasBlogData` OK
   */
  readHasBlog = (params: RequestParams = {}) =>
    this.request<ReadHasBlogData, any>({
      path: `/is/new/blog`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
