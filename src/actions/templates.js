import {
  GET_ALL_TEMPLATES,
} from '../constants/index'

export function removeMissingTemplates ({ templateIdsToPreserve }) {
  return {
    type: 'REMOVE_MISSING_TEMPLATES',
    payload: {
      templateIdsToPreserve,
    },
  }
}
export function addTemplates ({ templates }) {
  return {
    type: 'ADD_TEMPLATES',
    payload: {
      templates,
    },
  }
}

export function getAllTemplates ({ shallowFetch = false }) {
  return {
    type: GET_ALL_TEMPLATES,
    payload: {
      shallowFetch,
    },
  }
}
