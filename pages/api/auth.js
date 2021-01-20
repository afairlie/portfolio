import crypto from "crypto";
import { create } from "./_lib/oauth2";

export const randomString = () => crypto.randomBytes(4).toString(`hex`);

export default (req, res) => {
  const { host } = req.headers;

  const oauth = create();

  const url = oauth.authorizationCode.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: `repo,user`,
    state: randomString()
  });

  res.writeHead(301, { Location: url });
  res.end();
};