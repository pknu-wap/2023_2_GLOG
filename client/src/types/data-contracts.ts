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

export interface ReplyUpdateRequest {
  /** @format int64 */
  repyId?: number;
  message?: string;
}

export interface ReadmeDto {
  readme?: string;
}

export interface PostCreateRequest {
  /** @format int64 */
  postId?: number;
  title?: string;
  content?: string;
  isPrivate?: boolean;
  /** @format int64 */
  prId?: number;
  /** @format int64 */
  categoryId?: number;
  hashtags?: string[];
}

export interface GuestbookMessageRequest {
  /** @format int64 */
  guestbookId?: number;
  /** @format int64 */
  messageId?: number;
  message?: string;
}

export interface UserModalResponse {
  /** @format int64 */
  id?: number;
  introduction?: string;
  imageUrl?: string;
  nickname?: string;
  blogName?: string;
  blogUrl?: string;
  relationship?: string;
  /** @format int32 */
  friendCount?: number;
}

export interface UserFriendResponse {
  userSimpleDtos?: UserSimpleDtos;
  /** @format int32 */
  realFriendCount?: number;
}

export interface UserSimpleDto {
  /** @format int64 */
  userId?: number;
  /** @format int64 */
  friendId?: number;
  /** @format int64 */
  recentPostId?: number;
  haveNewPost?: boolean;
  nickname?: string;
  imageUrl?: string;
  relationship?: string;
}

export interface UserSimpleDtos {
  simpleDtos?: UserSimpleDto[];
}

export interface CategoryUpdateRequest {
  /** @format int64 */
  categoryId?: number;
  newCategoryName?: string;
}

export interface PostBasicDto {
  title?: string;
  content?: string;
  thumbnail?: string;
  hashtags?: string[];
  /** @format int64 */
  id?: number;
}

export interface ReplyCreateRequest {
  /** @format int64 */
  postId?: number;
  message?: string;
}

export interface UserInfoChangeRequest {
  name?: string;
  introduction?: string;
}

export interface UserDetailResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  imageUrl?: string;
  introduction?: string;
}

export type MyPageResponse = object;

export interface CategoryCreateRequest {
  categoryName?: string;
  isPrCategory?: boolean;
  repositoryUrl?: string;
}

export interface UserCreateRequest {
  blogUrl: string;
  blogName: string;
  nickname: string;
}

export interface UserMypageResponse {
  /** @format int64 */
  userID?: number;
  /** @format int64 */
  blogId?: number;
  nickName?: string;
  blogName?: string;
  email?: string;
  introduction?: string;
  thumbnail?: string;
  blogUrl?: string;
}

export interface PostTitleDto {
  title?: string;
  /** @format int64 */
  id?: number;
}

export interface PostTitleResponse {
  postTitleResponse?: PostTitleDto[];
}

export interface PostPreviewDto {
  blogUrl?: string;
  /** @format int64 */
  postId?: number;
  /** @format int64 */
  categoryId?: number;
  title?: string;
  thumbnail?: string;
  /** @format int32 */
  likesCount?: number;
  /** @format int32 */
  viewsCount?: number;
  /** @format int32 */
  repliesCount?: number;
  /** @format date-time */
  createdAt?: string;
  isPrivate?: boolean;
}

export interface PostPreviewDtos {
  postPreviewDtos?: PostPreviewDto[];
  /** @format int32 */
  totalPages?: number;
}

export interface RepositoryResponse {
  repository?: string[];
}

export interface ReplyDto {
  /** @format int64 */
  replyId?: number;
  userDto?: UserDto;
  message?: string;
  /** @format int32 */
  likesCount?: number;
  isEdit?: boolean;
  /** @format date-time */
  createdAt?: string;
  isLiked?: boolean;
  who?: string;
}

export interface ReplyGetResponse {
  replyDtos?: ReplyDto[];
  imOwner?: boolean;
}

export interface UserDto {
  /** @format int64 */
  userId?: number;
  nickname?: string;
  profileImage?: string;
}

export interface ReadMeDto {
  blogName?: string;
  content?: string;
  isMe?: boolean;
}

export interface PrUnPostResponse {
  isAuthor?: boolean;
  prUnPostedDtos?: PrUnPostedDtos;
}

export interface PrUnPostedDto {
  /** @format int64 */
  prId?: number;
  /** @format int32 */
  prNumber?: number;
  prTitle?: string;
}

export interface PrUnPostedDtos {
  prUnPostedDtos?: PrUnPostedDto[];
}

export interface PrPostResponse {
  isAuthor?: boolean;
  prPostedDtos?: PrPostedDtos;
}

export interface PrPostedDto {
  /** @format int64 */
  postId?: number;
  /** @format int64 */
  prId?: number;
  /** @format int32 */
  prNumber?: number;
  prTitle?: string;
}

export interface PrPostedDtos {
  prPostedDtos?: PrPostedDto[];
}

export interface PrWriteDto {
  /** @format int64 */
  prId: number;
  /** @format int32 */
  number: number;
  title: string;
  body: string;
}

export interface PathDto {
  influxPath?: string;
}

export interface HistoryResponse {
  week?: Week;
  year?: Year;
}

export interface Week {
  mon?: boolean;
  tue?: boolean;
  wed?: boolean;
  thu?: boolean;
  fri?: boolean;
  sat?: boolean;
  sun?: boolean;
}

export interface Year {
  /** @format date */
  from?: string;
  posted?: number[];
}

export interface GuestbookResponse {
  messageDto?: MessageDto[];
  imOwner?: boolean;
  /** @format int64 */
  guestbookId?: number;
}

export interface MessageDto {
  userDto?: UserDto;
  /** @format int64 */
  messageId?: number;
  message?: string;
  /** @format date-time */
  createdAt?: string;
  who?: string;
}

export interface PostPreviewResponse {
  craeted?: PostPreviewDtos;
  likes?: PostPreviewDtos;
  views?: PostPreviewDtos;
  randoms?: PostPreviewDtos;
}

export interface CategoryDto {
  categoryName?: string;
  prCategory?: boolean;
}

export interface SidebarDto {
  /** @format int64 */
  categoryId?: number;
  categoryName?: string;
  isPrCategory?: boolean;
  postTitleDtos?: PostTitleDto[];
}

export interface SidebarDtos {
  sidebarDtos?: SidebarDto[];
  isMyPage?: boolean;
}

export interface AlarmDto {
  message?: string;
  checked?: boolean;
  type?: 'reply';
  /** @format int64 */
  referencedId?: number;
  /** @format date-time */
  createdAt?: string;
}

export interface AlarmDtos {
  alarmDtos?: AlarmDto[];
}

export type ReadData = ReplyGetResponse;

export type UpdateData = string;

/** @format int64 */
export type Create1Data = number;

export type Delete1Data = string;

export type ReadReadmeData = ReadMeDto;

export type PutReadmeData = string;

export type ReadPostData = object;

export interface Update1Payload {
  /** @format binary */
  thumbnail?: File;
  postCreateRequest: PostCreateRequest;
}

/** @format int64 */
export type Update1Data = number;

export interface Create2Payload {
  /** @format binary */
  thumbnail?: File;
  postCreateRequest: PostCreateRequest;
}

/** @format int64 */
export type Create2Data = number;

export type Delete2Data = string;

export type ReadMessageData = GuestbookResponse;

export type UpdateMessageData = string;

export type SaveMessageData = string;

export type DeleteMessageData = string;

export type RequestFriendData = UserModalResponse;

export type DeleteFriendData = string;

export type AllowFriendRequestData = UserFriendResponse;

export type GetCategoryData = CategoryDto;

export type UpdateCategoryData = string;

export type SaveCategoryData = string;

export type Delete3Data = string;

/** @format int32 */
export type ReadVisitCountData = number;

export type SaveVisitCountData = string;

export type CreateData = string;

export type DeleteData = string;

export interface CreateTemporaryPayload {
  /** @format binary */
  thumbnail?: File;
  postBasicDto: PostBasicDto;
}

export type CreateTemporaryData = string;

export type DeleteTemporaryData = string;

export type ReadTemplateData = PostTitleResponse;

export interface CreateTemplatePayload {
  /** @format binary */
  thumbnail?: File;
  postBasicDto: PostBasicDto;
}

export type CreateTemplateData = string;

export type DeleteTemplateData = string;

export type GetRepositoryData = RepositoryResponse;

export type RegisterRepositoryData = string;

export type ReadPathData = PathDto[];

export type SavePathData = string;

export interface UploadImagePayload {
  /** @format binary */
  image: File;
}

export type UploadImageData = string;

export type ChageUserInfoData = UserDetailResponse;

export interface ChageUserImagePayload {
  /** @format binary */
  image: File;
}

export type ChageUserImageData = UserDetailResponse;

export type ChangeBlogNameData = MyPageResponse;

export type CreateBlogData = string;

export type GetScrapsData = PostPreviewDtos;

export type ClickScrapData = string;

export type ClickLikeData = string;

export type PlusLikeData = string;

export type GetUserDetailData = UserMypageResponse;

export type ReadTemporaryDetailData = PostBasicDto;

export type ReadTemporaryData = PostTitleResponse;

export type ReadTemplateDetailData = PostBasicDto;

export type SearchPostData = PostPreviewDtos;

export type SearchContentsByUserData = PostPreviewDtos;

export type SearchContentsByTitleData = PostPreviewDtos;

export type SearchContentsByHashtagData = PostPreviewDtos;

export type SearchFriendByNameData = UserFriendResponse;

export type SearchContentsByContentData = PostPreviewDtos;

export type SearchContentsByCategoryData = PostPreviewDtos;

export type GetPullrequestData = PrUnPostResponse;

export type ReadPrPostedData = PrPostResponse;

export type WritePrPostData = PrWriteDto;

export type CollectData = PostPreviewDtos;

export type GoToMypageData = MyPageResponse;

export type ReadHasBlogData = boolean;

export type RequestModalData = UserModalResponse;

export type ReadHistoryData = HistoryResponse;

export type ReadFriendListData = UserFriendResponse;

export type ReadFriendPostData = string;

/** @format int64 */
export type FindUserIdByNameData = number;

export type Collect1Data = PostPreviewResponse;

export type GetSidebarByBlogData = SidebarDtos;

/** @format int64 */
export type GetBlogIdData = number;

export type GetBlogUrlData = string;

export type GetAlarmsData = AlarmDtos;

export type DeletePostsPayload = number[];

export type DeletePostsData = string;
