import { connect } from 'react-redux'

import {
  showResult
} from '../actions'

import MainComponent from '../components/Main'

export default connect(state => state, (dispatch, ownProps) => ({
  doSearch: refs => dispatch(showResult({
      q: refs.q.value
    , media: refs.media.value
    , start: refs.start.value
    , end: refs.end.value
  }))
}))(MainComponent)
