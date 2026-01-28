let a = 1;
function add_mem() {
   
    a=a+1;
    const newinput = document.createElement("input");
    const newbr = document.createElement("br");
    newinput.type="text";
    newinput.id="m"+a;
    newinput.className="m";
    newinput.placeholder="Enter the name of member"+a;
    newbr.id ="br"+a;
    let element= document.getElementById("adm");
    
    document.getElementById("form2").insertBefore(newinput,element);
    
    document.getElementById("form2").insertBefore(newbr,element);

}
function del() {
    if(a>1) {
    let x = document.getElementById("m"+a);
    let y = document.getElementById("br"+a);

    document.getElementById("form2").removeChild(x);
    document.getElementById("form2").removeChild(y);
    a=a-1;
    }


}
let j = 0;
const name = [];
const cost = [];
const indi = [];
const cost_spent =[];
const negative = [];

function array() {
    
    for(let i = 0; i<a; ++i) {
        let k = document.getElementById("m"+(i+1));
        if(k.value.trim()!=="") {
        name.push(k.value);
        cost.push(0);
        indi.push(0);
        cost_spent.push(0);
        negative.push(0);
        

    }
    
 

}
console.log(name);
console.log(cost);
 let ele= document.getElementById("ade");
for(let i = 0; i<name.length; ++i) {
const check = document.createElement("input");

    check.type="checkbox";
    check.value=name[i];
    check.name="friends"+1;
    check.id="check"+(i+1)+"_"+1;
   

    document.getElementById("form1").insertBefore(check,ele);
    document.getElementById("form1").insertBefore(document.createTextNode(" "+name[i]),ele);


}
const nebr = document.createElement("br");
document.getElementById("form1").insertBefore(nebr,ele);
    
    
}
const r = document.getElementById("arr");
const t = document.getElementById("form2");
const t1 = document.getElementById("form1");
r.addEventListener("click",display);
function display() {
    t.style.display="none";
    t1.style.display="block";
}


