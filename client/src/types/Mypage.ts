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

import { GoToMypageData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Mypage<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags blog-controller
   * @name GoToMypage
   * @request GET:/mypage
   * @secure
   * @response `200` `GoToMypageData` OK
   */
  goToMypage = (params: RequestParams = {}) =>
    this.request<GoToMypageData, any>({
      path: `/mypage`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
