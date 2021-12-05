import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {GraphicsCardDto} from "../../model/graphics-card-dto";

@Component({
  selector: 'app-edit-single-graphics-card',
  templateUrl: './edit-single-graphics-card.component.html',
  styleUrls: ['./edit-single-graphics-card.component.css']
})
export class EditSingleGraphicsCardComponent implements OnInit {

  //@ts-ignore
  editGraphicsCardForm: FormGroup;
  graphicsCardEditId: number = 0;

  constructor(private route: ActivatedRoute,
              private graphicsCardService: GraphicsCardService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.graphicsCardEditId = Number(this.route.snapshot.paramMap.get('id'));
    this.editGraphicsCardForm = this.formBuilder.group({
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
    graphicsCard.cardModel = this.editGraphicsCardForm.get('cardModel')?.value;
    graphicsCard.memory = this.editGraphicsCardForm.get('memory')?.value;
    graphicsCard.memoryType = this.editGraphicsCardForm.get('memoryType')?.value;
    graphicsCard.powerConsumption = this.editGraphicsCardForm.get('powerConsumption')?.value;
    graphicsCard.premiereDate = this.editGraphicsCardForm.get('premiereDate')?.value;
    graphicsCard.cardPrice = this.editGraphicsCardForm.get('cardPrice')?.value;
    graphicsCard.benchmarkValue = this.editGraphicsCardForm.get('benchmarkValue')?.value;
    if(this.editGraphicsCardForm.get('imageUrl')?.value != ''){
      graphicsCard.imageUrl = this.editGraphicsCardForm.get('imageUrl')?.value;
    }

    this.graphicsCardService.editGraphicsCard(this.graphicsCardEditId, graphicsCard);
    this.router.navigateByUrl("/admin");
  }

}
