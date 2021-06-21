import { parse } from "qs"
import { ReactEventHandler, useCallback, useState } from "react"
import { useHistory, useLocation } from "react-router"

export default function useSearchFilter(): [string, ReactEventHandler<HTMLInputElement>] {
  const history = useHistory()
  const location = useLocation()
  const locationSearch = parse(location.search)['?filter'] as string
  const [filter, setFilter] = useState<string>(locationSearch)
  const handleChange = useCallback((e) => {
    setFilter(e.target.value || '')
    history.push({
      pathname: location.pathname,
      search: `filter=${e.target.value}`
    })
  }, [setFilter, history, location])
  return [filter, handleChange]
}