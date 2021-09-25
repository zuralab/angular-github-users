import {createSelector} from '@ngrx/store';

export interface User {
  id: number;
  name: string;
}
export interface AppState {
  selectedUser: User;
}



