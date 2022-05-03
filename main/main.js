
function getEle(id){
    return document.getElementById(id);
};

getEle("switchButton").onclick = function () {
getEle("themes").classList.toggle("dark");
  };
//   light-dark themes about us
getEle("switchButton1").onclick = function () {
getEle("themes1").classList.toggle("dark");
  };
//  light-dark themes content
getEle("switchButton2").onclick = function () {
    getEle("themes2").classList.toggle("dark");
      };
    //   light-dark themes infomation
    getEle("switchButton3").onclick = function () {
        getEle("themes3").classList.toggle("dark");
          };
