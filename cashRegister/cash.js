window.alert("Welcome to the Grocery Store!");
window.alert("Enter the item quantity in each blank space below.");
window.alert("Press Go to see your shopping total ^_^");

var shopList = {
  arugula: 3.49,
  coconutOil: 16.98,
  garlicPowder: 7.67,
  greenOnions: 1.79,
  lamb: 36.99,
  monkFish: 39.49,
  pheasant: 142.80,
  shitakes: 6.99,
};
 var total = 0;

function addUpShopList(){
    total = (document.getElementById('aru').value * shopList.arugula) + (document.getElementById('coco').value * shopList.coconutOil) + (document.getElementById('garl').value * shopList.garlicPowder) + (document.getElementById('gree').value * shopList.greenOnions) + (document.getElementById('lam').value * shopList.lamb) + (document.getElementById('mon').value * shopList.monkFish) + (document.getElementById('phea').value * shopList.pheasant) + (document.getElementById('shi').value *  shopList.shitakes); if(document.getElementById('aru').value < 0){
      window.alert('arugula quantity must be a positive number');
    }
    if(document.getElementById('coco').value < 0){
       window.alert('coconut oil quantity must be a positive number');
    }
    if(document.getElementById('garl').value < 0){
      window.alert('garlic powder quantity must be a positive number');
    }
    if(document.getElementById('gree').value < 0){
       window.alert('green onions quantity must be a positive number');
    }
    if(document.getElementById('lam').value < 0){
       window.alert('lamb quantity must be a positive number');
    }
    if(document.getElementById('mon').value < 0){
      window.alert('monkfish quantity must be a positive number');
    }
    if(document.getElementById('phea').value < 0){
       window.alert('pheasant quantity must be a positive number');
    }
    if(document.getElementById('shi').value < 0){
      window.alert('shitakes quantity must be a positive number');
    }

   return document.getElementById('output').innerHTML = "$" + total + "!";
}
