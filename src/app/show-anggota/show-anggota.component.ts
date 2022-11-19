import { HttpBackend } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { Anggota } from '../model/anggota';
import { AddAnggotaService } from '../service/add-anggota-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-anggota',
  templateUrl: './show-anggota.component.html',
  styleUrls: ['./show-anggota.component.css']
})
export class ShowAnggotaComponent implements OnInit{
  Peoples: any[] = [];
  peeps: Anggota[] = [];
  anggota = new Anggota(66,'Nama', 'Nomor HP', 'Skill', 'Desc');




  constructor(
    private addAnggotaService: AddAnggotaService,
    private location: Location
  ){

  }

  ngOnInit(): void{
    this.addAnggotaService.getAnggota().subscribe(res => {this.Peoples = res;})

  }


  removeAnggota(id: number){
    this.addAnggotaService.deleteAnggotaById(id).subscribe(() => alert('Employee with Id = '+id+' is Deleted. Please Refresh The Page!'));
  }


}
