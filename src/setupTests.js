// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Webpack provides require.context, but Jest does not.
// This shim keeps icon SVG lookups from crashing component tests.
if (typeof require.context !== 'function') {
  require.context = () => {
    return () => ({
      __esModule: true,
      default: () => null,
    });
  };
}
