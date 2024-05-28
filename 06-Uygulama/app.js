const app = Vue.createApp({
    template: `
    <h2>Frameworkler</h2>
    <ul>
        <li v-for="f in frameworks" :class="{selected: f.selected}" @click="selectTag(f)"> 
            {{f.name}}
        </li>
    </ul>
    <h3>Seçilen Frameworklar</h3>
    <ul>
        <li v-for="f in selectTags"> 
            {{f.name}}
        </li>
    </ul>
    `,
    data() {
        return {
            frameworks: [
                { name: "Vue", selected: true },
                { name: "React", selected: false },
                { name: "Svelte", selected: false },
                { name: "Angular", selected: false },
            ]
        }
    },
    methods: {
        selectTag(f) {
            f.selected = !f.selected;
        }
    },
    computed: {
        selectTags() {
            return this.frameworks.filter(f => f.selected);
        }
    }
});

app.mount('#app');
