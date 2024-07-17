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
  ClickLikeData,
  Create1Data,
  Delete1Data,
  ReadData,
  ReplyCreateRequest,
  ReplyUpdateRequest,
  UpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Replies<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags reply-controller
   * @name Read
   * @request GET:/replies
   * @secure
   * @response `200` `ReadData` OK
   */
  read = (
    query: {
      /** @format int64 */
      postId: number;
      /** @format int32 */
      page: number;
      order: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadData, any>({
      path: `/replies`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags reply-controller
   * @name Update
   * @request PUT:/replies
   * @secure
   * @response `200` `UpdateData` OK
   */
  update = (data: ReplyUpdateRequest, params: RequestParams = {}) =>
    this.request<UpdateData, any>({
      path: `/replies`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags reply-controller
   * @name Create1
   * @request POST:/replies
   * @secure
   * @response `200` `Create1Data` OK
   */
  create1 = (data: ReplyCreateRequest, params: RequestParams = {}) =>
    this.request<Create1Data, any>({
      path: `/replies`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags reply-controller
   * @name Delete1
   * @request DELETE:/replies
   * @secure
   * @response `200` `Delete1Data` OK
   */
  delete1 = (
    query: {
      /** @format int64 */
      replyId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Delete1Data, any>({
      path: `/replies`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags reply-controller
   * @name ClickLike
   * @request PATCH:/replies/like/{replyId}
   * @secure
   * @response `200` `ClickLikeData` OK
   */
  clickLike = (replyId: number, params: RequestParams = {}) =>
    this.request<ClickLikeData, any>({
      path: `/replies/like/${replyId}`,
      method: 'PATCH',
      secure: true,
      ...params,
    });
}
