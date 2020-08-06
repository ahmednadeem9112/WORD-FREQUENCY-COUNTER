"use strict";
const InputTextArea = () => document.getElementById('inputArea').value;
const output = input => (document.getElementById('output').innerHTML = input);

const clearInput = str => 
str.replace(/[!?.,&^%$#@*'"]/g,"")
.replace(/[]{2,}/g,"")
.trim()
.toLowerCase();

const wordFreq = string => 
string
.split(/\s/)
.reduce(
    (output,word) => 
    Object.assign(output,{ [word]: output[word] ? output[word] + 1: 1}),
    {}
);
const sortByvalue = obj => 
Object.entries(obj).map(currentValue => [currentValue[1],currentValue[0]])
.sort((a,b) => parseInt(b) - parseInt(a))
.map((currentValue,index) => [
index + 1,
currentValue[0],
currentValue[1]

]);  

const divFreq = "div-table";
const headerFreq = ["Rank","count","word"];
const dataFreq = [[1,52,"words"],[2,50,"dog"]];

const addTable = (divId,headers,data) => {
const myTableDiv =  document.getElementById(divId);
const table = document.createElement('table');

//creating out the table head 
const tr = document.createElement('tr');
table.appendChild(tr);
headers.forEach(currentValue => {
    const th = document.createElement("th");
th.appendChild(document.createTextNode(currentValue));
tr.appendChild(th);
});

//Table rows
data.forEach(currentValue => {
const tr = document.createElement('tr');
currentValue.forEach(currentValue => {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(currentValue));
tr.appendChild(td);
});
table.appendChild(tr);
});
myTableDiv.appendChild(table);

};

const processData = () => {

    const sortedFreq = 
    sortByvalue(wordFreq(cleanInput(getUserInput())));

    document.getElementById("div-table").innerHTML = "";
    addTable(divFreq,headerFreq,sortedFreq);
};


(document).ready(function() {
    $("#button").on("click", processData);
  });


  function Node(data) {
    this.data = data
    this.next = null
  }
  
  function length(head) {
    return head ? 1 + length(head.next) : 0
  }
  
  function count(head, data) {
    if (!head) return 0
    return (head.data === data ? 1 : 0) + count(head.next, data)
  }














