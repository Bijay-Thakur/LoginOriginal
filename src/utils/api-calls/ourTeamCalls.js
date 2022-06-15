import {server} from '../fetch';

export const fetchOurTeamContent = async() =>{
   

    const res2 = await fetch(`${server}/ourTeam/teamMember`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourTeam = await res2.json()

   

 return {ourTeam}
}