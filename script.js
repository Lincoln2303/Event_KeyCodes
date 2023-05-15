// II.02. After we've seen what we get back, we're going to bring in insert:
const insert = document.getElementById('insert');

// II.01. We'll add an eventlistener to the window object: (NOTE: keydown event, when we press a key, and pass in a function too, with an event object (e))
// NOTE: We can see here how do get these properties (key, keyCode, and code)
window.addEventListener('keydown', (event) => {
    // Testing: (NOTE: See what you get back with the event object (e))
    // NOTE: If we hit the key "a", we get back an object with properties (key and all the rest )
    // console.log(e);
    // II.03. Then we're going to take insert, and set innerhtml to a template literal:
    // NOTE: Here we're going to copy our divs from html and add the values dynamically
    // EXTRA NOTE: After we've added the html here we can test if it's working!m
    insert.innerHTML = `
    <div id="insert">
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event .code }
        <small>event.code </small>
    </div>
    `; 
})



