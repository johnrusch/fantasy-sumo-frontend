import { Router } from 'director';
import { autorun } from 'mobx';

export function startRouter(store) {

    const router = new Router({
        '/login': () => store.showLogin(),
        '/league/:leagueId': (id) => store.showLeague(id),
        
    })
}