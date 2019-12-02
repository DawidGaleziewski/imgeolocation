const ValidateHandler = require('../ValidateHandler');

// validateFileSize
test('File size 900000 bytes should NOT be larger then 1000kb', () => {
  const fileSize = 900000;
  const fileSizeLimitKb = 1000;
  expect(ValidateHandler.validateFileSize(fileSize, fileSizeLimitKb)).toBe(
    true
  );
});

test('File size 2000000 bytes should be larger then 1000kb', () => {
  const fileSize = 20000000;
  const fileSizeLimitKb = 1000;
  expect(ValidateHandler.validateFileSize(fileSize, fileSizeLimitKb)).toBe(
    false
  );
});

//validateFileExtension
test('Should return true for jpeg', () => {
  expect(
    ValidateHandler.validateFileExtension('jpeg', ['jpeg', 'jpg', 'gif'])
  ).toBe(true);
});

test('Should return false for mp4', () => {
  expect(
    ValidateHandler.validateFileExtension('mp4', ['jpeg', 'jpg', 'gif'])
  ).toBe(false);
});
