import {connect} from 'react-redux';
import * as I from './IDrakeCalc';
import container from './DrakeCalcContainer';
import pl from './DrakeCalcPL'
export default connect<I.StateProps, I.DispatchProps, I.OwnProps>(
    container.mapStateToProps,
    container.mapDispatchToProps
)(pl);