module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_pages/*.md',
      './_notes/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      theme: {
        extend: {},
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }