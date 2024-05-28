// Bu ders içeriğinde for döngüsü kullanımı var.


const app = Vue.createApp({
    template:`
    <ul>
        <li v-for="day in days"> {{day}} </li>
    </ul>

    `,
    data() {
        return {
            days: [
                "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"
            ]
        }
    },

    methods: {
    
    },
});

    

app.mount('#app');