import { Component, OnInit } from '@angular/core';
import {GraphicsCard} from "../../model/graphics-card";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compare-graphics-card-list',
  templateUrl: './compare-graphics-card-list.component.html',
  styleUrls: ['./compare-graphics-card-list.component.css']
})
export class CompareGraphicsCardListComponent implements OnInit {

  graphicsCards: GraphicsCard[] = [];
  compareGraphicsCardFormGroup!: FormGroup;
  graphicsCard1: GraphicsCard = new GraphicsCard();
  graphicsCard2: GraphicsCard = new GraphicsCard();

  constructor(private formBuilder: FormBuilder,
              private graphicsCardService: GraphicsCardService,
              private router: Router) { }

  ngOnInit(): void {
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.graphicsCardList());
    this.compareGraphicsCardFormGroup = this.formBuilder.group({
      graphicsCard1: ['', Validators.required],
      graphicsCard2: ['', Validators.required]
    })
  }

  onSubmit() {
    this.graphicsCard1 = this.compareGraphicsCardFormGroup.get('graphicsCard1')?.value;
    this.graphicsCard2 = this.compareGraphicsCardFormGroup.get('graphicsCard2')?.value;
    this.router.navigateByUrl(`/compare-graphics-card/${this.graphicsCard1.cardId}/${this.graphicsCard2.cardId}`);
  }


  graphicsCardList() {
    // @ts-ignore
    return data => {
      this.graphicsCards = data;
    }
  }

}
