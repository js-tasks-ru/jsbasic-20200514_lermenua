/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const friendList = document.createElement("ul");
  document.body.append(friendList);
  friendList.innerHTML = friends.map(({firstName, lastName}) => `<li class="item">${firstName} ${lastName}</li>`);
  return friendList;




}
