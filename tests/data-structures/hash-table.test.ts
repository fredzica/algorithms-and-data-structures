import { HashTable } from '../../src/data-structures/hash-table'

describe('HashTable tests', () => {
  it('Should correctly store and retrieve', () => {
    const hashTable = new HashTable<string>()

    const first = ['hi', 'test']
    const second = ['hi2', 'bla']
    const third = ['another', 'yo']

    expect(hashTable.get(first[0])).toBeUndefined()

    hashTable.put(first[0], first[1])
    hashTable.put(second[0], second[1])
    hashTable.put(third[0], 'random')
    hashTable.put(third[0], third[1])
    hashTable.put('some other', '')

    expect(hashTable.get(first[0])).toEqual(first[1])
    expect(hashTable.get(second[0])).toEqual(second[1])
    expect(hashTable.get(third[0])).toEqual(third[1])
  })

  it('Should correctly check if keys are present', () => {
    const hashTable = new HashTable<number>()

    expect(hashTable.contains('2')).toEqual(false)

    hashTable.put('1', 1)
    hashTable.put('2', 2)
    hashTable.put('3', 3)
    hashTable.put('4', 4)

    expect(hashTable.contains('1')).toEqual(true)
    expect(hashTable.contains('3')).toEqual(true)

    expect(hashTable.contains('some random string')).toEqual(false)
  })
})
