import { FC, useEffect, useState } from "react";
import './CategoryPage.scss';
import ProductsItems from "../../components/Common/ProductItems/ProductsItems";
import { Link, useParams } from "react-router-dom";
import MySelectProducts from "../../components/CategoryPage/MySelectProducts/MySelectProducts";
import ProductsFilter from "../../components/CategoryPage/Filter";

const CategoryPage: FC = () => {

   const [categoryName, setCategoryName] = useState<string>('')
   const params = useParams()

   const [isFilter, setIsFilter] = useState<boolean>(false)

   useEffect(() => {
      if (params.category) {
         setCategoryName(params.category)
      }

      return () => {
         console.log('unmount CategoryPage')
      }
   }, [params.category])

   return (
      <div className="category-page" data-test-id={`products-page-${params.category}`}>
         <section className="introduction">
            <div className="introduction__container">
               <div className="introduction__top">
                  <nav className="breadcrumbs">
                     <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item"><Link to={'/'} className="breadcrumbs__link">Home</Link></li>
                        <li className="breadcrumbs__item breadcrumbs__item-now">{categoryName}</li>
                     </ul>
                  </nav>

                  <button className="introduction__share">Share</button>
               </div>

               <p className="introduction__title">{categoryName.toUpperCase()}</p>
            </div>
         </section>

         <section className="products">
            <div className="products__container">
               <div className="products__actions">
                  <div className="products__actions-top">
                     <div className={`products__filter ${isFilter ? '_active' : ''}`} data-test-id={'filter-button'}>
                        <button onClick={() => setIsFilter(!isFilter)} className="products__filter-button">Filter</button>
                        <div className="products__filter-menu"></div>
                     </div>

                     <div className="products__tabs">
                        <button className="products__tabs-item"></button>
                        <button className="products__tabs-item"></button>
                     </div>

                     {categoryName && <MySelectProducts categoryName={categoryName} />}
                  </div>

                  {categoryName && <ProductsFilter isFilter={isFilter} category={categoryName} />}
               </div>

               {categoryName && <ProductsItems category={categoryName} />}

               <div className="products__bottom">
                  <div className="products__loader"></div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default CategoryPage;