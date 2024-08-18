import React, { useState } from "react";
import colorsMapHelper from "../libs/helper/colorsMapHelper";

type Prop = {
  items: string[];
  title: string;
  callback: (selected: string) => void;
}

export default function VariantCircle(props: Prop) {
  const { items, title, callback } = props
  const [isActiveIdx, setIsActiveIdx] = useState(0)

  function clickHandler(index: number, selected: string) {
    if (isActiveIdx === index) return
    setIsActiveIdx(index)
    callback(selected)
  }

  return (
    <>
    {
      items.length > 0 ?
      <div className="product__variant product__variant--colors">
        <div className="product__variant-title">{title}</div>
        <div className="product__variant-selections">
          { 
            items.map((item, idx) => { 
              return (
                <span
                  onClick={() => clickHandler(idx, item)}
                  style={{'--color': colorsMapHelper(item)} as React.CSSProperties} 
                  key={idx}
                  title={item}
                  className={idx === isActiveIdx ? 'product__variant-item product__variant-item--selected' : 'product__variant-item'} 
                  data-color={item}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z" fill="white"/>
                  </svg>
                </span>    
              )
            }) 
          }
        </div>
      </div>
      : ''
    }
    </>
  )
}