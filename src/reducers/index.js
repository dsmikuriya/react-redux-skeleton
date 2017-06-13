import { handleActions } from 'redux-actions'

import {
    SHOW_RESULT
} from '../actions'

export default handleActions({
  [SHOW_RESULT]: (state, action) => {
    return Object.assign({}, state, {
        q: action.payload.q
      , media: action.payload.media
      , start: action.payload.start
      , end: action.payload.end
    })
  }
},
{
    q: null
  , media: null
  , start: null
  , end: null
  , medias: [
      'select01'
    , 'select02'
    , 'select03'
    , 'select04'
  ]
})
