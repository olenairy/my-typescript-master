  import { Company } from './Company'
import {User} from './User'
import {CustomMap} from './CustomMap'


const user = new User()
console.log(user)

const company =  new Company()
console.log(company)
console.log(process.env.GOOGLEMAP_KEY)
const customMap =  new CustomMap('map')

customMap.addMarker(company)
customMap.addMarker(user)