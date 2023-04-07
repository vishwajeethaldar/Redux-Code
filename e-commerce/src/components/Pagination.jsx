import React from 'react'
import style from '../styles/Pagination.module.css'
export default function Pagination({page, setPage}) {

  return (
    <div className={style.pagination}>
      <button disabled={page===0} onClick={()=>setPage(page-12)}>Previous</button>
      <button>{page+1}</button>
      <button onClick={()=>setPage(page+12)}>Next</button>
    </div>
  )
}
