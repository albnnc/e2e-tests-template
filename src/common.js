const common = {

  config: {
    baseUrl: 'http://192.168.100.196:8280/cloud',
    shouldCapture: true,
    shouldLog: {
      clientLogs: false,
      clientErrors: true
    }
  },

  capture: function (prefix, suffix) {
    if (this.config.shouldCapture) {
      casper.capture(
        'captured/' +
        (prefix || '') +
        Date.now() +
        (suffix || '') +
        '.png'
      )
    }
  },

  dump: function (prefix, suffix) {
    require('fs').write(
      prefix + 'dump' + suffix + '.html',
      casper.getHTML(),
      'w'
    )
  }

}

//
//
//

if (common.config.shouldLog.clientLogs) {
  casper.on('remote.message', function (message) {
    this.echo(message, 'COMMENT')
  })
}

if (common.config.shouldLog.clientErrors) {
  casper.on('page.error', function (msg, trace) {
    this.echo(msg, 'ERROR')
    this.echo(JSON.stringify(trace), 'WARNING')
  })
}
