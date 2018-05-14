  const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		key: "dc6zaTOxFJmzC",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};

	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.key +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	var renderGif = _giphy => {
		$(".gif").attr("src",_giphy.image_original_url);
	};

new Vue ({
    el: '#vue-app',
    data:{
        newTask:'',
        tasks:['Comer','No llorar','Programar']

    },

    methods:{
        addTask: function(task){
          if(task!=''){
            this.tasks.push(task);
            this.newTask='';
            console.log('addTask function works');
          }
          else {
            window.alert("No puedes crear recordatorios vacios");
          }
        },
        removeTask: function(task){
            for(i=0; i< this.tasks.length; i++){
                if(task === this.tasks[i]){
                    this.tasks.splice(i,1);
                    console.log('removeTask function works');
                    newGif();
                };
            };
        }
    }
});
