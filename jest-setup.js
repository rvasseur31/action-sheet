/* eslint-disable no-undef */
import {cleanup} from '@testing-library/react-native';

afterEach(cleanup);

// global.ReanimatedDataMock = {
//   now: () => 0,
// };

// jest.mock('react-native-reanimated', () =>
//   require('react-native-reanimated/mock'),
// );

// require('react-native-reanimated/lib/module/reanimated2/jestUtils').setUpTests();

// // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// jest.mock('@gorhom/bottom-sheet', () => {
//   const react = require('react-native');
//   return {
//     __esModule: true,
//     default: react.View,
//     BottomSheetScrollView: react.ScrollView,
//   };
// });
