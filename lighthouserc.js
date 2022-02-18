module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    asserts: {
      preset: 'lighthouse:no-pwa',
    },
  },
};