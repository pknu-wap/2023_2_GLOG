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
  DeleteMessageData,
  GuestbookMessageRequest,
  ReadMessageData,
  SaveMessageData,
  UpdateMessageData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Guestbook<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags guestbook-controller
   * @name ReadMessage
   * @request GET:/guestbook
   * @secure
   * @response `200` `ReadMessageData` OK
   */
  readMessage = (
    query: {
      /** @format int64 */
      blogId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadMessageData, any>({
      path: `/guestbook`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags guestbook-controller
   * @name UpdateMessage
   * @request PUT:/guestbook
   * @secure
   * @response `200` `UpdateMessageData` OK
   */
  updateMessage = (data: GuestbookMessageRequest, params: RequestParams = {}) =>
    this.request<UpdateMessageData, any>({
      path: `/guestbook`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags guestbook-controller
   * @name SaveMessage
   * @request POST:/guestbook
   * @secure
   * @response `200` `SaveMessageData` OK
   */
  saveMessage = (data: GuestbookMessageRequest, params: RequestParams = {}) =>
    this.request<SaveMessageData, any>({
      path: `/guestbook`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags guestbook-controller
   * @name DeleteMessage
   * @request DELETE:/guestbook
   * @secure
   * @response `200` `DeleteMessageData` OK
   */
  deleteMessage = (
    query: {
      /** @format int64 */
      messageId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteMessageData, any>({
      path: `/guestbook`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
}
