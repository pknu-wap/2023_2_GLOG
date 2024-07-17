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

import { CreateBlogData, GetBlogUrlData, UserCreateRequest } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Blog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags blog-controller
   * @name CreateBlog
   * @request POST:/blog
   * @secure
   * @response `200` `CreateBlogData` OK
   */
  createBlog = (data: UserCreateRequest, params: RequestParams = {}) =>
    this.request<CreateBlogData, any>({
      path: `/blog`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags blog-controller
   * @name GetBlogUrl
   * @request GET:/blog/url
   * @secure
   * @response `200` `GetBlogUrlData` OK
   */
  getBlogUrl = (
    query: {
      /** @format int64 */
      categoryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetBlogUrlData, any>({
      path: `/blog/url`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
