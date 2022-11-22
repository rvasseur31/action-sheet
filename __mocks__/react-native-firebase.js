import * as ReactNative from 'react-native';

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'android',
        select: () => {},
      },
    },
    ReactNative,
  );
});

// The file in my project :
// import * as ReactNative from 'react-native';

// jest.doMock('react-native', () => {
//   return Object.setPrototypeOf(
//     {
//       Platform: {
//         OS: 'android',
//         select: () => {},
//       },
//       NativeModules: {
//         ...ReactNative.NativeModules,
//         RNFBAnalyticsModule: {
//           logEvent: jest.fn(),
//         },
//         RNFBAppModule: {
//           NATIVE_FIREBASE_APPS: [
//             {
//               appConfig: {
//                 name: '[DEFAULT]',
//               },
//               options: {},
//             },

//             {
//               appConfig: {
//                 name: 'secondaryFromNative',
//               },
//               options: {},
//             },
//           ],
//           FIREBASE_RAW_JSON: '{}',
//           addListener: jest.fn(),
//           eventsAddListener: jest.fn(),
//           eventsNotifyReady: jest.fn(),
//           removeListeners: jest.fn(),
//         },
//         RNFBCrashlyticsModule: {},
//         RNFBMessagingModule: {
//           onMessage: jest.fn(),
//         },
//       },
//     },
//     ReactNative,
//   );
// });
