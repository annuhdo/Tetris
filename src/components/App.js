import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/'
import Main from './Main'

function mapStateToProps(state) {
  return {
    grid: state.grid,
    position: state.position,
    shadowPosition: state.shadowPosition,
    currentShape: state.currentShape,
    gameStatus: state.gameStatus
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
