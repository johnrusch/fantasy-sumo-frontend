import React, { createContext, useContext } from 'react';
import { makeAutoObservable, action, observable, computed, reaction } from 'mobx';
import { getWrestlers } from '../actions/wrestlerActions';
import { logIn } from '../actions/authActions';
import { getUserLeagues, getOpenLeagues, createLeague } from '../actions/leagueActions';
import { getTeams } from '../actions/teamActions';

export default class Store {
    currentUserID = '';
    currentUserName = '';
    wrestlers = [];
    userLeagues = [];
    openLeagues = [];
    teams = [];
    selectedLeague = '';
    selectedTeam = '';
    selectedWrestler = '';
    retrievingData = false;

    constructor(){
        makeAutoObservable(this, {
            currentUserID: observable,
            currentUserName: observable,
            wrestlers: observable,
            userLeagues: observable,
            openLeagues: observable,
            teams: observable,
            selectedLeague: observable,
            selectedTeam: observable,
            selectedWrestler: observable,
            retrievingData: observable,
            loadUser: action,
            selectLeague: action,
            selectTeam: action,
            selectWrestler: action,
            addLeague: action,
            loggedIn: computed,
            wrestlersLoaded: computed,
        });
    }
    
    async loadUser(data) {
        this.retrievingData = true;
        let currentUser = await logIn(data)
        this.currentUserID = currentUser.id;
        this.currentUserName = currentUser.name;
        this.wrestlers = await getWrestlers();
        this.userLeagues = await getUserLeagues();
        this.openLeagues = await getOpenLeagues();
        this.teams = await getTeams();
        this.retrievingData = false;
    }

    selectLeague = (leagueData) => {
        this.selectedLeague = leagueData
    }

    selectTeam = (teamData) => {
        this.selectedTeam = teamData
    }

    selectWrestler = (wrestlerData) => {
        this.selectedWrestler = wrestlerData
    }

    async addLeague(leagueData) {
        this.retrievingData = true;
        const newLeague = await createLeague(leagueData);
        this.userLeagues = [...this.userLeagues, newLeague];
        this.openLeagues = [...this.openLeagues, newLeague];
        this.retrievingData = false;
        return newLeague;
    }

    get loggedIn() {return !!this.currentUserID}

    get wrestlersLoaded() {return !!this.wrestlers.length}
    
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);