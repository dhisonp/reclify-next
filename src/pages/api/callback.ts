import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // Authorization: 'Basic ' + buffer
      }
    });

    const { access_token, refresh_token } = response.data;

    // TODO: Store token in database or session
    // ...

    // TODO: If token is stored, then tell the front the user is logged in
    res.redirect(`/dashboard?token=${'EXAMPLE_TOKEN'}`);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'An error occured on authentication.' });
  }
}
