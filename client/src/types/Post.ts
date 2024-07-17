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
  CollectData,
  Create2Data,
  Create2Payload,
  Delete2Data,
  PlusLikeData,
  ReadPostData,
  Update1Data,
  Update1Payload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Post<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags post-controller
   * @name ReadPost
   * @request GET:/post
   * @secure
   * @response `200` `ReadPostData` OK
   */
  readPost = (
    query: {
      /** @format int64 */
      postId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadPostData, any>({
      path: `/post`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name Update1
   * @request PUT:/post
   * @secure
   * @response `200` `Update1Data` OK
   */
  update1 = (data: Update1Payload, params: RequestParams = {}) =>
    this.request<Update1Data, any>({
      path: `/post`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name Create2
   * @request POST:/post
   * @secure
   * @response `200` `Create2Data` OK
   */
  create2 = (data: Create2Payload, params: RequestParams = {}) =>
    this.request<Create2Data, any>({
      path: `/post`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name Delete2
   * @request DELETE:/post
   * @secure
   * @response `200` `Delete2Data` OK
   */
  delete2 = (
    query: {
      /** @format int64 */
      postId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Delete2Data, any>({
      path: `/post`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name PlusLike
   * @request PATCH:/post/like
   * @secure
   * @response `200` `PlusLikeData` OK
   */
  plusLike = (
    query: {
      /** @format int64 */
      postId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PlusLikeData, any>({
      path: `/post/like`,
      method: 'PATCH',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name Collect
   * @request GET:/post/previews/{kind}
   * @secure
   * @response `200` `CollectData` OK
   */
  collect = (
    kind: string,
    query: {
      /** @format int32 */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CollectData, any>({
      path: `/post/previews/${kind}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
