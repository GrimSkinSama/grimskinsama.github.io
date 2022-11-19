import { Component, OnInit } from '@angular/core';
import { Anggota } from '../model/anggota';
import { AddAnggotaService } from '../service/add-anggota-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-anggota',
  templateUrl: './add-anggota.component.html',
  styleUrls: ['./add-anggota.component.css']
})
export class AddAnggotaComponent implements OnInit{
  Peoples: any[] = [];
  anggota = new Anggota(66,'Nama', 'Nomor HP', 'Skill', 'Desc');
  submitted: boolean = false;

  constructor(
    private addAnggotaService: AddAnggotaService,
    private location: Location
  ){

  }

  ngOnInit(): void{
     this.addAnggotaService.getAnggota().subscribe(res => {this.Peoples = res;})
  }

  onSubmit(){
    this.submitted = true;
    this.newMember();
    this.goBack();
    
  }

  newMember(name: string = this.anggota.name, 
    phone: string = this.anggota.phone, 
    skill: string = this.anggota.skill, 
    notes: string = this.anggota.notes): void{

      if(!name){return}
      if( phone.length < 10){
        alert("Phone Number Must Be 10 Digits");
        return
      }
      else{
        let id: number = this.Peoples.length+1;
        this.addAnggotaService.addNewAnggota({id, name, phone, skill, notes} as Anggota).subscribe(mem => {this.Peoples.push(mem)})
      }

  }

  goBack(): void{
    this.location.back();
  }


}
