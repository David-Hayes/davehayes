const { default: axios } = require('axios')
let Parser = require('rss-parser')
let parser = new Parser()

exports.handler = async () => {
  return axios({
    url: 'https://dev.to/feed/davidhayes',
    method: 'GET'
  }).then(async (response) => {
    const feed = await parser.parseString(response.data)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feed.items)
    }
  })
}
