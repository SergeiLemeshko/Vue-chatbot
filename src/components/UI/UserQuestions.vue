
<template>
    <div class="question question-personal" :class="{'loading': loading}">
        <span>{{ question.text }}</span>
    </div>
</template>

<script>
export default {
    name: "UserQuestions",
    props: {
        question: Object
    },
    data() {
        return {
            loading: true, //анимация печати ответа
        }
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 1000 + (Math.random() * 20) * 100);
    }
}
</script>

<style lang="scss">
@mixin center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@mixin ball {
    @include center;
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, .5);
    z-index: 2;
    margin-top: 4px;
    animation: ball .45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
}
.question {
    clear: both;
    float: left;
    padding: 6px 10px 7px;
    border-radius: 10px 10px 10px 0;
    background: rgba(0, 0, 0, .3);
    margin: 8px 0;
    font-size: 11px;
    line-height: 1.4;
    margin-left: 35px;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);

        &::before {
            content: '';
            position: absolute;
            bottom: -6px;
            border-top: 6px solid rgba(0, 0, 0, .3);
            left: 0;
            border-right: 7px solid transparent;
        }

    &.question-personal {
        float: right;
        color: #fff;
        font-size: 0.8rem;
        text-align: right;
        background: linear-gradient(120deg, #248A52, #257287);
        border-radius: 10px 10px 0 10px;

            &::before {
                left: auto;
                right: 0;
                border-right: none;
                border-left: 5px solid transparent;
                border-top: 4px solid #257287;
                bottom: -4px;
            }
        }

        &:last-child {
            margin-bottom: 30px;
        }

        &.loading {
            &::before {
                @include ball;
                border: none;
                animation-delay: .15s;
            }

            & span {
                display: block;
                font-size: 0;
                width: 20px;
                height: 10px;
                position: relative;

            &::before {
                @include ball;
                margin-left: -7px;
            }

            &::after {
                @include ball;
                margin-left: 7px;
                animation-delay: .3s;
            }
        }
    }
}

@keyframes ball {
    from {
        transform: translateY(0) scaleY(.8);
    }
    to {
        transform: translateY(-10px);
    }
}
</style>