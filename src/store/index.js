import React, { createContext, useContext } from 'react';
import { makeAutoObservable, action, observable, computed, reaction } from 'mobx';
import { getWrestlers } from '../actions/wrestlerActions';
import { logIn } from '../actions/authActions';

export default class Store {
    wrestlers = [];
    currentUserName = '';
    
    currentUserID = '';
    constructor(){
        makeAutoObservable(this, {
            // wrestlers: observable,
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
        console.log(this.wrestlers);
    }

    async loadUser(data) {
        let currentUser = await logIn(data)
        this.currentUserID = currentUser.id;
        this.currentUserName = currentUser.name;
    }

    get loggedIn() {return !!this.currentUserID}

    get wrestlersLoaded() {return !!this.wrestlers.length}
    
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);