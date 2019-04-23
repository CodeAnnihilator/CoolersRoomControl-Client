import React from 'react';
import {Text} from 'react-native';
import {WrappedFieldProps} from 'redux-form';

const ReduxFormText: React.FC<WrappedFieldProps> = props => <Text>{props.input.value}</Text>;

export default ReduxFormText;
