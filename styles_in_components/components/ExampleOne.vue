<template>
    <div class="wrapper">Test</div>
        <a href="#">Link</a>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                
            }
        }
    }
</script>

<!-- style tags are global if left unscoped -->
<style scoped>
    .wrapper {
        background: #ccc;
        margin: 15px;
    }
    .wrapper > a {
        font-size: 100px;
    }
</style>