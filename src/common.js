const config = {
  baseUrl: 'https://google.com',
  shouldCapture: true
}

function capture () {
  if (config.shouldCapture) {
    casper.capture('captured/' + Date.now() + '.png')
  }
}
