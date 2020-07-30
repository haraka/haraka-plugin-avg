[![CI Test Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]

[![NPM][npm-img]][npm-url]

# haraka-plugin-avg

## avg - Anti-Virus scanner

Implement virus scanning with AVG's TCPD daemon, available for Linux/FreeBSD. AVG linux is [free for personal or commercial use](http://www.avg.com/gb-en/faq.pnuid-faq_v3_linux) and can be downloaded from [free.avg.com](http://free.avg.com/gb-en/download.prd-alf).

Messages that AVG detects as infected are rejected. Errors will cause the plugin to return temporary failures unless the defer options are changed (see below).

## Configuration

The following options can be set in avg.ini:

- port (default: 54322)

  TCP port to communicate with the AVG TCPD on.

- tmpdir (default: /tmp)

  AVG TCPD requires that the message be written to disk and scanned. This setting configures where any temporary files are written to. After scanning, the temporary files are automatically removed.

- connect_timeout (default: 10)

  Maximum seconds to wait for the socket to connect. Connections taking longer will cause a temporary failure to be sent to the remote MTA.

- session_timeout

  Maximum number of seconds to wait for a reply to a command before failing. A timeout will cause a temporary failure to be sent to the remote MTA.

- [defer]

By default, this plugin defers when errors or timeouts are encountered. To
fail open (let messages pass when errors are enounctered), set the error
and/or timeout values to false.

    [defer]
    error=true
    timeout=true

cp node_modules/haraka-plugin-avg/config/avg.ini config/avg.ini
$EDITOR config/avg.ini


## USAGE


<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-plugin-avg/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-avg/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-avg/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-avg
[npm-img]: https://nodei.co/npm/haraka-plugin-avg.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-avg
