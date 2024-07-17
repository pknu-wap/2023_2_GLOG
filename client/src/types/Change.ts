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
  ChageUserImageData,
  ChageUserImagePayload,
  ChageUserInfoData,
  ChangeBlogNameData,
  UserInfoChangeRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Change<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user-controller
   * @name ChageUserInfo
   * @request POST:/change/user/info
   * @secure
   * @response `200` `ChageUserInfoData` OK
   */
  chageUserInfo = (data: UserInfoChangeRequest, params: RequestParams = {}) =>
    this.request<ChageUserInfoData, any>({
      path: `/change/user/info`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name ChageUserImage
   * @request POST:/change/user/image
   * @secure
   * @response `200` `ChageUserImageData` OK
   */
  chageUserImage = (data: ChageUserImagePayload, params: RequestParams = {}) =>
    this.request<ChageUserImageData, any>({
      path: `/change/user/image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags blog-controller
   * @name ChangeBlogName
   * @request POST:/change/blog/name
   * @secure
   * @response `200` `ChangeBlogNameData` OK
   */
  changeBlogName = (
    query: {
      newBlogName: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ChangeBlogNameData, any>({
      path: `/change/blog/name`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
}
