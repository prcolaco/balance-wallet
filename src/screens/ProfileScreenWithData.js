import {
  compose,
  withHandlers,
  withProps,
} from 'recompact';
import { setDisplayName } from 'recompose';
import {
  withAccountAddress,
  withAccountTransactions,
  withBlurTransitionProps,
  withIsWalletEmpty,
  withRequests,
  withAccountSettings,
  withTrackingScreen,
} from '../hoc';
import ProfileScreen from './ProfileScreen';

export default compose(
  setDisplayName('ProfileScreen'),
  withAccountAddress,
  withAccountSettings,
  withAccountTransactions,
  withBlurTransitionProps,
  withIsWalletEmpty,
  withRequests,
  withHandlers({
    onPressBackButton: ({ navigation, screenProps }) => () => {
      screenProps.nav.state.nav.routes[0].index = 0;
      navigation.navigate('WalletScreen');
    },
    onPressSettings: ({ navigation }) => () => navigation.navigate('SettingsModal'),
  }),
  withTrackingScreen,
  withProps(({ isWalletEmpty, transactionsCount }) => ({
    isEmpty: isWalletEmpty && !transactionsCount,
  })),
)(ProfileScreen);
