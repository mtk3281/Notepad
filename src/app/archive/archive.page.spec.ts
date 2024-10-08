import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchivePage } from './archive.page';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'; 

describe('ArchivePage', () => {
  let component: ArchivePage;
  let fixture: ComponentFixture<ArchivePage>;
  let storageMock: jasmine.SpyObj<Storage>;

  beforeEach(async () => {
    storageMock = jasmine.createSpyObj('Storage', ['get', 'set', 'remove']); 

    await TestBed.configureTestingModule({
      declarations: [ArchivePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Storage, useValue: storageMock } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
