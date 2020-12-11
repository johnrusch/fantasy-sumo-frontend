import React, { createContext, useContext } from "react";
import { makeAutoObservable, action, observable, computed } from "mobx";
import { getWrestlers } from "../actions/wrestlerActions";
import { logIn, getCurrentUser } from "../actions/authActions";
import {
  getUserLeagues,
  getOpenLeagues,
  createLeague,
  addUserToLeague,
} from "../actions/leagueActions";
import { getTeams } from "../actions/teamActions";

export default class Store {
  currentUserID = "";
  currentUserName = "";
  logInError = null;
  wrestlers = [];
  userLeagues = [];
  openLeagues = [];
  teams = [];
  selectedLeague = "";
  selectedTeam = "";
  selectedWrestler = "";
  retrievingData = false;
  newestLeague = "";
  newLeagueSuccessModal = false;
  referrer = "";

  constructor() {
    makeAutoObservable(this, {
      currentUserID: observable,
      currentUserName: observable,
      logInError: observable,
      wrestlers: observable,
      userLeagues: observable,
      openLeagues: observable,
      teams: observable,
      selectedLeague: observable,
      selectedTeam: observable,
      selectedWrestler: observable,
      retrievingData: observable,
      newestLeague: observable,
      newLeagueSuccessModal: observable,
      referrer: observable,
      logInUser: action,
      loadUser: action,
      getUser: action,
      logOut: action,
      selectLeague: action,
      selectTeam: action,
      selectWrestler: action,
      addLeague: action,
      setNewLeagueSuccessModal: action,
      loggedIn: computed,
      wrestlersLoaded: computed,
      fromInvite: computed,
    });
  }

  async logInUser(data) {
    this.retrievingData = true;
    this.logInError = null;
    let currentUser = await logIn(data);
    console.log(currentUser);
    this.retrievingData = false;
    if (!currentUser.error) {
      this.currentUserID = currentUser.id;
      this.currentUserName = currentUser.name;
    } else {
        this.logInError = currentUser.error;
    }
  }

  async loadUser(data) {
    this.retrievingData = true;
    this.wrestlers = await getWrestlers();
    this.userLeagues = await getUserLeagues();
    this.openLeagues = await getOpenLeagues();
    this.teams = await getTeams();
    this.retrievingData = false;
  }

  async getUser() {
    let currentUser = await getCurrentUser();
    if (!currentUser.error) {
      this.currentUserID = currentUser.id;
      this.currentUserName = currentUser.name;
    } 
  }

  logOut() {
    localStorage.removeItem("token");
    this.currentUserID = "";
    this.currentUserName = "";
  }

  selectLeague = (leagueData) => {
    this.selectedLeague = leagueData;
  };

  selectTeam = (teamData) => {
    this.selectedTeam = teamData;
  };

  selectWrestler = (wrestlerData) => {
    this.selectedWrestler = wrestlerData;
  };

  setNewLeagueSuccessModal = () => {
    this.newLeagueSuccessModal = !this.newLeagueSuccessModal;
  };

  async addLeague(leagueData) {
    this.newestLeague = "";
    this.retrievingData = true;
    const newLeague = await createLeague(leagueData);
    this.newestLeague = newLeague;
    this.userLeagues = [...this.userLeagues, newLeague];
    this.openLeagues = [...this.openLeagues, newLeague];
    this.setNewLeagueSuccessModal();
    this.retrievingData = false;
  }

  async addToLeague(data) {
    this.retrievingData = true;
    this.openLeagues = this.openLeagues.filter((league) => {
      return league.id !== data.leagueID;
    });
    const updatedLeague = await addUserToLeague(data);
    this.openLeagues = [...this.openLeagues, updatedLeague];
    this.retrievingData = false;
  }

  get loggedIn() {
    return !!this.currentUserID;
  }

  get wrestlersLoaded() {
    return !!this.wrestlers.length;
  }

  get fromInvite() {
    return !!window.location.origin.includes("invite");
  }
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
