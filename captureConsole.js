const originalConsoleLog = console.log;

console.log = function (...args) {
  // Send the logs as messages to the parent window (React component)
  window.parent.postMessage({ type: 'console.log', data: args }, '*');
  originalConsoleLog.apply(console, args);
};
