import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getDetailProduct, getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({category, sort}) => {

  const dispatch = useDispatch();
  const {products, productsStatus} = useSelector(state => state.products);


  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };


  useEffect(()=> {
    if(category) {
      dispatch(getCategoryProducts(category))
    }
    dispatch(getProducts());
  },[dispatch, category])

  return (
    <div className='ml-6 w-full'>
      {
        productsStatus === "LOADING" ? <Loading /> :
        <>
        <div className='grid grid-cols-3 gap-4'>
          {
            currentItems?.sort((a,b) => sort == "inc" ? a.price-b.price : sort == "dec" ? b.price-a.price : null)
            .map((product,i) => (
                <Product key={i} product={product}/>
            ))
          }
        </div> 
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
        </>
      }
    </div>
  )
}

export default Products