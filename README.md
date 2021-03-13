# Video-Group-Meeting

Video-Group-Meeting is a simple video chat application for multi-users based on React, Node Express and WebRTC.

This project is **deployed** at: https://video-group-chat.herokuapp.com

**Technologies Used**

- React
- Node + Express
- WebRTC
- Socket.io
- [Styled-components](https://styled-components.com/)
- [Simple-peer](https://github.com/feross/simple-peer)

**Contributors:**
[Oscar Luna](https://github.com/oaluna)

---

## Features

- Create or Join a room
- Peer-to-peer Video Streaming
- Messaging chat room
- Mute Video/Audio
- Screen Sharing

## Installation
### Clone
- Clone this repo to your local machine using `https://github.com/oaluna/video-group-meeting.git`

### Setup
**Client**
> Move to client folder, update and install this package
<pre>
  <code>
    /* Install */
    npm install

    /* Run */
    npm start
  </code>
</pre>

**Server**
> Move to server folder, update and install this package
<pre>
  <code>
    /* Install */
    npm install

    /* Run */
    npm run dev
  </code>
</pre>

## Todo 🔨🔨🔨

- [x] Bug: when clicking stop, every user disconnected.
- [x] Bug: when sharing screen, users can't mute

## License
[MIT License](./LICENSE)