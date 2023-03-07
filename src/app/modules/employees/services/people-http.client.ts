import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ResponsePopulationApi } from 'src/app/interfaces/population.interface'

@Injectable()
export class PeopleHttpClient {
  getAllPeople$ = this.httpClient.get<ResponsePopulationApi>(
    'https://storage.googleapis.com/web-aktios/entrevista-tecnica/info-population.json'
  )
  constructor(private httpClient: HttpClient) {}
}
