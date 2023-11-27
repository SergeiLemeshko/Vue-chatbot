<template>
    <div>
        <button class="btn"><slot></slot></button>
    </div>
</template>

<script>
export default {
    name: "BtnItem",
}
</script>

<style lang="scss">
.btn {
    font-family: 'Comfortaa';
    font-size: 0.7rem;
    font-weight: 400;
    color: #ffffff;
    padding: 9px 15px;
    border-radius: 5px;
    border: 1px solid #17598f;
    background: #133d64;
    background: linear-gradient(to top, #0c5757, #094c6b);
    margin-right: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
}
.btn:hover {
    color: #cccccc;
    background: #0a849e;
    background: linear-gradient(to top, #0a849e, #3b8c94);
}
.btn:last-child {
    margin-right: 0px;
}
</style>