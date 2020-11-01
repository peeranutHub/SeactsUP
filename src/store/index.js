import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db } from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    pathName: "/",
    data: "",
    president: '',
    id: '',
    email: '',
    clubname: '',
    oldclub: '',
    newclub: '',
    category1: '',
    category2: '',
    category3: '',
    category4: '',
    category5: '',
    positionclub: '',
    name: '',
    board: '',
    branch: '',
    year: '',
    gpa: '',
    phonenumber: '',
    club: ""
  },
  mutations: {
    setViewClub(state, id) {
      if (id === null) {
        return state.club = ''
      }
      const club = state.data.find(e => e.c_id == id)
      state.club = club
    },

    setUser(state, data) {
      delete data.password
      state.user = { ...data[0], db_id: data[1] }

    },
    setPath(state, path) {
      state.pathName = path
    },
    DT(state, abc) {
      state.data = abc
    },
    EAR(state, we) {
      state.president = we[0]
      state.id = we[1]
      state.email = we[2]
      state.clubname = we[3]
      state.oldclub = we[4]
      state.newclub = we[5]
      state.category1 = we[6]
      state.category2 = we[7]
      state.category3 = we[8]
      state.category4 = we[9]
      state.category5 = we[10]
      state.positionclub = we[11]
      state.name = we[12]
      state.board = we[13]
      state.branch = we[14]
      state.year = we[15]
      state.gpa = we[16]
      state.phonenumber = we[17]
    }
  },
  actions: {
    delclub(context, id) {
      db.collection("clubs").doc(id).delete()

    },
    createClub(context, data) {
      const id = Math.random().toString(15).replace(/0./g, '')

      db.collection("clubs").doc(id).set({c_id: id, ...data})
    },
    editProfile(context, form) {
      const user = context.getters.getUser;
      // db.collection('student').doc(user.db_id).update(form)
      const arr = Object.keys(form)
      const keys = arr.filter(k => form[k].length !== 0);
      
      const formData = keys.flatMap(e => ({[e]: form[e]}))
      const formObj = {}
      for(let i of formData) {
        formObj[Object.keys(i)[0]] = Object.values(i)[0]
      }

      db.collection('student').doc(user.db_id).update(formObj)

    },

    viewClub(context, id = null) {
      context.commit('setViewClub', id)
    },
    information(context, we) {
      context.commit('INFORMATION', we)
    },
    pathName(context, path = "/") {
      context.commit("setPath", path)
    },
    dataclubs(context, abc) {
      context.commit("DT", abc)
    },

    // read
    async loginEmail(context, from) {
      db.collection("student").where("email", "==", from[0])
        .get().then(function (querySnapshot) {
          console.log(querySnapshot.size)
          if (querySnapshot.size == 0) {
            return alert('incorrect email or password')

          } else {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data().password);
              if (doc.data().password == from[1]) {
                context.commit('setUser', [doc.data(), doc.id])
                return router.push('/')

              } else {
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
          } else {
            return alert('fond email')
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });

      // console.log(data)
    },
    //eslint-disable-next-line
    async dataclubs(context) {

      db.collection("clubs").get().then().then(data => {
        const arr = []
        data.docs.forEach(doc => arr.push(doc.data()))
        context.commit("DT", arr)
      })
    }
  },
  getters: {
    getClub(state) {
      return state.club
    },
    getUser(state) {
      return state.user
    },
    getPath(state) {
      return state.pathName
    },
    getterPRESIDENT(state) {
      return state.president
    },
    getterID(state) {
      return state.id
    },
    getterEMAIL(state) {
      return state.email
    },
    getterCLUBNAME(state) {
      return state.clubname
    },
    getterOLDCLUB(state) {
      return state.oldclub
    },
    getterNEWCLUB(state) {
      return state.newclub
    },
    getterCATEGORY1(state) {
      return state.category1
    },
    getterCATEGORY2(state) {
      return state.category2
    },
    getterCATEGORY3(state) {
      return state.category3
    },
    getterCATEGORY4(state) {
      return state.category4
    },
    getterCATEGORY5(state) {
      return state.category5
    },
    getterPOSITIONCLUB(state) {
      return state.positionclub
    },
    getterBOAED(state) {
      return state.board
    },
    getterBRANCH(state) {
      return state.branch
    },
    getterYEAR(state) {
      return state.year
    },
    getterGPA(state) {
      return state.gpa
    },
    getterPHONENUMBER(state) {
      return state.phonenumber
    },
    getterNAME(state) {
      return state.name
    },
    getterDATA(state) {
      return state.data
    }
  }
})
