import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EWOK_ENVIRONMENT } from './ewok.token';
import { EwokEnvironment } from "./ewok.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: EwokEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: EWOK_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}