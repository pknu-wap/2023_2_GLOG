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

import { ClickScrapData, GetScrapsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Scrap<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags scrap-controller
   * @name GetScraps
   * @request GET:/scrap
   * @secure
   * @response `200` `GetScrapsData` OK
   */
  getScraps = (
    query: {
      /** @format int32 */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetScrapsData, any>({
      path: `/scrap`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags scrap-controller
   * @name ClickScrap
   * @request PATCH:/scrap
   * @secure
   * @response `200` `ClickScrapData` OK
   */
  clickScrap = (
    query: {
      /** @format int64 */
      postId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ClickScrapData, any>({
      path: `/scrap`,
      method: 'PATCH',
      query: query,
      secure: true,
      ...params,
    });
}
