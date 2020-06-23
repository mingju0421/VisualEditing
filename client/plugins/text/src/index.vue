<template>
    <div class="qk-text">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'QkText',  // 未来的标签名 <qk-text></qk-text>
    props: {
        text: {
            type: String,
            default: '这是一段文字'
        }
    }

}
</script>

<style scoped>
</style>