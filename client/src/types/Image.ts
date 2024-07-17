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

import { UploadImageData, UploadImagePayload } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Image<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags image-controller
   * @name UploadImage
   * @request POST:/image
   * @secure
   * @response `200` `UploadImageData` OK
   */
  uploadImage = (data: UploadImagePayload, params: RequestParams = {}) =>
    this.request<UploadImageData, any>({
      path: `/image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
}
