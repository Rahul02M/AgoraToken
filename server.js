// const express = require("express");
// const cors = require("cors");
// const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const APP_ID = "81b7c75580174bbb88f53e5543676cc1";
// const APP_CERT = "9cf7fac7168048a39a1c778bffe6866a";

// app.post("/rtcToken", (req, res) => {
//     const channelName = req.query.channelName;
//     if (!channelName) {
//         return res.status(400).json({ error: "channelName is required" });
//     }

//     const uid = Math.floor(Math.random() * 1000000000);

//     const expireTime = 3600;
//     const privilegeExpire = Math.floor(Date.now() / 1000) + expireTime;

//     const token = RtcTokenBuilder.buildTokenWithUid(
//         APP_ID,
//         APP_CERT,
//         channelName,
//         uid,
//         RtcRole.PUBLISHER,
//         privilegeExpire
//     );

//     res.json({ uid, token });
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log("Server running on port " + PORT));
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const app = express();
app.use(express.json());
app.use(cors());

// Read from .env
const APP_ID = process.env.APP_ID;
const APP_CERT = process.env.APP_CERT;
const PORT = process.env.PORT || 5000;

// Safety check
if (!APP_ID || !APP_CERT) {
    throw new Error("APP_ID or APP_CERT is missing in .env file");
}

// 🔥 POST request for Flutter client
app.post("/rtcToken", (req, res) => {
    const { channelName } = req.body;  // FIXED

    if (!channelName) {
        return res.status(400).json({ error: "channelName is required" });
    }

    // Generate UID automatically
    const uid = Math.floor(Math.random() * 1000000000);

    const expireTime = 3600; // 1 hour
    const privilegeExpire = Math.floor(Date.now() / 1000) + expireTime;

    // Generate RTC token (006)
    const token = RtcTokenBuilder.buildTokenWithUid(
        APP_ID,
        APP_CERT,
        channelName,
        uid,
        RtcRole.PUBLISHER,   // Works for audio + video
        privilegeExpire
    );

    res.json({ uid, token });
});


app.listen(PORT, () => console.log("Server running on port " + PORT));
