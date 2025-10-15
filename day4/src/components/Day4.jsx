export default function Props2(){
    const flower={
        name:'rose',
        count:'40'
    }
    const array=[
        {name:'sunflower',count:'10'},
        {name:'jusmine',count:'23'},
        {name:'lotus',count:'73'}
    ]
    return(
        <>
        <h1>This is a:{flower.name}</h1>
        <h1>There are {flower.count} flowers in the bucket.</h1>
        <h1>This is {array[0].name}</h1>
        <h1>There are {array[0].count} flowers in the bucket.</h1>
        <h1>This is {array[1].name}</h1>
        <h1>There are {array[1].count} flowers in the bucket.</h1>
        <h1>This is {array[2].name}</h1>
        <h1>There are {array[2].count} flowers in the bucket.</h1>
        </>
    )
}