import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';
import { AddAnggotaService } from '../service/add-anggota-service.service';
import { Anggota } from '../model/anggota';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-detail-anggota',
  templateUrl: './show-detail-anggota.component.html',
  styleUrls: ['./show-detail-anggota.component.css']
})
export class ShowDetailAnggotaComponent implements OnInit {
  member!: Anggota;

  //peep = new Anggota(77,'Name','phone','skill','notes');


  Peoples: any[] = [];

  constructor(
    private anggotaService: AddAnggotaService,
    private route: ActivatedRoute,
    private location: Location
  ){

  }

  ngOnInit(): void {
    this.getAnggota()
  }


  getAnggota(): void{
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.anggotaService.getAnggotaById(idParam).subscribe(a => this.member = a)
  }

  onSubmit(){
    // this.updateMember();
    
  }

  
  updateMember(name: string, 
    phone: string, 
    skill: string, 
    notes: string): void{
      const idParam = Number(this.route.snapshot.paramMap.get('id'));

      if(!name){return}
      if( phone.length < 10){
        alert("Phone Number Must Be 10 Digits");
        return
      }
      else{
        let id: number = idParam;
        this.anggotaService.addNewAnggota({id, name, phone, skill, notes} as Anggota).subscribe(mem => {this.Peoples.push(mem)})
      }

  }

}
