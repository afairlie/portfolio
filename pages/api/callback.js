import { create, renderBody } from "./_lib/oauth2";

export default async (req, res) => {
    const code = req.query.code
    const {host} = req.headers

    const oauth = create()

    try {
        const accessToken = await oauth.authorizationCode.getToken({
          code,
          redirect_uri: `https://${host}/api/callback`
        });
        const { token } = oauth.accessToken.create(accessToken);
    
        res.status(200).send(
          renderBody("success", {
            token: token.access_token,
            provider: "github"
          })
        );
      } catch (e) {
        res.status(200).send(renderBody("error", e));
      }
}