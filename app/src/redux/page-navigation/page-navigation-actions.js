import * as actionTypes from './page-navigation-types'

export function changePages(newpage) {
  return {
    type: actionTypes.GO_TO_PAGE,
    payload: {
      page: newpage
    }
  }
}