import { createStore } from "vuex";
import {store as auth} from '../modules/auth/store';

export default createStore({
  modules: {
    auth,
  }
});

