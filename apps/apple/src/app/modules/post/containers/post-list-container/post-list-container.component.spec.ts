import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule
} from 'apollo-angular/testing';

import { post } from '../../mocks';

import { PostListContainerComponent } from './post-list-container.component';
import { query } from './post-list-container.component.query';

describe('PostListContainerComponent', () => {

  let component: PostListContainerComponent;
  let fixture: ComponentFixture<PostListContainerComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [ PostListContainerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);

  }));

  afterEach(() => {

    controller.verify();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(PostListContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    const op = controller.expectOne(query);

    op.flush({
      data: {
        posts: [post],
      },
    });

    expect(component).toBeTruthy();

  });

});
