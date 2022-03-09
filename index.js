Vue.createApp({
    
    data(){
        
        return{
            words: null,
            result: null,
            result2: null,
            result3: null,
            result4: null,
            result5: null,
            result6: null,

        }

    },
    methods:{
        showWords()
        {
            let text = this.words;
           

        if (text == null|| text.lenght == 0) {
                alert("No Input")
                return
            }
           

            
            this.result = this.words;
            this.result2 = this.words.toLowerCase();
            this.result3 = this.words.toUpperCase();
            this.result4 = this.words.charAt(0).toUpperCase()+ this.words.slice(1);
            this.result5 = this.words.slice(0,-1) + this.words.charAt(4).toUpperCase();
            this.result6 = this.words.split("").reverse().join("");



        },


    

        
        

    }}).mount("#app")