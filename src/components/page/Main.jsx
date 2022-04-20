import React from 'react'

const Main = () => {
    return (
        <div className='content p-40'>
            <h1 className='mb-40'>Все кросовки</h1>

            <div className='card'>
                <img width={133} height={112} src='/img/shoes/1.jpg' alt='1' />
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/img/plus.svg' alt='plus' />
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Main;