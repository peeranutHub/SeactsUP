import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db } from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    pathName: "/"
  },
  mutations: {
    setUsers(state, m) {
      state.user = m

    },
    setPath(state, path) {
      state.pathName = path
    }
  },
  actions: {
    pathName(context, path = "/") {
      context.commit("setPath", path)
    },

    // read
    async loginEmail(context, from) {
      db.collection("Email").where("email", "==", from[0])
        .get().then(function (querySnapshot) {
          console.log(querySnapshot.size)
          if (querySnapshot.size == 0) {
            return alert('incorrect email or password')
            
          }else{
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data().password);
              if(doc.data().password == from[1] ){
                localStorage.user = from[0]
                 return  router.push('/')
              }else{
                return alert('incorrect email or password')

              }
            });
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      // db.collection("Email").get().then(data => {
      //   const mail = []
      //   data.forEach(email => mail.push(email.data()))
      //   const m = mail.filter(z => z.email === from[1])[0]
      //   console.log(from[1],m)
      //   const c= false
      //   if (c == false) {
      //     return alert("password incorrect")
      //   }
      //   else {
      //     // delete m.password
      //     console.log(m.email)
      //     localStorage.user = m.email
      //     return  router.push('/')
      //   }
      // })
    },
    // create
    async registerEmail(context, from) {
      console.log(from)
      db.collection("Email").where("email", "==", from[0])
        .get().then(function (querySnapshot) {
          console.log(querySnapshot.size)
          if (querySnapshot.size == 0) {
            db.collection("Email").doc().set({
              email: from[0],
              password: from[1]
            })
              .then(function () {
                return router.push('/login')
              })
              .catch(function (error) {
                console.error("Error writing document: ", error);
              });
          }else{
            return alert('fond email')
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });

      // console.log(data)

    }
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getPath(state) {
      return state.pathName
    }
  }
})
