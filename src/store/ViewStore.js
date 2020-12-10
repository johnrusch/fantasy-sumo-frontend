import {
  makeAutoObservable,
  action,
  observable,
  computed,
  reaction,
} from "mobx";
import { fromPromise } from "mobx-utils";

export default class ViewStore {
  fetch = null;
  currentUser = null;
  currentView = null;

  constructor(fetch) {
      makeAutoObservable(this, {
        currentUser = observable,
        currentView = observable,
        isAuthenticated = computed,
        currentPath = computed,
        showOverview = action,
        performLogin = action
      })
  }

  get isAuthenticated() {
      return this.currentUser !== null;
  }

  get currentPath() {
      switch(this.currentView.name) {
          case "overview": return '/'
      }
  }

  


}
