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

import {
  CreateTemporaryData,
  CreateTemporaryPayload,
  DeleteTemporaryData,
  ReadTemporaryDetailData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Temporary<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags temporary-controller
   * @name CreateTemporary
   * @request POST:/temporary
   * @secure
   * @response `200` `CreateTemporaryData` OK
   */
  createTemporary = (data: CreateTemporaryPayload, params: RequestParams = {}) =>
    this.request<CreateTemporaryData, any>({
      path: `/temporary`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags temporary-controller
   * @name DeleteTemporary
   * @request DELETE:/temporary
   * @secure
   * @response `200` `DeleteTemporaryData` OK
   */
  deleteTemporary = (
    query: {
      /** @format int64 */
      temporaryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTemporaryData, any>({
      path: `/temporary`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags temporary-controller
   * @name ReadTemporaryDetail
   * @request GET:/temporary/detail
   * @secure
   * @response `200` `ReadTemporaryDetailData` OK
   */
  readTemporaryDetail = (
    query: {
      /** @format int64 */
      temporaryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadTemporaryDetailData, any>({
      path: `/temporary/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
