<template>
    <div class="questions">
        <div class="questions-content" ref="scrollbar">
            <div v-if="isHide">
                <BtnItem v-on:click="isHide = !isHide">Да. С удовольствием!</BtnItem>
            </div>
            <template v-for="question in questions" v-if="!isHide">
                <UserQuestions v-if="question.chatbot" :key="question.id" :question="question"/>
                <ChatbotAnswer v-else :question="question"/>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import UserQuestions from "@/components/UI/UserQuestions.vue";
import ChatbotAnswer from "@/components/UI/ChatbotAnswer.vue";
import BtnItem from "@/components/UI/BtnItem.vue";

export default {
    name: "QuestionList",
    components: {
        UserQuestions,
        ChatbotAnswer,
        BtnItem
    },
    data() {
        return {
            isHide: true //для скрытия кнопки "Да. С удовольствием!"
        }
    },
    watch: {
        questions: {
            handler() {
                this.$nextTick(this.scrollToBottom);
            },
            deep: true
        },
    },
    computed: {
        ...mapState([
            "questions"
        ])
    },
    methods: {
        //Перемещение скролла вниз при заполнении контейнера чата
        scrollToBottom() {
            this.$refs.scrollbar.scrollTop = this.$refs.scrollbar.scrollHeight;
        }
    }
}
</script>

<style lang="scss">
.questions {
    flex: 1 1 auto;
    color: rgba(255, 255, 255, .5);
    overflow: hidden;
    position: relative;
    width: 100%;

    & .questions-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        padding: 1em;
    }
}
</style>