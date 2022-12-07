// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  api_key: '285bb9715cde096a3fbb2cfdac23701f',
  cognito: {
    userPoolId: 'us-east-1_dKTHI6WEi',
    userPoolWebClientId: 'hbbusigb3bonflejvr87sjufb'
  },
  AWS_ACCESS_KEY: "AKIAQBUPM7BVO6QCSTFF",
  AWS_SECRET_KEY: "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"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
