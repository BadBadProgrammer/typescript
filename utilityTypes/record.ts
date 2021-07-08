interface CateInfo {
    age: number
    breed: string
}


type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CateInfo> = {
    miffy: {
        age: 10,
        breed: ''
    },
    boris: {
        age: 10,
        breed: ''
    },
    mordred: {
        age: 10,
        breed: ''
    }
}