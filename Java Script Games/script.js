function ageindays(){
    var year = prompt("Enter your Birth year");
    var days = (2020-year)*365
    var h1 = document.createElement('h1')
    var textArea = document.createTextNode("You are "+days+" days old")
    h1.appendChild(textArea)
    h1.setAttribute('id',"ageindayss")
    document.getElementById('agecal').appendChild(h1)
    //document.getElementById("agee").innerHTML = "You are "+days+" days old"
}
function reset(){
    document.getElementById("ageindayss").remove()
    
    //document.getElementById("agee").innerHTML = ''
}

function gencat(){
    var img = document.createElement("img")
    img.setAttribute('class',"img-fluid img-thumbnail bg-danger border-danger ");
    img.setAttribute('src','download.jpg');
    document.getElementById('addcat').appendChild(img)
    
}

function rps(yourChoice){
    console.log(yourChoice);
    var humanchoice = yourChoice.id
    console.log("Human Choice is: ",humanchoice);
    var botchoice = botchoose()
    console.log("Computer Choice is: ",botchoice);
    var result = scores(humanchoice,botchoice)
    console.log("results: "+result);
    Fromtend(humanchoice,botchoice,result)
}

function botchoose(){
    arr = ['paper','stone','scissor']
    return arr[Math.floor(Math.random()*3)]
}

function scores(humanchoice,botchoice) {
    var Namedic = {
        'paper':{'paper':0.5,'stone':1,'scissor':0},
        'stone':{'paper':0,'stone':.5,'scissor':1},
        'scissor':{'paper':1,'stone':0,'scissor':0.5}
    }
    return [Namedic[humanchoice][botchoice],Namedic[botchoice][humanchoice]]
}



function Fromtend(humanchoice,botchoice,result){
    document.getElementById('paper').remove()
    document.getElementById('stone').remove()
    document.getElementById('scissor').remove()
    
    var area = document.getElementById("rps_box")

    var img_stone = document.createElement("img")
    img_stone.setAttribute('src',"stone.png");
    img_stone.setAttribute('alt',"stone");
    img_stone.setAttribute('width',"200");
    img_stone.setAttribute('height',"200");
    var img_paper = document.createElement("img")
    img_paper.setAttribute('src',"paper.png");
    img_paper.setAttribute('alt',"paper");
    img_paper.setAttribute('width',"200");
    img_paper.setAttribute('height',"200");
    var img_scissor = document.createElement("img")
    img_scissor.setAttribute('src','scissors.png');
    img_scissor.setAttribute('alt',"scissor");
    img_scissor.setAttribute('width',"200");
    img_scissor.setAttribute('height',"200");

    var choice = {
        'stone':img_stone,
        'paper':img_paper,
        'scissor':img_scissor
    }
    console.log(botchoice);
    console.log(humanchoice);
    var bot_img = choice[botchoice]
    var human_img = choice[humanchoice]

    

    if(result[0]===1){
        human_img.setAttribute('class','imgw')
        bot_img.setAttribute('class','imgl rtx')
        var message = "You Won!"
    }
    else if(result[0]===0){
        human_img.setAttribute('class','imgl')
        bot_img.setAttribute('class','imgw rtx')
        var message = "You Lost!"
    }
    else{
        human_img.setAttribute('class','imgt')
        var bot_img = human_img.cloneNode(true);
        bot_img.setAttribute('class','imgt rtx')
        var message = "Tied!"
    }
    console.log(human_img);
    console.log(bot_img);
    console.log(message);

    var message_area = document.createElement("h1")
    message_area.innerText = message

    area.appendChild(bot_img)
    area.appendChild(message_area)
    area.appendChild(human_img)
}


document.querySelector('#hit').addEventListener('click',blackjackhit);
document.querySelector('#stand').addEventListener('click',blackjackstand);
document.querySelector('#deal').addEventListener('click',blackjackdeal);

var can_hit= true;

var info = {
    you:0,
    dealer:0
}

var match_point = {
    win:0,
    losses:0,
    draws:0
}

function blackjackhit() {
    if(can_hit==false){
        //pass
        
    }
    else{
        var num = Math.floor(Math.random()*12)+1
        info.you += num
        app_img(num,'you_score')
        check()
    }
}

function blackjackstand() {
    if(can_hit==false){
        //pass
    }
    else{
        var ex_num = Math.floor(Math.random()*4)+4
        while((info.dealer+ex_num)<22){
            var del_num = Math.floor(Math.random()*12)+1
            info.dealer += del_num
            app_img(del_num,'dealer_score')
        }
        if( (info.dealer)>21){
            document.getElementById('score_value_dealer').textContent = "BUSTED"
            let data_val = parseInt(document.getElementById('win').textContent)
            document.getElementById('win').textContent = data_val+1
            setTimeout(function(){alert("You Won!")},1000)
        }
        else{
            document.getElementById('score_value_dealer').textContent = info.dealer
            setTimeout(function(){

                if(info.you>info.dealer){
                    let data_val = parseInt(document.getElementById('win').textContent)
                    document.getElementById('win').textContent = data_val+1
                    alert("You Won!")
                }
                else if(info.you<info.dealer){
                    let data_val2 = parseInt(document.getElementById('lose').textContent)
                    document.getElementById('lose').textContent = data_val2+1
                    alert("You Lose!")
                }
                else{
                    let data_val3 = parseInt(document.getElementById('draw').textContent)
                    document.getElementById('draw').textContent = data_val3+1
                    alert("Tied!")
                }
            },1000)
        }
        can_hit=false 
    }
}

function blackjackdeal() {
    var parent = document.getElementById('you_score')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    var parent = document.getElementById('dealer_score')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    info.you = 0
    info.dealer = 0
    document.getElementById('score_value').textContent = 0
    document.getElementById('score_value_dealer').textContent = 0
    can_hit = true
}



function check(){
    if( (info.you)>21){
        can_hit=false
        document.getElementById('score_value').textContent = "BUSTED"
        let data_val = parseInt(document.getElementById('lose').textContent)
        document.getElementById('lose').textContent = data_val+1
        setTimeout(function(){alert("You Lose!")},1000)
    }
    else{
        document.getElementById('score_value').textContent = info.you
    }
}

function app_img(num,side) {
    var img_card = document.createElement("img")
    img_card.setAttribute('src','blackjack_assets/'+ 'images/'+ num+ '.png');
    img_card.setAttribute('alt',num);
    img_card.setAttribute('width',"100");
    img_card.setAttribute('height',"100");
    img_card.setAttribute('class',"my-2 mx-2");
    document.getElementById(side).appendChild(img_card)
}