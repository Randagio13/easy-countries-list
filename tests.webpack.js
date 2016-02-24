var context = require.context('./test', true, /\.test\.(js|jsx)$/);
context.keys().forEach(context);
