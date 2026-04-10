function findLargest() 
{
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    let n5 = parseFloat(document.getElementById("n5").value);

    let largest = n1;

    if (n2 > largest) largest = n2;
    if (n3 > largest) largest = n3;
    if (n4 > largest) largest = n4;
    if (n5 > largest) largest = n5;

    document.getElementById("result").innerHTML = "Largest Number = " + largest;
}