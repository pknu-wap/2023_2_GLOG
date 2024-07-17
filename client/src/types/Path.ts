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

import { ReadPathData, SavePathData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Path<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags path-controller
   * @name ReadPath
   * @request GET:/path
   * @secure
   * @response `200` `ReadPathData` OK
   */
  readPath = (params: RequestParams = {}) =>
    this.request<ReadPathData, any>({
      path: `/path`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags path-controller
   * @name SavePath
   * @request POST:/path
   * @secure
   * @response `200` `SavePathData` OK
   */
  savePath = (
    query: {
      path: string;
      /** @format int64 */
      blogId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SavePathData, any>({
      path: `/path`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
}
