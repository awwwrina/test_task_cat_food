import Card from '../../feedItem/Card';
import './mainPage.scss';

const MainPage = () => {
    const cards = [
        {   
            taste: 'с фуа-гра',
            servings: 10,
            mouses: 1,
            isSatisfied: false,
            weight: '0,5',
            descr: 'Печень утки разварная с артишоками.',
            ended: false

        },
        {
            taste: 'c рыбой',
            servings: 40,
            mouses: 2,
            isSatisfied: false,
            weight: '2',
            descr:'Головы щучьи с чесноком да свежайшая сёмгушка.',
            ended: false

        },
        {
            taste: 'с курой',
            servings: 100,
            mouses: 5,
            isSatisfied: true,
            weight: '5',
            descr: 'Филе из цыплят с трюфелями в бульоне.',
            ended: true
        }
    ]
    
    return(
        <>
            <h1 className="title">Ты сегодня покормил кота?</h1>
            <div className="feeds">
                {
                    cards.map((item,i) => {
                        return(
                            <Card key={i} {...item} /> 
                        )
                    })
                }
            </div>
        </>
    )
}
export default MainPage;