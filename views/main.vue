<template lang="html">
    <div class="">
        <h1>{{title}}</h1>
        <p>{{otherData}}</p>
        <section class="section">
            <h3>{{professionalTitle}}</h3>
            <span class="links--row">
                <a v-for="(value, key) in contactLinks" :key="key" :href="value.url">{{value.name | capitalize}}</a>
            </span>
        </section>
        <section class="section">
            <h3>{{projectsTitle}}</h3>
            <span v-for="(value, key) in projectLinks" :key="key"><a :href="value.url">{{value.name | capitalize}}</a></span>
        </section>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            projectsTitle: 'Projects',
            professionalTitle: 'Work-related links'
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style lang="css">
</style>
