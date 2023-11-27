<!-- Контейнер чата -->
<template>
    <section class="chat">
        <div class="title">
            <h1>{{ isActive ? "Чат с компанией" : "Закажите пиццу!"}}</h1>
        </div>
        <figure class="title-img">
            <img src="@/assets/img/programmer.svg" alt="programmer">
        </figure>
        <QuestionList/>
        <QuestionsInput/>
    </section>
</template>

<script>
import { mapState } from "vuex";
import QuestionList from "@/components/UI/QuestionList.vue";
import QuestionsInput from "@/components/UI/QuestionsInput.vue";

export default {
    name: "MyChat",
    components: {
        QuestionList,
        QuestionsInput,
    },
    computed: {
        ...mapState([
            "isActive" //показ title
        ])
    }
}
</script>

<style lang="scss">
.chat {
    position: fixed;
    bottom: 24px;
    left: 24px;
    width: 300px;
    height: 120vh;
    max-height: 500px;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
    background: rgba(0, 0, 0, .5);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.title {
    height: 45px;
    margin: 15px 0px 0px 40px;
    font-size: 0.8rem;

    h1 {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #dadada;
        margin-left: -35px;
    }
}
// Иконка
.title-img {
    position: absolute;
    z-index: 1;
    top: 7px;
    left: 7px;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 2px solid rgba(255, 255, 255, 0.24);
    
img {
        width: 40px;
        height: auto;
    }
}

// Полоса прокрутки
::-webkit-scrollbar {
    width: 11px;
    height: 3px;
}

::-webkit-scrollbar-button {
    background-color: #4b4750;
}

::-webkit-scrollbar-track {
    background-color: #646464;
}

::-webkit-scrollbar-track-piece {
    background-color: #2e2d2d;
}

::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #666;
    border-radius: 3px;
}

::-webkit-scrollbar-corner {
    background-color: #646464;
}

::-webkit-resizer {
    background-color: #666;
}
</style>