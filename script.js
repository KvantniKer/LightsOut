var s="s";
var zadnji=0;
var sqs = [];
let vreme=0;
let klik=0;

$(document).ready(function(){

function rnd(){return Math.round(Math.random());}
    
function promesaj(){
    dodeli($("#sq00"), rnd());
    dodeli($("#sq01"), rnd());
    dodeli($("#sq02"), rnd());
    dodeli($("#sq10"), rnd());
    dodeli($("#sq11"), rnd());
    dodeli($("#sq12"), rnd());
    dodeli($("#sq20"), rnd());
    dodeli($("#sq21"), rnd());
    dodeli($("#sq22"), rnd());}
    
function alrt(){
    document.getElementById("popup2").style.display="block";}
    
function proveri(){
    if($("#sq00").hasClass("boja1")&&$("#sq01").hasClass("boja1")&&$("#sq02").hasClass("boja1")&&$("#sq10").hasClass("boja1")&&$("#sq11").hasClass("boja1")&&$("#sq12").hasClass("boja1")&&$("#sq20").hasClass("boja1")&&$("#sq21").hasClass("boja1")&&$("#sq22").hasClass("boja1"))
    {setTimeout(() => { alrt(); }, 150);
        vreme=(Date.now()-vreme)/1000;}
    else if($("#sq00").hasClass("boja2")&&$("#sq01").hasClass("boja2")&&$("#sq02").hasClass("boja2")&&$("#sq10").hasClass("boja2")&&$("#sq11").hasClass("boja2")&&$("#sq12").hasClass("boja2")&&$("#sq20").hasClass("boja2")&&$("#sq21").hasClass("boja2")&&$("#sq22").hasClass("boja2")){setTimeout(() => { alrt(); }, 150);
        vreme=(Date.now()-vreme)/1000;
        vreme= Math.round(vreme * 100) / 100;}
    
    document.getElementById("time").innerHTML = vreme+"s";
    document.getElementById("moves").innerHTML = klik;}
    
    
function proveripocetak(){
    if($("#sq00").hasClass("boja1")&&$("#sq01").hasClass("boja1")&&$("#sq02").hasClass("boja1")&&$("#sq10").hasClass("boja1")&&$("#sq11").hasClass("boja1")&&$("#sq12").hasClass("boja1")&&$("#sq20").hasClass("boja1")&&$("#sq21").hasClass("boja1")&&$("#sq22").hasClass("boja1")){promesaj();}
    else if($("#sq00").hasClass("boja2")&&$("#sq01").hasClass("boja2")&&$("#sq02").hasClass("boja2")&&$("#sq10").hasClass("boja2")&&$("#sq11").hasClass("boja2")&&$("#sq12").hasClass("boja2")&&$("#sq20").hasClass("boja2")&&$("#sq21").hasClass("boja2")&&$("#sq22").hasClass("boja2")){promesaj();}}
    
function zameni(div){
    if ($(div).hasClass("boja1")){
        $(div).addClass("boja2");
        $(div).removeClass("boja1");}
    else{
        $(div).addClass("boja1");
        $(div).removeClass("boja2");}}
    
function uzmikvadrate (s){
    i=s.charAt(2);
    j=s.charAt(3);
    sqs[0]=(`#sq${parseInt(i)}${parseInt(j)}`);
    sqs[1]=(`#sq${parseInt(i)+parseInt(1)}${parseInt(j)}`);
    sqs[2]=(`#sq${parseInt(i)}${parseInt(j)+parseInt(1)}`);
    sqs[3]=(`#sq${parseInt(i)-parseInt(1)}${parseInt(j)}`);
    sqs[4]=(`#sq${parseInt(i)}${parseInt(j)-parseInt(1)}`);
    
    for(i=0;i<5;i++){
        zameni(String(sqs[i]));}
    ;}
    
function dodeli(div, x){
    switch(x){
			case 0: $(div).addClass("boja1"); break;
			case 1: $(div).addClass("boja2"); break;}}
    
$(document).ready(function pocetak(){
    promesaj();
    vreme=Date.now();
    proveripocetak();});

var n = 45;
    
$(".di").on('click', function(event) {
    s=(this.id);
    uzmikvadrate(s);
    klik++;
    n += 45;
    $('.bg').css({
        '-webkit-transform': 'rotate('+n+'deg)',
        '-moz-transform': 'rotate('+n+'deg)'});
    proveri();
    return false;});

$(".ikonica1").on('click', function(event) {
    document.getElementById("popup1").style.display="block";});

$("#close").on('click', function(event) {
    document.getElementById("popup1").style.display="none";});

    
});

