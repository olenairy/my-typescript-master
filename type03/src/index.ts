import {  Sorter} from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import {  LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100,3,-5,0])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)
/*
 * 
 */
const charactersCollection = new CharactersCollection('hgyGMguygT')
const sorter2 = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(5)
linkedList.add(-7)
const sorter3 = new Sorter(linkedList)
sorter.sort()
linkedList.print()
