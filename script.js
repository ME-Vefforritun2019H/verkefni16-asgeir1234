let table = 3;
let operator = "addition";
let i = 1;
let msg = "";

if(operator === "addition"){
    while (i<11) (
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />');
        i++;

}else{
    while (i<11){msg += i + ' x ' + table + ' = ' + (i + table) + '<br />';
    i++;

    }
}


let el = document.getElementById("blackboard");
el.innerHTML = msg;

/*
== athuga hvort báðum meigin er eins gildi 0 == "0" true
=== athuga hvort báðu megin er eins gildi og sama data týpan 0 === "0" false 0 === 0 true
< athuga hvort vnstrameginn sé minna en hægra meginn
> athuga hvort vinstrameginn sé minna en hægra meginn
>= athuga hvort vinstrameginn sé stærra eða jafnt og hægra meginn
<= athuga hvort vinstrameginn sé minna eða jafnt og hægra meginn
!= athuga hvort að vinstrameginn sé EKKI sama og hægra meginn

i++ i=i+1
 */


