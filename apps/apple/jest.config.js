module.exports = {
  name: 'apple',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/apple',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
