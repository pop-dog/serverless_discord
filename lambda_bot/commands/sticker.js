// sticker.js
module.exports = function (body) {
    const data = body.data;

    console.log(data);

    // Validate the request
    if (!data || !data.options || data.options.length == 0) return 'Invalid request.';

    // Explore data object
    let currentObject = data;
    while (currentObject && currentObject.options && currentObject.options.length > 0) {
        console.log(currentObject);
        currentObject = currentObject.options[0];
    }

    const stickerName = data.options[0].value;

    console.log('Sticker: ' + stickerName);

    let sticker = STICKERS[stickerName];

    if (sticker) return sticker;
    return 'Sticker not found.';
};

const STICKERS = {
    "popdog": "https://cdn.discordapp.com/attachments/1121165873789546629/1121168912067858453/DALLE_2023-05-29_16.34.21_-_Dalmation_in_profile_with_red_circle_background._Pixel_art_style..png",
    "pom_pom_heart": "https://cdn.discordapp.com/attachments/1121165873789546629/1121165896891773029/latest.png",
    "pom_pom_wow": "https://cdn.discordapp.com/attachments/1121165873789546629/1121165965011472454/latest.png",
    "pom_pom_sad": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166001585795122/latest.png",
    "pom_pom_ok": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166039137386546/latest.png",
    "pom_pom_flushed": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166115117220010/latest.png",
    "pom_pom_thinking": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166144242458704/latest.png",
    "pom_pom_gift": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166177096433674/latest.png",
    "pom_pom_typing": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166206007791697/latest.png",
    "pom_pom_scared": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166241114095676/latest.png",
    "pom_pom_kofe": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166283350736986/latest.png",
    "pom_pom_happy": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166314392780830/latest.png",
    "pom_pom_sleepy": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166342263935187/latest.png",
    "raiden_boomer": "https://cdn.discordapp.com/attachments/1121165873789546629/1121227210251059260/sticker_7.png",
    "raiden_reading": "https://cdn.discordapp.com/attachments/1121165873789546629/1121227293185015938/sticker_1.png",
    "yae_smug": "https://cdn.discordapp.com/attachments/1121165873789546629/1121227447724154920/sticker_4.png",
    "dan_heng_pensive": "https://cdn.discordapp.com/attachments/1121165873789546629/1121228781978398823/latest.png",
    "mr_yang_singing": "https://cdn.discordapp.com/attachments/1121165873789546629/1121229059733585981/latest.png",
    "pom_pom_angry": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166459398266973/latest.png",
    "pom_pom_confused": "https://cdn.discordapp.com/attachments/1121165873789546629/1121166435528474724/latest.png",
    "march_7th_pleased": "https://cdn.discordapp.com/attachments/1121165873789546629/1121229432074539018/latest.png",
    "march_7th_shopping": "https://cdn.discordapp.com/attachments/1121165873789546629/1121229477616308325/latest.png",
    "smug_anya": "https://media.tenor.com/zayuqO6PpXMAAAAC/anya-heh.gif",
    "march_7th_distressed": "https://cdn.discordapp.com/attachments/1121165873789546629/1121229513163022396/latest.png",
    "march_7th_cross": "https://cdn.discordapp.com/attachments/1121165873789546629/1121229569689657354/latest.png",
    "pizza_time": "https://cdn.discordapp.com/attachments/1121165873789546629/1121541407157526568/image.png",
    "surprised_pikachu": "https://cdn.discordapp.com/attachments/1121165873789546629/1121538299119550564/sticker_2134-512x512.png",
    "gepard_facepalm": "https://cdn.discordapp.com/attachments/1121165873789546629/1121530428885573794/latest.png",
    "lost_travolta": "https://cdn.discordapp.com/attachments/1121165873789546629/1121532186173124748/sticker_7.png",
    "rubbing_hands": "https://cdn.discordapp.com/attachments/1121165873789546629/1121532250220138586/sticker_11.png",
    "brent_rambo": "https://media.tenor.com/A-ozELwp694AAAAC/thumbs-thumbs-up-kid.gif"
};