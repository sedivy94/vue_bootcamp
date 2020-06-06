/* Single File Components */

// this code used to live inside index.html as well
<template>
    <div>
        Hello from Component {{ test }}
    </div>
</template>

// remember that we are exporting this module!
<script>
    module.exports = {
        data: function () {
            return {
                test: 'test hello'
            }
        }
    }
</script>

<style></style>