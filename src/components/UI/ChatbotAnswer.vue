<!-- Компонент ответов бота -->
<template>
    <div class="answer">
        <span>{{ question.text }}</span>
    </div>
</template>

<script>
export default {
    name: "ChatbotAnswer",
    props: {
        question: Object,
    }
}
</script>

<style lang="scss">
.answer {
    float: left;
    padding: 9px 10px 7px 5px;
    border-radius: 10px 10px 10px 0;
    background: rgba(0, 0, 0, .4);
    margin: 9px 5px;
    font-size: 0.8rem;
    line-height: 1.4;
    margin-left: 35px;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    min-height: 40px;
    word-wrap: break-word;

    span {
        display: block;
        width: 180px;
    }
}
</style>