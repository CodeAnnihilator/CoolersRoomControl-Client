import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import Auth from '../components/Auth';

import {withNavigation} from 'react-navigation';

export default reduxForm({form: 'auth'})(connect(null)(withNavigation(Auth)) as any);
