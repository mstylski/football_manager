import { API_KEY, API_URL } from './app.config';
import { MatchesApiResponse } from './models/match.model';

export class FootballApiService {
  getMatches(): Promise<MatchesApiResponse> {
    return fetch(`${API_URL}/v2/matches`, {
      headers: {
        'X-Auth-Token': API_KEY,
      }
    })
    .then(response => response.json());
  }
}
