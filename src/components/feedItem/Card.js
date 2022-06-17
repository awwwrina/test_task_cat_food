import { useState } from 'react';
import './card.scss';
import '../../style/variables.scss';

const Card = ({taste, servings, mouses, isSatisfied, weight, descr, ended}) => {

    const [active, setActive] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(false);
    const classesCardItem = (active && !ended) ? 'card__item_active' : 'card__item';
    const classesCarSubtitle = (mouseEnter && active) ? 'card__subtitle_active' : 'card__subtitle';
    let disabled = 'card__item';
    if (ended) {
        disabled += '_disabled';
    }

    const renderMouses= (mouses) => {
        if (mouses > 1 && mouses < 5) {
            return `${mouses} мыши`
        }
        if (mouses > 4) {
            return `${mouses} мышей`
        }
        if (mouses === 1) {
            return 'мышь'
        }
    }

    const setActiveClass = (ended) => {
        setActive(active => ended ? false : !active) ;
    } 

    const renderSatisfied = (isSatisfied) => {
        return isSatisfied ? <p className="card__satisfied">заказчик доволен</p> : null;
    }
    let descrStyle = null;
    if (ended) {
        descrStyle = {'color': '#FFFF66'}
    }
    return(
        <>  <div className="card" >
                <div 
                    className={`${classesCardItem} ${disabled}`}
                    onClick={() => setActiveClass(ended)}
                    onMouseEnter={()=> setMouseEnter(true)}
                    onMouseLeave={()=> setMouseEnter(false)}>
                    <p className={classesCarSubtitle}>
                        {(mouseEnter && active) ? 'Котэ не одобряет?':'Сказочное заморское яство'}
                    </p>
                    <h2 className="card__title">Нямушка</h2>
                    <p className="card__taste">{taste}</p>
                    <p className="card__servings">
                        <span>{servings}</span> порций</p>
                    <p className="card__gift">{renderMouses(mouses)} в подарок</p>
                    {renderSatisfied(isSatisfied)}
                    <div className="card__weight">
                        <p className="amount">{weight}</p>
                        <p className="kg">кг</p>
                    </div>
                </div>
                <p className="card__descr"
                    style={descrStyle}>
                    {active ? descr : <Descr ended={ended} taste={taste} setActive={setActive}/>}
                </p>
            </div>
        </>   
    )
}

const Descr = ({ended, taste, setActive}) => {
    if (ended) {
        return ( 
            <>
                Печалька, {taste} закончился.
            </>
        )
    } else {
        return (
            <>
                Чего сидишь? Порадуй котэ, &nbsp;
                <span onClick={() => setActive(active => !active)}>купи.</span>
            </>
        )
    }  
}

export default Card;