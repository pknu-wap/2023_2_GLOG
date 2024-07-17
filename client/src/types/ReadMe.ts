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

import { PutReadmeData, ReadReadmeData, ReadmeDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ReadMe<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags blog-controller
   * @name ReadReadme
   * @request GET:/read-me
   * @secure
   * @response `200` `ReadReadmeData` OK
   */
  readReadme = (
    query: {
      /** @format int64 */
      blogId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadReadmeData, any>({
      path: `/read-me`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags blog-controller
   * @name PutReadme
   * @request PUT:/read-me
   * @secure
   * @response `200` `PutReadmeData` OK
   */
  putReadme = (data: ReadmeDto, params: RequestParams = {}) =>
    this.request<PutReadmeData, any>({
      path: `/read-me`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
