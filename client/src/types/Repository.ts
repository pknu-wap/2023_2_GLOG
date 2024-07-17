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

import { GetRepositoryData, RegisterRepositoryData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Repository<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags git-hub-controller
   * @name GetRepository
   * @request GET:/repository
   * @secure
   * @response `200` `GetRepositoryData` OK
   */
  getRepository = (params: RequestParams = {}) =>
    this.request<GetRepositoryData, any>({
      path: `/repository`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags git-hub-controller
   * @name RegisterRepository
   * @request POST:/repository
   * @secure
   * @response `200` `RegisterRepositoryData` OK
   */
  registerRepository = (
    query: {
      /** @format int64 */
      categoryId: number;
      repo: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RegisterRepositoryData, any>({
      path: `/repository`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
}
