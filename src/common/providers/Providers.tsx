import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

import store, { persistor } from 'store/store'

function Providers({ children }: { children: React.ReactNode }) {

    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>...Loading...</div>}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    )
}

export default Providers