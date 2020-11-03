import React, { createContext, useContext } from 'react';
import { makeAutoObservable, action, observable, computed, reaction } from 'mobx';
import { getWrestlers } from '../actions/wrestlerActions';
import { logIn } from '../actions/authActions';

export default class Store {
    wrestlers = [];
    currentUserID = '';
    currentUserName = '';

    constructor(){
        makeAutoObservable(this, {
            wrestlers: observable,
            currentUserID: observable,
            currentUserName: observable,
            loadWrestlers: action,
            loadUser: action,
            loggedIn: computed,
            wrestlersLoaded: computed
        });
    }

    async loadWrestlers() {
        this.wrestlers = await getWrestlers();
    }

    async loadUser(data) {
        let currentUser = await logIn(data);
        this.currentUserID = currentUser.id;
        this.currentUserName = currentUser.name;
    }

    get loggedIn() {return !!this.currentUserID}

    get wrestlersLoaded() {return !!this.wrestlers.length}

    getUserData = reaction(
        () => this.loggedIn, loggedIn => {
            if (!loggedIn) return;
            this.loadWrestlers();
        }
    )
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);