// Bu ders içeriğinde data ve method kullanımı var.


const app = Vue.createApp({
    template:`
    <h2>Title: {{title}} </h2>
    <h3>description: {{description}} </h3>
    <p>comment:  {{comment}}</p>
    <button v-on:click="added()">Add</button>
    <p>{{text}}</p>
    `,
    data() {
        return {
            title: 'Hello VueJS',
            description: 'Vue course content lesson 3',
            comment: 0,
            text: 'Click to add a comment'
        }
    },
    // Yorum sayılarını yazdıran method.
    methods: {
        added() {
            console.log('Added buttons start.')
            this.comment++;
            this.text=`${this.comment} one comment entered.`
        }
    },
});

    

app.mount('#app');