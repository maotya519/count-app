let count = 0;

document.getElementById('result').innerHTML = count;
function addCount(initCount) {
count = initCount;

  var innerFunc = function() {
  return ++count;
  };
  return innerFunc;
}
function removeCount(initCount) {
    count = initCount;
    var innerFunc = function() {
        return --count;
    };
    return innerFunc;
}
var myAddClosure = addCount(0);
var myRemoveClosure = removeCount(0);

document.getElementById('add').addEventListener('click', function() {
  document.getElementById('result').innerHTML = myAddClosure();
  colorCount();
},false);
document.getElementById('disadd').addEventListener('click', function() {
    document.getElementById('result').innerHTML = myRemoveClosure();
    colorCount();
  },false);

  function colorCount() {
    if ( count > 0 ) {
        document.getElementById('result').style.color="red";
    } else if ( count < 0 ){
        document.getElementById('result').style.color="blue";
    }
  }
//   let flag = 0;
  document.querySelector('.question').addEventListener('click', function() {
      //0 false
      //1 true
      let flag = 0;
    if ( flag = 1 ) {
        document.querySelector('.modal').style.display = 'block';
        flag = 1;
        console.log( flag );
    }
    document.getElementById('modal').addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'none';
        flag = 0;
        console.log( flag );
    },false);
  },false);
