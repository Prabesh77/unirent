import MainLayout from '@/layout/MainLayout'
import React from 'react'
import NftDetail from '../common/NftDetail'

const NftDetailPage = () => {
    return (
        <MainLayout>
            <div className='container mx-auto px-2 md:px-0 pt-10'>
                <NftDetail />
            </div>
        </MainLayout>
    )
}

export default NftDetailPage