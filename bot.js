console.log("bot starting")

// my id: 631397535
// kayleighs ID : 1053796380 (wrldofwhorecrft)
// test bot id : 1359939989145071618
// Uwu bot id: 1361407377946378240
// Evans id: 544473385

// to find a users ID:  curl "https://api.twitter.com/2/users/by/username/TWITTERHANDLE" -H "Authorization: Bearer BEARERTOKEN"

const Twit = require('twit')
const config = require('./config')
const u = require('./utils')

const T = new Twit(config)
const stream = T.stream('statuses/filter', { follow: '1359939989145071618'})


stream.on('tweet', function (data) {

    let cute = ''
    const notTweetingAtSomeone = data.in_reply_to_status_id === null ? true : false
    const notReplyingToSomething = data.in_reply_to_status_id === null ? true : false 
    const notRetweeting = data.retweeted_status === undefined ? true : false
    const notQuoteStatus = data.quoted_status_id === undefined ? true : false
    const idToReplyTo = data.id_str

    if( notTweetingAtSomeone    && 
        notReplyingToSomething  &&
        notRetweeting           &&
        notQuoteStatus          ){ 
            let tweet = data.text
            cute = u.final(tweet)

            tweeter(cute, idToReplyTo)
        }
        
})

  function tweeter(text, replyToThisTweet ){

    T.post('statuses/update', {
        status:text, 
        in_reply_to_status_id: replyToThisTweet,
        auto_populate_reply_metadata: true}, 
        tweeted)

    function tweeted(err, data, response) {
        if(err) {
            console.log('something went wrong ' + err)
        } else {
            console.log('success ' + data.text)
        }
    }
}