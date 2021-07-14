import { StackNavigator } from 'react-navigation';

import Header from './Header';
import Loginform from './LoginForm';

const RootNavigator = StackNavigator({

    Home: {
        screen: Header,
    },
    Login: {
        screen: LoginForm
    }

});

export default RootNavigator;