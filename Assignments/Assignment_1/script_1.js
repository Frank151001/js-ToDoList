var userName = 'Francisco';
var password = 12345;
var profilePhoto = `<img src="images/Imagen.jpg">`;
var userEmail = 'Franckgomez323@gmail.com';
var subscriptions = 6.1;
var genres = 'Mixes, Music, Gaming, Lo-fi';
var thumbnail = '<img src="images/Thumbnail.jpg" alt="">';
var videoTitle = 'The Weeknd - M A N I A (Official Video)';
var likes = true;
var dislikes = false;
var videoCategory = 'Lathes, Tool, Watched, Electronic';
var videoDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident iste dignissimos nam? Fuga vel animi corrupti accusantium sint, eligendi adipisci odit asperiores officiis incidunt dolor eveniet eius minima! Vel.';
var comment = 45325;
var contacInfo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident iste dignissimos nam? Fuga vel animi corrupti accusantium sint, eligendi adipisci odit asperiores officiis incidunt dolor eveniet eius minima! Vel.';
var youtubeBanner = '<img src="images/banner.webp" alt="">';
var nameHandle = '@franciscoibarragomez3507';
var channelURL = 'https://www.youtube.com/channel/UC24VljIJohAYbfWA3q0dlgw';
var channelDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident iste dignissimos nam? Fuga vel animi corrupti accusantium sint, eligendi adipisci odit asperiores officiis incidunt dolor eveniet eius minima! Vel';
var trendingSection = 'This depends of the video types you watched for enriching the algorithm';
var playlist = 'My Mix';

document.write(
    `
    <p>Name: ${userName}</p>
    <p>Password: ${password}</p>
    <p>Profile photo: ${profilePhoto}</p>
    <p>Email: ${userEmail}</p>
    <p>Subscriptions: ${subscriptions}M</p>
    <p>Genres: ${genres}</p>
    <p>Thumbnail: ${thumbnail}</p>
    <p>Title: ${videoTitle}</p>
    <p>Likes: ${likes}k</p>
    <p>Dislikes: ${dislikes}k</p>
    <p>Hashtags: ${videoCategory}</p>
    <p>Video Description: ${videoDescription}</p>
    <p>Comments: ${comment} comments</p>
    <p>Contact Information: ${contacInfo}</p>
    <p>Youtube Banner: ${youtubeBanner}</p>
    <p>Handle: ${nameHandle}</p>
    <p>URL: ${channelURL}</p>
    <p>Channel Description: ${channelDescription}</p>
    <p>Trending Section: ${trendingSection}</p>
    <p>Mix: ${playlist} </p>
    `
)