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