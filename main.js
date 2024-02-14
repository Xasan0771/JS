var useranswer1 = +prompt("1-sonni kiriting")
var useranswer2 = +prompt("2-sonni kiriting")
var useranswer3 = +prompt("3-sonni kiriting")

if (useranswer1 < useranswer2 && useranswer1 > useranswer3 || useranswer1 > useranswer2 && useranswer1 < useranswer3 ){
    alert(useranswer1)
} else if(useranswer2 < useranswer1 && useranswer2 > useranswer3 || useranswer2 > useranswer1 && useranswer2 < useranswer3){

    alert(useranswer2)
} else if(useranswer3 < useranswer1 && useranswer3 > useranswer2 || useranswer3 > useranswer1 && useranswer3 < useranswer2){
  alert(useranswer3)
}