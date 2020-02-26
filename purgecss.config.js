module.exports = {
  content: ['index.html'],
  css: ['styles.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};
