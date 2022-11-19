When things happen asynchronously...

1. We might want some of our program to wait for results, OR
   we might want our program to keep going (executing more lines of our program) without waiting

2. Sometimes that "blue ball" (see lecture to know what I mean) fails
   We want our program to do different things depending on whether that async process met with success or failure

3. We want to "orchestrate" (think WHEN things run) when certain parts of our program run

We introduce this JS object called "a promise" to "reificate" the abstract points mentioned above into something more concreate and easy to work with

You don't actually need promises. But they can help tremendously to write cleaner/clearer code and deal with points 1) 2) 3) above.
