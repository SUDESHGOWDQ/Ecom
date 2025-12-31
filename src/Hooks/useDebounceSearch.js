import React from 'react'

const useDebounceSearch = ({value}) => {
	const[debouncedValue,setDebouncedValue]=React.useState(value)

	React.useEffect(()=>{
		const handler=setTimeout(()=>{
			setDebouncedValue(value)
		},500)
		return ()=>{
			clearTimeout(handler)
		}
	},[value])
	
  return {
	debouncedValue
  }
}

export default useDebounceSearch