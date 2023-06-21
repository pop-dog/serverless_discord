// sticker.js
module.exports = function (body) {
    const data = body.data;

    console.log(data);

    // Validate the request
    if (!data || !data.options || data.options.length == 0) return 'Invalid request.';

    let sticker = STICKERS[data.options[0].name];

    if (sticker) return sticker;
    return 'Sticker not found.';
};

const STICKERS = {
    "popdog": "https://cdn.discordapp.com/attachments/1121165873789546629/1121168912067858453/DALLE_2023-05-29_16.34.21_-_Dalmation_in_profile_with_red_circle_background._Pixel_art_style..png",
    "pom_pom_heart": "https://cdn.discordapp.com/attachments/1121165873789546629/1121165896891773029/latest.png"
};