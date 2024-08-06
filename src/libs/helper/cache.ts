import { Product } from "../../types/Product";
import { filter } from "./filter";

type CacheProps = {
  key: string;
  target_key?: string;
  method: string;
  datas?: Product;
  data?: string | number;
}

/**
 * 
 * @param key - accessible key from localstorage
 * @param target_key - accessible key from key
 * @param method save, update, get 
 * @param datas product datas. Only applicable if method is save
 * @returns 
 */
export default function cache(props: CacheProps) {
  const { key, target_key, method, datas, data } = props
  const isCached = window.localStorage.getItem(`${key}`);

  switch(method) {
    case 'get': {
      if (!isCached) return null
      const inCache = JSON.parse(isCached)
      
      if (inCache && target_key && inCache[target_key]) {
        const item = filter(inCache[target_key])
        if (!item) return item
    
        console.log('in cache')
        return item
      }
      break;
    }
    case 'singleGet': {
      if (!isCached) return null
      return JSON.parse(isCached)
      break
    }
    case 'save': {
      // save returns true if changes being applied
      if (!datas) return false;

      if (!isCached) {
        localStorage.setItem(key, JSON.stringify({ [String(datas.product_id)]: datas }, null, 2))
        return null
      }

      const availableCache = JSON.parse(isCached)
      // Enforce product check inside prev products hash
      // to find if this product is in that cache
      if (!availableCache[String(datas.product_id)]) {
        const newdatas = { ...availableCache, [String(datas.product_id)]: datas }
        localStorage.setItem(key, JSON.stringify(newdatas, null, 2))
        return null
      }

      return null
      break
    }
    case 'singleSave': {
      if (!data) return false;

      if (!isCached) localStorage.setItem(key, JSON.stringify(data, null, 2))
      
      return null
      break
    }
    case 'getAll': {
      if (isCached) return JSON.parse(isCached)
      return null
      break
    }
  }

  return null
}