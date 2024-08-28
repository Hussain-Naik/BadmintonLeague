import React from 'react'

const CardItem = () => {
  return (
    <div className="col-12 lg:col-6">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">League</span>
                    <div className="text-900 font-medium text-xl">Name</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-trophy text-blue-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">Count </span>
            <span className="text-500">players</span>
        </div>
    </div>
  )
}

export default CardItem
