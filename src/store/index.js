import { createStore } from 'vuex'

export default createStore({
  state: {
    questions: [], 
    isActive: null, // для title
    botMsgs: [
      "Хорошо, укажите адрес для доставки!",
      "Отлично! В течение 2 часов мы доставим Вам пиццу. Спасибо!",
      "Вы хотели что-то ещё?",
      "Хотите узнать, где мы находимся, чтобы посетить нас?",
      "К Вашему сведению, мы находимся по адресу WWW-Ленинград.",
      "Будем рады, есди вы оставите отзыв о нас."

    ],
  },
  getters: {
    QUESTIONS (state) {
      return state.questions;
    },
    BOT_MSG_COUNT (state) {
      return state.questions.filter((value) => value.chatbot).length;
    },
    NEXT_CHAT_QUESTION ({botMsgs}, getters) {
      const count = getters.BOT_MSG_COUNT;
      const index = count < botMsgs.length ? count : count - 1;
      return botMsgs[index];
    } 
  },
  mutations: {
    ADD_QUESTIONS (state, n) {
      state.questions.push(n);
      if(state.questions.length > 1) {
        state.isActive = true;
        console.log(state.isActive)
      }
    }
  },
  actions: {
    sendQuestion(context, payload) {
      setTimeout(() => {
        context.commit('ADD_QUESTIONS', payload);
      }, 500)
    }
  }
})
