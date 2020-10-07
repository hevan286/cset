import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { AssessmentService } from '../../../../services/assessment.service';
import { MaturityService } from '../../../../services/maturity.service';

@Component({
  selector: 'app-model-select',
  templateUrl: './model-select.component.html'
})
export class ModelSelectComponent implements OnInit {

  // this should be stored in a service
  selectedModels = [];

  constructor(
    public assessSvc: AssessmentService,
    public maturitySvc: MaturityService,
    public navSvc: NavigationService
  ) { }

  /**
   * 
   */
  ngOnInit() {
  }

  /**
   * 
   */
  changeSelection(event: any, model: string) {
    // the models are currently single-select, so whichever
    // radio button was clicked, that's the only model we will use
    this.assessSvc.assessment.MaturityModel = model;

    // refresh Prepare section of the sidenav
    this.navSvc.buildTree(this.navSvc.getMagic());


    this.maturitySvc.postSelection(model).subscribe();
  }
}