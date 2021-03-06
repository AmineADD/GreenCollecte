import * as types from '../constants/actionTypes';

export function toggleBoxedLayout(isLayoutBoxed) {
  return { type: types.TOGGLE_BOXED_LAYOUT, isLayoutBoxed };
}
export function toggleCollapsedNav(isNavCollapsed) {
  return { type: types.TOGGLE_COLLAPSED_NAV, isNavCollapsed };
}
export function toggleNavBehind(isNavBehind) {
  return { type: types.TOGGLE_NAV_BEHIND, isNavBehind };
}
export function toggleFixedHeader(isFixedHeader) {
  return { type: types.TOGGLE_FIXED_HEADER, isFixedHeader };
}
export function changeSidebarWidth(sidebarWidth) {
  return { type: types.CHANGE_SIDEBAR_WIDTH, sidebarWidth };
}
export function changeColorOption(colorOption) {
  return { type: types.CHANGE_COLOR_OPTION, colorOption };
}
export function changeTheme(themeOption) {
  return { type: types.CHANGE_THEME, theme: themeOption };
}
export function choseHeader(headervalue) {
  return { type: types.CHANGE_HEADER, value: headervalue }
}
export function databaseNotify(firestore) {
  return { type: types.FireStore_ACTION, value: firestore }
}
export function ConnectFromGoogle(user) {
  return { type: types.CONNECT_ACTION, value: user }
}
export function CONNECT_ORGANISATION(organisation) {
  return { type: types.CONNECT_ORGANISATION, value: organisation }
}
export function CHANGERADIUSMAP(radius) {
  return { type: types.CHANGE_RADIUS_MAP, value: radius }
}

export function handleGetCollect(data) {
  return { type: types.HANDLE_Collect, value: data }
}