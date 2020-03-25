module.exports = {
  name: 'digipop-frontend-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/digipop-frontend/core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
