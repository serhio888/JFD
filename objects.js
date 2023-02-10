//#1
const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];

const onlineUsers = users.filter(elem=>elem.status === 'online')
console.log(`Сейчас в онлайне пользователи: ${onlineUsers.map(elem=>elem.username)}`)

//#2
const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
function giveTalonsInOrder(pArr,oArr){
	let arr = []
	for(id of oArr){
		arr.push(pArr.find(elem => elem.id === id))
	}
	return arr
} 
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);