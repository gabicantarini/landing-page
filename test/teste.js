
function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');   
        updatePlayerTurn(); //call the function
        startSpaces();

        function updatePlayerTurn(){
        if (gameOver == true){
        return; }  // if the game it's over, nothing else will be done

        if (playTime == player1) { 

        var player = document.querySelectorAll("div#playerturn img")[0];
        player.setAttribute("src", "/assets/images/x.png") //if it's player 1 turn's, var player will search the image of #playerturn  and setAttribute will change "src" to "x image"
        } else{
        var player = document.querySelectorAll("div#playerturn img")[0];
        player.setAttribute('src', '/assets/images/o.png')
        } 
        }

        function startSpaces(){
        let spaces = document.getElementsByClassName("space");
        for (let i = 0; i < spaces.length; i++){

        spaces[i].addEventListener("click", function(){
        if (gameOver == true){
            return;
        } // if the game it's over, nothing else will be done

        if (this.getElementsByTagName("img").length ==0 ){ //if this space is empty, put an image inside. if it's full, nothing happens
               if (playTime == player1){
                this.innerHTML = "<img src='/assets/images/x.png'>";
                this.setAttribute("move", player1); 
                playTime = player2;

            }else{
                this.innerHTML = "<img src='/assets/images/o.png'>";
                this.setAttribute("move", player2);
                playTime = player1;
            }}
            updatePlayerTurn(); //update players turn image
            thereIsAWinner(); //verify if there is a winner
            
        } )}}
    } else {
    setColor('second-color');
    updatePlayerTurn(); 
    startSpaces();
       
            function updatePlayerTurn(){
            if (gameOver == true){
            return;
             }  // if the game it's over, nothing else will be done
    
            if (playTime == player1) { 
    
            var player = document.querySelectorAll("div#playerturn img")[0];
            player.setAttribute("src", "/assets/images/dog.png") //if it's player 1 turn's, var player will search the image of #playerturn  and setAttribute will change "src" to "x image"
            } else{
            var player = document.querySelectorAll("div#playerturn img")[0];
            player.setAttribute('src', '/assets/images/cat.png')
            } 
            }
    
        function startSpaces(){
            let spaces = document.getElementsByClassName("space");
            for (let i = 0; i < spaces.length; i++){
    
            spaces[i].addEventListener("click", function(){
            if (gameOver == true){
                return;
            } // if the game it's over, nothing else will be done
    
            if (this.getElementsByTagName("img").length ==0 ){ //if this space is empty, put an image inside. if it's full, nothing happens
                if (playTime == player1){
                    this.innerHTML = "<img src='/assets/images/dog.png'>";
                    this.setAttribute("move", player1); 
                    playTime = player2;
    
                }else{
                    this.innerHTML = "<img src='/assets/images/cat.png'>";
                    this.setAttribute("move", player2);
                    playTime = player1;
                }}
                updatePlayerTurn(); //update players turn image
                thereIsAWinner(); //verify if there is a winner
            } ) } }   }  } 