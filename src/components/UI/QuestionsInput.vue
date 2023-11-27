<!-- Компонент ввода сообщения -->
<template>
    <div class="question-container">
        <textarea 
            class="question-input" 
            placeholder="Введите сообщение..."
            v-model="questionValue">
        </textarea>
        <button 
            type="submit"
            class="question-submit"
            @click="sendQuestion">
            Отправить
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "QuestionsInput",
    data() {
        return {
            questionValue: "",
        }
    },
    mounted() {
        this.sendBotMsg();
    },
    computed: {
        ...mapGetters([
            'NEXT_CHAT_QUESTION',
        ])
    },
    methods: {
        ...mapActions({
            saveQuestions: "sendQuestion" //переопределяем метод sendQuestion 
        }),
        sendQuestion() {
            if(!this.questionValue) return;
            const question = {
                id: Date.now(),
                text: this.questionValue,
            };
            this.saveQuestions(question);
            this.questionValue = "";
            setTimeout(this.sendBotMsg, 1000 + (Math.random() * 20) * 100);
        },
        sendBotMsg() {
            if(this.questionValue) return;
            const question = {
                id: Date.now(),
                text: this.NEXT_CHAT_QUESTION,
                chatbot: true,
            };
            this.saveQuestions(question);
        }
    }
}
</script>

<style lang="scss">
.question-container {
    display: flex;
    flex: 0 1 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: relative;

        & .question-input {
        background: none;
        border: none;
        outline: none!important;
        resize: none;
        color: rgba(255, 255, 255, .7);
        font-size: 12px;
        height: 17px;
        margin: 0 0 0 -90px;
        padding-right: 10px;
        width: 180px;
    }

    textarea:focus:-webkit-placeholder{
        color: transparent;
    }

    & .question-submit {
        position: absolute;
        top: 13px;
        right: 17px;
        color: #fff;
        border: none;
        background: #24768a;
        font-size: 10px;
        text-transform: uppercase;
        line-height: 1;
        padding: 8px 9px 8px 9px;
        border-radius: 10px;
        transition: background .2s ease;
        cursor: pointer;
        letter-spacing: 1px;

    &:hover {
        background: rgb(29, 83, 104);
        }
    }
}
</style>