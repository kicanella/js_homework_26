// Просто проверяем, видит ли Node оба теста
const fs = require('fs');
const content = fs.readFileSync('./your-test-file.test.js', 'utf8');
console.log('Содержимое файла:');
console.log(content);
console.log('\\n---\\n');
console.log('Количество test():', (content.match(/test\(/g) || []).length);