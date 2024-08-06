import type { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';
import * as querystring from 'node:querystring';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  const queryStr = querystring.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state: state,
    show_dialog: true, // TODO: Handle this better in the future
  });

  // TODO: Use `res.redirect(url)` instead of passing url into the front
  const url = 'https://accounts.spotify.com/authorize?' + queryStr;
  res.status(200).json(url);
}

function generateRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
