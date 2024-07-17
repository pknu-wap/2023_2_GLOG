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

import { GetPullrequestData, ReadPrPostedData, WritePrPostData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Pr<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags git-hub-controller
   * @name GetPullrequest
   * @request GET:/pr/posts/unposted
   * @secure
   * @response `200` `GetPullrequestData` OK
   */
  getPullrequest = (
    query: {
      /** @format int64 */
      categoryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPullrequestData, any>({
      path: `/pr/posts/unposted`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags pr-post-controller
   * @name ReadPrPosted
   * @request GET:/pr/posts/posted
   * @secure
   * @response `200` `ReadPrPostedData` OK
   */
  readPrPosted = (
    query: {
      /** @format int64 */
      categoryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadPrPostedData, any>({
      path: `/pr/posts/posted`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags git-hub-controller
   * @name WritePrPost
   * @request GET:/pr/detail
   * @secure
   * @response `200` `WritePrPostData` OK
   */
  writePrPost = (
    query: {
      /** @format int64 */
      prId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<WritePrPostData, any>({
      path: `/pr/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
