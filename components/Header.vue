<script>
    import NavBar from '~/components/NavBar.vue'

    export default {
        components: {
            NavBar
        },
        data() {
            return {
                isOpen: false,
            }
        }
    }
</script>>

<template>
    <!-- TODO: setup a common content for header as well -->
    <header class="px-10 pb-2 border-b-2 border-red-dark tablet:flex tablet:justify-between tablet:items-end">
        <div class="flex items-end justify-between">
            <img class="w-40 h-20" src="~/assets/images/next-level-logo.png" />
            <button @click="isOpen = !isOpen" type="button" class="tablet:hidden">Menu</button>
        </div>
        <NavBar :class="isOpen ? 'block' : 'hidden'" class="tablet:flex"/>
    </header>
</template>
