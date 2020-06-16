
// suppose we run: node index.js
// following are a pseudo code that represents how Event Loop is working:

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from index.js running

index.runContents();   // runs the code inside index.js

function shouldContinue() {
  // Check 1: Any pending setTimeout, setInterval, setImmediate?
  // Check 2: Any pending OS tasks? (like server listening to port)
  // Check 3: Any pending long running operations? (like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

while(shouldContinue()) {
  // Entire body executes in one 'tick'
  // 1. Node looks at pendingTimers and sees if any functions
  // are ready to be called. setTimeout, setInterval

  // 2. Node looks at pendingOSTasks and pendingOperations
  // and calls relevant callbacks

  // 3. Pauses execution. Continues when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4. Looks at penddingTimers. Call any setImmediate

  // 5. Handle any 'close' events
}

// Exit back to terminal
