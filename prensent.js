
var to = 'Nguyễn Thành Đạt';
var gift_url = 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/382987151_1695922234238892_3533214311442390195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5WIc-XkTNxxpE4IwKWAohiHyoV0WD392IfKhXRYPf3dLciRilGXdWrlP7dVjtxJVx_ma8GP9NJeCe0CqQnXCs&_nc_ohc=sABGhhXcf2IAX_VEDsx&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCX7gG4UmFVFUDQnkpJnVneTF_sSriDuNIos-qknxz8Jw&oe=655BBAF0'
var gift_image_url = 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/382987151_1695922234238892_3533214311442390195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5WIc-XkTNxxpE4IwKWAohiHyoV0WD392IfKhXRYPf3dLciRilGXdWrlP7dVjtxJVx_ma8GP9NJeCe0CqQnXCs&_nc_ohc=sABGhhXcf2IAX_VEDsx&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCX7gG4UmFVFUDQnkpJnVneTF_sSriDuNIos-qknxz8Jw&oe=655BBAF0'



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

