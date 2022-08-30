// logic of controller
const videoModel= require('../models/youtubeDatabase');
const axios = require("axios");
const sequelize = require('../config/connection');
// const key= process.env.API_KEY;
const key= "AIzaSyBW0oSav4dxS16hVjK_VWsL1jJRDjzmpoI";
const abc=[];

module.exports.searchParameter= async(req, res) =>{
    const query= req.query.q;
    console.log("Query is ", query);

    //if db has query in title / description 
    //return the video details
    //else 
    //we use youtube api to fetch it, store in db and return 

    const result= await searchDatabase(query);
    console.log(result);
    
    if(result[0].length == 0){
       
        await fetchFromYoutube(query);
        //const abc= await searchDatabase(query);
        res.status(200).json({ result: abc});
    }
    else{
        res.status(200).json({ result: result});
    }
   
}

async function searchDatabase(query){
    const regex= "%"+ query+"%";
    const result = await sequelize.query("SELECT * FROM `video_databases` WHERE LOWER(title) LIKE :title_param OR LOWER(description) LIKE :desc_param ORDER BY publishing_timestamp DESC", {
        replacements: {title_param: regex, desc_param: regex}
    });
    return result;
}

async function fetchFromYoutube(query){

let videoList= [];
const url="https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults=10&q="+query;
await axios.get(url).then(response => {

    for(var i in response.data.items){
            var item=response.data.items[i];
            var title= item.snippet.title;
            var description= item.snippet.description;
            var tumbnail= item.snippet.thumbnails.default.url;
            var publishing_timestamp= item.snippet.publishedAt;
            var videoId= item.id.videoId;

            let video= new videoModel({
                title: title,
                description: description,
                thumbnail_url: tumbnail,
                publishing_timestamp: publishing_timestamp,
                videoId: videoId
            });
            videoList.push(video)
        }
    }).catch(error => {
        console.log(error);
});
abc= Array.from(videoList);
await videoList.forEach(element => {
    element.save();
});
}