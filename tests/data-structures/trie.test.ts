import { isValidWord, TrieNode } from '../../src/data-structures/trie'

describe('Trie tests', () => {
  it('Should find the word', () => {
    const trie: TrieNode<string> = {
      element: null,
      terminates: false,
      children: [
        {
          element: 'm',
          terminates: false,
          children: [
            {
              element: 'a',
              terminates: false,
              children: [
                {
                  element: 'n',
                  terminates: true,
                  children: [
                    {
                      element: 'y',
                      terminates: true,
                      children: null,
                    },
                  ],
                },
              ],
            },
            { element: 'y', terminates: true, children: null },
          ],
        },
        {
          element: 'l',
          terminates: false,
          children: [
            {
              element: 'i',
              terminates: false,
              children: [
                {
                  element: 'e',
                  terminates: true,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          element: 'a',
          terminates: true,
          children: [],
        },
      ],
    }

    expect(isValidWord('b', trie)).toEqual(false)
    expect(isValidWord('no', trie)).toEqual(false)
    expect(isValidWord('test', trie)).toEqual(false)
    expect(isValidWord('', trie)).toEqual(false)

    expect(isValidWord('my', trie)).toEqual(true)
    expect(isValidWord('man', trie)).toEqual(true)
    expect(isValidWord('many', trie)).toEqual(true)
    expect(isValidWord('lie', trie)).toEqual(true)
    expect(isValidWord('a', trie)).toEqual(true)
  })
})
