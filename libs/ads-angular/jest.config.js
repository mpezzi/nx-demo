module.exports = {
  name: 'ads-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ads-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
