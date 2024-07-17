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
  SearchContentsByCategoryData,
  SearchContentsByContentData,
  SearchContentsByHashtagData,
  SearchContentsByTitleData,
  SearchContentsByUserData,
  SearchFriendByNameData,
  SearchPostData,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Search<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchPost
   * @request GET:/search
   * @secure
   * @response `200` `SearchPostData` OK
   */
  searchPost = (
    query?: {
      /** @default "content" */
      type?: string;
      /** @default "" */
      value?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchPostData, any>({
      path: `/search`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchContentsByUser
   * @request GET:/search/user
   * @secure
   * @response `200` `SearchContentsByUserData` OK
   */
  searchContentsByUser = (
    query: {
      nickname: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchContentsByUserData, any>({
      path: `/search/user`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchContentsByTitle
   * @request GET:/search/title
   * @secure
   * @response `200` `SearchContentsByTitleData` OK
   */
  searchContentsByTitle = (
    query: {
      title: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchContentsByTitleData, any>({
      path: `/search/title`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchContentsByHashtag
   * @request GET:/search/hashtag
   * @secure
   * @response `200` `SearchContentsByHashtagData` OK
   */
  searchContentsByHashtag = (
    query: {
      hashtag: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchContentsByHashtagData, any>({
      path: `/search/hashtag`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags friend-controller
   * @name SearchFriendByName
   * @request GET:/search/friend/name
   * @secure
   * @response `200` `SearchFriendByNameData` OK
   */
  searchFriendByName = (
    query: {
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchFriendByNameData, any>({
      path: `/search/friend/name`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchContentsByContent
   * @request GET:/search/content
   * @secure
   * @response `200` `SearchContentsByContentData` OK
   */
  searchContentsByContent = (
    query: {
      content: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchContentsByContentData, any>({
      path: `/search/content`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags post-controller
   * @name SearchContentsByCategory
   * @request GET:/search/category
   * @secure
   * @response `200` `SearchContentsByCategoryData` OK
   */
  searchContentsByCategory = (
    query: {
      /** @format int64 */
      categoryId: number;
      /** @format int32 */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchContentsByCategoryData, any>({
      path: `/search/category`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
