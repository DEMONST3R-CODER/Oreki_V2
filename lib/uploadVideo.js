const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

/**
 * Upload video to telegra.ph (or a similar endpoint)
 * Supported mimetype (example):
 * - `video/mp4`
 * - `video/webm`
 * - `video/ogg`
 * @param {Buffer} buffer Video Buffer
 * @returns {Promise<string>} URL of the uploaded video
 */
module.exports = async buffer => {
  // Detect file type and extension
  const fileInfo = await fromBuffer(buffer);
  if (!fileInfo) throw new Error('Unable to determine file type');
  const { ext, mime } = fileInfo;

  // Check if the MIME type is one of the allowed video types
  const allowedMime = ['video/mp4', 'video/webm', 'video/ogg'];
  if (!allowedMime.includes(mime)) {
    throw new Error(`Unsupported video mimetype: ${mime}`);
  }

  // Create a form-data object and append the video buffer
  let form = new FormData();
  form.append('file', buffer, 'tmp.' + ext);

  // Upload to the endpoint (note: telegra.ph officially supports images)
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  });
  
  // Parse the response
  let result = await res.json();
  if (result.error) throw result.error;

  return 'https://telegra.ph' + result[0].src;
}
