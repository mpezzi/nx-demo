module.exports = {
  name: 'orange',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/orange',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
