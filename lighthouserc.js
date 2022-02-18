module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    asserts: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 1 }],
      },
    },
  },
};