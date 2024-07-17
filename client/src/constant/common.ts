import { ThemeType } from '@/types/common';

export const oppositeThemeExtraction = (theme: ThemeType) => {
  return theme === 'dark' ? 'light' : 'dark';
};

export const getCurrentThemeClass = (
  userTheme: ThemeType,
  light: string | number,
  dark: string | number,
) => {
  return userTheme === 'light' ? light : dark;
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const OAUTH2_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;

export const GITHUB_AUTH_URL =
  API_BASE_URL + '/oauth2/authorization/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
export const DEFAULT_IMAGE = '/assets/9.jpeg';
