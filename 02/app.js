// Bu ders içeriğinde koşulların kullanımı var.


const app = Vue.createApp({
    template:`
    <div v-if='showInfo'>Deneme Yazisi</div>
    <div v-show='!showInfo'>Deneme Yazisi 2</div>
    <button @click="toggle">
        <span v-if='!showInfo'>Göster</span>
        <span v-else>Gizle</span>
    </button>
    `,
    data() {
        return {
            showInfo:true
        }
    },
    methods: {
        toggle() {
            this.showInfo = !this.showInfo;
     }
    },
});

    

app.mount('#app');