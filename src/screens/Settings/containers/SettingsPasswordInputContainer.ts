import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import SettingsPasswordInput from '../components/SettingsPasswordInput';

export default reduxForm({form: 'user'})(connect(null)(SettingsPasswordInput) as any);
