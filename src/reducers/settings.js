import APPCONFIG from 'constants/appConfig';
import {
  TOGGLE_BOXED_LAYOUT,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_NAV_BEHIND,
  TOGGLE_FIXED_HEADER,
  CHANGE_SIDEBAR_WIDTH,
  CHANGE_COLOR_OPTION,
  CHANGE_THEME,
  CHANGE_HEADER,
  FireStore_ACTION,
  CONNECT_ORGANISATION,
  CHANGE_RADIUS_MAP,
  CONNECT_ACTION,
  HANDLE_Collect
} from '../constants/actionTypes';

const initialSettings = APPCONFIG.settings;


const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case TOGGLE_BOXED_LAYOUT:
      return {
        ...state,
        layoutBoxed: action.isLayoutBoxed
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.isNavCollapsed
      };
    case TOGGLE_NAV_BEHIND:
      return {
        ...state,
        navBehind: action.isNavBehind
      };
    case TOGGLE_FIXED_HEADER:
      return {
        ...state,
        fixedHeader: action.isFixedHeader
      };
    case CHANGE_SIDEBAR_WIDTH:
      return {
        ...state,
        sidebarWidth: action.sidebarWidth
      };
    case CHANGE_COLOR_OPTION:
      return {
        ...state,
        colorOption: action.colorOption
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
    case CHANGE_HEADER:
      return {
        ...state,
        headervalue: action.value
      };
    case FireStore_ACTION:
      return {
        ...state,
        fireStore: action.value
      };
    case CONNECT_ACTION:
      return {
        ...state,
        user: action.value
      };
    case CONNECT_ORGANISATION:
      return {
        ...state,
        organisation: action.value
      };
    case CHANGE_RADIUS_MAP:
      return {
        ...state,
        radius: action.value
      };
    case HANDLE_Collect:
      return {
        ...state,
        collect: action.value
      };
    default:
      return state;
  }
};

export default settings;
