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
  CategoryCreateRequest,
  CategoryUpdateRequest,
  Delete3Data,
  DeletePostsData,
  DeletePostsPayload,
  GetCategoryData,
  GetSidebarByBlogData,
  SaveCategoryData,
  UpdateCategoryData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Category<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags category-controller
   * @name GetCategory
   * @request GET:/category
   * @secure
   * @response `200` `GetCategoryData` OK
   */
  getCategory = (
    query: {
      /** @format int64 */
      categoryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCategoryData, any>({
      path: `/category`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags category-controller
   * @name UpdateCategory
   * @request PUT:/category
   * @secure
   * @response `200` `UpdateCategoryData` OK
   */
  updateCategory = (data: CategoryUpdateRequest, params: RequestParams = {}) =>
    this.request<UpdateCategoryData, any>({
      path: `/category`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags category-controller
   * @name SaveCategory
   * @request POST:/category
   * @secure
   * @response `200` `SaveCategoryData` OK
   */
  saveCategory = (data: CategoryCreateRequest, params: RequestParams = {}) =>
    this.request<SaveCategoryData, any>({
      path: `/category`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags category-controller
   * @name Delete3
   * @request DELETE:/category
   * @secure
   * @response `200` `Delete3Data` OK
   */
  delete3 = (
    query: {
      /** @format int64 */
      categoryId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Delete3Data, any>({
      path: `/category`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags category-controller
   * @name GetSidebarByBlog
   * @request GET:/category/sidebar/{blogId}
   * @secure
   * @response `200` `GetSidebarByBlogData` OK
   */
  getSidebarByBlog = (blogId: number, params: RequestParams = {}) =>
    this.request<GetSidebarByBlogData, any>({
      path: `/category/sidebar/${blogId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags category-controller
   * @name DeletePosts
   * @request DELETE:/category/posts
   * @secure
   * @response `200` `DeletePostsData` OK
   */
  deletePosts = (data: DeletePostsPayload, params: RequestParams = {}) =>
    this.request<DeletePostsData, any>({
      path: `/category/posts`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
