import { Component } from '@angular/core';

import { DataCallsService } from '../../../services/dataCalls.service';

@Component({
    moduleId: module.id,
    selector: 'mpData',
    templateUrl: 'mpData.component.html',
    // styleUrls: ['mpData.component.css']
})
export class MpDataComponent  {
    private mpDataLocal: any;

    constructor(private _dataCallsSrv: DataCallsService) {
        this.mpDataLocal = this._dataCallsSrv.MPDataByPostal;
        console.log(this.mpDataLocal);
    }
}