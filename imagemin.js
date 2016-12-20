const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['public/img/*.{jpg,png}'], 'build/images', {
    plugins: [
        imageminMozjpeg({
            targa: true,
        }),
        imageminPngquant({
            quality: '65-80',
        }),
    ],
}).then(files => {
    console.log(files);
    //= > [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
