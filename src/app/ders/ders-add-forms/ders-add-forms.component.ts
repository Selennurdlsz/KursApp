import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ders } from '../ders';
import { DersService } from 'src/app/services/ders.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Kategori } from 'src/app/kategori/kategori';
import { KategoriService } from 'src/app/services/kategori.service';

@Component({
  selector: 'app-ders-add-forms',
  templateUrl: './ders-add-forms.component.html',
  styleUrls: ['./ders-add-forms.component.css'],
  providers:[DersService,KategoriService]
})
export class DersAddFormsComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,
    private dersService:DersService,
    private myAlertifyService: AlertifyService,
    private kategoriService:KategoriService) { }

  dersAddForm:FormGroup;
  ders:Ders = new Ders();
  kategoriler:Kategori[];

  ngOnInit() {
    this.createDersAddForm();
    this.kategoriService.getKategoriler().subscribe(data=>{
      this.kategoriler = data
    });
  }

  createDersAddForm()
  {
    this.dersAddForm=this.formBuilder.group({
      DersId:["",Validators.required],
      DersAdi:["",Validators.required],
      Ucret:["",Validators.required],
      Icerik:["",Validators.required],
      ImageUrl:["",Validators.required],
      KursId:["",Validators.required],
      OgretmenId:["",Validators.required],
      OgretmenAdi:["",Validators.required],
      KategoriId:["",Validators.required],
      KategoriAdi:["",Validators.required]
    });
  }
  add(){
    if(this.dersAddForm.valid)
    {
      this.ders = Object.assign({},this.dersAddForm.value)
      this.dersService.addDers(this.ders).subscribe(data=>{
        this.myAlertifyService.success(data.DersAdi + "başarıyla eklendi.")
      })
    }
    else{
      this.myAlertifyService.success("Ders Ekleme Başarısız.")

    } 
   
  }

}
