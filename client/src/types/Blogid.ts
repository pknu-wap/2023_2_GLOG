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

import { GetBlogIdData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Blogid<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags blog-controller
   * @name GetBlogId
   * @request GET:/blogid
   * @secure
   * @response `200` `GetBlogIdData` OK
   */
  getBlogId = (
    query: {
      blogUrl: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetBlogIdData, any>({
      path: `/blogid`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
