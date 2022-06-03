export const fixtures = {
    traversalTestsRoot: {
        element: 0,
        left: {
            element: 1,
            left: { element: 2 },
            right: {
                element: 3,
                left: { element: 4 },
                right: { element: 5 },
            }
        },
        right: {
            element: 6,
            right: { element: 7 },
        }
    },
    oneElement: { element: 2 },
    onlyLeft: { element: 2, left: { element: 6 } },
    onlyRight: { element: 2, right: { element: 3 } },
    perfect2Levels: { element: 2, left: { element: 6 }, right: { element: 3 } },
    perfect3Levels: {
        element: 2,
        left: {
            element: 1,
            left: { element: 2, },
            right: { element: 3 }
        },
        right: {
            element: 4,
            left: { element: 5, },
            right: { element: 6 }
        }
    },
    complete: {
        element: 2,
        left: {
            element: 1,
            left: {
                element: 4,
                left: {
                    element: 8
                },
                right: {
                    element: 9
                }
            },
            right: {
                element: 5,
                left: {
                    element: 10
                }
            }
        },
        right: {
            element: 3,
            left: {
                element: 6
            },
            right: {
                element: 7
            }
        }
    }
}

