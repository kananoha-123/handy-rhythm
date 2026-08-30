const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const regex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
const matches = [...text.matchAll(regex)];

// Save main script (script #1)
fs.writeFileSync('/tmp/main_inline.js', matches[1][1]);
console.log('Main script length:', matches[1][1].length);