let b = 1;
function add_expense() {
    b=b+1;
    let el= document.getElementById("ade");
    const nebr = document.createElement("br");
    const newin = document.createElement("input");
    
         newin.type="text";
         newin.id="en"+b;
         newin.className="e";
         newin.placeholder="Enter the Expense name";
    const exptext = document.createElement("span");
      exptext.textContent="Enter the name expense";
      exptext.id = "te"+b;
      nebr.id="be"+b;
          document.getElementById("form1").insertBefore(exptext,el);
         document.getElementById("form1").insertBefore(newin,el);
         document.getElementById("form1").insertBefore(nebr,el);
    const nebrp = document.createElement("br")
    const newpa = document.createElement("input");
    
         newpa.type="text";
         newpa.id="ep"+b;
         newpa.className="e";
         newpa.placeholder="Enter the person name";
         const pertext = document.createElement("span");
         pertext.textContent="Enter the person who paid:";
         pertext.id="tp"+b;
         nebrp.id="bp"+b;
         

          document.getElementById("form1").insertBefore(pertext,el);
         document.getElementById("form1").insertBefore(newpa,el);
         document.getElementById("form1").insertBefore(nebrp,el);
    const nebrc = document.createElement("br")
    const newco = document.createElement("input");
    
         newco.type="number";
         newco.id="ec"+b;
         newco.className="e";
         newco.placeholder="Enter the cost";
         nebrc.id="br3"+b;
        const texco= document.createElement("span");
        texco.textContent="Enter the cost:";
        texco.id="tco"+b;

          document.getElementById("form1").insertBefore(texco,el);
          document.getElementById("form1").insertBefore(newco,el);
         
         document.getElementById("form1").insertBefore(nebrc,el);
     const nebrb = document.createElement("br");
     const texc = document.createElement("span");
      texc.textContent="choose The number of people involve in expense :";
      texc.id="tc"+b;
       
         document.getElementById("form1").insertBefore(texc,el);


         for(let i = 0; i<name.length; ++i) {
        const check = document.createElement("input");

    check.type="checkbox";
    check.value=name[i];
    check.name="friends"+b;
    check.id="check"+(i+1)+"_"+b;
    const chte =document.createElement("span");
    chte.textContent=" "+name[i];
    chte.id="ch"+i+"_"+b;

   

    document.getElementById("form1").insertBefore(check,el);
    document.getElementById("form1").insertBefore(chte,el);


}
nebrb.id="br4"+b;

document.getElementById("form1").insertBefore(nebrb,el);
         
        

}
function delet() {
    if(b>1) {
        let exn = document.getElementById("en"+b);
        let exnt= document.getElementById("te"+b);
        let exnb = document.getElementById("be"+b);
        document.getElementById("form1").removeChild(exn);
        document.getElementById("form1").removeChild(exnt);
        document.getElementById("form1").removeChild(exnb);
        let exp = document.getElementById("ep"+b);
        let expt= document.getElementById("tp"+b);
        let expb = document.getElementById("bp"+b);
        document.getElementById("form1").removeChild(exp);
        document.getElementById("form1").removeChild(expt);
        document.getElementById("form1").removeChild(expb);
        let exco = document.getElementById("ec"+b);
        let excot= document.getElementById("tco"+b);
        let excob = document.getElementById("br3"+b);
        document.getElementById("form1").removeChild(exco);
        document.getElementById("form1").removeChild(excot);
        document.getElementById("form1").removeChild(excob);

        let exct = document.getElementById("tc"+b);
         document.getElementById("form1").removeChild(exct);



        for(let i = 0; i<name.length; ++i) {
            let chb=document.getElementById("check"+(i+1)+"_"+b);

            let ct=document.getElementById("ch"+i+"_"+b);
               document.getElementById("form1").removeChild(chb);
               document.getElementById("form1").removeChild(ct);
        

        }
    let excb = document.getElementById("br4"+b);
    document.getElementById("form1").removeChild(excb);
        b=b-1;

        
        
        
        
    }
    

}
function Calculate() {
    
     
    
    for(let i = 1; i<=b; ++i) {
        let z = 0;
        for(let j = 1; j<=name.length; ++j) {
            if(document.getElementById("check"+(j)+"_"+i).checked) {
                  z++;
            }
        }
        let expense = document.getElementById("en"+i);
        
        

        let cost_paid = document.getElementById("ec"+i);
        let each =( (document.getElementById("ec"+i)).value)/z;
        each=each.toFixed(2);
        let person=document.getElementById("ep"+i);
        
        for(let j = 1; j<=name.length; ++j) {
            if(document.getElementById("check"+(j)+"_"+i).checked) {
                  cost[j-1]+=Number(each);
                  cost_spent[j-1]+=Number(each);

            }
            if(person.value.trim()===name[j-1]) {
                cost[j-1]-=Number(cost_paid.value);
                indi[j-1]+=Number(cost_paid.value);
                
            }
        }
    const Expense = {
        Expense_Name:expense.value,
        names: person.value,
        costs: cost_paid.value
        



    };
    
    localStorage.setItem("expense_"+i,JSON.stringify(Expense));
    console.log(`"expense"${i} : ${localStorage.getItem("expense_"+i)}`);


        






    }
    const newTable = document.createElement("table"); 
    newTable.border=1;
    const tr1 = document.createElement("tr"); 
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    th1.textContent="Name";
    th2.textContent="cost_paid_trip";
    th3.textContent="Cost_Spent";
    th4.textContent="Net_Money"
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    newTable.appendChild(tr1);
     let tr = [];
     let td_1 = [];
     let td_2 = [];
     let td_3 =[];
     let td_4 =[];
   for(let k= 0; k<name.length; ++k) {

       
       tr[k]= document.createElement("tr"); 
       td_1[k]=document.createElement("td");

       td_2[k]=document.createElement("td");
       td_3[k]=document.createElement("td");
       td_4[k]=document.createElement("td");
       td_1[k].textContent=name[k];
       td_2[k].textContent=indi[k];
       td_3[k].textContent=cost_spent[k];
       td_4[k].textContent=(-cost[k]);
    tr[k].appendChild(td_1[k]);
    tr[k].appendChild(td_2[k]);
    tr[k].appendChild(td_3[k]);
    tr[k].appendChild(td_4[k]);
    newTable.appendChild(tr[k]);
       


    }
    document.getElementById("form1").append(newTable);
    for(let g = 0; g<name.length; ++g) {
        negative[g]=(-cost[g]);
    }
    const finaldata = {
        names: name,
        costs_paid_trip:indi,
        costs_spent: cost_spent,
        cost_owns:negative



    };
    
    
    localStorage.setItem("finaldata",JSON.stringify(finaldata));
    console.log(`"finaldata" : ${localStorage.getItem("finaldata")}`);
    document.getElementById("form1").append(document.createTextNode("positive sign shows person will get and negative sign show person owes."));

    
    







   
    




}
