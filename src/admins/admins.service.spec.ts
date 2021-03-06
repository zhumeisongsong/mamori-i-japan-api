import { Test, TestingModule } from '@nestjs/testing'
import { AdminsService } from './admins.service'
import { AdminsRepository } from './admins.repository'
import { PrefecturesService } from '../prefectures/prefectures.service'
import { FirebaseService } from '../shared/firebase/firebase.service'

describe('AdminsService', () => {
  let service: AdminsService
  const adminsRepository = { findAll: () => ['test'] }
  const prefecturesService = {}
  const firebaseService = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsService, AdminsRepository, PrefecturesService, FirebaseService],
    })
      .overrideProvider(AdminsRepository)
      .useValue(adminsRepository)
      .overrideProvider(PrefecturesService)
      .useValue(prefecturesService)
      .overrideProvider(FirebaseService)
      .useValue(firebaseService)
      .compile()

    service = module.get<AdminsService>(AdminsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
