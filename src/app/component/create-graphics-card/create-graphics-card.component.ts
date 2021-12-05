import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {GraphicsCardDto} from "../../model/graphics-card-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-graphics-card',
  templateUrl: './create-graphics-card.component.html',
  styleUrls: ['./create-graphics-card.component.css']
})
export class CreateGraphicsCardComponent implements OnInit {

  // @ts-ignore
  newGraphicsCardFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private graphicsCardService: GraphicsCardService,
              private router: Router) { }

  ngOnInit(): void {
    this.newGraphicsCardFormGroup = this.formBuilder.group({
      cardModel: ['', Validators.required],
      memory: ['', Validators.required],
      memoryType: ['', Validators.required],
      powerConsumption: ['', Validators.required],
      premiereDate: ['', Validators.required],
      cardPrice: ['', Validators.required],
      benchmarkValue: ['', Validators.required],
      imageUrl: ['']
    })
  }

  onSubmit() {
    let graphicsCard = new GraphicsCardDto();
    graphicsCard.cardModel = this.newGraphicsCardFormGroup.get('cardModel')?.value;
    graphicsCard.memory = this.newGraphicsCardFormGroup.get('memory')?.value;
    graphicsCard.memoryType = this.newGraphicsCardFormGroup.get('memoryType')?.value;
    graphicsCard.powerConsumption = this.newGraphicsCardFormGroup.get('powerConsumption')?.value;
    graphicsCard.premiereDate = this.newGraphicsCardFormGroup.get('premiereDate')?.value;
    graphicsCard.cardPrice = this.newGraphicsCardFormGroup.get('cardPrice')?.value;
    graphicsCard.benchmarkValue = this.newGraphicsCardFormGroup.get('benchmarkValue')?.value;
    if(this.newGraphicsCardFormGroup.get('imageUrl')?.value != ''){
      graphicsCard.imageUrl = this.newGraphicsCardFormGroup.get('imageUrl')?.value;
    }

    this.graphicsCardService.addGraphicsCard(graphicsCard).subscribe();
    this.router.navigateByUrl("/admin");
  }

}
