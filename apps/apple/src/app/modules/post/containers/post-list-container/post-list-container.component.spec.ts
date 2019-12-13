import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListContainerComponent } from './post-list-container.component';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { query } from './post-list-container.component.query';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { post } from '../../mocks';

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
