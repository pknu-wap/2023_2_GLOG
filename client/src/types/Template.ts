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
  CreateTemplateData,
  CreateTemplatePayload,
  DeleteTemplateData,
  ReadTemplateData,
  ReadTemplateDetailData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Template<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags template-controller
   * @name ReadTemplate
   * @request GET:/template
   * @secure
   * @response `200` `ReadTemplateData` OK
   */
  readTemplate = (params: RequestParams = {}) =>
    this.request<ReadTemplateData, any>({
      path: `/template`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags template-controller
   * @name CreateTemplate
   * @request POST:/template
   * @secure
   * @response `200` `CreateTemplateData` OK
   */
  createTemplate = (data: CreateTemplatePayload, params: RequestParams = {}) =>
    this.request<CreateTemplateData, any>({
      path: `/template`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags template-controller
   * @name DeleteTemplate
   * @request DELETE:/template
   * @secure
   * @response `200` `DeleteTemplateData` OK
   */
  deleteTemplate = (
    query: {
      /** @format int64 */
      templateId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteTemplateData, any>({
      path: `/template`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags template-controller
   * @name ReadTemplateDetail
   * @request GET:/template/detail
   * @secure
   * @response `200` `ReadTemplateDetailData` OK
   */
  readTemplateDetail = (
    query: {
      /** @format int64 */
      templateId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadTemplateDetailData, any>({
      path: `/template/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
