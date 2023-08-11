import { persistentAtom } from "@nanostores/persistent";

interface UserData {
	wins: number
	count: number
}

export const userData = persistentAtom<Record<string,UserData>>("playerListData", {}, {
    encode: JSON.stringify,
    decode: JSON.parse
})


export function getUserData(roll: string) {
	const rollData = userData.get()[roll]
	if (rollData === undefined) return { count: 0, wins: 0 };
    return rollData
}


export function deltaRoll(roll: string, deltaCount: number, deltaWins: number) {
	let data = userData.get()
	if (data[roll] === undefined) {
		data[roll] = { count: 0, wins: 0 }
	}
	data[roll].count = Math.max(data[roll].count + deltaCount, 0)
	data[roll].wins = Math.max(data[roll].wins + deltaWins, 0)
	userData.set(data)
}

/*

export const usersWins = persistentAtom<Record<string,number>>("playerWinCount", {
	"test": 1
}, {
    encode: JSON.stringify,
    decode: JSON.parse
})


export function getWins(roll: string) {
	console.log(usersWins)
	if (usersWins.get()===undefined) return 0;
    let wins = usersWins.get()[roll]
	console.log("wins!", wins)
	if (wins===undefined) return 0;
    return wins
}


export function deltaWins(roll: string, delta: number) {
    const oldUserWins = usersWins.get();
    const newWins = getWins(roll) + delta
    oldUserWins[roll] = (newWins<0)? 0 : newWins;
    usersWins.set(oldUserWins)
}
*/
