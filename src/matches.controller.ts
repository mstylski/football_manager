import { FootballApiService } from './football-api.service';
import { Match, MatchesApiResponse } from './models/match.model';
// @ts-ignore
import { format } from 'date-fns';


export class MatchesController {
  private footballApiService = new FootballApiService();
  private readonly resultsTbodyElement = document.querySelector('#results-table-tbody');
  private readonly resultsTableElement = document.querySelector('#results-table');
  private readonly spinnerElement = document.querySelector('#spinner');

  constructor() {
    this.loadMatches();
  }

  private loadMatches() {
    this.footballApiService.getMatches()
      .then(response => {
        this.appendRowsToTable(response);
        this.showTable();
      })
      .catch(() => console.log('fetching data error'))
      .finally(() => {
        this.hideSpinner();
      })
  }

  private showTable() {
    this.resultsTableElement.style.display = 'block';
  }

  private hideSpinner() {
    this.spinnerElement.style.display = 'none';
  }

  private appendRowsToTable(response: MatchesApiResponse) {
    this.resultsTbodyElement.innerHTML = response.matches
      .map(match => this.generateMatchRow(match))
      .join('');
  }

  private generateMatchRow(match: Match) {
    const date = format(new Date(match.utcDate), 'dd/MM/yyyy hh:mm');
    return `
      <tr>
        <th scope="row">${date}</th>
        <td>${match.homeTeam.name}</td>
        <td>${match.awayTeam.name}</td>
        <td>${match.score.winner}</td>
      </tr>`;
  }

}


