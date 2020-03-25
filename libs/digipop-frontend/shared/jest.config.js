module.exports = {
  name: 'digipop-frontend-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/digipop-frontend/shared',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
