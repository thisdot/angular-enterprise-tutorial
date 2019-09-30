module.exports = {
  name: 'employees',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/employees',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
