import { Injectable } from '@angular/core';
import { InformedFilterConfig } from '../../../model/ui/form-control';
import { INFORMED_TABLE_DATA, MOCK_TABLE_DATA } from '../../../model/ui/table-data';
import { MonitoringFacadeService } from './monitoring-facade-service';
import { MonitoringApiService } from './monitoring-api-service';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {

  constructor(
    private facade: MonitoringFacadeService, 
    private monitoringAPI: MonitoringApiService
  ){}

  loadFilterConfig(){
    this.monitoringAPI.getFiltersConfig().subscribe({
      next: (filterConfig: InformedFilterConfig) => {
        this.facade.setFilterConfig(filterConfig);
      },

      error: (error)=> {
        console.error('Error loading Filter Configrations:', error);
      }
    });
  }

  loadTableData(){
    this.monitoringAPI.getTableData().subscribe({
      next: (filterData: INFORMED_TABLE_DATA[]) => {
        this.facade.setTableData(filterData);
      },

      error: (error)=> {
        console.error('Error loading Filter Data:', error);
      }
    });
  }
}
