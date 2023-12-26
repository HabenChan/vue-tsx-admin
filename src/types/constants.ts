export enum LocaleOptions {
  cn = 'zh-CN',
  en = 'en-US'
}
export enum LocalStorageKey {
  localeKey = 'VUE_TSX_ADMIN_LOCALE',
  loginFormKey = 'VUE_TSX_ADMIN_LOGIN_FORM_INFO',
  tokenKey = 'VUE_TSX_ADMIN_TOKEN'
}
export enum AppTheme {
  light = 'light',
  dark = 'dark'
}

export enum ApplicationInfo {
  appTitle = 'Vue TSX Admin'
}

export enum CompNameEnum {
  login = 'login',
  redirect = 'redirect',
  notFound = 'notFound',

  // =============== DIVIDER ==================
  dashboard = 'dashboard',

  workplace = 'workplace',
  monitor = 'monitor',

  // =============== DIVIDER ==================

  exception = 'exception',

  _403 = '403',
  _404 = '404',
  _500 = '500',

  // =============== DIVIDER ==================
  form = 'form',

  step = 'step',
  group = 'group',
  // =============== DIVIDER ==================
  profile = 'profile',

  // =============== DIVIDER ==================

  list = 'list',

  searchTable = 'searchTable',
  cardList = 'cardList',
  // =============== DIVIDER ==================
  result = 'result',

  success = 'success',
  error = 'error',

  // =============== DIVIDER ==================

  user = 'user',

  info = 'info',
  setting = 'setting'

  // =============== DIVIDER ==================
}

export const NOT_FOUND_ROUTE = {
  name: CompNameEnum.notFound
}

export const layoutStyleConfig = {
  navbarHeight: 64,
  breadcrumbHeight: 52,
  tabHeight: 40,
  footerHeight: 35
} as const
