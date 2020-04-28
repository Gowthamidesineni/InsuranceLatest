import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit {
  lostDate: FormControl;
  countries: any;
  selectedCountry: string;
  lossTime: FormControl;
  speed: FormControl;
  lossForm: FormGroup;
  place: FormControl;
  to: FormControl;
  uploadedFile:File;
  fileReader:FileReader;
  gender: FormControl;
  purposes: any;
  purposeOftheVehicle: FormControl;
  vehicleClass: FormControl;
  vehicles: any;
  drivers: any;
  isFirFiled= false;
  travelCount: FormControl;
  stationName: FormControl;
   firNumber: FormControl;
  driverName: FormControl;
  statement: FormControl;
  dateOfBirth: FormControl;
  relationInsured: FormControl;
  mobileNumber: FormControl;
  licenceNumber: FormControl;
  licenseEffectiveDate: FormControl;
  issueRTO: FormControl;
  FirFiled: FormControl;
  driverType: FormControl;
  licenseExpiryDate: FormControl;
  constructor(private formBuilder: FormBuilder, private countryService: CountryService) {
   this.lostDate = new FormControl('',
     [Validators.required]);
   this.lossTime = new FormControl('',
     [Validators.required]);
   this.speed = new FormControl('',
     [Validators.required]);
     this.FirFiled = new FormControl('',
     [Validators.required]);
     this.driverType = new FormControl('',
     [Validators.required]);
   this.place = new FormControl('', [Validators.required]);
   this.to = new FormControl('', [Validators.required]);
   this.purposeOftheVehicle = new FormControl('', [Validators.required]);
   this.vehicleClass = new FormControl('', [Validators.required]);
   this.travelCount = new FormControl('', [Validators.required]);
    this.stationName = new  FormControl('', [Validators.required]);
   this.firNumber = new  FormControl('', [Validators.required]);
   this.driverName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,20}')]);
   this.relationInsured = new FormControl('', [Validators.required]);
   this.dateOfBirth = new FormControl('', [Validators.required]);
   this.mobileNumber = new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]);
   this.licenceNumber = new FormControl('', [Validators.required]);
   this.licenseEffectiveDate = new FormControl('', [Validators.required]);
   this.statement = new  FormControl('', [Validators.required]);
   this.issueRTO = new FormControl('', [Validators.required]);
   this.gender = new FormControl('', [Validators.required]);
   this.licenseExpiryDate = new FormControl('', [Validators.required]);
   this.lossForm = formBuilder.group({
     lostDate: this.lostDate,
     lossTime: this.lossTime,
     speed: this.speed,
     place: this.place,
     to: this.to,
     purposeOftheVehicle: this.purposeOftheVehicle,
     vehicleClass: this.vehicleClass,
     travelCount: this.travelCount,
     stationName: this.stationName,
     firNumber: this.firNumber,
     driverName: this.driverName,
     gender: this.gender,
     statement: this.statement,
     dateOfBirth: this.dateOfBirth,
     relationInsured: this.relationInsured,
     mobileNumber: this.mobileNumber,
     licenceNumber: this.licenceNumber,
     licenseEffectiveDate: this.licenseEffectiveDate,
     issueRTO: this.issueRTO,
     FirFiled: this.FirFiled,
     driverType: this.driverType,
     licenseExpiryDate: this. licenseExpiryDate
     
   });
   }

  ngOnInit() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      console.log(this.countries);
    });
    this.purposes = this.countryService.getPurpose();
    this.vehicles = this.countryService.getVehicle();
    this.drivers = this.countryService.getDriverTypes();
  }
  getCountry(obj) {
    console.log(obj.value);
  }
  getTo(obj) {
    console.log(obj.value);
  }
  getPurpose(obj) {
    console.log(obj.value);
  }
  getVehicleClass(obj)
  {
    console.log(obj.value);
  }

  getTypeOfDriver(obj)
  {
    console.log(obj.value);
  }
  IsFir(obj){
    console.log(obj.checked);
    this.isFirFiled= obj.checked;
  }
  onFileChanged(obj)
  {
    this.uploadedFile=obj.target.files[0];
    console.log(this.uploadedFile);
    this.fileReader= new FileReader();
    this.fileReader.readAsDataURL(this.uploadedFile);
    this.fileReader.onload = function (event) {
      console.log(event.currentTarget);
    };              
  }
  send(){
    console.log(this.lossForm.value);
  }
}
