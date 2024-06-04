import { useEffect, useState } from 'react';
import './Category.scss';
import axios from '../../../api';

const categoryImg = [
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
  "https://www.gramophone.com/sites/default/files/wysiwyg/1-Nordic-95.jpg",
  "https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg",
  "https://www.bhg.com/thmb/sq8cqhphc0TdtATgElc6N9snT6E=/1792x0/filters:no_upscale():strip_icc()/living-room-rug-shelves-7b5d7a52-dcb3e3a7b7e04df99893aeaa76f57d08.jpg",
  "https://innoteck.co.uk/wp-content/uploads/2022/07/iStock-1289672009.jpg",
  "https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg",
  "https://m.media-amazon.com/images/I/71sEUmOsiJL._AC_UY1000_.jpg",
  "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?cs=srgb&dl=pexels-pixabay-267301.jpg&fm=jpg"
];

const Category = () => {
  const [categoryData, setCategory] = useState([]);
  console.log(categoryData);
  useEffect(() => {
    axios
      .get('/products/category-list?limit=8')
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="category">
      <div className="home__container">
        <div className="category__wrapper">
          <div className='category__cards'>
            {categoryData.slice(1,9).map((el, index) => (
              <div className="category__card" key={index}>
                <div className="category__card-hover">
                  <h3 className="category__card-title">{el}</h3>
                  <p className='category__card-tops-text'>633 товара</p>
                  <p className="category__card-text">Lorem ipsum</p>
                  <img
                    width={175}
                    height={114}
                    src={categoryImg[index % categoryImg.length]}
                    alt={el}
                    className="category__card-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
