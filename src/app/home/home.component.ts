import { Component, OnInit } from '@angular/core';
import { steps } from './home.types';
import { prereq } from './home.types';
import { modConfig } from './home.types';
import * as jsonData from './home.config.json';



interface HRISData {
  "name": string,
  "description": string,
  "link": string,
  "requirements": Array<prereq>,
  "modules": Array<modConfig>
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public show: boolean = false;
  public showsteps: boolean = false;
  public showmodules: boolean = false;
  public showstepsdetails: boolean = false;

  public displayArray: Array<modConfig> = [];
  public data: Array<string> = [];
  public stepArray: Array<steps> = [];
  public HRISConfig: HRISData[] = [];
  public currenthris: any ;
  public currentmodule: any;
  public currentStep: any;
  public listArray: any

  ngOnInit() {

  }

  constructor() {

    const personArray = jsonData as HRISData[];
    

    this.HRISConfig = personArray;


  }

  public HRIS() {

    this.listArray = [];
    for (let entry of this.HRISConfig) {
   
      this.listArray.push(entry.name);
   }

    this.show = true;
    this.showsteps = false;
    this.showmodules = false;
  }

  public Payroll() {
    this.listArray = ["euHReka", "Calc", "TPV"];
    this.show = true;
    this.showsteps = false;
    this.showmodules = false;
  }

  public HRISDetail3(name: string) {

  }

  public StepDetails(name: number) {
  
    this.showsteps = true;
  
    this.currentmodule = this.currenthris.modules[name];
    this.stepArray = this.currentmodule.steps;
  
  }

  public detailsForStep(name: number) {
  
    console.log("Current step!");
  
    this.currentStep = this.currentmodule.steps[name];
    this.showstepsdetails = true;
  }

 

  public ModuleDetails(name: number) {
    this.currenthris = this.HRISConfig[name];
    this.showstepsdetails = false;
    this.showmodules = true;
    //this.showsteps = false;

    this.displayArray = this.currenthris.modules;
  

   
    


   }

}

