import React, { createContext, useContext } from 'react';
import { makeAutoObservable, action, observable, computed, reaction } from 'mobx';
import { getWrestlers } from '../actions/wrestlerActions';
import { logIn } from '../actions/authActions';
import { getUserLeagues, getOpenLeagues } from '../actions/leagueActions';

export default class Store {
    currentUserID = '';
    currentUserName = '';
    wrestlers = [];
    selectedWrestler = '';
    userLeagues = [];
    openLeagues = [];
    selectedLeague = '';
    retrievingData = false;

    constructor(){
        makeAutoObservable(this, {
            currentUserID: observable,
            currentUserName: observable,
            wrestlers: observable,
            selectedWrestler: observable,
            userLeagues: observable,
            openLeagues: observable,
            selectedLeague: observable,
            retrievingData: observable,
            loadUser: action,
            loggedIn: computed,
            wrestlersLoaded: computed,
            selectLeague: action
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
        this.retrievingData = false;
    }

    selectLeague = (leagueData) => {
        this.selectedLeague = leagueData
    }

    get loggedIn() {return !!this.currentUserID}

    get wrestlersLoaded() {return !!this.wrestlers.length}
    
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);