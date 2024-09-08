const fs = require('fs');
const path = require('path');

function downloadUpdatedCV(req, res) {
  const file = path.join(__dirname, 'path_to_corrected_cv');
  res.download(file);
}

module.exports = downloadUpdatedCV;
