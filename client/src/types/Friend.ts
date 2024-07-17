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
  AllowFriendRequestData,
  DeleteFriendData,
  FindUserIdByNameData,
  ReadFriendListData,
  ReadFriendPostData,
  RequestFriendData,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Friend<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags friend-controller
   * @name RequestFriend
   * @request PUT:/friend
   * @secure
   * @response `200` `RequestFriendData` OK
   */
  requestFriend = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<RequestFriendData, any>({
      path: `/friend`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name DeleteFriend
   * @request DELETE:/friend
   * @secure
   * @response `200` `DeleteFriendData` OK
   */
  deleteFriend = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteFriendData, any>({
      path: `/friend`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name AllowFriendRequest
   * @request PUT:/friend/allow
   * @secure
   * @response `200` `AllowFriendRequestData` OK
   */
  allowFriendRequest = (
    query: {
      /** @format int32 */
      isAccept: number;
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AllowFriendRequestData, any>({
      path: `/friend/allow`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name ReadFriendList
   * @request GET:/friend/{kind}
   * @secure
   * @response `200` `ReadFriendListData` OK
   */
  readFriendList = (kind: string, params: RequestParams = {}) =>
    this.request<ReadFriendListData, any>({
      path: `/friend/${kind}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name ReadFriendPost
   * @request GET:/friend/read
   * @secure
   * @response `200` `ReadFriendPostData` OK
   */
  readFriendPost = (
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadFriendPostData, any>({
      path: `/friend/read`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name FindUserIdByName
   * @request GET:/friend/id
   * @secure
   * @response `200` `FindUserIdByNameData` OK
   */
  findUserIdByName = (
    query: {
      nickname: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FindUserIdByNameData, any>({
      path: `/friend/id`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
