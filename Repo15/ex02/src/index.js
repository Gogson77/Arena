function checkVariableScope() {
    'use strict';
    // only change the code below this line
    let i = 'function variable';
    // only change the code above this line
    if (true) {
        // only change the code below this line
        let i = 'block variable';
        // only change the code above this line
        console.log('Scope i is: ', i);
    }
    console.log('Scope i is: ', i);
    return i;
}
checkVariableScope();
module.exports = checkVariableScope;