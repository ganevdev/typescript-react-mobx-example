import { action, computed, observable } from 'mobx';

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
}

export class MobxStore implements IMobxStore {
  @observable name = 'World';

  @computed
  public get greeting(): string {
    return `Hello ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }
}
