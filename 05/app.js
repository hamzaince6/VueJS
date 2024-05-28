// Bu ders içeriğinde v-bind kullanımı var.
// v-bind data alanımızın içeriğine bakar.

const app = Vue.createApp({
    template:`
    <div v-bind:style="style">Deneme Yazısı</div>
    `,
    data() {
        return {
           style:"color:green"
        }
    },

    methods: {
    
    },
});

    

app.mount('#app');