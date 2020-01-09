import { action, computed, observable } from 'mobx';

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
  setDeafult(): void;
  inputName(value: string): void;
}

export class MobxStore implements IMobxStore {
  @observable name = 'World';

  @computed get greeting(): string {
    return `Hello ${this.name}`;
  }

  @action.bound setName(name: string): void {
    this.name = name;
  }

  @action.bound setDeafult(): void {
    this.name = 'World';
  }

  @action.bound inputName(value: string): void {
    this.name = value;
  }
}
