# HTTP Status Code Cheat Sheet

`HTTP Status Code` is a 3 Digit Server Response, sent by a web server to
a client, indicating the request was completed successfully or not.

## Request Methods

- `GET`: Requests a representation of the specified resource
- `POST`: Requests the server to accept the entity enclosed in the
  request
- `HEAD`: Requests similar to `GET` but without the response body
- `PUT`: Requests to store the enclosed entity to supplied URI
- `DELETE`: Deletes the specified resource
- `OPTIONS`: Returns the HTTP Methods supported by server for URL
  Specified
- `CONNECT`: starts a two-way communication with requested resource

## 1XX : HTTP Information Code

- 100: Continue
- 101: Switching Protocols
- 102: Processing
- 103: Checkpoint
- 122: Request-URI too long

## 2XX : HTTP Successful Codes

- 200: OK
- 201: Created
- 202: Accepted
- 203: Non-Authoritative Information
- 204: No Content
- 205: Reset Content
- 206: Partial Content
- 207: Multi-Status
- 208: Already Reported
- 226: IM Used

## 3XX : HTTP Redirection Codes

- 300: Multiple Choices
- 301: Moved Permanently 
- 302: Found
- 303: See Other
- 304: Not Modified
- 305: Use Proxy
- 306: Switch Proxy
- 307: Temporary Redirect
- 308: Permanent Redirect

## 4XX : HTTP Client Error Codes

- 400: Bad Request
- 401: Unauthorized
- 402: Payment Required
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 406: Not Acceptable
- 407: Proxy Authentication Required
- 408: Request Timeout
- 409: Conflict
- 410: Gone
- 411: Length Required
- 412: Precondition Failed
- 413: Request Entity Too Large
- 414: Request URI too long
- 415: Unsupported Media Type
- 416: Requested Range not (Found?)
- 417: Expectation Failed
- 418: I am a teapot
- 422: Unprocessable Entity
- 423: Locked
- 424: Failed Dependency
- 425: Unordered Collection
- 426: Upgrade Required
- 428: Precondition Required
- 429: Too Many Requests
- 431: Request Header Files too large
- 444: No Response
- 449: Retry with
- 450: Blocked by Windows
- 451: Unavailable for Legal Reasons
- 499: Client Closed Request

## 5XX : HTTP Server Error Code

- 500: Internal Server Error
- 501: Not Implemented
- 502: Bad Gateway
- 503: Service Unavailable
- 504: Gateway Timeout
- 505: HTTP Version Not Supported
- 506: Variant Also Negotiates
- 507: Insufficient Storage
- 508: Loop Detached
- 509: Bandwidth Limit Exceeded
- 510: Not Extended
- 511: Network Authentication Required
- 598: Network Read Timeout
- 599: Network Connect Timeout Error
