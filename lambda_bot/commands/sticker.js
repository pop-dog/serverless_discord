// roll.js
module.exports = function (body) {
    const data = body.data;

    console.log(data);

    // Validate the request
    if (!data) return 'Invalid request.';

    console.log(data.options);
    
    if (data.options.length > 0) {
        for(let i = 0; i < data.options.length; i++) {
            console.log(data.options[i]);
        }
    }
    
    return 'Stickers coming soon!';
};