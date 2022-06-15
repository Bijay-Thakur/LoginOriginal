import {server} from '../fetch';

export const fetchOurCompanyContent = async() =>{
   

    const res2 = await fetch(`${server}/ourCompany/company`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourCompany = await res2.json()

   

 return {ourCompany}
}