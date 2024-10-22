import React from 'react'
import LoadingSpinner from 'common/modules/LoadingSpinner'
import { useDispatch } from 'react-redux'
import { setUI } from 'store/slices/UIsection'

const FullScreenLoading = () => {

    const dispatch = useDispatch()

    const closeLoading = () => dispatch(setUI({ loading: false }))

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-300/50 backdrop-blur-[1.5px] h-screen w-screen flex justify-center items-center z-[998]'>
            <LoadingSpinner
                width={128}
                height={128}
                color='black'
                wrapperClass='z-[998]'
            />
            <button onClick={closeLoading} className='z-[998] fixed top-4 right-4'>X</button>
        </div>
    )
}

export default FullScreenLoading